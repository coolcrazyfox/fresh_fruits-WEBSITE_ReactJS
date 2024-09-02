import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "./../../utility/animation";
import { BiDollar } from "react-icons/bi";
import img1 from "../../assets/fruits/banana.png";
import img2 from "../../assets/fruits/cherries.png";
import img3 from "../../assets/fruits/orange.png";
import img4 from "../../assets/fruits/apple.png";
const MenuData = [
  {
    id: 1,
    name: "Fresh Bananas",
    link: "/bananas",
    price: 1.99,
    img: img1,
    delay: 0.3,
  },
  {
    id: 2,
    name: "Fresh Cherries",
    link: "/cherries",
    price: 3.99,
    img: img2,
    delay: 0.6,
  },
  {
    id: 3,
    name: "Fresh Oranges",
    link: "/oranges",
    price: 2.99,
    img: img3,
    delay: 0.9,
  },
  {
    id: 4,
    name: "Fresh Apples",
    link: "/apples",
    price: 1.99,
    img: img4,
    delay: 1.2,
  },
];
const SecondMenus = () => {
  return <div></div>;
};

export default SecondMenus;
