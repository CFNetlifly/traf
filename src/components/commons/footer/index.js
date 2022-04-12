import { opensea, titleImg } from 'images';
import React from 'react';

const footer = () => {
    return (
        <footer className="footer has-background-section-9 py-5">
            <div className="container">
                <div className="columns is-centered is-size-7-mobile">
                    <div className="column is-narrow has-text-centered">
                        <img src={titleImg} alt="title" style={{ width: '250px' }} />
                        <p>
                            <a
                                href="https://twitter.com/TheRedApeFamily"
                                target="_blank"
                                className="ml-4"
                                rel="noopener noreferrer"
                            >
                                <span className="icon has-text-white is-size-4">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/theredapefamily/"
                                target="_blank"
                                className="ml-4"
                                rel="noopener noreferrer"
                            >
                                <span className="icon has-text-white is-size-4">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A"
                                target="_blank"
                                className="ml-4"
                                rel="noopener noreferrer"
                            >
                                <span className="icon has-text-white is-size-4">
                                    <i className="fab fa-youtube"></i>
                                </span>
                            </a>
                            <a
                                href="https://discord.gg/JeqSUsVQQC"
                                target="_blank"
                                className="ml-4"
                                rel="noopener noreferrer"
                            >
                                <span className="icon has-text-white is-size-4">
                                    <i className="fab fa-discord"></i>
                                </span>
                            </a>
                            <a
                                href="https://opensea.io/collection/theredapefamily"
                                target="_blank"
                                className="ml-4 is-size-4"
                                rel="noopener noreferrer"
                            >
                                <span className="icon has-text-white">
                                    <img src={opensea} alt="" />
                                </span>
                            </a>
                        </p>
                        <div className="pt-5">
                            <h1 className="subtitle has-text-warning is-6 mb-3">
                                <a
                                    className="has-text-warning"
                                    href="https://whitepaper.theredapefamily.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Whitepaper
                                </a>
                            </h1>
                            <h1 className="subtitle has-text-warning is-6 mb-3 pt-4">Royalties wallet</h1>
                            <a
                                className="has-text-warning"
                                href="https://etherscan.io/address/0x38ef1bf1503efe695525211f5e2cea9f7bd01cc3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                0x38ef1bf1503efe695525211f5e2cea9f7bd01cc3
                            </a>
                            <h1 className="subtitle has-text-warning is-6 mb-3 pt-4">Contract Address</h1>
                            <a
                                href="https://etherscan.io/address/0x81f296145c5555d7b4b426d97e4e2260c017f5d0"
                                className="has-text-warning"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                0xa803144e27aEf2Ac95E7Ab49214BD2f802C883dD
                            </a>
                            <h1 className="subtitle has-text-warning is-6 mb-3 pt-5">traf@zainimedia.com</h1>
                            <h1 className="subtitle has-text-warning is-6 mb-3">
                                © 2022 The Red Ape Family. All rights reserved
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
