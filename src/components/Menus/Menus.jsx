import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "./../../utility/animation";

import SuperButton from "./../SuperButton/SuperButton";
import FirstMenus from "./FirstMenus";

const Menus = () => {
  const [isOnClick, setIsOnClick] = React.useState(false);
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-bold text-2xl text-left pb-10 cursor-pointer"
        >
          Our Menu
        </motion.h1>
        <FirstMenus />

        <motion.div
          onClick={() => setIsOnClick(!isOnClick)}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex  justify-start  my-4 "
        >
          <SuperButton text={"More"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Menus;
