import React, { useState, useEffect } from 'react';
import { useCelesteSelector } from 'celeste-framework';

import { mintEp3 } from 'patterns/proxy/mint-functions';

const PublicMintSectionHelper = () => {
    const [isActive, setIsActive] = useState(false);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const pumData = await mintEp3().PublicMint().Get_PUM_Data(walletReducer.address);
                setIsActive(pumData.active);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [web3Reducer.initialized, walletReducer.address]);

    return isActive ? (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                PUBLIC MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-underlined">
                OPEN
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.4 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: Till sellout</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    ) : (
        <div className="is-hdarkgray2 px-5 py-6" style={{ opacity: '0.3' }}>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                PUBLIC MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-redape is-underlined">
                CLOSED
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.4 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: Till sellout</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    );
};

export default PublicMintSectionHelper;
