import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaLeaf,
  FaFacebookF,
  FaTelegram,
} from "react-icons/fa";

const initIconsLogo = [
  { id: 1, name: "Instagram", logo: FaInstagram },
  { id: 2, name: "Twitter", logo: FaTwitter },
  { id: 3, name: "Facebook", logo: FaFacebookF },
  { id: 4, name: "Telegram", logo: FaTelegram },
];
const Footer = () => {
  return (
    <footer className="bg-secondary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-secondary">Fruit</p>
          <p className="text-primary">Store</p>
          <FaLeaf className="text-green-400 " />
        </div>
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          {initIconsLogo.map((l, index) => {
            return <l.logo key={l.id} />;
          })}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
