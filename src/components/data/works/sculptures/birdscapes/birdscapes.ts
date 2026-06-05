import birkenheadImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/1. Thinking Birkenhead.jpg";
import withoutGrouseImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/2. With or Without Grouse.jpg";
import quietHuntingImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/3. Quiet Hunting.jpg";
import quietHuntingCloseImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/4. Quiet Hunting - Close Up.jpg";
import gogottesImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/5. Brontës and the Gogottes.jpg";
import gogottesLapwingImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/6. Brontes and the Gogottes - Lapwing.jpg";
import hesheImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/7. Heshe Heshe.jpg";
import middleForkImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/8. MiddleFork.jpg";
import thurshImg from "../../../../../assets/work-page/sculptures/birdscape-imgs/9. Thrush.jpg";

interface Birdscape {
  id: number;
  caption: string;
  image: string;
  medium: string;
}

export const birdscapeData: Birdscape[] = [
  {
    id: 1,
    caption: "Thinking Birkenhead",
    image: birkenheadImg,
    medium: "sculpture",
  },
  {
    id: 2,
    caption: "With of Without Grouse",
    image: withoutGrouseImg,
    medium: "sculpture",
  },
  {
    id: 3,
    caption: "Quiet Hunting",
    image: quietHuntingImg,
    medium: "sculpture",
  },
  {
    id: 4,
    caption: "Quiet Hunting - Close Up",
    image: quietHuntingCloseImg,
    medium: "sculpture",
  },
  {
    id: 5,
    caption: "Brontes and the Gogottes",
    image: gogottesImg,
    medium: "sculpture",
  },

  {
    id: 6,
    caption: "Brontes and the Gogottes - Lapwing",
    image: gogottesLapwingImg,
    medium: "sculpture",
  },
  { id: 7, caption: "Heshe Heshe", image: hesheImg, medium: "sculpture" },
  {
    id: 8,
    caption: "MiddleFork & Boots",
    image: middleForkImg,
    medium: "sculpture",
  },
  { id: 9, caption: "Thrush", image: thurshImg, medium: "sculpture" },
];
