import React from 'react';

const TRAFMintSectionHelper = () => {
    return (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                HOLDERS MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-underlined">
                OPEN
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.25 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                <p className="has-text-white">⚙️ | HOW: All TRAF holders are allow listed</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 10 per wallet</p>
            </div>
        </div>
    );
};

export default TRAFMintSectionHelper;
