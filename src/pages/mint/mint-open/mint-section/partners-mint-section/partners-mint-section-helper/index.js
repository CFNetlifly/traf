import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';

import { partnerholder_get_request_thunk } from 'redux/actions/holderActions';

import { mintEp3 } from 'patterns/proxy/mint-functions';
const PartnersMintSectionHelper = () => {
    const [isActive, setIsActive] = useState(false);

    const { holderReducer } = useSelector(state => state);

    const isEligible =
        holderReducer.isPartnerHolder.success && holderReducer.isPartnerHolder.data.data.partnerholder && isActive;

    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            partnerholder_get_request_thunk({
                requestName: 'isPartnerHolder',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [web3Reducer.initialized, walletReducer.address, dispatch]);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            partnerholder_get_request_thunk({
                requestName: 'isPartnerHolder',
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
                const pmData = await mintEp3().PartnersMint().Get_PM_Data(walletReducer.address);
                // console.log('🚀 ~ file: index.js ~ line 66 ~ hmData', pmData);
                setIsActive(pmData.active);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [web3Reducer.initialized, walletReducer.address]);

    return isEligible ? (
        <div className="is-hdarkgray px-5 py-6">
            <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-hlime is-italic">
                PARTNERS MINT
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
                PARTNERS MINT
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

export default PartnersMintSectionHelper;
