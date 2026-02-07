import profilePic from "../../../assets/about-page/ddc-profile-pic.jpg";

export const artistStatement: string =
  "As a sculptor, I’m in a constant battle with gravity - how to make things stand up in the world. Birds feel like the most anti-gravity beings I know. I watch them closely, and for them to enter my lexicon of possibilities they have to exist both in lived reality and in the texts I return to again and again: illustrated field guides, Ladybird books of nature, the Brontë sisters, and Thomas Bewick’s end pieces - those small, independent, mysterious scenes that sit quietly at the end of a chapter.";

export const bio: string =
  "Denise de Cordova is a sculptor and ceramicist living and working in London. She is a tutor at the Royal College of Art in London in the Sculpture department, where she has worked for 20+ years.";

export interface GroupExhibit {
  id: number;
  year: number;
  title: string;
  gallery: string;
  location: string;
}

export const groupExhibitions: GroupExhibit[] = [
  {
    id: 1,
    year: 2024,
    title: "Parked 11",
    gallery: "St John's Garden and the Cloister Garden",
    location: "London",
  },
  {
    id: 2,
    year: 2024,
    title: "Vanishings",
    gallery: "Turps Gallery",
    location: "London",
  },
  {
    id: 3,
    year: 2024,
    title: "Sixth Sense",
    gallery: "Standpoint",
    location: "London",
  },
  {
    id: 4,
    year: 2023,
    title: "Wood Walkers",
    gallery: "Eagle Gallery",
    location: "London",
  },
  {
    id: 5,
    year: 2023,
    title: "Royal Academy Summer Show",
    gallery: "",
    location: "London",
  },
  {
    id: 6,
    year: 2021,
    title: "The Confluence of Congregations",
    gallery: "The Argentine Ambassadors' Residence",
    location: "London",
  },
];

export const publicSpeaking: string[] = [
  "Artists Lives with the British Library supported by the Henry Moore Foundation",
  "The Future of Sculpture, in conversation with Brian Griffith and Laura Ford, Public Talk, The Royal Society of Sculptors, London.",
  "Humour has it there's Common Ground, Lecture, Art Workers Guild, London",
  "A Love Letter (of Sorts), Standpoint, London",
  "BBC Radio 4 Woman's Hour, The Big Draw, The Natural History Museum",
];

export const awards: string[] = [
  "Royal Society of Sculptors",
  "Fellow, Royal College of Art",
  "Stanley Picker Fellow, Kingston",
  "Rome Scholarship to the British School of Rome, Italy.",
];

export const education: string[] = [
  "Royal College of Art, MA Sculpture",
  "University of Brighton, BA Sculpture",
];

export const aboutPic = profilePic;
