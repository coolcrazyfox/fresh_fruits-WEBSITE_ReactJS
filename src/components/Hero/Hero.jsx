import SuperButton from "../SuperButton/SuperButton";
import HeroImage from "../../assets/fruit-plate.png";
import LeafImage from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "./../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Healthy <br />
              Fresh<span className="text-secondary"> Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order <span className="text-secondary"> Now</span> For Fresh
              Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-500"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind order
              <span className="text-primary">NOW</span> and
              <span className="text-primary"> GET 30% </span>off on your first
              <span className="text-secondary ml-1">ORDER</span>
            </motion.p>
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <SuperButton text={"Order Now"} />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={HeroImage}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
        <div className="absolute top-14 nd:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <img className="w-full md:max-w-[300px] " alt="" src={LeafImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
