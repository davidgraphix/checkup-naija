import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import { Footer } from "@/components/Footer/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
};

export default page;
