import React, { useState } from 'react';

const RaffleMintSectionHelper = () => {
    const [balanceOf] = useState(0);

    return balanceOf > 0 ? (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                RAFFLE MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-underlined">
                OPEN
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6:30PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.35 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 30 minutes</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    ) : (
        <div className="is-hdarkgray2 px-5 py-6" style={{ opacity: '0.3' }}>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                RAFFLE MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-redape is-underlined">
                CLOSED
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6:30PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.35 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 30 minutes</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
            </div>
        </div>
    );
};

export default RaffleMintSectionHelper;
