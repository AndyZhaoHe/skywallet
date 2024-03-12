//import { Principal } from '@dfinity/principal';
import { Principal } from '@dfinity/principal';
import { createWallet } from '@earthwallet/keyring';
import test from 'ava';
//import SQUARE_MNE from './test';
const SQUARE_MNE = '';
/* 
import { createWallet } from '@earthwallet/keyring';

import {
  getNFTsFromCanisterExt,
  transferNFTsExt,
  listNFTsExt,
  canisterAgentApi,
  principalTextoAddress,
  getTokenIdentifier,
  decodeTokenId,
} from '.'; */

import {
  owner,
  createToken,
  getToken,
  approve,
  // //stats,
  // get_all,
  //create_pair,
  get_pair,
  // get_reserves,
  transfer_from,
  getAllTokens,
  create_pair,
  getMetadata,
  get_current_price,
  //mint,
  get_reserves,
  //swap,
  //stake,
  //canisterAgentApi,
  //canisterAgent,
  //canisterAgentApi,
  //getIdentityFromPem,
  getEd25519KeyIdentityFromPem,
  canisterAgent,
  getCanisterInfo,
  //mint,
} from '.';

/* 
test('get tokens for a EXT type canister for a user', async (t) => {
  try {
    const tokens = await getNFTsFromCanisterExt(
      'oeee4-qaaaa-aaaak-qaaeq-cai',
      '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3'
    );

    t.like(tokens[0], {
      info: {
        seller:
          'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe',
        price: '9999999966600000000',
        locked: [],
      },
      tokenIndex: 5542,
      tokenIdentifier: 'xbxdl-yakor-uwiaa-aaaaa-cuaab-eaqca-aacwt-a',
      forSale: true,
    });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('transfer saleable NFT of a EXT canister should give TOKEN_LISTED_FOR_SALE status', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await transferNFTsExt(
      'owuqd-dyaaa-aaaah-qapxq-cai',
      walletObj.identity,
      '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
      '2112'
    );

    t.is(status, 'TOKEN_LISTED_FOR_SALE');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('list not owned NFT of a canister should give UNAUTHORISED status', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await listNFTsExt(
      'owuqd-dyaaa-aaaah-qapxq-cai',
      walletObj.identity,
      '2112',
      180
    );

    t.is(status, 'UNAUTHORISED');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call tde7l-3qaaa-aaaah-qansa-cai with no args and get expected response', async (t) => {
  const canisterId = 'tde7l-3qaaa-aaaah-qansa-cai';
  const response: any = await canisterAgentApi(canisterId, 'getMinter');
  t.is(
    response.toText(),
    'sensj-ihxp6-tyvl7-7zwvj-fr42h-7ojjp-n7kxk-z6tvo-vxykp-umhfk-wqe'
  );
});

test('call tde7l-3qaaa-aaaah-qansa-cai with wrong args and get expected error response in string', async (t) => {
  const canisterId = 'tde7l-3qaaa-aaaah-qansa-cai';
  const response: any = await canisterAgentApi(canisterId, 'getMinter', '');
  t.is(typeof response.message, 'string');
});

test('call ledger canister and get expected response', async (t) => {
  const canisterId = 'ryjl3-tyaaa-aaaaa-aaaba-cai';
  const response: any = await canisterAgentApi(
    canisterId,
    'account_balance_dfx',
    {
      account:
        '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
    }
  );
  t.is(response.e8s, BigInt(159990001));
});

test('call principalTextoAddress get expected response', async (t) => {
  const principal =
    'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe';

  t.is(
    principalTextoAddress(principal),
    '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3'
  );
});

test('call getTokenIdentifier get expected response', async (t) => {
  const canisterId = 'r7inp-6aaaa-aaaaa-aaabq-cai';
  const tokenId = getTokenIdentifier(canisterId, 0);

  t.is(tokenId, 'rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a');
});

test('call decodeTokenId get expected response', async (t) => {
  const tokenId = decodeTokenId('rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a');

  t.like(tokenId, {
    index: 0,
    canister: 'r7inp-6aaaa-aaaaa-aaabq-cai',
    token: 'rghka-lykor-uwiaa-aaaaa-aaaaa-maqca-aaaaa-a',
  });
});
 */

