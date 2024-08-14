import React from "react";
import SuperButton from "../SuperButton/SuperButton";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
              Healthy <br />
              Fresh<span className="text-secondary"> Fruits!</span>
            </h1>
            <p className="text-2xl tracking-wide">
              Order <span className="text-secondary"> Now</span> For Fresh
              Healthy Life
            </p>
            <p className="text-gray-500">
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind order{" "}
              <span className="text-primary">NOW</span> and
              <span className="text-primary"> GET 30% </span>off on your first
              <span className="text-secondary ml-1">ORDER</span>
            </p>
            <div className="flex justify-center md:justify-start">
              <SuperButton text={"Order Now"} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
