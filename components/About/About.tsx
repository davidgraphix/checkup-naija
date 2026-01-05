import React from "react";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-600 via-gray-400/20 via-[65%] to-blue-500
                bg-[length:250%_250%] animate-[diagonal-flow_10s_linear_infinite]"
    >
      <Navbar />
    <div className="pt-32">
        <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde saepe,
        vel nisi dolor eius et odit esse cumque deleniti in! Nulla possimus
        pariatur quidem suscipit at, aliquam sunt nisi ratione?
      </p>
    </div>
    </div>
  );
};

export default About;
