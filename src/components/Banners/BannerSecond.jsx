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
              className="uppercase text-3xl  lg:text-4xl font-bold text-primary"
            >
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Fresh Fruits are the best way to nourish your body with essential
              nutrients while delighting in their vibrant flavours. Discover the
              finest selection of fresh fruits online at
              <span className="text-secondary font-bold mx-1 uppercase">
                fruit store
              </span>
              . We aim to bring you the finest fruits handpicked for their
              quality, flavour, and taste. Check out these fresh fruit stores
              today to bring you closer to a healthier you!
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              The rule of thumb with vegetables and fruits online shopping is
              that the more colourful they are on your platter, the more health
              benefits you gain. Whether you indulge in the citrusy juiciness of
              kaffir lime or buy a chayote for its mild-tasting squash flavour,
              our wide selection of fresh fruits online is of the best quality
              and packed with freshness.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              animate="visible"
              initial="hidden"
              className="flex justify-center md:justify-start"
            >
              <SuperButton text={"Download"} />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt="fruits_banner"
            className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