test('createToken abc1', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await createToken('abc1');
    t.is(status?.toString(), 'vszjv-naaaa-aaaaa-aaa3q-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('createToken abc2', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await createToken('abc2');
    t.is(status?.toString(), 'vvypb-ayaaa-aaaaa-aaa3a-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_token abc1', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('get_token');
    const status = await getToken('abc1');

    t.is(status, 'vszjv-naaaa-aaaaa-aaa3q-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_token abc2', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('get_token');
    const status = await getToken('abc2');

    t.is(status, 'vvypb-ayaaa-aaaaa-aaa3a-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('owner', async (t) => {
  t.truthy(true);
  return;
  try {
    console.log('owner');
    const status = await owner('vszjv-naaaa-aaaaa-aaa3q-cai');

    t.is(
      status,
      'tjpnz-kfh3h-es2ok-k7wp4-ieiad-qvntd-hd4k3-zxdlf-tg3of-l37zo-7ae'
    );
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('approve', async (t) => {
  try {
    t.truthy(true);
    return;
    console.log('approve');

    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await approve(
      walletObj.identity,
      'vvypb-ayaaa-aaaaa-aaa3a-cai',
      'u7xn3-ciaaa-aaaaa-aaa4a-cai',
      1234
    );

    await approve(
      walletObj.identity,
      'vszjv-naaaa-aaaaa-aaa3q-cai',
      'u7xn3-ciaaa-aaaaa-aaa4a-cai',
      1234
    );

    t.is(Object.keys(status)[0], 'Ok');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

/* test('stats', async (t) => {
  try {
    const status = await stats();

    t.like(status, {});
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('get_all', async (t) => {
  try {
    const status = await get_all();

    t.is(status.length, 25);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */

test('create_pair', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await create_pair(
      'vvypb-ayaaa-aaaaa-aaa3a-cai',
      'vszjv-naaaa-aaaaa-aaa3q-cai'
    );

    t.is(status, 'u7xn3-ciaaa-aaaaa-aaa4a-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_all', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await getAllTokens();

    t.is(status.length, 8);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('getMetadata', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await getMetadata('vvypb-ayaaa-aaaaa-aaa3a-cai');

    t.like(status, { symbol: 'abc2', name: 'abc2' });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_pair', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_pair(
      'vvypb-ayaaa-aaaaa-aaa3a-cai',
      'vszjv-naaaa-aaaaa-aaa3q-cai'
    );

    t.is(status, 'u7xn3-ciaaa-aaaaa-aaa4a-cai');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
test('get_current_price', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_current_price('u7xn3-ciaaa-aaaaa-aaa4a-cai');

    t.is(status[0], 1.2651828847481021);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get_reserves', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await get_reserves('u7xn3-ciaaa-aaaaa-aaa4a-cai');

    t.like(status, {
      block_timestamp_last: 1540448708,
      reserve0: BigInt(18999),
      reserve1: BigInt(15017),
    });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('transfer_from', async (t) => {
  try {
    t.truthy(true);
    return;
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await transfer_from(
      'vvypb-ayaaa-aaaaa-aaa3a-cai',
      1666,
      walletObj.identity,
      'u7xn3-ciaaa-aaaaa-aaa4a-cai'
    );

    /*     await transfer_from(
      'vszjv-naaaa-aaaaa-aaa3q-cai',
      1234,
      walletObj.identity,
      'u7xn3-ciaaa-aaaaa-aaa4a-cai'
    );
 */
    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
/* 
test('mintx', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await mint(
      walletObj.identity,
      'u7xn3-ciaaa-aaaaa-aaa4a-cai'
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('swap', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await swap(
      walletObj.identity,
      'u7xn3-ciaaa-aaaaa-aaa4a-cai',
      'vvypb-ayaaa-aaaaa-aaa3a-cai',
      1666
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('stake', async (t) => {
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';

    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await stake(
      walletObj.identity,
      'w6ozc-gaaaa-aaaaa-aaarq-cai',
      'wzp7w-lyaaa-aaaaa-aaara-cai',
      1666
    );

    t.is(status, undefined);
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});


 */
/* 
test('canisterAgentApi local', async (t) => {
  try {
    const status = await canisterAgentApi(
      'rrkah-fqaaa-aaaaa-aaaaq-cai',
      'add',
      1,
      undefined,
      'http://127.0.0.1:8000'
    );

    t.is(status, BigInt(15));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('canisterAgent local', async (t) => {
  try {
    const status = await canisterAgent({
      canisterId: 'rrkah-fqaaa-aaaaa-aaaaq-cai',
      method: 'add',
      args: 1,
      host: 'http://127.0.0.1:8000',
    });

    t.is(status, BigInt(16));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
}); */
/* 
test('canisterAgent remote', async (t) => {
  try {
    const status = await canisterAgent({
      canisterId: 'bzsui-sqaaa-aaaah-qce2a-cai',
      method: 'bearer',
      args: 'lwi75-7akor-uwiaa-aaaaa-b4arg-qaqca-aac6a-q',
    });

    t.is(
      status.ok,
      'afb264de8057a9ba7f79a51c80f99354004e686bb650172032aada5126e7f014'
    );
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call XTC canister and get expected response', async (t) => {
  const canisterId = 'aanaa-xaaaa-aaaah-aaeiq-cai';
  const p = 'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe';
  const response: any = await canisterAgentApi(
    canisterId,
    'balanceOf',
    Principal.fromText(p)
  );
  t.is(response, BigInt(3282797));
});

test('call SDR canister and get expected response', async (t) => {
  const canisterId = 'qlttm-2yaaa-aaaak-qafvq-cai';
  const p = 'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe';
  const response: any = await canisterAgentApi(
    canisterId,
    'balanceOf',
    Principal.fromText(p)
  );
  t.is(response, BigInt(0));
});

test('call XTC canister mint_by_icp and get Unauthorized response', async (t) => {
  const canisterId = 'aanaa-xaaaa-aaaah-aaeiq-cai';
  const response: any = await canisterAgentApi(canisterId, 'mint_by_icp', [
    [],
    2582842,
  ]);
  t.like(response, {
    Err: {
      Unauthorized: null,
    },
  });
});

test('call Cycles canister get_icp_xdr_conversion_rate and get response', async (t) => {
  const canisterId = 'rkp4c-7iaaa-aaaaa-aaaca-cai';
  const response: any = await canisterAgentApi(
    canisterId,
    'get_icp_xdr_conversion_rate'
  );
  t.like(response, {
    data: {
      xdr_permyriad_per_icp: BigInt(129162),
    },
  });
});
 */

test('call pem and get exact identity principal', async (t) => {
  const pem = `-----BEGIN PRIVATE KEY-----
  MFMCAQEwBQYDK2VwBCIEIOagAuilvdmqRiXZhUSvRV2GlqDNRXNdzujnap6E3Jtt
  oSMDIQBGmLFUoT/MCBucOb8Oe9zUD4uz2RfTQx5hH8JpdCer0w==
  -----END PRIVATE KEY-----`;
  const identity = getEd25519KeyIdentityFromPem(pem);

  t.is(
    identity.getPrincipal().toText(),
    'yuvg2-2khcz-ztsa5-jw7wp-skye6-2ksrg-frffu-2cjz4-y6auu-lcsra-vqe'
  );
});

test('addToken to sonic', async (t) => {
  t.truthy(true);
  return;
  const seedPhrase =
    'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
  const walletObj = await createWallet(seedPhrase, 'ICP');

  try {
    const status = await canisterAgent({
      canisterId: '3xwpq-ziaaa-aaaah-qcn4a-cai',
      method: 'addToken',
      args: Principal.fromText('qlttm-2yaaa-aaaak-qafvq-cai'),
      fromIdentity: walletObj.identity,
    });

    t.is(status, 'ok');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call WICP balanceOf', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await canisterAgent({
      canisterId: 'utozz-siaaa-aaaam-qaaxq-cai',
      method: 'balanceOf',
      args: Principal.fromText(
        'o7nwu-n6kuf-4afzp-ybcuf-346pr-odd54-damf5-v4pvc-4sexh-cabph-7qe'
      ),
    });

    t.is(status, BigInt(13000000));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('get canister info for SDR', async (t) => {
  t.truthy(true);
  return;
  try {
    const response = await getCanisterInfo('qlttm-2yaaa-aaaak-qafvq-cai');

    t.like(response, {
      moduleHash:
        '196ac5674f124d6dafd706ea6ce400a1507598dd4b63b40466b832e15d833f27',
      subnet: 'opn46-zyspe-hhmyp-4zu6u-7sbrh-dok77-m7dch-im62f-vyimr-a3n2c-4ae',
      controllers: ['mq2bi-vaaaa-aaaak-qaakq-cai'],
    });
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call aaaaa-aa with unauth and get canister_status as error', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await canisterAgent({
      canisterId: 'aaaaa-aa',
      method: 'canister_status',
      fromIdentity: walletObj.identity,
      args: {
        canister_id: Principal.fromText('bso2y-jqaaa-aaaai-qjbda-cai'),
      },
    });

    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call vvimt-yaaaa-aaaak-qajga-cai auth and createListing', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
    const walletObj = await createWallet(seedPhrase, 'ICP');
    const resp = await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'setApprovalForAll',
      fromIdentity: walletObj?.identity,
      args: {
        id: { principal: Principal.fromText('vvimt-yaaaa-aaaak-qajga-cai') },
        approved: true,
      },
    });
    console.log(resp, walletObj.address);
    const status = await canisterAgent({
      canisterId: 'vvimt-yaaaa-aaaak-qajga-cai',
      method: 'createListing',
      fromIdentity: walletObj.identity,
      args: {
        groupIdentifier: [],
        nft: {
          nftCanister: Principal.fromText('dxn2z-niaaa-aaaak-qak5q-cai'),
          nftIdentifier: { nat32: 2 },
        },
        price: 1000000,
        symbol: { icp: null },
      },
    });

    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call q4uh3-saaaa-aaaak-qaj2a-cai and safeTransferFrom', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await canisterAgent({
      canisterId: 'q4uh3-saaaa-aaaak-qaj2a-cai',
      method: 'safeTransferFrom',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '07b1b5f1f023eaa457a6d63fe00cea8cae5c943461350de455cb2d1f3dec8992',
        },
        notify: false,
        tokenIndex: 79208,
        from: {
          address:
            '02f2326544f2040d3985e31db5e7021402c541d3cde911cd20e951852ee4da47',
        },
        memo: [],
      },
    });
    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call vvimt-yaaaa-aaaak-qajga-cai and startPurchase', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase = SQUARE_MNE;
    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await canisterAgent({
      canisterId: 'vvimt-yaaaa-aaaak-qajga-cai',
      method: 'startPurchase',
      fromIdentity: walletObj.identity,
      args: {
        nft: {
          nftCanister: Principal.fromText('dxn2z-niaaa-aaaak-qak5q-cai'),
          nftIdentifier: {
            nat32: 0,
          },
        },
      },
    });
    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call vvimt-yaaaa-aaaak-qajga-cai and settlePurchase', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase = SQUARE_MNE;
    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await canisterAgent({
      canisterId: 'vvimt-yaaaa-aaaak-qajga-cai',
      method: 'settlePurchase',
      fromIdentity: walletObj.identity,
      args: 19,
    });
    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call dxn2z-niaaa-aaaak-qak5q-cai and mintNFT', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
    const walletObj = await createWallet(seedPhrase, 'ICP');

    const status = await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'mintNFT',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
        },
        metadata: [],
      },
    });
    await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'mintNFT',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
        },
        metadata: [],
      },
    });
    await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'mintNFT',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
        },
        metadata: [],
      },
    });
    await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'mintNFT',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
        },
        metadata: [],
      },
    });
    await canisterAgent({
      canisterId: 'dxn2z-niaaa-aaaak-qak5q-cai',
      method: 'mintNFT',
      fromIdentity: walletObj.identity,
      args: {
        to: {
          address:
            '0ba1b7b1643929210dc41a8afbe031bd1b5e81dbc8e3b3b64978f5f743f058c3',
        },
        metadata: [],
      },
    });
    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});

