/* eslint-disable jsx-a11y/label-has-associated-control */

import { useSelector, useDispatch } from 'react-redux';
import { start_close_modal } from 'redux/actions/modalActions';

import Modal from '../index';

const ShowVideo = () => {
    // redux
    const { showVideoModal } = useSelector(state => state.modalReducer);

    const dispatch = useDispatch();

    const handleCloseClick = () => {
        dispatch(start_close_modal());
    };

    return (
        <Modal isOpen={showVideoModal.isOpen}>
            <div className="box has-background-dark p-5 has-border-2-hblue-o-2">
                <div className="container">
                    <h1 className="subtitle has-text-white has-text-centered">Mint On Smartphone</h1>
                    <hr className="has-background-hblue-o-2" style={{ margin: '0 -24px 0 -24px' }} />
                    <section className="pt-5 mb-6">
                        <figure className="image is-16by9">
                            <iframe
                                title="Mint On Smartphones"
                                className="has-ratio"
                                src="https://www.youtube-nocookie.com/embed/kuWPm0w1bfE"
                                allowFullScreen
                            ></iframe>
                        </figure>
                    </section>

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

export default ShowVideo;
