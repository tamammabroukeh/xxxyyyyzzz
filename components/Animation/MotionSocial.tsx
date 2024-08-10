/* eslint-disable prettier/prettier */
"use client";
import { motion } from "framer-motion";

import { IItemLayout } from "@/interfaces";
const MotionSocial = ({ children, className }: IItemLayout) => {
  return (
      <motion.div
      animate={{ left: "0" }}
      className={className}
      initial={{ left: '100%' }}
      style={{ position: "relative" }}      
      transition={{ duration: 1}}
      viewport={{ once: true, amount: "all" }}
      whileInView={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSocial;
