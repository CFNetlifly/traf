import SectionLayout from 'layouts/section';
import MintSection from './mint-section';

import { daw } from 'images';

const Daw = (props) => {
    return (
        <div>
            <SectionLayout
                className="has-background-black"
                content={
                    <div className="">
                        <div className="has-text-centered my-6">
                            {/* <h1 className="subtitle has-text-white has-text-weight-bold mb-0"> ARE YOU A <span className="has-text-warning">DAW</span> HOLDER? </h1> */}
                            <br />
                            <div className="has-text-centered">
                                <img src={daw} alt="" width="128" />
                            </div>
                            <br />

                            <p className="has-text-white title is-5">
                                Thee DAW x TRAF offer ended on January 7, 2022. <br />
                                We are glad to welcome all our new TRAFers to The Red Ape Family
                            </p>
                        </div>
                        {/* <hr style={{margin: '0', background: '#393939'}}/> */}
                        <div className="my-6">{/* <MintSection/> */}</div>
                    </div>
                }
            />
        </div>
    );
};

export default Daw;
