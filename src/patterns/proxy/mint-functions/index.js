import celesteStore from 'celeste-framework/dist/store';
import BigNumber from 'bignumber.js';

const web3Reducer = celesteStore.getState().web3Reducer;
const walletReducer = celesteStore.getState().walletReducer;

const trafMintContract = web3Reducer.contracts.trafMint;
const trafMintContractExtension = web3Reducer.contracts.trafMintExtension;

export const MintEp3 = () => {
    return {
        MintsLeft: async () => {
            const res = await trafMintContractExtension.methods.Mints_Left().call();
            return res;
        },

        GeneralMintsLeft: async () => {
            const res = await trafMintContractExtension.methods.General_Mints_Left().call();
            return res;
        },

        HoldersMint: async () => {
            return {
                Get_HM_Data: async address => {
                    const res = await trafMintContract.methods.Get_HM_Data(address).call();
                    return res;
                },
                HM: async amount => {
                    const tx = await trafMintContract.methods.HM();
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContract.options.address,
                        data: tx.encodeABI(),
                        value: new BigNumber(Math.floor(0.25 * 10 ** 18)).times(amount).toString(),
                    };

                    return new Promise(async (resolve, reject) => {
                        try {
                            const res = await tx.send(txData);
                            resolve(res);
                        } catch (e) {
                            reject(e);
                        }
                    });
                },
            };
        },

        GeneralHoldersMint: async () => {
            return {
                Get_GHM_Data: async address => {
                    const res = await trafMintContract.methods.Get_GHM_Data(address).call();
                    return res;
                },
                GHM: async amount => {
                    const tx = await trafMintContract.methods.GHM();
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContract.options.address,
                        data: tx.encodeABI(),
                        value: new BigNumber(Math.floor(0.25 * 10 ** 18)).times(amount).toString(),
                    };

                    return new Promise(async (resolve, reject) => {
                        try {
                            const res = await tx.send(txData);
                            resolve(res);
                        } catch (e) {
                            reject(e);
                        }
                    });
                },
            };
        },
    };
};
