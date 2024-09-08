import React from "react";
import BannerImg from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "./../../utility/animation";
import SuperButton from "./../SuperButton/SuperButton";

const imgBgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const BannerThird = () => {
  return (
    <section className="container mb-12">
      <div
        style={imgBgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        <div></div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[600px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="uppercase text-3xl text-secondary md:text-primary lg:text-6xl font-bold "
            >
              Get fresh fruits today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We're all aiming for a once-in-a-lifetime proper lunch at our
              homes. Everything a person does and earns is for the sole purpose
              of feeding themselves and their families. As a result, everyone
              wants to eat a balanced diet in order to stay healthy and fit. As
              a result, it is essential to consume fresh fruits and vegetables
              in order to maintain a healthy lifestyle. There are several fresh
              fruits and vegetables brands that now provide organic and fresh
              products. Everywhere to look, the food that is available is
              becoming increasingly far away from nature. Processed foods are
              coming with preservatives and chemicals abound on supermarket
              shelves. It is becoming increasingly difficult to get fruits and
              vegetables that are free of preservatives and dangerous chemicals,
              but due our brand to fresh fruits that provide us with consumables
              straight from nature, this is changing.
            </motion.p>

            <motion.div
              variants={FadeLeft(0.9)}
              animate="visible"
              initial="hidden"
              className="flex justify-center md:justify-start"
            >
              <SuperButton text={"Order Now"} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThird;
