import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Error404 from "../components/Error404/Error404";
import Footer from "../components/Footer/Footer";
import Menus from "../components/Menus/Menus";
import Banner from "../components/Banners/Banner";
import BannerThird from "../components/Banners/BannerThird";

export const PATH = {
  HERO: "/",
  ORDER: "/products",
  SHOP: "/shop",
  BANNERS: "/about",
  CONTACT: "/contact",
  ERROR404: "*",
};
const RouterRoot = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.ORDER} element={<Menus />} />
        <Route path={PATH.SHOP} element={<BannerThird />} />
        <Route path={PATH.BANNERS} element={<Banner />} />
        <Route path={PATH.CONTACT} element={<Footer />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </>
  );
};

export default RouterRoot;
