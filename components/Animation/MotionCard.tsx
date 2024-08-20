/* eslint-disable prettier/prettier */
"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

import { IItemLayout } from "@/interfaces";
const MotionCard = ({ children, className }: IItemLayout) => {
  return (
      <motion.div
      className={clsx(
        `animate ease-in-out delay-150 duration-300`,
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

export default MotionCard;
