/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import React from "react";

import { tasks } from "@/data";
export default function Tasks() {
  return <>
    {tasks.map((task, id) => (
        <React.Fragment key={task.id}>
          <div className="flex items-center gap-3 p-2">
            <Image alt="task" src={task.icon as string} />
            <p
              className={`text-md font-[400] ${tasks.length !== id + 1 && "task"}`}
              style={{ color: tasks.length !== id + 1 ? "#BDBDBD" : "#292B2E" }}
            >
              {task.title}
            </p>
          </div>
          {tasks.length !== id + 1 && (
            <Divider className="w-[85%] bg-gray-250 mx-8" />
          )}
        </React.Fragment>
      )
    )}
  </>
}
