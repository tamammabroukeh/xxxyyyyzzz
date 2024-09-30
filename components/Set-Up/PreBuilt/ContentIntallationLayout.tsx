"use client";
import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Image } from "@nextui-org/image";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

import { colors } from "@/components/ui/SpanCircle";
const ContentInstallationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const imageRef = React.useRef<HTMLImageElement | null>(null);

  const scrollImage = React.useCallback(
    (
      imageRef: React.MutableRefObject<HTMLImageElement | null>,
      block: ScrollLogicalPosition,
    ) => {
      if (imageRef.current)
        imageRef.current.scrollIntoView({ behavior: "smooth", block });
    },
    [],
  );

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-5 md:gap-12 lg:gap-20">
      <div className="flex w-full h-auto md:w-auto flex-col">
        <div className="flex p-1 bg-white-100">
          <div className="flex gap-1">{colors}</div>
          <span className="text-center flex-1 text-blue-500 text-base font-[400]">
            Website Preview
          </span>
        </div>
        <div className="relative flex overflow-x-hidden">
          <ScrollShadow
            hideScrollBar
            className="w-full md:w-[400px] lg:w-[550px] xl:w-[634px] h-[300px] md:h-[400px]"
            size={10}
          >
            <Image
              ref={imageRef}
              className={`w-full h-auto rounded-2xl object-cover`}
              shadow="sm"
              src={"https://nextui-docs-v2.vercel.app/images/album-cover.png"}
              width="100%"
            />
          </ScrollShadow>
          <div className="absolute z-10 flex flex-col h-full justify-between py-5 right-5">
            <button
              className="p-2 md:p-3 rounded-full bg-white-100"
              type="button"
              onClick={() => scrollImage(imageRef, "start")}
            >
              <IconChevronUp className="text-blue-200  w-7 h-7" />
            </button>
            <button
              className="p-2 md:p-3 rounded-full bg-white-100"
              type="button"
              onClick={() => scrollImage(imageRef, "end")}
            >
              <IconChevronDown className="text-blue-200 w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentInstallationLayout;
