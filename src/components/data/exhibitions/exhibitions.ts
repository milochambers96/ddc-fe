import conflunceCover from "../../../assets/exhibition-page/congregation-cover.jpg";
import deepWoodCover from "../../../assets/exhibition-page/deepwood-cover.jpeg";
import rocksCover from "../../../assets/exhibition-page/rocks-remember-cover.jpg";
import treeCover from "../../../assets/exhibition-page/treewilder-cover.jpg";

import {
  confluencesBio,
  deepWoodBio,
  rocksRememberBio,
  treeWilderBio,
} from "./exhibitionBios";

export interface Exhibition {
  id: number;
  title: string;
  year: number;
  gallery: string;
  location: string;
  bio: string;
  image: string;
}

export const exhibitionsData: Exhibition[] = [
  {
    id: 1,
    title: "Confluence of Congregations",
    gallery: "Argentine Ambassador’s Residence",
    location: "London",
    year: 2021,
    image: conflunceCover,
    bio: confluencesBio,
  },

  {
    id: 2,
    title: "Deep Wood Women and Women Who Have Incidents with Animals",
    gallery: "Standpoint Gallery",
    location: "London",
    year: 2019,
    image: deepWoodCover,
    bio: deepWoodBio,
  },

  {
    id: 3,
    title: "Rocks Remember and Other Stories",
    gallery: "Standpoint Gallery",
    location: "London",
    year: 2024,
    image: rocksCover,
    bio: rocksRememberBio,
  },

  {
    id: 4,
    title: "TreeWilder",
    gallery: "Barnwell Country Park",
    location: "Northamptonshire",
    year: 2022,
    image: treeCover,
    bio: treeWilderBio,
  },
];
