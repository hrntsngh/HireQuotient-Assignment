import React, { useState } from "react";
import logo from "./logo.png";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "just", duration: "0.2" }}
      className="NavBar NavBarr"
    >
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
          <p>Milton</p>
        </a>
      </div>

      <motion.div className={show ? "navigatorss navigators" : "navigators"}>
        <p>
          <motion.a
            whileHover={{
              textDecoration: "underline",
              color: "rgb(46, 46, 46)",
            }}
            transition={{ delay: 0 }}
            href=""
          >
            Features
          </motion.a>
        </p>
        <p>
          <motion.a
            whileHover={{
              textDecoration: "underline",
              color: "rgb(46, 46, 46)",
            }}
            transition={{ delay: 0 }}
            href=""
          >
            Testimonial
          </motion.a>
        </p>
        <p>
          <motion.a
            whileHover={{
              textDecoration: "underline",
              color: "rgb(46, 46, 46)",
            }}
            transition={{ delay: 0 }}
            href=""
          >
            Pricing
          </motion.a>
        </p>
        <p>
          <motion.a
            whileHover={{
              textDecoration: "underline",
              color: "rgb(46, 46, 46)",
            }}
            transition={{ delay: 0 }}
            href=""
          >
            FAQs
          </motion.a>
        </p>
        <p>
          <motion.a
            whileHover={{
              textDecoration: "underline",
              color: "rgb(46, 46, 46)",
            }}
            transition={{ delay: 0 }}
            href=""
          >
            Blog
          </motion.a>
        </p>
      </motion.div>
      <div className={show ? "buttonss buttons" : "buttons "}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "linear" }}
          className="log-in-button"
        >
          <a href="">Log in</a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "linear" }}
          className="get-started-button"
        >
          <a href="">Get started</a>
        </motion.div>
      </div>
      <div className="menuButton">
        <MenuButton show={show} setShow={setShow} />
      </div>
    </motion.div>
  );
};

export default NavBar;
