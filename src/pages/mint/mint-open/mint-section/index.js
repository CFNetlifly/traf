import React, { useEffect, useState } from 'react';
import {
    ConnectedWrapper,
    ConnectButton,
    SwitchNetworkButton,
    NetworkWrapper,
    useCelesteSelector,
} from 'celeste-framework';

import HoldersMintSection from './holders-mint-section';
import PartnersMintSection from './partners-mint-section';
import PresaleMintSection from './presale-mint-section';
import RaffleMintSection from './raffle-mint-section';
import PublicMintSection from './public-mint-section';
import { mintEp3 } from 'patterns/proxy/mint-functions';

const MintSection = () => {
    const [episodesLeft, setEpisodesLeft] = useState(10);

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;

        (async () => {
            try {
                const episodesLeft = await mintEp3().MintsLeft();
                console.log('🚀 ~ file: index.js ~ line 28 ~ episodesLeft', episodesLeft);
                setEpisodesLeft(episodesLeft);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [walletReducer.address, web3Reducer.initialized]);

    return (
        <div className="columns is-centered">
            <div className="column is-narrow">
                <div className="notification is-warning">
                    <div className="columns is-centered">
                        <div className="column">
                            <p className="has-text-weight-bold">
                                <span className="icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                                <span>No mints left!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <ConnectedWrapper
        //     disconnectedComponent={
        //         <div className="columns is-centered">
        //             <div className="column ">
        //                 <ConnectButton className=" button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6">
        //                     <span>CONNECT</span>
        //                 </ConnectButton>
        //             </div>
        //         </div>
        //     }
        // >
        //     <NetworkWrapper
        //         chainIds={[1]}
        //         info={
        //             <div className="columns is-centered">
        //                 <div className="column">
        //                     <SwitchNetworkButton
        //                         chainId={1}
        //                         className="button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6"
        //                     >
        //                         <span>SWITCH TO MAINNET</span>
        //                     </SwitchNetworkButton>
        //                 </div>
        //             </div>
        //         }
        //     >
        //         <div className="columns is-centered">
        //             <div className="column is-narrow">
        //                 <HoldersMintSection />
        //             </div>
        //             <div className="column is-narrow">
        //                 <PresaleMintSection />
        //             </div>
        //             <div className="column is-narrow">
        //                 <PartnersMintSection />
        //             </div>
        //         </div>
        //         <div className="columns is-centered">
        //             <div className="column is-narrow">
        //                 <PublicMintSection />
        //             </div>
        //         </div>
        //     </NetworkWrapper>
        // </ConnectedWrapper>
    );
};
export default MintSection;
