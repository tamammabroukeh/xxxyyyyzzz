/* eslint-disable prettier/prettier */
import { Icon, IconProps } from "@tabler/icons-react";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

export interface IErrorHandler {
  statusCode?: number;
  title?: string;
  error:Error;
}

export interface ILink {
  children: React.ReactNode;
  classes: string;
  href: string;
}
export interface IHeading {
  children: React.ReactNode;
  classes: string;
}
export interface ITasks {
  id: string;
  title: string;
  icon: React.SVGProps<SVGSVGElement> | null;
}
export interface IItemLayout {
  children: React.ReactNode;
  className?: string;
}
export interface IThemeCard {
  id: string;
  title: string;
  img: string;
  isPremium: boolean;
  isAvailable: boolean;
  isFavourite: boolean;
  numberOfFavourites: number;
  description: string;
}
export interface IThemeCards {
  themesCard: IThemeCard;
}

export interface ISubSectionLayout {
  children?: React.ReactNode;
  title?: string;
  header?: string;
  description?: string;
  subHeader?: string;
  exception?:boolean;
}
export interface IIcons {
  id: string;
  alt: string;
  bgColor?: string;
  Icon:
    | FC<React.SVGAttributes<{}>>
    | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}
/* tabs */
export interface IAIContentTabs {
  title:string;
  description:string
}
export interface IAITab {
  id:string;
  label:string;
  content:React.ReactNode;
}
export interface IAITabs {
  tabs:IAITab[];
}
// packages
export interface IPackages {
    id: string;
    type: string;
    price: string;
    GPTPlus: number;
    Support: number;
    WordTokens: string;
    ImageTokens: string;
}
// FAQ
export interface IQuestion {
  id:string;
  title:string;
}
// footer
export interface ISocialIcon{
  id:string;
  Icon:ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  link:string;
}