import React, { useEffect } from 'react';
import useCountdown from 'hooks/useCountDown';
import { Redirect } from 'react-router-dom';
import { episode3Spaceship } from 'images';

const BeforeMint = () => {
    const { days, hours, minutes, seconds } = useCountdown(1650553200);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
        <Redirect to="/mint-open" />
    ) : (
        <section className="section has-text-centered has-background-section-10">
            <div className="columns is-centered ">
                <div className="column is-narrow">
                    <div className="content">
                        <h1 className="title has-text-centered has-text-white">EPISODE 3 MINT</h1>
                        <h2 className="subtitle has-text-centered is-italic has-text-yellow">MINT WILL OPEN SOON</h2>
                        <div className="content pt-2">
                            <a
                                href="https://www.premint.xyz/traf-ep3"
                                className="button is-medium is-borderless is-hdarkgreen is-rounded is-fullwidth"
                                type="button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="has-text-white is-italic has-text-weight-bold ">JOIN ALLOW LIST</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-centered pt-4">
                <div className="column">
                    <p className="has-text-white has-text-weight-bold">TOTAL SUPPLY: 1111</p>
                    <p className="has-text-white">
                        TRAF Holders Mint (0.25 ETH + Gas) / Allow List Mint (0.35 ETH + Gas) / Public Mint (0.4 ETH +
                        Gas)
                    </p>
                    <div className="content pt-2">
                        <a
                            href="https://discord.gg/traf"
                            className="has-text-yellow has-text-weight-bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MORE INFO
                        </a>
                    </div>
                </div>
            </div>
            <div className="columns is-centered pt-4">
                <div className="column is-narrow">
                    <h2 className="has-text-white is-size-2 has-text-weight-bold">{days} Days</h2>
                    <h1 className="has-text-white is-size-1 has-text-weight-bold">
                        {hours}:{minutes}:{seconds}
                    </h1>
                    <h2 className="has-text-white is-size-2 pt-6 has-text-weight-bold">COMING SOON</h2>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <figure className="image pt-3">
                        <img
                            src={episode3Spaceship}
                            alt="episode3Spaceship"
                            style={{ width: '256px', height: '256px' }}
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};
export default BeforeMint;
