/* eslint-disable prettier/prettier */
"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

import { IItemLayout } from "@/interfaces";
const ItemLayout = ({ children, className }: IItemLayout) => {
  return (
      <motion.div
      className={clsx(
        `shadow-2xl rounded-2xl border-[1px] border-black-500
        hover:shadow-slate-400
      `,
        className,
      )}
      initial={{ scale: 0.85 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: "some" }}
      whileInView={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
