import React from 'react';
import { ConnectedWrapper, ConnectButton, SwitchNetworkButton, NetworkWrapper } from 'celeste-framework';

import HoldersMintSection from './holders-mint-section';
import PartnersMintSection from './partners-mint-section';
import PresaleMintSection from './presale-mint-section';
import RaffleMintSection from './raffle-mint-section';
import PublicMintSection from './public-mint-section';

const MintSection = () => {
    return (
        <ConnectedWrapper
            disconnectedComponent={
                <div className="columns is-centered">
                    <div className="column ">
                        <ConnectButton className=" button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6">
                            <span>CONNECT</span>
                        </ConnectButton>
                    </div>
                </div>
            }
        >
            <NetworkWrapper
                chainIds={[1]}
                info={
                    <div className="columns is-centered">
                        <div className="column">
                            <SwitchNetworkButton
                                chainId={1}
                                className="button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6"
                            >
                                <span>SWITCH TO MAINNET</span>
                            </SwitchNetworkButton>
                        </div>
                    </div>
                }
            >
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <HoldersMintSection />
                    </div>
                    <div className="column is-narrow">
                        <PresaleMintSection />
                    </div>
                    <div className="column is-narrow">
                        <PartnersMintSection />
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-narrow">
                        <PublicMintSection />
                    </div>
                </div>
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintSection;
