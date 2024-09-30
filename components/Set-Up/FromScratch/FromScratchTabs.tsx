"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import "../SetUpStyles.css";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import TabWithIcon from "../TabWithIcon";

// import SelectSitePage from "./SelectSite/SelectSitePage";
// import ContentInstallationSection from "./ContentInstallationSection";

import {
  contentTitle,
  selectsiteTitle,
  NameWebsiteTitle,
} from "@/data/constant";
import TitleTab from "./TitleTab";

const FromScratchTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("title");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleTabChange = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (name === "setup+type") router.push("/setup");
    else params.set(name, value);

    window.history.pushState(null, "", `?${params.toString()}`);
    setActiveTab(value);
  };

  useEffect(() => {
    window.history.pushState(null, "", `?tab=title`);
  }, []);
  const tab = searchParams.get("tab")?.toString();
  const themeId = searchParams.get("themeId")?.toString();
  // console.log(themeId);
  const title =
    tab === "selectsite"
      ? selectsiteTitle
      : tab === "content"
        ? contentTitle
        : NameWebsiteTitle;
  const special = <span className="text-gradient-inspiring">{title[1]}</span>;

  return (
    <div className="flex mx-1 md:mx-8 lg:mx-20 flex-col gap-3 md:gap-5">
      <div className="text-center">
        <h2 className="text-black-200 w-full md:w-[60%] lg:w-[65%] mx-auto text-lg md:text-2xl lg:text-4xl xl:text-6xl font-[500]">
          {title[0]}
          {special}
          {title[2] ?? ""}
        </h2>
      </div>
      <div className="text-start flex justify-start items-start">
        <div className="flex w-full flex-col">
          <div>
            <Tabs
              classNames={{
                tab: "p-0 mx-0 md:mx-2",
                cursor: "h-0 transparentItemSelected-tab",
                tabContent:
                  "group-data-[selected=true]:text-black-200 opaciy-80 font-[500] text-sm md:text-base lg:text-md",
              }}
              variant="underlined"
            >
              <Tab
                key="setup type"
                href="/setup"
                title={<TabWithIcon title="Setup Type" />}
                value={"setup type"}
              />
            </Tabs>
            <Tabs
              classNames={{
                tab: "p-0 mx-0 md:mx-1",
                cursor: "h-0 transparentItemSelected-tab",
                tabContent:
                  "group-data-[selected=true]:text-fuchsia-600 text-black-200 font-[500] text-sm md:text-base lg:text-md",
              }}
              defaultSelectedKey={
                searchParams.get("tab")?.toString() || "title"
              }
              selectedKey={activeTab}
              variant="underlined"
              onSelectionChange={(key: React.Key) =>
                handleTabChange("tab", key as string)
              }
            >
              <Tab
                key="title"
                title={<TabWithIcon title="Title" />}
                value={"title"}
              >
                <TitleTab />
              </Tab>
              <Tab
                key="Homepage"
                title={<TabWithIcon title="Home Page" />}
                value={"Homepage"}
              >
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
              <Tab
                key="pages"
                title={<TabWithIcon title="Pages" />}
                value={"pages"}
              >
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
              <Tab
                key="color"
                title={<TabWithIcon title="Color" />}
                value={"color"}
              >
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
              <Tab
                key="font"
                title={<TabWithIcon title="Font" />}
                value={"font"}
              >
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
              <Tab
                key="plugins"
                title={<TabWithIcon title="Plugins" />}
                value={"plugins"}
              >
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
              <Tab key="install" title={"Install"} value={"install"}>
                {/* <ContentInstallationSection setSelectedKey={setActiveTab} /> */}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromScratchTabs;
