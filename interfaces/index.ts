/* eslint-disable prettier/prettier */
import { ButtonProps } from "@nextui-org/button";
import { Icon, IconProps } from "@tabler/icons-react";
import { LinkProps } from "next/link";
import { AllHTMLAttributes, FC, ForwardRefExoticComponent, RefAttributes } from "react";

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

export interface IChildren {
  children: React.ReactNode;
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
  answer:string;
}
// footer
export interface ISocialIcon{
  id:string;
  Icon:ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  link:string;
}
// Get Started Button landingpage
export interface IButton extends ButtonProps {
  children: React.ReactNode;
  classes: string;
  IconClasses?: string;
}
// ui
export interface IParagraph extends AllHTMLAttributes<HTMLParagraphElement> {
  title: string;
  classes: string;
}
export interface ILink extends LinkProps {
  title: string;
  // classes: string;
}
export interface IModal{
  children: React.ReactNode;
  isOpen:boolean;
  classNames:{};
  backdrop: "transparent" | "opaque" | "blur" | undefined;
  onOpen:() => void;
  onOpenChange: () => void;
  classes:string;
  placement:"center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center" | undefined;
}
// array of images
export interface ISvgImage{
  img: React.FC<React.SVGAttributes<{}>>
}
// export interface ISvgImages{
//   imgs: ISvgImage[]
// }
// setup type card
export interface ISetUpCard{
  Imgs:{
    img1: FC<React.SVGAttributes<{}>>
    | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    img2:FC<React.SVGAttributes<{}>>
    | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    img3:FC<React.SVGAttributes<{}>>
    | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  };
  title:string;
  description:string;
  marginBottom:number;
  left:number;
  zIndex?:number;
  href:string;
}
// set up
export interface IBreadCrumb{
  id:string;
  title:string;
  param:string;
  content:React.ReactNode
}
// installation program
export interface IProgramInstallation{
  app_name: string;
  app_url: string;
  environment: "production" | "development";
  app_debug: boolean;
  app_log_level: string;
  database_connection: string;
  database_hostname: string;
  database_port: string;
  database_name: string;
  database_username: string;
  database_password: string;
}
