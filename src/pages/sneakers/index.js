import { baseURL } from "images";
import SectionLayout from "layouts/section";

import goldLogo from 'media/sneakers/gravity-gold-logo.png';

import faqData from './faq-data';
import ReactHtml from 'raw-html-react';

import sneakersData from './skeakers-data';

const SneakersPage = props => {
    return(        
        <div>
            <section className="banner " style={{minHeight: '100vh', position: 'relative'}}>
                <div className="columns has-background-black is-marginless has-bottom-border-hbrown" style={{minHeight: 'inherit'}}>
                    <div className="column is-flex is-flex-direction-column p-0" style={{minHeight: 'inherit'}}>
                        
                        <video autoPlay loop muted>
                            <source src={baseURL + "1ouGZpXQ3z9cTLIh2l0gA5ZjRdJVl0VrH"} type="video/mp4" />
                        </video>
                        
                        <div className="has-background-hbrown is-flex-grow-1">
                            <div className="container has-text-white p-5" style={{display: 'grid', placeItems: 'center', height: '100%'}}>
                                <h1 className="title has-text-white has-text-centered">Coming Soon</h1>
                            </div>
                        </div>     
                    </div>
                    <div className="column px-3 ">
                        <div className="has-background-black has-text-centered">
                            <div className="container px-2">

                                <br/><br/><br/>

                                <img src={goldLogo} alt="Gravity Gold Logo" style={{width: '200px'}} />

                                <hr className="has-background-hbrown" style={{width:'250px', margin: '40px auto'}}/>

                                <h1 className="title has-text-hgold is-4">
                                    GRAVITY SNEAKES
                                    <br/>
                                    BY THE RED APE FAMILY
                                </h1>
                                <br/>
                                <h1 className="subtitle has-text-hbrown">
                                    Mars Wearable
                                </h1>

                                <hr className="has-background-hgold" style={{width:'250px', margin: '40px auto'}}/>

                                <p className="subtitle has-text-centered has-text-hgold has-text-weight-bold">
                                    Designed as a futuristic hi-top basketball shoe, <br/>
                                    the Gravity Sneaker counteracts the difference in <br/>
                                    gravity on the red planet and stops wearers from <br/>
                                    floating away to certain death. 
                                </p>

                                <p className="subtitle has-text-hgold has-text-weight-bold">
                                    There are only 333 sneakers out there, and 1 TRAF founders’ edition.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
             {/* sneakers section */}
            <SectionLayout 
                className="has-background-black"
                content={
                    <div>
                        <div className="columns">
                            {
                                sneakersData.map((sneaker, index) => 
                                    <div className="column" key={index}>
                                        <figure className="image is-square" className="has-border-2-hbrown-o-10">
                                            <video autoPlay loop muted src={sneaker.src}>
                                            </video>                                            
                                        </figure>
                                        <br/>
                                        <h1 className="title has-text-white has-text-centered is-4">{sneaker.name}</h1>
                                    </div>   
                                )
                            }
                        </div>
                    </div>   
                }
            />

            {/* faq section */}
            <SectionLayout
                className="has-background-black"
                content={
                    <div className="">  
                        <h1 className="title has-text-white is-4 has-text-centered">HOW DOES IT WORK?</h1>
                        <br/><br/>
                        <ul>
                            {
                                faqData.map((item, i) =>
                                    <details style={{borderBottom: '3px solid rgba(255, 255, 255, 0.2)', cursor: 'pointer', userSelect: 'none'}} key={i}>
                                        <summary className="has-text-cyellow is-size-5 has-text-weight-bold pr-5">{item.question}</summary>
                                        <p className="has-text-white"><ReactHtml html={item.answer}/></p>
                                    </details>
                                )
                            }
                        </ul>

                    </div>
                }       
            />

            
        </div>
    );
}

export default SneakersPage;