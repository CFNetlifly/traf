// const erc721 = require('./abis/erc721.json');
import trafABI from 'abis/TRAF.json';
import trafNewABI from 'abis/TRAF_NEW_ABI.json';
import gravityHeelsABI from 'abis/Gravity_Heels.json';

const celesteConfig = {
    isMultichain: false,
    rpcs: {
        ETH: {
            chainId: '1',
            url: 'https://mainnet.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8',
            explorer: 'https://etherscan.io',
        },
    },
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
            address: '0xa186C1af0ba02C43579343Ee0a49Cb152dA6f17a',
            key: 'trafMint',
            abi: trafNewABI,
            isMultichain: false,
        },
        {
            address: '0x9982A8BF88527756eFbE89A76aCFbfA089F54B88',
            key: 'trafMintExtension',
            abi: trafNewABI,
            isMultichain: false,
        },
        {
            address: '0xE365c31a1E7Bcd970BCEB8819CD18c2EcD9e0065',
            key: 'DAW',
            abi: gravityHeelsABI,
            isMultichain: false,
        },
        {
            address: '0x86E6b6C832589D2506De03C8fBbAded3dc3cD171',
            key: 'HeelsClaim',
            abi: gravityHeelsABI,
            isMultichain: false,
        },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',
    },
};

export default celesteConfig;
