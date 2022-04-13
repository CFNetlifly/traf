import celesteStore from 'celeste-framework/dist/store';
import BigNumber from 'bignumber.js';

export const traf = () => {
    const web3Reducer = celesteStore.getState().web3Reducer;
    const walletReducer = celesteStore.getState().walletReducer;

    const trafContract = web3Reducer.contracts.traf;
    const trafContractExtension = web3Reducer.contracts.trafExtension;
    // console.log('🚀 ~ file: index.js ~ line 10 ~ traf ~ trafContractExtension', trafContractExtension);

    return {
        totalSupply: async () => {
            const res = await trafContract.methods.totalSupply().call();
            return res;
        },
        getMints: async address => {
            const res = await trafContractExtension.methods.getMints(address).call();
            return res;
        },
        balanceOf: async address => {
            const res = await trafContract.methods.balanceOf(address).call();
            return res;
        },

        holdersMint: async amount => {
            const tx = await trafContractExtension.methods.holdersMint();
            const txData = {
                from: walletReducer.address,
                to: trafContractExtension.options.address,
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
};

export const wlPartners = () => {
    const web3Reducer = celesteStore.getState().web3Reducer;
    const walletReducer = celesteStore.getState().walletReducer;

    const wlContract = web3Reducer.contracts.wlPartner;

    return {
        balanceOf: async address => {
            const res = await wlContract.methods.balanceOf(address).call();
            return res;
        },
        wlPartnersMint: async amount => {
            const tx = await wlContract.methods.wlPartnersMint();
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await tx.send({
                        from: walletReducer.address,
                        to: wlContract.options.address,
                        data: tx.encodeABI(),
                        value: new BigNumber(Math.floor(0.35 * 10 ** 18)).times(amount).toString(),
                    });
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
        },
    };
};

export const nonWlPartners = () => {
    const web3Reducer = celesteStore.getState().web3Reducer;
    const walletReducer = celesteStore.getState().walletReducer;

    const nonWlContract = web3Reducer.contracts.nonWlPartner;

    return {
        balanceOf: async address => {
            const res = await nonWlContract.methods.balanceOf(address).call();
            return res;
        },
        nonWlPartnersMint: async amount => {
            const tx = await nonWlContract.methods.nonWlPartnersMint();
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await tx.send({
                        from: walletReducer.address,
                        to: nonWlContract.options.address,
                        data: tx.encodeABI(),
                        value: new BigNumber(Math.floor(0.4 * 10 ** 18)).times(amount).toString(),
                    });
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
        },
    };
};
