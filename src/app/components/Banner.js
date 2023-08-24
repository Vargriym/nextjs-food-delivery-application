"use client";
// next image
import Image from "next/image";


// parallax
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
const Banner = () => {
  return (
    <section className="bg-amber-800 bg-pattern lg:min-h-[768px] pt-16 1g:pt-16">
      <div
        className="container mx-auto min-h-[768px] flex items-center
        justify-center"
      >
        <MouseParallaxContainer
          globalFactor
          X={0.4}
          globalFactory={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row justify-between
          items-center"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div
              className="flex flex-col 1g:flex-row items-center text-center
            1g:text-left flex-1 рх-6 text-white"
            >
              <div className="flex-1">
                <div className="font-bangerz md:text-[32px] sm:text-[22px] text-white uppercase track1ng-[0.03em]">
                Creamy Perfection
                </div>
                <h1 className="text-6x1 1g:text-8x1 font-bangerz md:text-[62px] sm:text-[32px] drop-shadow-md">
                Experience the Heavenly <br /> Delight of Creamy Rice Pudding
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="flex flex-col lg:flex-row items-center lg:text-left flex-1 px-6">
              <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                <Image
                  src={"/pizza-banner.png"}
                  width={550}
                  height={558}
                  alt=""
                  priority={1}
                />
              </div>
            </div>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden xl:flex"
            >
              <Image
                src={"/chilli-1.webp"}
                width={100}
                height={80}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-16 -left-4 hidden xl:flex"
            >
              <Image
                src={"/chilli-2.webp"}
                width={100}
                height={84}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className="absolute top-80 -left-24 hidden xl:flex"
            >
              <Image
                src={"/garlic-1.webp"}
                width={150}
                height={100}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="absolute top-[22rem] -left-8 hidden xl:flex"
            >

            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className="absolute top-96 -left-20 hidden xl:flex"
            >
              
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className="absolute top-96 left-12 hidden xl:flex"
            >
              <Image
                src={"/leaves.webp"}
                width={180}
                height={72}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};
export default Banner;
