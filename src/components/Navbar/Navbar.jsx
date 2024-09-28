import React from "react";
import { PATH } from "../../routes/RouterRoot";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export const initMenuNavBar = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Shop", link: "/shop" },
  { id: 4, name: "Contacts", link: "/contacts" },
  { id: 5, name: "About", link: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-secondary">Fruit</p>
            <p className="text-primary">Store</p>
            <FaLeaf className="text-green-400 " />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-700">
              {initMenuNavBar.map((item, index) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <button className="text-2xl hover:bg-primary rounded-full hover:text-white p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
