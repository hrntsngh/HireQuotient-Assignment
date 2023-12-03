import React from "react";
import { motion } from "framer-motion";
import "./MenuButton.css";

const MenuButton = ({ show, setShow }) => {
  return (
    <div className="MenuButton" onClick={() => setShow(!show)}>
      <motion.div
        animate={
          show
            ? {
                rotate: 45,
                translateY: 8.6,
              }
            : {
                rotate: 0,
                translateY: 0,
                translateX: 0,
              }
        }
        className="line1"
      ></motion.div>
      <motion.div
        animate={show ? { opacity: 0 } : { opacity: 1 }}
        className="line2"
      ></motion.div>
      <motion.div
        animate={
          show
            ? {
                rotate: -45,
                translateY: -7,
              }
            : {
                rotate: 0,
                translateY: 0,
                translateX: 0,
              }
        }
        className="line3"
      ></motion.div>
    </div>
  );
};

export default MenuButton;
