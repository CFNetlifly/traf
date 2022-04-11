import React from 'react';

import {
    ape1,
    ape2,
    ape3,
    ape4,
    ape5,
    ape6,
    ape7,
    ape8,
    ape9,
    ape10,
    ape11,
    ape12,
    ape13,
    ape14,
    ape15,
    // mistery,
    // question,
    opensea,
} from 'images';

const cast = [
    {
        imageurl: ape1,
        name: 'Chucky',
        discord: 'BAYC #6614',
        link: () => (
            <a href="https://twitter.com/chuckythebayc" target="_blank" rel="noreferrer noopener">
                <span className="icon has-text-white is-size-4">
                    <i className="fab fa-twitter" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape2,
        name: 'Winky',
        discord: 'BAYC #6408',
        link: () => (
            <a
                href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/6408"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape3,
        name: 'Ceasar',
        discord: 'BAYC #9463',
        link: () => (
            <a
                href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9463"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape4,
        name: 'Hunky',
        discord: 'BAYC #7296',
        link: () => (
            <a
                href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7296"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape5,
        name: 'Rocky',
        discord: 'BAYC #7667',
        link: () => (
            <a
                href="https://opensea.io/assets/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623/7667"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape6,
        name: 'Sheila',
        discord: 'BAYC #7549',
        link: () => (
            <a
                href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7549"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape7,
        name: 'Hector',
        discord: 'BAYC #7667',
        link: () => (
            <a
                href="https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7667"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape8,
        name: 'Dr. Jeeves',
        discord: 'SVS #8038',
        link: () => (
            <a
                href="https://opensea.io/assets/0x219b8ab790decc32444a6600971c7c3718252539/8038"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape9,
        name: 'Coolcat1',
        discord: '#5893',
        link: () => (
            <a
                href="https://opensea.io/assets/0x1a92f7381b9f03921564a437210bb9396471050c/5893"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape10,
        name: 'Coolcat2',
        discord: '#9443',
        link: () => (
            <a
                href="https://opensea.io/assets/0x1a92f7381b9f03921564a437210bb9396471050c/9443"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape11,
        name: 'Dr. Nwatiti',
        discord: 'LAZYLION #7678',
        link: () => (
            <a
                href="https://opensea.io/assets/0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0/7678"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape12,
        name: 'Beyonk',
        discord: 'DAW #225',
        link: () => (
            <a
                href="https://opensea.io/assets/0xf1268733c6fb05ef6be9cf23d24436dcd6e0b35e/225"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape13,
        name: 'Dre',
        discord: 'DAW #3044',
        link: () => (
            <a
                href="https://opensea.io/assets/0xf1268733c6fb05ef6be9cf23d24436dcd6e0b35e/3044"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape14,
        name: 'Niles',
        discord: 'CZ #5467',
        link: () => (
            <a
                href="https://opensea.io/assets/0x3a4ca1c1bb243d299032753fdd75e8fec1f0d585/5467"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
    {
        imageurl: ape15,
        name: 'F Fat Ape',
        discord: 'FAC #1621',
        link: () => (
            <a
                href="https://opensea.io/assets/0xf3114dd5c5b50a573e66596563d15a630ed359b4/1621"
                rel="noreferrer noopener"
            >
                <span className="icon">
                    <img src={opensea} alt="" />
                </span>
            </a>
        ),
    },
];

export default cast;
