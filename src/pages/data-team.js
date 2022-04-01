import React from 'react';
import { member1, member2, member3, member4, member5, member6, member7, member8, member9, member10 } from 'images';

const team = [
    {
        sortId: 1,
        imageurl: member1,
        name: 'TheBlessedSon',
        charge: 'COO',
        link: () => (
            <a href="https://twitter.com/theblesseds0n" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-twitter"></i>
                </span>
            </a>
        ),
        info: 'Youssouf (A.K.A. TheBlessedSon or TBS) has been a crypto enthusiast and trader since 2017. Hailing from Tetouan, Morocco, he initially got into NFTs to help his father, a smartphone artist, to sell his art. He then acquired an entire shrewdness of Bored Apes, which allowed him to deep dive into the NFT world. With a Master’s Degree in Engineering and a passion for Project Management, TBS has worked for large companies in different sectors and contributed to build several start-ups in healthcare-IT and Teleco.',
    },
    {
        sortId: 2,
        imageurl: member2,
        name: '2  Chainz',
        charge: 'Executive Producer',
        link: () => (
            <a href="https://twitter.com/2chainz" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-twitter"></i>
                </span>
            </a>
        ),
        info: `2 Chainz is the stage name of Atlanta rapper Tauheed Epps, once known as Tity Boi in the Atlanta-based Playaz Circle. His breakout year was in 2012, when he dropped his official debut, Based on a T.R.U. Story, for Def Jam. The album hit number one on the Billboard 200, and easily reached platinum status. 2 Chainz continued to dominate the charts throughout the next decade, consistently hitting the top ten with albums like 2017's Pretty Girls Like Trap Music and material from his 2020 record So Help Me God. In 2021, he became an Executive Producer and Partner of The Red Ape Family, a comedy series that is the world’s first animated show built around, and starring, NFTs.`,
    },
    {
        sortId: 3,
        imageurl: member3,
        name: 'Hashem Zaini',
        charge: 'Director & CCO',
        link: () => (
            <a href="https://www.instagram.com/hashemxyz/" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-instagram"></i>
                </span>
            </a>
        ),
        info: `Multi-award winning director and entrepreneur, Hashem has worked with a galaxy of artists, creatives and major global brands (ranging from Nike to National Geographic). Of Moroccan and Iraqi descent, Hashem started making movies as a child and quickly fell in love with the art of cinema and storytelling. He set up Zaini Media in Dubai in 2012 and, since then, has worked with everyone from recording artists to Hollywood directors. He is now one of the region's most sought after filmmakers.`,
    },
    {
        sortId: 4,
        imageurl: member4,
        name: 'Adam G. Simon',
        charge: 'Screen Writer',
        link: () => (
            <a href="https://www.instagram.com/adambelgabe/" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-instagram"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 5,
        imageurl: member5,
        name: 'JustSul',
        charge: 'Comedian & Voice Actor',
        link: () => (
            <a href="https://www.instagram.com/justsul/" target="_blank" rel="noreferrer">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-instagram"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 6,
        imageurl: member6,
        name: 'Don Fuego',
        charge: 'Music Producer',
        link: () => (
            <a href="https://www.instagram.com/donfuego.beats/?hl=en" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-instagram"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 7,
        imageurl: member7,
        name: 'Nadeem Ladki',
        charge: 'Head Of Partnerships',
        link: () => (
            <a href="https://twitter.com/Disciple_13" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fab fa-twitter"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 8,
        imageurl: member8,
        name: 'Zaini Media',
        charge: 'Creative Studio',
        link: () => (
            <a href="https://www.zainimedia.com/" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fal fa-globe"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 9,
        imageurl: member9,
        name: 'DigiToonz',
        charge: 'Animation Studio',
        link: () => (
            <a href="https://www.digitoonz.com/" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fal fa-globe"></i>
                </span>
            </a>
        ),
    },
    {
        sortId: 10,
        imageurl: member10,
        name: 'Orcania',
        charge: 'Blockchain Team',
        link: () => (
            <a href="https://www.orcania.io/" target="_blank" rel="noreferrer noopener">
                <span className="icon is-size-2 has-text-white">
                    <i className="fal fa-globe"></i>
                </span>
            </a>
        ),
    },
];

export default team;
