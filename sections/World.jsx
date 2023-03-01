"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, NewFeatures, TitleText } from "../components";

const World = () => {
  const randomNumber = Math.floor(Math.random() * 300);
  return (
    <section className={`${styles.paddings} z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText textStyles="text-center" title="| People on the World" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together on the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550[x]] "
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-contain"
          />
          <div>
            <div className="absolute bottom-20 right-20 w-[70px] h-[60px] p-[6px] rounded-full bg-[#5d6680] z-10 ">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="polygon w-[44px] h-[44px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[78.5%] right-[7.6%] z-0  "></div>
          </div>

          <div>
            <div className="absolute bottom-20 top-10 left-20 w-[70px] h-[60px] p-[6px] rounded-full bg-[#5d6680] z-10 ">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="polygon w-[44px] h-[44px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[11%] left-[7.6%] z-0  "></div>
          </div>

          <div>
            <div className="absolute bottom-20 top-1/2 left-[45%] w-[70px] h-[60px] p-[6px] rounded-full bg-[#5d6680] z-10 ">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
            <div className="polygon w-[44px] h-[44px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[53.7%] right-[50.4%] z-0  "></div>
          </div>

          <div className="absolute w-[196px] h-[150px] left-[65%] top-[10%]  img-bg  rounded-[32px] px-[12px] py-[10px] ">
            <img src="/img.png" alt="" className="rounded-[32px] object-cover " />
            <div className="flex absolute top-[40%] w-full">
              <div className="imgs flex flex-row mx-2 ">
                <img
                  src="/people-01.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-2 "
                />
                <img
                  src="/people-02.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-1 "
                />
                <img
                  src="/people-03.png"
                  alt="people"
                  className="w-[24%px] h-[24px] z-0"
                />
              </div>
              <div className="text">
                <p className="text-white text-[10px] mb-0 ">+ 257 has joined</p>
              </div>
            </div>
            <h1 className="absolute text-white font-semibold top-[6rem] right-[3.9rem]">
              Hawkins Labs
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
