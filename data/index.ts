/* eslint-disable prettier/prettier */
import { IconMail, IconTemplate, IconNews, IconBrandInstagram, IconCalendarEvent, IconUserCheck, IconReportAnalytics, IconBrandFacebook, IconBrandX, IconBrandYoutube, IconBrandLinkedin } from "@tabler/icons-react";

import { FACEBOOK_URL, INSTGRAM_URL, LINKEDIN_URL, X_URL, YOUTUBE_URL } from "./constant";

import { DalleAI, NovelAI, OpenAI, StabilityAI } from "@/components/icons";
import { IIcons, IPackages, IQuestion, ISocialIcon, ITasks, IThemeCard } from "@/interfaces";
import { InspiringRectangle22,InspiringRectangle23 } from "@/public";

export const tasks:ITasks[] = [
  { id: crypto.randomUUID(), title: "Task 1", icon: InspiringRectangle22 },
  { id: crypto.randomUUID(), title: "Task 1", icon: InspiringRectangle22 },
  { id: crypto.randomUUID(), title: "Task 1", icon: InspiringRectangle23 },
]
export const AiImages = [
  { id: crypto.randomUUID(), Icon: StabilityAI },
  { id: crypto.randomUUID(), Icon: NovelAI },
  { id: crypto.randomUUID(), Icon: DalleAI },
  { id: crypto.randomUUID(), Icon: OpenAI },
]

export const Themes: IThemeCard[] = [
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      numberOfFavourites: 2.3,
      isPremium: true,
      isAvailable:true,
      isFavourite:true,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details Website Details Website DetailsWebsite DetailsWebsite Details Website Details Website DetailsWebsite DetailsWebsite Details Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: false,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:false,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: true,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:true,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: false,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:false,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: true,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:true,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: false,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:false,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: true,
      isAvailable:true,
      numberOfFavourites: 2.3,
      isFavourite:true,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
    {
      id: crypto.randomUUID(),
      title: "Mobile Product",
      img: "https://nextui-docs-v2.vercel.app/images/fruit-5.jpeg",
      isPremium: false,
      isAvailable:false,
      numberOfFavourites: 2.3,
      isFavourite:false,
      description:
        "Website Details Website DetailsWebsite DetailsWebsite Details",
    },
];

export const ServicesData:IIcons[] = [
  {id:crypto.randomUUID(), alt:"Follow Up Email", Icon:IconMail},
  {id:crypto.randomUUID(), alt:"Social Media Post", Icon:IconBrandInstagram},
  {id:crypto.randomUUID(), alt:"Event Planner", Icon:IconCalendarEvent},
  {id:crypto.randomUUID(), alt:"Resume Builder", Icon:IconUserCheck},
  {id:crypto.randomUUID(), alt:"Adamic Essay", Icon:IconReportAnalytics},
  {id:crypto.randomUUID(), alt:"Newsletter Generator", Icon:IconNews},
  {id:crypto.randomUUID(), alt:"Custom Theme Generator", Icon:IconTemplate},
]
export const PackagesData:IPackages[] = [
  {id:crypto.randomUUID(), type:"Free",price:'0', GPTPlus:0, Support:0, WordTokens:"10000",ImageTokens:"5000"},
  {id:crypto.randomUUID(), type:"Basic Monthly",price:'50',GPTPlus:1, Support:0,WordTokens:"500000",ImageTokens:"10000"},
  {id:crypto.randomUUID(), type:"Standard Monthly",price:'120',GPTPlus:1, Support:0, WordTokens:"Unlimited",ImageTokens:"Unlimited"},
  {id:crypto.randomUUID(), type:"Standard Monthly",price:'120',GPTPlus:1, Support:0, WordTokens:"Unlimited",ImageTokens:"Unlimited"},
]

export const FAQData:IQuestion[] = [
  {id:crypto.randomUUID(), title:"How does Ocean Script AI personalize website themes?"},
  {id:crypto.randomUUID(), title:"Can I switch templates after my website is built?"},
  {id:crypto.randomUUID(), title:"What kind of support is available if I encounter technical issues?"},
  {id:crypto.randomUUID(), title:"Is it possible to use Ocean Script AI for e-commerce websites?"},
  {id:crypto.randomUUID(), title:"Can I use Ocean Script AI to create multilingual websites?"},
]
export const FooterIcons:ISocialIcon[] = [
  {id:crypto.randomUUID(), Icon: IconBrandFacebook, link:FACEBOOK_URL},
  {id:crypto.randomUUID(), Icon: IconBrandInstagram, link:INSTGRAM_URL},
  {id:crypto.randomUUID(), Icon: IconBrandX, link:X_URL},
  {id:crypto.randomUUID(), Icon: IconBrandYoutube, link:YOUTUBE_URL},
  {id:crypto.randomUUID(), Icon: IconBrandLinkedin, link:LINKEDIN_URL},
]