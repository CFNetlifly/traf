import trafABI from 'abis/TRAF.json';
import trafNewABI from 'abis/TRAF_NEW_ABI.json';
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
            address: '0x095953E4b76A40F595618c0201Eb6D40e6486529',
            key: 'trafMint',
            abi: trafNewABI,
            isMultichain: false,
        },
        {
            address: '0x103F69Be1065dDfeCd31FbB5871f38F3C43d15d2',
            key: 'trafMintExtension',
            abi: trafNewABI,
            isMultichain: false,
        },
    ],
};

export default celesteOptions;
