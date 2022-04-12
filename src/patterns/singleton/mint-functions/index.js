import celesteStore from 'celeste-framework/dist/store';

export const traf = () => {
    const web3Reducer = celesteStore.getState().web3Reducer;
    const walletReducer = celesteStore.getState().walletReducer;

    const trafContract = web3Reducer.contracts.traf;
    const trafContractExtension = web3Reducer.contracts.trafExtension;
    // const wlContract = web3Reducer.contracts.wlPartner;
    // const nonWlContract = web3Reducer.contracts.nonWlPartner;

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

        holdersMint: async () => {
            const tx = await trafContractExtension.methods.holdersMint();
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await tx.send({
                        from: walletReducer.address,
                    });
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
        wlPartnersMint: async () => {
            const tx = await wlContract.methods.wlPartnersMint();
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await tx.send({
                        from: walletReducer.address,
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
        nonWlPartnersMint: async () => {
            const tx = await nonWlContract.methods.nonWlPartnersMint();
            return new Promise(async (resolve, reject) => {
                try {
                    const res = await tx.send({
                        from: walletReducer.address,
                    });
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
        },
    };
};
