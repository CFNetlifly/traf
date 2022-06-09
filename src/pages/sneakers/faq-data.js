import React from 'react';

const faq = [
    {
        question: 'WHO CAN CLAIM THE GRAVITY HEELS?',
        answer: () => (
            <p className="has-text-white">
                All The Red Ape Family token holders of Episode 2 will be able to claim a random Gravity Heel, a
                Founder's edition Heel, a DAW edition Heel. If you have 1 token of Ep2, you will be able to claim 1
                Gravity Heel and 1 Founder Heel, and if you have 5 tokens of Ep2, you will be able to claim 5 Gravity
                Heels, and 5 Founder Heels.
                <br />
                <br />
                The DAW edition heel can be claimed by Ep2 holders, and by Desperate Ape Wives NFT holders. Each wallet
                can only claim 1 DAW edition regardless of how many Ep2 or DAW NFTs they have. The claim of this edition
                is based on first come first serve, with a max supply of 333.
            </p>
        ),
    },

    {
        question: 'HOW MANY GRAVITY HEELS ARE OUT THERE?', //8
        answer: () => (
            <p className="has-text-white">
                There are only 333 heels out there, 1 TRAF founders' edition, and 1 DAW edition.
            </p>
        ),
    },
    {
        question: 'CAN I SELL MY GRAVITY HEEL?', //10
        answer: () => (
            <p className="has-text-white">
                OOnce you claim your Gravity Sneaker, you will be able to list it on OpenSea and resell it.
                <br />
                <br />
                OpenSea fees = 2.5% and TRAF’s royalties = 10%
            </p>
        ),
    },
];

export default faq;
