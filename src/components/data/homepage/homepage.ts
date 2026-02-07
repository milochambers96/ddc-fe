import deepWoodWomanImg from "../../../assets/home-page-imgs/deep-wood-woman-snow.jpg";
// import deepWoodWomanImg from "../../../assets/home-page-imgs/Frame 9.png";

import rocksRememberAndOtherStoriesImg from "../../../assets/home-page-imgs/rocks-remember-and-other-stories-2024.jpg";
// import rocksRememberAndOtherStoriesImg from "../../../assets/home-page-imgs/Frame 8.png";

interface HomePageHero {
  id: number;
  title: string;
  year: number;
  caption: string;
  image: string;
}

export const homepageHeroes: HomePageHero[] = [
  {
    id: 1,
    title: "Rocks Remember and Other Stories",
    year: 2024,
    caption: "Installation View, Standpoint Gallery, London",
    image: rocksRememberAndOtherStoriesImg,
  },

  {
    id: 2,
    title: "Deep Wood Woman",
    year: 2024,
    caption: "Bowen Island, Canada",
    image: deepWoodWomanImg,
  },
];
