import React, { useState, useEffect } from 'react';
import { useCelesteSelector } from 'celeste-framework';

import { mintEp3 } from 'patterns/proxy/mint-functions';

const PresaleMintSectionHelper = () => {
    const [isActive, setIsActive] = useState(false);
    const [isListed, setIsListed] = useState(false);

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const prmData = await mintEp3().PreniumMint().Get_PRM_Data(walletReducer.address);
                // console.log('🚀 ~ file: index.js ~ line 17 ~ prmData', prmData);
                setIsActive(prmData.active);
                setIsListed(prmData.listed);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [web3Reducer.initialized, walletReducer.address]);

    return isActive && isListed ? (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                PRESALE MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-underlined">
                OPEN
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.35 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    ) : (
        <div className="is-hdarkgray2 px-5 py-6" style={{ opacity: '0.3' }}>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                PRESALE MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-redape is-underlined">
                CLOSED
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.35 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    );
};

export default PresaleMintSectionHelper;
