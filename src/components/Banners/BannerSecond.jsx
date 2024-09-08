import React from "react";
import BannerImg from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import SuperButton from "../SuperButton/SuperButton";

const BannerSecond = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[600px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="uppercase text-3xl  lg:text-4xl font-bold "
            >
              Brand Information
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
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
            <motion.h1
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="uppercase text-3xl text-secondary md:text-primary  font-bold "
            >
              Nurturing future
            </motion.h1>
            <motion.p
              variants={FadeUp(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              As growing acceptance of the health advantages of organic fruits
              has risen, so has demand for organic fresh fruits on the market.
              The increase in popularity of a vegetarian diet has greatly
              assisted business growth. Thus, every day, new trends are launched
              by our brand fresh fruits .
            </motion.p>
            <motion.div
              variants={FadeUp(1.5)}
              animate="visible"
              initial="hidden"
              className="flex justify-center md:justify-start"
            >
              <SuperButton text={"Learn More"} />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "string", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt="fruits_banner"
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
