/* eslint-disable jsx-a11y/label-has-associated-control */

import { useSelector, useDispatch } from 'react-redux';
import { start_close_modal } from 'redux/actions/modalActions';

import Modal from '../index';

const ShowHelp = () => {
    // redux
    const { showHelpModal } = useSelector(state => state.modalReducer);

    const dispatch = useDispatch();

    const handleCloseClick = () => {
        dispatch(start_close_modal());
    };

    return (
        <Modal isOpen={showHelpModal.isOpen}>
            <div className="box has-background-dark p-5 has-border-2-hblue-o-2">
                <div className="container">
                    <h1 className="subtitle has-text-white has-text-centered">Mint Process</h1>
                    <hr className="has-background-hblue-o-2" style={{ margin: '0 -24px 0 -24px' }} />
                    <div className="columns pt-3">
                        <div className="column">
                            <h1 className="has-text-white has-text-weight-bold">🟢 TRAF HOLDERS MINT</h1>
                            <p className="has-text-white pt-3">📅 | MINT DAY: April 21</p>
                            <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                            <p className="has-text-white">💎 | PRICE: 0.25 ETH + Gas</p>
                            <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                            <p className="has-text-white">⚙️ | HOW: All TRAF holders are allow listed</p>
                            <p className="has-text-white">⭕️ | MINT LIMIT: 10 per wallet</p>
                        </div>
                        <div className="column">
                            <h1 className="has-text-white has-text-weight-bold">🔵 ALLOW LISTED PARTNERS MINT</h1>
                            <p className="has-text-white pt-3">📅 | MINT DAY: April 21</p>
                            <p className="has-text-white">🕙 | MINT TIME: 6PM UTC to 7PM UTC</p>
                            <p className="has-text-white">💎 | PRICE: 0.35 ETH + Gas</p>
                            <p className="has-text-white">⏱ | DURATION: 1 hour</p>
                            <p className="has-text-white">⚙️ | HOW: 🟢&🔵 will run at the same time</p>
                            <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h1 className="has-text-white has-text-weight-bold">🟡 RAFFLE WINNERS (ALLOW LIST) MINT</h1>
                            <p className="has-text-white pt-3">📅 | MINT DAY: April 21</p>
                            <p className="has-text-white">🕙 | MINT TIME: 6.30PM UTC to 7PM UTC</p>
                            <p className="has-text-white">💎 | PRICE: 0.4 ETH + Gas</p>
                            <p className="has-text-white">⏱ | DURATION: 30 minutes</p>
                            <p className="has-text-white">⭕️ | MINT LIMIT: 2 per wallet</p>
                        </div>
                        <div className="column">
                            <h1 className="has-text-white has-text-weight-bold">🔴 PUBLIC MINT</h1>
                            <p className="has-text-white pt-3">📅 | MINT DAY: April 21</p>
                            <p className="has-text-white">🕙 | MINT TIME: 7 PM UTC</p>
                            <p className="has-text-white">💎 | PRICE: 0.4 ETH + Gas</p>
                            <p className="has-text-white">⏱ | DURATION: Till sellout</p>
                            <p className="has-text-white">⭕️ | MINT LIMIT: 10 per wallet</p>
                        </div>
                    </div>
                    <div className="has-text-centered">
                        <button
                            className="button is-cyellow is-rounded has-text-weight-bold"
                            type="button"
                            onClick={handleCloseClick}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ShowHelp;
