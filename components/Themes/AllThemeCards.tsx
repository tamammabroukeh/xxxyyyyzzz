/* eslint-disable prettier/prettier */
import React from "react";
import { Button } from "@nextui-org/button";
import { IconTrendingUp } from "@tabler/icons-react";

import ThemeCard from "./ThemeCard";

import { Themes } from "@/data";
export default function AllThemeCards() {

  return (
    <div className="space-y-7 md:space-y-20">
      <div className="gap-3 md:gap-5 lg:gap-7 grid grid-cols-1 lg:grid-cols-2">
        {Themes.map((theme) => (
          <ThemeCard key={theme?.id} themesCard={theme!}/>  
        ))}
      </div>
        <Button className="bg-transparent text-[25px] md:text-3xl text-blue-400" endContent={<IconTrendingUp className="w-7 h-7 md:w-11 md:h-11"/>}>See More</Button>
    </div>
  );
}
