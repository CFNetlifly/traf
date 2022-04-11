import trafABI from 'abis/TRAF.json';

const celesteOptions = {
    rpcs: [
        {
            chainId: 4,
            url: 'https://rinkeby.infura.io/v3/50a22921f6854e16bc4b6228ae01e2b8',
        },
    ],

    smartContracts: [
        {
            address: '0x5496Dfbc129BeA28cad97d7B2591d9aFc6132c37',
            key: 'traf',
            abi: trafABI,
            isMultichain: false,
        },
    ],
};

export default celesteOptions;
