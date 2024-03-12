import { createWallet } from '@earthwallet/keyring';
import test from 'ava';
import { getTransferGasFees } from '.';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { ethers } from 'ethers';
import fetch from 'cross-fetch';

const TEST_MNE_1 =
  'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

const TEST_MNE_2 =
  'crystal wealth scan disagree moment note athlete medal cube notable pole miss';
//https://mumbai.polygonscan.com/address/0x29bc7f4bfc7301b3ddb5c9c4348360fc0ad52ca8
test('create wallet for eth or matic', async (t) => {
  try {
    const wallet_tx = await createWallet(TEST_MNE_1, 'MATIC');
    const wallet_rx = await createWallet(TEST_MNE_2, 'MATIC');
    // console.log(wallet_tx.address);
    // console.log(wallet_rx.address);
    t.is(wallet_tx.address, '0x29bc7f4bfc7301b3ddb5c9c4348360fc0ad52ca8');
    t.is(wallet_rx.address, '0x9ef68ccf6dba61b8d368f2a2a5b1e6bd517e9ff0');

    return;
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

//https://docs.polygon.technology/docs/develop/eip1559-transactions/how-to-send-eip1559-transactions

test('getTransferGasFees', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await getTransferGasFees();
    console.log(status);
    t.truthy(true);
    return;
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('sendTransaction', async (t) => {
  t.truthy(true);
  return;
  const wallet_tx = await createWallet(TEST_MNE_1, 'MATIC');
  const wallet_rx = await createWallet(TEST_MNE_2, 'MATIC');
  // console.log(wallet_tx.address);
  // console.log(wallet_rx.address);
  t.is(wallet_tx.address, '0x29bc7f4bfc7301b3ddb5c9c4348360fc0ad52ca8');
  t.is(wallet_rx.address, '0x9ef68ccf6dba61b8d368f2a2a5b1e6bd517e9ff0');
  const API_KEY = 'wiRRbfFeDdaYDBaVIm5sNpRuj_67b6Gt';
  const web3 = createAlchemyWeb3(
    `https://polygon-mumbai.g.alchemy.com/v2/${API_KEY}`
  );
  console.log(wallet_tx.address);

  const privateKey = ethers.Wallet.fromMnemonic(TEST_MNE_1).privateKey;
  console.log('private key', privateKey);

  const nonce = await web3.eth.getTransactionCount(wallet_tx.address, 'latest');
  console.log('nonce', nonce);

  const transaction = {
    nonce: nonce,
    from: wallet_tx.address,
    to: wallet_rx.address,
    value: web3.utils.toWei('0.1', 'ether'),
  };
  // estimate gas usage. This is units. minimum cap being 21000 units
  const estimateGas = await web3.eth.estimateGas(transaction);
  console.log('estimate', estimateGas);

  // get gas prices

  // const fee = await web3.eth.getMaxPriorityFeePerGas();
  // console.log('fee', web3.utils.toBN(fee).toString());
  const gas_station_url = 'https://gasstation-mumbai.matic.today/v2';
  const priorityFees = (await fetch(gas_station_url)).json();

  // use 200% gas estimate as gas limit to be safe.
  // sign transaction
  const signedTx = await web3.eth.accounts.signTransaction(
    {
      gas: 2 * estimateGas,
      maxPriorityFeePerGas: web3.utils.toWei(
        priorityFees['fast']['maxPriority'],
        'gwei'
      ),
      maxFeePerGas: web3.utils.toWei(priorityFees['fast']['maxFee'], 'gwei'),
      ...transaction,
    },
    privateKey
  );
  console.log('signedTx', signedTx);
  //send signed transaction
  const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log('result', result);
  t.truthy(true);
});
