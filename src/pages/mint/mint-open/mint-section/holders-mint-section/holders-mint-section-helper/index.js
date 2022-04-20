import React, { useState, useEffect } from 'react';
import { useCelesteSelector } from 'celeste-framework';
import { mintEp3 } from 'patterns/proxy/mint-functions';
import { useSelector, useDispatch } from 'react-redux';
import { primeholder_get_request_thunk } from 'redux/actions/holderActions';

const HoldersMintSectionHelper = () => {
    const [isActive, setIsActive] = useState(false);
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const { holderReducer } = useSelector(state => state);

    const isEligible =
        holderReducer.isPrimeHolder.success && holderReducer.isPrimeHolder.data.data.primeholder && isActive;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            primeholder_get_request_thunk({
                requestName: 'isPrimeHolder',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [web3Reducer.initialized, walletReducer.address, dispatch]);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        (async () => {
            try {
                const hmData = await mintEp3().HoldersMint().Get_HM_Data(walletReducer.address);
                setIsActive(hmData.active);
            } catch (e) {
                console.log(e);
            }
        })();
        // return () => {};
    }, [web3Reducer.initialized, walletReducer.address]);

    return isEligible ? (
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
                <p className="has-text-white">⭕️ | MINT LIMIT: 10 per wallet</p>
            </div>
        </div>
    ) : (
        <div className="is-hdarkgray2 px-5 py-6" style={{ opacity: '0.3' }}>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                HOLDERS MINT
            </h3>
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-redape is-underlined">
                CLOSED
            </h3>
            <div className="is-size-6 is-flex is-flex-direction-column is-align-items-flex-start">
                <p className="has-text-white">📅 | MINT DAY: April 21</p>
                <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                <p className="has-text-white">💎 | PRICE: 0.25 ETH + Gas</p>
                <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                <p className="has-text-white">⭕️ | MINT LIMIT: 10 per wallet</p>
            </div>
        </div>
    );
};

export default HoldersMintSectionHelper;
