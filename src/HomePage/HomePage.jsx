import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

const HomePage = () => {
  return (
    <motion.div
      initial={{ y: "0%", x: "-50%", opacity: 0 }}
      animate={{ y: "-50%", x: "-50%", opacity: 1 }}
      transition={{ type: "just", delay: 0.1 }}
      className="HomePage"
    >
      <div className="highlight">
        <p>An other way to manage time️</p>
      </div>
      <div className="middle">
        <div className="center-of-attraction">
          <p>Your new favorite calendar 🗓️ app</p>
        </div>
        <div className="description">
          <p>
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.
          </p>
        </div>
        <div className="home-button">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="get-started-button"
          >
            <a href="">Get started, it's free</a>
          </motion.div>
          <p>Free 14 days trials,no credit card needed</p>
        </div>

        <div className="review">
          <iframe
            id="cldxqquwh0005xh0kgigijx32"
            src="https://embed.praisehive.com/cldxqquwh0005xh0kgigijx32"
            scrolling="no"
            frameborder="0"
            className="iframe"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
