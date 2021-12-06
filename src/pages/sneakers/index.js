import { baseURL } from "images";
import SectionLayout from "layouts/section";

import { opensea } from "images";
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
                        
                        <div className="has-background-hbrown is-flex-grow-1" style={{display: 'grid', placeItems: 'center'}}>
                            <h1 className="title has-text-white has-text-centered">Coming Soon</h1>
                            {/* <div className="container has-text-white p-5" style={{display: 'grid', placeItems: 'center', height: '100%'}}>
                                
                            </div> */}
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

            <SectionLayout
                className="has-background-black"
                content={
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title has-text-white is-3 has-text-centered">BUY FROM OPENSEA</h1>
                            <br/><br/>
                            <p className="title has-text-white is-4 has-text-centered">
                                The Gravity Sneakers were made available for
                                our Episode 1 token holders only!
                            </p>
                            <p className="title has-text-white is-4 has-text-centered">
                                If you want to snag one, you can get it now on OpenSea!
                            </p>
                            <br/><br/>
                            <div className="has-text-centered">
                                <a>
                                    <figure class="image is-64x64 is-inline-block">
                                        <img src={opensea} alt="" />                                
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <video playsInline autoPlay muted loop src={baseURL+'1TJHksoycz9EV9GeBgLnfHsfjQBENR3vM'}></video>
                        </div>
                    </div>
                }
            />

            <SectionLayout
                className="has-background-black p-0 m-0"
                content={
                    <hr style={{margin: '0', background: '#393939'}}/>
                }
            />  

            <SectionLayout
                className="has-background-black"
                content={
                    <div className="has-text-centered">
                        <h1 className="title has-text-warning is-4">MUSKVILLE IS WAITING!</h1>
                        <h1 className="title has-text-white is-3">Get your ticket to Mars and Join our Discord!</h1>
                        <br/>
                        <a href="https://discord.gg/HxE754wj9r" target="_blank" className="button is-cpurple has-text-white is-size-4 is-rounded has-font-audiowide" style={{width: '200px'}}>
                            <strong>HOP ON!</strong></a>
                        <br/>                        
                    </div>
                }                
            />

            
            <SectionLayout
                className="has-background-black p-0 m-0"
                content={
                    <hr style={{margin: '0', background: '#393939'}}/>
                }
            /> 
            
        </div>
    );
}

export default SneakersPage;