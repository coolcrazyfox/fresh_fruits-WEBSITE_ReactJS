import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "./../../utility/animation";
import { BiDollar } from "react-icons/bi";
import img1 from "../../assets/fruits/pineapples.png";
import img2 from "../../assets/fruits/strawberry.png";
import img3 from "../../assets/fruits/grape.png";
import img4 from "../../assets/fruits/watermelon.png";
const MenuData = [
  {
    id: 1,
    name: "Fresh Pineapples",
    link: "/pineapples",
    price: 2.99,
    img: img1,
    delay: 0.3,
  },
  {
    id: 2,
    name: "Fresh Strawberry",
    link: "/strawberry",
    price: 5.99,
    img: img2,
    delay: 0.6,
  },
  {
    id: 3,
    name: "Fresh Grape",
    link: "/grape",
    price: 6.99,
    img: img3,
    delay: 0.9,
  },
  {
    id: 4,
    name: "Fresh Watermelon",
    link: "/watermelon",
    price: 2.99,
    img: img4,
    delay: 1.2,
  },
];
const SecondMenus = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className=" my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((m, index) => {
            return (
              <motion.div
                key={m.id}
                variants={FadeLeft(m.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white rounded-3xl flex flex-row justify-around items-center gap-3 shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-[60px] mb-4 scale-110 transform -translate-y-1 "
                />
                <div>
                  <h1 className="text-lg font-semibold">{m.name}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    <div className="flex flex-row  items-center">
                      <BiDollar className="text-xl font-bold text-black" />
                      {m.price}
                    </div>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SecondMenus;
