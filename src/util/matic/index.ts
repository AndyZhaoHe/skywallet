import axios, { AxiosRequestConfig } from 'axios';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

export const getBalance = async (address) => {
  const data = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [address, 'latest'],
    id: 0,
  });

  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://polygon-mainnet.g.alchemy.com/v2/WQY8CJqsPNCqhjPqPfnPApgc_hXpnzGc',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getTransferGasFees = async (
  API_KEY = `WQY8CJqsPNCqhjPqPfnPApgc_hXpnzGc`,
  historicalBlocks = 20
) => {
  const web3 = createAlchemyWeb3(
    `https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}`
  );
  try {
    //const respons2 = await web3.eth.getMaxPriorityFeePerGas();
    //console.log(respons2, 'getMaxPriorityFeePerGas');
  } catch (error) {
    console.log(error);
  }

  let gasEstimates;
  try {
    const history = await web3.eth.getFeeHistory(
      historicalBlocks,
      'latest',
      [35, 60, 90, 100]
    );
    const { reward, baseFeePerGas, gasUsedRatio } = history;
    const oldestBlock = Number(history.oldestBlock);
    gasEstimates = gasUsedRatio.map((ratio, i) => {
      const gasInfo = {
        blockNumber: oldestBlock + i,
        gasUsedRatio: Number(ratio),
        baseFeePerGas: Number(baseFeePerGas[i]),
        priorityFeePerGas: reward[i].map((x) => Number(x)),
      };
      return {
        fees: {
          low: gasInfo.baseFeePerGas + gasInfo.priorityFeePerGas[0],
          medium: gasInfo.baseFeePerGas + gasInfo.priorityFeePerGas[1],
          high: gasInfo.baseFeePerGas + gasInfo.priorityFeePerGas[2],
          instant: gasInfo.baseFeePerGas + gasInfo.priorityFeePerGas[3],
        },
        ...gasInfo,
      };
    });
  } catch (error) {
    console.log(error);
  }
  return gasEstimates;
};
