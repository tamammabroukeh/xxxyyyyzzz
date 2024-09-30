import TabWithIcon from "./TabWithIcon";
import {
  LeftImgOne,
  LeftImgThree,
  LeftImgTwo,
  RightImgOne,
  RightImgThree,
  RightImgTwo,
} from "./setup-icons";

import { ISetUpCard } from "@/interfaces";

// The values associated with child checkboxes
export const childCheckboxes = [
  "Pages",
  "Testimonials",
  "Headers",
  "Grid Layouts",
  "Reusable Blocks",
];
// The value associated with the father checkbox
export const fatherCheckboxValue = "All content";
// The value associated with the single checkbox
export const singleCheckboxValue = "Theme options";

// set up page constants
export const imgsPreBuilt = {
  img1: LeftImgOne,
  img2: LeftImgTwo,
  img3: LeftImgThree,
};

export const imgsFormScratch = {
  img1: RightImgOne,
  img2: RightImgTwo,
  img3: RightImgThree,
};

export const Cards: ISetUpCard[] = [
  {
    Imgs: imgsPreBuilt,
    description: "Start With a ready made website base.",
    title: "Pre built website",
    href: "/setup/selectsite",
    left: 30,
    marginBottom: 10,
  },
  {
    Imgs: imgsFormScratch,
    description: "Choose Header, Footer, Colors and Typography.",
    title: "Site Form Scratch",
    href: "/setup/from-scratch",
    left: 18,
    marginBottom: 2,
    zIndex: 10,
  },
];

// prebuilt tabs
// export const preBuiltTabsArr = [
//    {
//     id:crypto.randomUUID(),
//     key:"selectsite",
//     title:TabWithIcon,
//     value:"selectsite",
//    },
//    {
//     id:crypto.randomUUID(),
//     key:"selectsite",
//     title:<TabWithIcon title="Select Site" />,
//     value:"selectsite",
//    },
// ]