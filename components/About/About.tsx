import React from "react";
import { Globe, Eye, Heart, Lightbulb, Hand as Hands, CheckCircle } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";


const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-600 via-gray-400/20 via-[65%] to-blue-500
                bg-[length:250%_250%] animate-[diagonal-flow_10s_linear_infinite]"
    >
      <Navbar />
       {/* Hero Section with Who We Are */}
    

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
