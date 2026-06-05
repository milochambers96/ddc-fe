import darkBellaInstallImg from "../../../../../assets/work-page/sculptures/dark-bella-imgs/1. Dark Bella - Installation.png";
import darkBellaHeroImg from "../../../../../assets/work-page/sculptures/dark-bella-imgs/2. Dark Bella -  Hero.png";
import darkBellaDetailImg from "../../../../../assets/work-page/sculptures/dark-bella-imgs/3. Dark Bella Detail.jpg";
import darkBellaFull from "../../../../../assets/work-page/sculptures/dark-bella-imgs/4. Dark Bella Full.jpg";
import darkBellaProfile from "../../../../../assets/work-page/sculptures/dark-bella-imgs/5. Dark Bella - Profile.jpg";
import darkBellaBehindImg from "../../../../../assets/work-page/sculptures/dark-bella-imgs/6. Dark Bella Behind.png";
import darkBellaProfileDetail from "../../../../../assets/work-page/sculptures/dark-bella-imgs/7. Dark Bella - Profile Detail.jpg";

interface DarkBella {
  id: number;
  caption: string;
  image: string;
  medium: string;
}

export const darkBellaData: DarkBella[] = [
  {
    id: 1,
    caption: "Dark Bella Installation",
    image: darkBellaInstallImg,
    medium: "sculpture",
  },
  {
    id: 2,
    caption: "Dark Bella Hero",
    image: darkBellaHeroImg,
    medium: "sculpture",
  },
  {
    id: 3,
    caption: "Dark Bella Detail",
    image: darkBellaDetailImg,
    medium: "sculpture",
  },
  {
    id: 4,
    caption: "Dark Bella Full",
    image: darkBellaFull,
    medium: "sculpture",
  },
  {
    id: 5,
    caption: "Dark Bella Profile",
    image: darkBellaProfile,
    medium: "sculpture",
  },

  {
    id: 6,
    caption: "Dark Bella Behind",
    image: darkBellaBehindImg,
    medium: "sculpture",
  },
  {
    id: 7,
    caption: "Dark Bella Profile Detail",
    image: darkBellaProfileDetail,
    medium: "sculpture",
  },
];