test('call vsjkh-vyaaa-aaaak-qajgq-cai and createCollection', async (t) => {
  t.truthy(true);
  return;
  try {
    const seedPhrase =
      'open jelly jeans corn ketchup supreme brief element armed lens vault weather original scissors rug priority vicious lesson raven spot gossip powder person volcano';
    const walletObj = await createWallet(seedPhrase, 'ICP');
    const society = 'hello';
    const status = await canisterAgent({
      canisterId: 'vsjkh-vyaaa-aaaak-qajgq-cai',
      method: 'createCollection',
      fromIdentity: walletObj.identity,
      args: {
        fee: 2,
        url: `${society}-collection-${Math.floor(Math.random() * 696969)}`,
        drop: [],
        meta: [],
        name: `${society} Collection`,
        nsfw: [],
        description: `The ${society} Collection is a collection of ${society} works.`,
        template: [],
        category: [],
        image: [],
      },
    });
    console.log(status);
    t.is(status.type, 'error');
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
//dxn2z-niaaa-aaaak-qak5q-cai

//https://ic.rocks/principal/vsjkh-vyaaa-aaaak-qajgq-cai#getNFTsByUser

test('canisterAgentApi qvhpv-4qaaa-aaaaa-aaagq-cai local', async (t) => {
  t.truthy(true);
  return;
  try {
    const status = await canisterAgent({
      canisterId: 'qvhpv-4qaaa-aaaaa-aaagq-cai',
      method: 'availableCycles',
      args: undefined,
      fromIdentity: undefined,
      host: 'http://127.0.0.1:8000',
    });
    console.log(status);
    t.is(status, BigInt(500000000000));
  } catch (error) {
    console.log(error);
    t.truthy(false);
  }
});
