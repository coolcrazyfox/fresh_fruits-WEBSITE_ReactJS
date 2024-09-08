import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banners/Banner";
import BannerSecond from "./components/Banners/BannerSecond";
import Banner3 from "./components/Banners/Banner3";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden ">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <BannerSecond />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
