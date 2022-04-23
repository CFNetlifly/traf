/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCelesteSelector } from 'celeste-framework';
import { open_modal } from 'redux/actions/modalActions';

import MintSection from './mint-section';

import { mintEp3 } from 'patterns/proxy/mint-functions';

const MintOpen = () => {
    const dispatch = useDispatch();

    const { web3Reducer } = useCelesteSelector(state => state);
    const [totalSupply, setTotalSupply] = useState(0);

    useEffect(() => {
        if (!web3Reducer.initialized) return;
        (async () => {
            try {
                const res = await mintEp3().MintsLeft();
                setTotalSupply(res);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [web3Reducer.initialized]);

    return (
        <section className="section has-text-centered has-background-section-4">
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <h1 className="title has-text-centered has-text-white">EPISODE 3</h1>
                    <h2 className="subtitle has-text-centered is-size-4 has-text-weight-bold has-text-redape">
                        MINT IS NOW CLOSED
                    </h2>
                    <h3 className="subtitle has-text-centered is-size-5 has-text-weight-bold has-text-white">
                        TOTAL SUPPLY: 333
                    </h3>
                    <p className="is-size-5 has-text-white has-text-weight-bold pb-2">
                        EPISODE 3 NFTs Left: <span className="has-text-cyellow">{totalSupply}</span>
                    </p>

                    <a
                        className="has-text-hlime"
                        onClick={() =>
                            dispatch(
                                open_modal({
                                    modalName: 'showVideoModal',
                                })
                            )
                        }
                    >
                        HOW TO MINT FROM YOUR SMARTPHONE
                    </a>

                    {/* <div className="content pt-6">
                        <h1 className="title has-text-centered is-italic has-text-cyellow">SELECT YOUR MINT</h1>
                    </div> */}
                </div>
            </div>

            <MintSection />
        </section>
    );
};

export default MintOpen;
