import store from 'redux/store';
import { set_web3_instance, add_contract, set_web3_initialized } from 'redux/actions/web3Actions';
import {
    set_metamask_installed,
    set_connection,
    set_current_account,
    set_networkd_id,
    check_connected_to_operating_network,
} from 'redux/actions/walletActions';

import Web3 from 'web3';

import ERCABI from 'abis/ERC1155.json';
import verifyABI from 'abis/verification.json';
import ERCABI2 from 'abis/ERC11552.json';
import ERC721ABI from 'abis/erc721.json';
import dawABI from 'abis/daw.json';
import mintABI from 'abis/MintPass.json';
import sneakersABI from 'abis/sneakers.json';
import dawTrafABI from 'abis/daw_traf.json';

const initWeb3 = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const ethereum = window.ethereum;
        store.dispatch(set_metamask_installed(true));

        //instance web3
        const web3 = await new Web3(ethereum);
        store.dispatch(set_web3_instance(web3));

        //detect if metamask is connected to site
        const accArr = await web3.eth.getAccounts();
        if (accArr.length === 0) store.dispatch(set_connection(false));
        else {
            store.dispatch(set_connection(true));
            store.dispatch(set_current_account(accArr[0]));

            store.dispatch(set_networkd_id(await web3.eth.getChainId()));
        }

        //instance contracts
        const ercContract = new web3.eth.Contract(ERCABI, '0xa803144e27aEf2Ac95E7Ab49214BD2f802C883dD');
        store.dispatch(add_contract(`ERC_CONTRACT`, ercContract));

        const mintContract = new web3.eth.Contract(mintABI, '0xE242300ada476825A2fD39C9F8BF4d3376db20b1');
        store.dispatch(add_contract('MINT_PASS', mintContract));

        const sneakersContract_f = new web3.eth.Contract(sneakersABI, '0x5D16e6E3c3Aa1B01F9d63C0287eD7919502B2f36');
        store.dispatch(add_contract(`SNEAKERS_F`, sneakersContract_f));

        const sneakersContract_n = new web3.eth.Contract(sneakersABI, '0xF92Fa322a26DD859d3d7a3B1e0b58102B66E5417');
        store.dispatch(add_contract(`SNEAKERS_N`, sneakersContract_n));

        const dawContract = new web3.eth.Contract(ERC721ABI, '0xf1268733c6fb05ef6be9cf23d24436dcd6e0b35e');
        store.dispatch(add_contract(`DAW`, dawContract));

        const dawTrafContract = new web3.eth.Contract(dawTrafABI, '0xcb650DB1740DF5306aA0179419b1888326b5db97');
        store.dispatch(add_contract(`DAW_TRAF`, dawTrafContract));

        // const traf_testnet = new web3.eth.Contract(ERCABI2, '0xA6af4f6c9763D471daFd4334b9A14a7F5f7545A9');
        // store.dispatch( add_contract(`TRAF`, traf_testnet) );

        /* (
            async () => {
                let claims = await sneakersContract.methods.mints('0x327864708eA978ce473E02900755c2746c0Cb7dd').call();

                
                let balance = await traf_testnet.methods.balanceOf('0x327864708eA978ce473E02900755c2746c0Cb7dd', 0).call() /2 ;
                balance += await traf_testnet.methods.balanceOf('0x327864708eA978ce473E02900755c2746c0Cb7dd', 1).call() / 2;
                balance = Math.floor(balance);
                

                if(balance < claims) 
                    claims = balance;

                // console.log(sneakersContract.methods);

                console.log(claims);

                if(claims > 0){
                    const tx = await sneakersContract.methods.mint();

                    try{
                        tx.send({
                            from: '0x327864708eA978ce473E02900755c2746c0Cb7dd'
                        });
                    }
                    catch(e){
                        console.log(e);
                    }
                }
                    
                    
            }
        )(); */

        store.dispatch(set_web3_initialized(true));

        //listen to eth change events
        ethereum.on('accountsChanged', (accounts) => {
            // console.log('accounts: ' + accounts);
            if (accounts.length > 0) {
                store.dispatch(set_current_account(accounts[0]));
            } else {
                store.dispatch(set_connection(false));
                store.dispatch(set_current_account(''));
            }
        });

        ethereum.on('connect', (connectInfo) => {
            // if(accounts[0] != null)
            //     store.dispatch( set_current_account(accounts[0]) );

            // store.dispatch( set_connection(true) );
            console.log('cnx');
        });

        ethereum.on('disconnect', (error) => {
            // store.dispatch( set_current_account('') );
            console.log(error);
        });

        ethereum.on('chainChanged', async (chainId) => {
            // window.location.reload();
            store.dispatch(set_networkd_id(await web3.eth.getChainId()));
            store.dispatch(check_connected_to_operating_network());
        });
    }
};

export { initWeb3 };
