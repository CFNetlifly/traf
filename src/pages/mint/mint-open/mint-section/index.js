import React from 'react';
import { ConnectedWrapper, ConnectButton, SwitchNetworkButton, NetworkWrapper } from 'celeste-framework';

import HoldersMintSection from './holders-mint-section';

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
                chainIds={[4]}
                info={
                    <div className="columns is-centered">
                        <div className="column">
                            <SwitchNetworkButton
                                chainId={4}
                                className="button is-medium is-rounded is-cyellow has-font-alegreya has-text-weight-bold pl-6 pr-6"
                            >
                                <span>SWITCH TO MAINNET</span>
                            </SwitchNetworkButton>
                        </div>
                    </div>
                }
            >
                <HoldersMintSection />
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintSection;
