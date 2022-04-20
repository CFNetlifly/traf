import celesteStore from 'celeste-framework/dist/store';
import BigNumber from 'bignumber.js';

export const mintEp3 = () => {
    const web3Reducer = celesteStore.getState().web3Reducer;
    const walletReducer = celesteStore.getState().walletReducer;

    const trafMintContractExtension = web3Reducer.contracts.trafMintExtension;

    return {
        MintsLeft: async () => {
            const res = await trafMintContractExtension.methods.Mints_Left().call();
            return res;
        },

        GeneralMintsLeft: async () => {
            const res = await trafMintContractExtension.methods.General_Mints_Left().call();
            return res;
        },

        HoldersMint: () => {
            return {
                Get_HM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_HM_Data(address).call();
                    return res;
                },
                HM: async ({ amount, price, nft_id }) => {
                    const tx = await trafMintContractExtension.methods.HM(nft_id);
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
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

        GeneralHoldersMint: () => {
            return {
                Get_GHM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_GHM_Data(address).call();
                    return res;
                },
                GHM: async ({ amount, price, nft_id }) => {
                    const tx = await trafMintContractExtension.methods.GHM(nft_id);
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
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

        PreniumMint: () => {
            return {
                Get_PRM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_PRM_Data(address).call();
                    return res;
                },
                PRM: async ({ amount, price }) => {
                    const tx = await trafMintContractExtension.methods.PRM();
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
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
        PartnersMint: () => {
            return {
                Get_PM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_PM_Data(address).call();
                    return res;
                },
                PM: async ({ amount, price, address }) => {
                    const tx = await trafMintContractExtension.methods.PM(address);
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
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
        AllowListMint: () => {
            return {
                Get_ALM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_ALM_Data(address).call();
                    return res;
                },
                ALM: async ({ amount, price }) => {
                    const tx = await trafMintContractExtension.methods.ALM();

                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
                    };

                    return new Promise(async (resolve, reject) => {
                        try {
                            const res = await tx.send(txData);
                            resolve(res);
                        } catch (e) {
                            console.log('🚀 ~ file: index.js ~ line 144 ~ returnnewPromise ~ e', e);
                            reject(e);
                        }
                    });
                },
            };
        },
        PublicMint: () => {
            return {
                Get_PUM_Data: async address => {
                    const res = await trafMintContractExtension.methods.Get_PUM_Data(address).call();
                    return res;
                },
                PUM: async ({ amount, price }) => {
                    const tx = await trafMintContractExtension.methods.PUM();
                    const txData = {
                        from: walletReducer.address,
                        to: trafMintContractExtension.options.address,
                        value: new BigNumber(Math.floor(price)).times(amount).toString(),
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
