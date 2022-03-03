import {
  member1,
  member2,
  member3,
  member6,
  member7,
  member8,
  member9,
  member11,
  member12,
  member13,
} from "images";

const team = [
  {
    sortId: 1,
    imageurl: member1,
    name: "TheBlessedSon",
    charge: "COO",
    link: '<a href="https://twitter.com/theblessedson17" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-twitter"></i></span></a>',
    info: "Youssouf (A.K.A. TheBlessedSon or TBS) has been a crypto enthusiast and trader since 2017. Hailing from Tetouan, Morocco, he initially got into NFTs to help his father, a smartphone artist, to sell his art. He then acquired an entire shrewdness of Bored Apes, which allowed him to deep dive into the NFT world. With a Master’s Degree in Engineering and a passion for Project Management, TBS has worked for large companies in different sectors and contributed to build several start-ups in healthcare-IT and Teleco.",
  },
  {
    sortId: 2,
    imageurl: member2,
    name: "2  Chainz",
    charge: "Executive Producer",
    link: '<a href="https://twitter.com/2chainz" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-twitter"></i></span></a>',
    info: `2 Chainz is the stage name of Atlanta rapper Tauheed Epps, once known as Tity Boi in the Atlanta-based Playaz Circle. His breakout year was in 2012, when he dropped his official debut, Based on a T.R.U. Story, for Def Jam. The album hit number one on the Billboard 200, and easily reached platinum status. 2 Chainz continued to dominate the charts throughout the next decade, consistently hitting the top ten with albums like 2017's Pretty Girls Like Trap Music and material from his 2020 record So Help Me God. In 2021, he became an Executive Producer and Partner of The Red Ape Family, a comedy series that is the world’s first animated show built around, and starring, NFTs.`,
  },
  {
    sortId: 3,
    imageurl: member3,
    name: "Hashem Zaini",
    charge: "Director & CCO",
    link: '<a href="https://www.instagram.com/hashemxyz/" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-instagram"></i></span></a>',
    info: `Multi-award winning director and entrepreneur, Hashem has worked with a galaxy of artists, creatives and major global brands (ranging from Nike to National Geographic). Of Moroccan and Iraqi descent, Hashem started making movies as a child and quickly fell in love with the art of cinema and storytelling. He set up Zaini Media in Dubai in 2012 and, since then, has worked with everyone from recording artists to Hollywood directors. He is now one of the region's most sought after filmmakers.`,
  },
  {
    sortId: 6,
    imageurl: member6,
    name: "Adam G. Simon",
    charge: "Screen Writer",
    link: '<a href="https://www.instagram.com/adambelgabe/" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-instagram"></i></span></a>',
    // name: 'Eric Spivak "Motivate"',
    // charge: 'Strategic Marketing Advisor',
    // link: '<a href="https://twitter.com/ericspivak?s=20" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-twitter"></i></span></a>',
    // info: 'Eric Spivak, A.K.A. “Motivate” is a KOL in the digital art, blockchain & cryptocurrency space as well as the Co-Founder to the Largest and Fastest Growing NFT & DeFi Community in the World. Beyond his contributions to these fast-paced environments. He’s been making waves with his successful boutique creative agency Urconduit. Working with internationally recognized brands, artists, and musicians alike. His creative work & curatorial abilities are seen throughout his projects in the diversity, quality and consistency of his work.'
  },
  {
    sortId: 7,
    imageurl: member7,
    name: "JustSul",
    charge: "Comedian & Voice Actor",
    link: '<a href="https://www.instagram.com/justsul/" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-instagram"></i></span></a>',
    info: "",
  },
  {
    sortId: 8,
    imageurl: member8,
    name: "Don Fuego",
    charge: "Music Producer",
    link: '<a href="https://www.instagram.com/donfuego.beats/?hl=en" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-instagram"></i></span></a>',
    info: "Don Fuego, music producer, sound engineer and musician.Don Fuego is a producer of exceptional creative talent and musical diversity. He has collaborated with a wide range of world renowned international recording artists across diverse genres, and also has a  successful career making music jingles and compositions for  tv, radio and other media outlets. His corporate clients include large international corporations, media and telecommunications companies. He is now widening his professional portfolio by including voice-over and associated musical compositions and productions.",
  },
  {
    sortId: 9,
    imageurl: member9,
    name: "Sarah Khorbtli",
    charge: "Art director",
    link: '<a href="https://twitter.com/SarahKhorbtli" target="_blank" ><span class="icon is-size-2 has-text-white"><i class="fab fa-twitter"></i></span></a>',
    info: "Sarah Khorbtli, Syrian-American Art Director based in Dubai, ‏Started her career as a motion design and animation instructor at IUST and later moved here expertise to work on various projects and clients in the MENA region., Sarah joined the creative team at Zaini Media to utilize here motion design skills and unique art direction, to bring even more ideas to life.",
  } /*, {
        sortId: 10,
        imageurl: member10,
        name: 'Eric Spivak',
        charge: 'Strategic Marketing Advisor',
        link: '<a href="https://twitter.com/ericspivak?s=20" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-twitter"></i></span></a>',
        info: 'Eric Spivak, A.K.A. “Motivate” is a KOL in the digital art, blockchain & cryptocurrency space as well as the Co-Founder to the Largest and Fastest Growing NFT & DeFi Community in the World. Beyond his contributions to these fast-paced environments. He’s been making waves with his successful boutique creative agency Urconduit. Working with internationally recognized brands, artists, and musicians alike. His creative work & curatorial abilities are seen throughout his projects in the diversity, quality and consistency of his work.'

    }*/,
  {
    sortId: 11,
    imageurl: member11,
    name: "Zaini Media",
    charge: "Creative Studio",
    link: '<a href="http://www.zainimedia.com/" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fal fa-globe"></i></span></a>',
  },
  {
    sortId: 12,
    imageurl: member12,
    name: "Orcania",
    charge: "Blockchain Team",
    link: '<a href="https://orcania.io" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fal fa-globe"></i></span></a>',
  } /*, {
        sortId: 14,
        imageurl: member14,
        name: 'Ramzi Faris',
        charge: 'Brand Development Guru',
        link: '<a href="https://www.instagram.com/ramzifaris/" target="_blank"><span class="icon is-size-2 has-text-white"><i class="fab fa-instagram"></i></span></a>',        
    } */,
];

export default team;
