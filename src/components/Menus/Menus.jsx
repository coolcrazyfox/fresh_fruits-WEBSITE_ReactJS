import React from "react";
import { BiDollar } from "react-icons/bi";
import img1 from "../../assets/fruits/avocado.png";
import img2 from "../../assets/fruits/cherry.png";
import img3 from "../../assets/fruits/orange.png";
import img4 from "../../assets/fruits/apple.png";

const MenuData = [
  { id: 1, name: "Fresh Avocado", link: "/avocado", price: 5.99, img: img1 },
  { id: 2, name: "Fresh Cherries", link: "/cherries", price: 4.99, img: img2 },
  { id: 3, name: "Fresh Oranges", link: "/oranges", price: 2.99, img: img3 },
  { id: 4, name: "Fresh Apples", link: "/apples", price: 1.99, img: img4 },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <h1 className="font-bold text-2xl text-left pb-10 cursor-pointer">
          Our Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuData.map((m, index) => {
            return (
              <div
                key={m.id}
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
                      <BiDollar className="text-xl font-bold text-black" />{" "}
                      {m.price}
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menus;
