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
            address: '0x4ee9deF1fC2bB72C216134649bcfc5b2643eC944',
            key: 'traf',
            abi: trafABI,
            isMultichain: false,
        },
        {
            address: '0xc38Aa9285EB3C4cf69ab287e2a8b6Cee6dDE26D4',
            key: 'trafExtension',
            abi: trafABI,
            isMultichain: false,
        },

        {
            address: '0x28C9E6a96C69998a2B25Ee4F10dd5821F13aCebB',
            key: 'wlPartner',
            abi: trafABI,
            isMultichain: false,
        },
        {
            address: '0xd1E15a78ca14Af166a6895Eb7034C8115E101651',
            key: 'nonWlPartner',
            abi: trafABI,
            isMultichain: false,
        },
    ],
};

export default celesteOptions;
