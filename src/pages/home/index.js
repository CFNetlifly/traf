import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    // episodesRoadmap,
    // projectRoadmap,
    // giveaways,
    // guest,
    bannerVideo,
    bananaIcon,
    // benefits,
    opensea,
    episode1Spaceship,
    episode2Spaceship,
    // question,
    episode3Spaceship,
} from '../../images';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_section } from 'redux/actions/navbarActions';
import { set_member } from 'redux/actions/teamMembersActions';

import roadMapData from './data-roadmap';
import brandData from './brands-data';
import teamData from '../data-team';
import castData from './data-cast';
import faqData from './data-faq';
import partnersData from './partners-data';
import utilityData from './data-utility';

// import MintSection from './mint-section';
// import MintSection2 from './mint2-section';

// import LoadingScreen from 'components/loading-screen';
import './brands.scss';
import './home.scss';
import SectionLayout from 'layouts/section';
import VideoSlider from 'components/slider';

const HomePage = props => {
    const homeSection = useRef(null);
    // const faqSection = useRef(null);
    // const roadMapSection = useRef(null);
    // const teamSection = useRef(null);
    // const { navbarReducer } = props;

    const [assetsLoaded] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${assetsLoaded >= 35 ? '' : 'home-sizer-null'}`} style={{ position: 'relative' }}>
            {/* <div className={`has-background-primary is-hidden-mobile ${assetsLoaded >= 35 ? 'is-hidden' : ''}`} style={{width: '100vw', height: '100vh', position: 'absolute', left:'0', top: '0', zIndex: 1}}>
                <LoadingScreen />
            </div> */}

            <section
                className="hero is-medium banner-home"
                ref={homeSection}
                style={{ position: 'relative', height: '666px' }}
            >
                <div className="video-container is-fullwidth">
                    <video playsInline autoPlay muted loop>
                        <source src={bannerVideo} type="video/mp4" />
                    </video>
                    <div className="invisible-panel"></div>
                </div>

                <div
                    className="hero-body bg-gradient is-flex is-flex-direction-column py-0"
                    style={{ height: '500px' }}
                >
                    <div
                        className="container is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-flex-end"
                        style={{ width: '100%' }}
                    >
                        <div className="columns is-vcentered  px-3" style={{ transform: 'translateY(-50px)' }}>
                            <div className="column  has-text-centered">
                                <a
                                    href="https://discord.gg/HxE754wj9r"
                                    target="_blank"
                                    className="button is-cpurple has-text-white is-size-4 is-rounded has-font-audiowide"
                                    rel="noreferrer"
                                >
                                    <strong>JOIN DISCORD</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mint section */}
            <SectionLayout
                className="has-background-section-1"
                content={
                    <div className="">
                        <h1 className="subtitle has-text-yellow has-text-weight-bold mb-0 has-text-centered is-size-4">
                            THE RED APE FAMILY IS STREAMING ON
                        </h1>
                        <div className="has-text-centered">
                            {/* <h1 className="subtitle has-text-white has-text-weight-bold mb-0 has-text-centered">The Red Ape Family will be streaming on!</h1> */}
                        </div>
                        <div className="has-text-centered my-5">
                            <div className="columns is-vcentered">
                                {brandData.map((brand, i) => (
                                    <div className="column" key={i}>
                                        <a
                                            href="https://www.altrd.tv/shows/red-ape-family"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img className={`brand-tv ${brand.className}`} src={brand.src} alt=""></img>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr style={{ margin: '0', background: '#393939' }} />
                        <div className="my-6">
                            <div className="columns">
                                <div className="column">
                                    <div className="column">
                                        <figure className="image">
                                            <img src={episode1Spaceship} alt="Episode 1 Spaceship" />
                                        </figure>
                                    </div>

                                    <div className="has-text-centered">
                                        <div className="column">
                                            <h1 className="subtitle has-text-white has-text-weight-bold mb-1 is-3">
                                                EPISODE 1
                                            </h1>
                                            <h1 className="subtitle has-text-white has-text-weight-bold mb-1 is-3">
                                                <span className="has-text-hred is-italic">SOLD OUT</span>
                                            </h1>
                                            <h1 className="subtitle has-text-yellow is-italic has-text-weight-bold mb-5 is-3">
                                                <a
                                                    href="https://opensea.io/assets/theredapefamily?search[stringTraits][0][name]=Episode&search[stringTraits][0][values][0]=1&search[sortAscending]=true&search[sortBy]=PRICE"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="has-text-yellow"
                                                >
                                                    BUY ON OPENSEA
                                                </a>
                                            </h1>
                                            <a
                                                href="https://opensea.io/assets/theredapefamily?search[stringTraits][0][name]=Episode&search[stringTraits][0][values][0]=1&search[sortAscending]=true&search[sortBy]=PRICE"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <figure className="image is-32x32 is-inline-block">
                                                    <img src={opensea} alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="column">
                                        <figure className="image">
                                            <img src={episode2Spaceship} alt="Episode 2 Spaceship" />
                                        </figure>
                                    </div>

                                    <div className="has-text-centered">
                                        <div className="column">
                                            <h1 className="subtitle has-text-white has-text-weight-bold mb-1 is-3">
                                                EPISODE 2
                                            </h1>
                                            <h1 className="subtitle has-text-white has-text-weight-bold mb-1 is-3">
                                                <span className="has-text-hred is-italic">SOLD OUT</span>
                                            </h1>
                                            <h1 className="subtitle has-text-yellow is-italic has-text-weight-bold mb-5 is-3">
                                                <a
                                                    href="https://opensea.io/assets/theredapefamily?search[stringTraits][0][name]=Episode&search[stringTraits][0][values][0]=1&search[sortAscending]=true&search[sortBy]=PRICE"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="has-text-yellow"
                                                >
                                                    BUY ON OPENSEA
                                                </a>
                                            </h1>
                                            <a
                                                href="https://opensea.io/assets/theredapefamily?search[stringTraits][0][name]=Episode&search[stringTraits][0][values][0]=2&search[sortAscending]=true&search[sortBy]=PRICE"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <figure className="image is-32x32 is-inline-block">
                                                    <img src={opensea} alt="" />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="column">
                                        <figure className="image">
                                            <img src={episode3Spaceship} alt="Episode 3 Spaceship" />
                                        </figure>
                                    </div>

                                    <div className="has-text-centered">
                                        <div className="column">
                                            <h1 className="subtitle has-text-white has-text-weight-bold mb-1 is-3">
                                                EPISODE 3
                                            </h1>
                                            <h1 className="subtitle has-text-hlime has-text-weight-bold mb-5 is-3 is-italic">
                                                <a
                                                    href="https://www.premint.xyz/traf-ep3/"
                                                    target="_blank"
                                                    className="has-text-hlime"
                                                    rel="noopener noreferrer"
                                                >
                                                    ALLOW LIST OPEN
                                                </a>
                                            </h1>
                                            <a
                                                href="https://www.premint.xyz/traf-ep3/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button is-hdarkgreen is-rounded is-size-5 is-fullwidth"
                                            >
                                                <span className="is-italic has-text-weight-bold has-text-white">
                                                    JOIN ALLOW LIST
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ background: '#393939' }} />
                    </div>
                }
            />

            <SectionLayout className="has-background-section-2 pb-6 pt-6" content={<VideoSlider />} />

            <SectionLayout
                className="has-background-section-3"
                content={
                    <div>
                        <div className="columns">
                            <div className="column">
                                <h1 className="title has-text-yellow is-4 has-text-left has-text-weight-bold">
                                    THE RED APE FAMILY <br />
                                    UTILITY
                                </h1>
                                <div className="pt-5 pl-5">
                                    <h2 className="title has-text-white is-6 has-text-left has-text-weight-bold">
                                        GENESIS EPISODES (EP1 & EP2)
                                    </h2>
                                    <p className="has-text-white is-size-6 has-text-left pt-5">
                                        Holders of Genesis Episodes are Executive Producers who get rewarded for their
                                        contribution to the show
                                    </p>
                                    <ul className="pt-5">
                                        {utilityData.slice(0, 4).map(utility => (
                                            <li className="media is-size-6" key={utility.id}>
                                                <div className="media-left">
                                                    <figure className="image is-24x24">
                                                        <img src={bananaIcon} alt="" />
                                                    </figure>
                                                </div>
                                                <div className="media-content has-text-left">
                                                    <span className="has-text-white">{utility.body}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <h2 className="title has-text-yellow is-6 has-text-left has-text-weight-bold pt-5">
                                        OTHER EPISODES (FROM EP3 ONWARDS)
                                    </h2>
                                    <ul className="pt-5">
                                        {utilityData.slice(4, 10).map(utility => (
                                            <li className="media is-size-6" key={utility.id}>
                                                <div className="media-left">
                                                    <figure className="image is-24x24">
                                                        <img src={bananaIcon} alt="" />
                                                    </figure>
                                                </div>
                                                <div className="media-content has-text-left">
                                                    <span className="has-text-white">{utility.body}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="column pl-6">
                                <h1 className="title has-text-yellow is-4 has-text-left has-text-weight-bold">
                                    THE RED APE FAMILY <br />
                                    ROADMAP
                                </h1>
                                <div className="pt-5 pl-5">
                                    <h2 className="title  is-6 has-text-left has-text-weight-bold has-text-hlime">
                                        ACHIEVED
                                    </h2>
                                    <ul className="pt-5">
                                        {roadMapData.slice(0, 6).map(roadmap => (
                                            <li className="media is-size-6" key={roadmap.id}>
                                                <div className="media-left">
                                                    <figure className="image is-24x24">
                                                        <img src={bananaIcon} alt="" />
                                                    </figure>
                                                </div>
                                                <div className="media-content has-text-left">
                                                    <roadmap.body />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <h2 className="title has-text-yellow is-6 has-text-left has-text-weight-bold pt-6">
                                        UPCOMING
                                    </h2>
                                    <ul className="pt-4">
                                        {roadMapData.slice(6, 12).map(roadmap => (
                                            <li className="media is-size-6" key={roadmap.id}>
                                                <div className="media-left">
                                                    <figure className="image is-24x24">
                                                        <img src={bananaIcon} alt="" />
                                                    </figure>
                                                </div>
                                                <div className="media-content has-text-left">
                                                    <roadmap.body />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* exclusive benefits */}
            {/* <SectionLayout
                className="has-background-black"
                content={
                    <div>
                        <br />
                        <div className="columns">
                            <div className="column has-text-centered  px-4">
                                <h1 className="title has-text-white is-4 has-text-left has-text-weight-bold">
                                    EXCLUSIVE BENEFITS FOR <br />
                                    <span className="has-text-warning">THE RED APE FAMILY</span> HOLDERS
                                </h1>
                                <ul>
                                    {benefitsData.map((item, i) => (
                                        <li className="media is-size-6" key={i}>
                                            <div className="media-left">
                                                <figure className="image is-24x24">
                                                    <img src={bananaIcon} alt="" />
                                                </figure>
                                            </div>
                                            <div className="media-content has-text-left">
                                                <span className="has-text-white">{item.body}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="column" style={{ position: 'relative' }}>
                                <div className="pl-5 has-text-right">
                                    <img src={benefits} alt="" width="400" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            /> */}

            {/*F.A.Q*/}

            <SectionLayout
                className="has-background-section-4"
                content={
                    <div className="">
                        <h1 className="title has-text-white is-4 has-text-centered">FREQUENTLY ASKED QUESTIONS</h1>
                        <br />
                        <br />
                        <ul>
                            {faqData.map((item, i) => (
                                <details style={{ borderBottom: '3px solid #452E2F' }} key={i}>
                                    <summary className="has-text-white is-size-5 has-text-weight-bold pr-5">
                                        {item.question}
                                    </summary>
                                    <item.answer />
                                </details>
                            ))}
                        </ul>
                    </div>
                }
            />

            {/* team  */}
            <SectionLayout
                className="has-background-section-6"
                content={
                    <div>
                        <h1 className="title has-text-white has-text-centered is-4">MEET THE TEAM</h1>
                        <br />
                        <br />
                        <br />

                        <div className="columns is-multiline px-3">
                            <div className="column" />
                            {[...teamData].slice(0, 3).map((t, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <Link to="/team">
                                        <img
                                            className="is-rounded bwToColorImg"
                                            onClick={() => props.set_member(i)}
                                            src={t.imageurl}
                                            alt=""
                                            width="150"
                                            style={{
                                                boxShadow:
                                                    '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Link>

                                    <br />
                                    <br />

                                    <div className="" style={{ height: '80px' }}>
                                        <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                        <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                    </div>

                                    <t.link />
                                </div>
                            ))}
                            <div className="column" />
                        </div>
                        <br className="is-hidden-mobile" />
                        <br className="is-hidden-mobile" />
                        <div className="columns is-multiline">
                            {[...teamData].slice(3, 7).map((t, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <Link to="/team">
                                        <img
                                            className="is-rounded bwToColorImg"
                                            onClick={() => props.set_member(i + 3)}
                                            src={t.imageurl}
                                            alt=""
                                            width="150"
                                            style={{
                                                boxShadow:
                                                    '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Link>

                                    <br />
                                    <br />

                                    <div className="" style={{ height: '80px' }}>
                                        <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                        <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                    </div>
                                    <t.link />
                                </div>
                            ))}
                        </div>
                        <br className="is-hidden-mobile" />
                        <br className="is-hidden-mobile" />

                        <div className="columns is-multiline px-3">
                            <div className="column"></div>
                            {[...teamData].slice(7, 10).map((t, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <Link to="/team">
                                        <img
                                            className="is-rounded bwToColorImg"
                                            onClick={() => props.set_member(i)}
                                            src={t.imageurl}
                                            alt=""
                                            width="150"
                                            style={{
                                                boxShadow:
                                                    '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    </Link>

                                    <br />
                                    <br />

                                    <div className="" style={{ height: '80px' }}>
                                        <h1 className="title has-text-white is-5 has-text-centered">{t.name}</h1>
                                        <h1 className="subtitle has-text-white is-6 has-text-centered">{t.charge}</h1>
                                    </div>
                                    <t.link />
                                </div>
                            ))}
                            <div className="column"></div>
                        </div>
                    </div>
                }
            />

            {/* cast */}
            <SectionLayout
                className="has-background-section-6"
                content={
                    <div>
                        <h1 className="title has-text-white has-text-weight-bold has-text-centered is-4 pb-6">
                            MEET THE CAST
                        </h1>

                        <div className="columns">
                            {[...castData].slice(0, 5).map((c, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <img
                                        className="is-rounded"
                                        src={c.imageurl}
                                        alt=""
                                        width="150"
                                        style={{
                                            boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                            borderRadius: '50%',
                                        }}
                                    />

                                    <div className="pt-4" style={{ height: '80px' }}>
                                        <h1 className="title is-5 has-text-centered has-text-white">{c.name}</h1>
                                        <h1 className="subtitle is-5 has-text-centered mb-0 has-text-white">
                                            {c.discord}
                                        </h1>
                                    </div>
                                    <c.link />
                                </div>
                            ))}
                        </div>

                        <div className="columns pt-6">
                            {[...castData].slice(5, 10).map((c, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <img
                                        className="is-rounded"
                                        src={c.imageurl}
                                        alt=""
                                        width="150"
                                        style={{
                                            boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                            borderRadius: '50%',
                                        }}
                                    />

                                    <div className="pt-4" style={{ height: '80px' }}>
                                        <h1 className="title is-5 has-text-centered has-text-white">{c.name}</h1>
                                        <h1 className="subtitle is-5 has-text-centered mb-0 has-text-white">
                                            {c.discord}
                                        </h1>
                                    </div>
                                    <h1 className="subtitle is-5 has-text-centered pt-1">
                                        <c.link />
                                    </h1>
                                </div>
                            ))}
                        </div>
                        <div className="columns pt-6">
                            {[...castData].slice(10, 15).map((c, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <img
                                        className="is-rounded"
                                        src={c.imageurl}
                                        alt=""
                                        width="150"
                                        style={{
                                            boxShadow: '0px 0px 1px 5px #585858, 3px 3px 1px 5px rgba(0, 0, 0, 0.5)',
                                            borderRadius: '50%',
                                        }}
                                    />

                                    <div className="pt-4" style={{ height: '80px' }}>
                                        <h1 className="title is-5 has-text-centered has-text-white">{c.name}</h1>
                                        <h1 className="subtitle is-5 has-text-centered mb-0 has-text-white">
                                            {c.discord}
                                        </h1>
                                    </div>
                                    <h1 className="subtitle is-5 has-text-centered pt-1">
                                        <c.link />
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />

            <SectionLayout
                className="has-background-section-7"
                content={
                    <div className="has-text-centered">
                        <h1 className="title has-text-warning is-4">MUSKVILLE IS WAITING!</h1>
                        <h1 className="title has-text-white is-3">Get your ticket to Mars and Join our Discord!</h1>
                        <br />
                        <a
                            href="https://discord.gg/HxE754wj9r"
                            target="_blank"
                            className="button is-cpurple has-text-white is-size-4 is-rounded has-font-audiowide"
                            style={{ width: '200px' }}
                            rel="noreferrer noopener"
                        >
                            <strong>HOP ON!</strong>
                        </a>
                        <br />
                    </div>
                }
            />

            {/* <SectionLayout
                className="has-background-black p-0 m-0"
                content={<hr style={{ margin: '0', background: '#393939' }} />}
            /> */}

            <SectionLayout
                className="has-background-section-8"
                content={
                    <div>
                        <h1 className="title has-text-white has-text-weight-bold has-text-centered is-4 pb-4">
                            OFFICIAL PARTNERS
                        </h1>

                        <div className="columns">
                            {[...partnersData].splice(0, 1).map((p, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <h1 className="title is-5 has-text-centered has-text-warning">{p.name}</h1>
                                    <a
                                        className="has-text-centered"
                                        href={p.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <img src={p.imgSrc} alt="" className="" width={p.width} />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="columns pt-5">
                            {[...partnersData].splice(1, 6).map((p, i) => (
                                <div className="column has-text-centered" key={i}>
                                    <h1 className="title is-5 has-text-centered has-text-warning">{p.name}</h1>
                                    <a
                                        className="has-text-centered"
                                        href={p.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <img src={p.imgSrc} alt="" className="" width={p.width} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            />

            {/* <SectionLayout
                className="has-background-black p-0 m-0"
                content={<hr style={{ margin: '0', background: '#393939' }} />}
            /> */}
        </div>
    );
};

HomePage.propTypes = {
    set_member: PropTypes.func.isRequired,
    navbarReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    navbarReducer: state.navbarReducer,
});

export default connect(mapStateToProps, {
    set_section,
    set_member,
})(HomePage);
