import conflunceCover from "../../../assets/exhibition-page/confluence-cover.jpg";
import deepWoodCover from "../../../assets/exhibition-page/deepwood-cover.jpeg";
import rocksCover from "../../../assets/exhibition-page/rocks-remember-cover.jpg";
import treeCover from "../../../assets/exhibition-page/treewilder-cover.jpg";
import congregationCover from "../../../assets/exhibition-page/congregation-cover.jpg";

import {
  confluenceImages,
  dwwImages,
  rocksImages,
  treesImages,
  congImages,
} from "./exhibitionPhotos";

import {
  confluencesBio,
  deepWoodBio,
  rocksRememberBio,
  treeWilderBio,
  congregationBio,
} from "./exhibitionBios";

export interface ExhibitionPhoto {
  src: string;
  width: number;
  height: number;
}

export interface Exhibition {
  id: number;
  title: string;
  year: number;
  gallery: string;
  location: string;
  bio: string;
  image: string;
  imageFocus?: string;
  exhibitionPhotos?: ExhibitionPhoto[];
  mosaicLayout?: "columns" | "rows" | "masonry";
  rowHeight?: number;
}

export const exhibitionsData: Exhibition[] = [
  {
    id: 1,
    title: "Rocks Remember and Other Stories",
    gallery: "Standpoint Gallery",
    location: "London",
    year: 2024,
    bio: rocksRememberBio,
    image: rocksCover,
    exhibitionPhotos: rocksImages,
    mosaicLayout: "rows",
    rowHeight: 600,
  },
  {
    id: 2,
    title: "Congregation",
    gallery: "The Chapel, Jesus College",
    location: "Cambridge",
    year: 2013,
    bio: congregationBio,
    image: congregationCover,
    exhibitionPhotos: congImages,
    mosaicLayout: "rows",
    rowHeight: 650,
  },

  {
    id: 3,
    title: "TreeWilder",
    gallery: "Barnwell Country Park",
    location: "Northamptonshire",
    year: 2022,
    bio: treeWilderBio,
    image: treeCover,
    imageFocus: "object-[71.5%_28.5%]",
    exhibitionPhotos: treesImages,
    mosaicLayout: "rows",
    rowHeight: 600,
  },

  {
    id: 4,
    title: "Deep Wood Women and Women Who Have Incidents with Animals",
    gallery: "Standpoint Gallery",
    location: "London",
    year: 2019,
    bio: deepWoodBio,
    image: deepWoodCover,
    exhibitionPhotos: dwwImages,
    mosaicLayout: "rows",
    rowHeight: 600,
  },
  {
    id: 5,
    title: "Confluence of Congregations",
    gallery: "Argentine Ambassador’s Residence",
    location: "London",
    year: 2021,
    bio: confluencesBio,
    image: conflunceCover,
    exhibitionPhotos: confluenceImages,
    mosaicLayout: "columns",
  },
];
