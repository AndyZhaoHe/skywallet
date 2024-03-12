import { createAlchemyWeb3 } from '@alch/alchemy-web3';

export const getTransferGasFees = async (
  API_KEY = `WGaCcGcGiHHQrxew6bZZ9r2qMsP8JS80`,
  historicalBlocks = 20
) => {
  const web3 = createAlchemyWeb3(
    `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`
  );
  try {
    const respons2 = await web3.eth.getMaxPriorityFeePerGas();
    console.log(respons2, 'getMaxPriorityFeePerGas');
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
  console.log(gasEstimates);
  return gasEstimates;
};
