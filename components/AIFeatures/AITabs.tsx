"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";

import styles from "./CustomTabs.module.css";

import { IAITabs } from "@/interfaces";

export default function AITabs({ tabs }: IAITabs) {
  return (
    <div className="flex gap-3 md:gap-0 lg:gap-3 flex-col">
      <Tabs
        fullWidth
        className="shadow-lg rounded-full"
        classNames={{
          tabList: styles.tabList,
          tab: styles.tabItem,
          cursor: styles.tabItemSelected,
        }}
      >
        {tabs.map((item) => (
          <Tab
            key={item.id}
            className="lg:m-[4px] font-[400] md:py-6 lg:py-8 text-base leading-[19.2px] text-black-200"
            title={item.label}
          >
            <Card className="shadow-lg">
              <CardBody className="p-0">{item.content}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
