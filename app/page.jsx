"use client";

import { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import Preloader from "../components/PreLoader";

const Page = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="bg-primary-black overflow-hidden">
          <Navbar />
          <Hero />
          <div className="relative">
            <About />
            <div className="gradient-03 z-0" />
            <Explore />
          </div>
          <div className="relative">
            <GetStarted />
            <div className="gradient-04 z-0" />
            <WhatsNew />
          </div>
          <World />
          <div className="relative">
            <Insights />
            <div className="gradient-04 z-0" />
            <Feedback />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Page;