import React from 'react';

const faq = [
    {
        question: 'WHAT IS THE RED APE FAMILY?',
        answer: () => (
            <p className="has-text-white">
                The Red Ape Family (TRAF) is a ground-breaking new comedy, and the first animated series built around,
                and starring, famous NFTs. It is also the first show of its kind where episodes are sold as individual
                NFTs.
            </p>
        ),
    },
    {
        question: 'HOW MANY TRAF NFTs ARE THERE?',
        answer: () => (
            <p className="has-text-white">
                The first 3 episodes have 333 NFTs each. Upcoming episodes will have 2500 NFTs each.
            </p>
        ),
    },
    // {
    //     question: 'HOW MANY EPISODES AND SEASONS ARE PLANNED?',
    //     answer: () => (
    //         <p className="has-text-white">
    //             Season 1 will have 10 episodes (20 minutes per episode).
    //             <br />
    //             Regarding the number of seasons, the sky is the limit! We have a whole galaxy of surprises in store.
    //         </p>
    //     ),
    // },
    {
        question: 'WHAT AM I BUYING EXACTLY?',
        answer: () => (
            <p className="has-text-white">
                A piece of NFT history! A super NFT that represents a full Episode of The Red Ape Family!
            </p>
        ),
    },
    {
        question: 'WHICH NFTs ARE YOU USING IN THE SHOW?', //8
        answer: () => (
            <p className="has-text-white">
                The story is centered on BAYC NFTs. However, MAYC, BAKC, Coolcats, Craniums and Lions will also play a
                major role, forming the backbone of the main cast. In addition, the stage is set for many different NFTs
                to join the show as recurring cast members and in supporting roles. The more the merrier.
            </p>
        ),
    },
];

export default faq;
