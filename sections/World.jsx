'use client'

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
            <div className="absolute bottom-[25%] right-[10%] sm:w-[60px] w-[45px] p-[6px] rounded-full bg-[#5d6680] z-[5] ">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full z-[3] object-contain relative"
              />
              <div className="polygon sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[24px] right-[11px] z-0 " />
            </div>
          </div>

          <div>
            <div className="absolute top-[25%] right-[49%] sm:w-[60px] w-[45px] p-[6px] rounded-full bg-[#5d6680] z-[5] ">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full z-[3] object-contain relative"
              />
              <div className="polygon sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[24px] right-[11px] z-0 " />
            </div>
          </div>

          <div>
            <div className="absolute top-[15%] left-[10%] sm:w-[60px] w-[45px] p-[6px] rounded-full bg-[#5d6680] z-[5] ">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full z-[3] object-contain relative"
              />
              <div className="polygon sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] absolute bg-[#5d6680] rounded-tl-[47px] rounded-[10px] rotate-45 top-[24px] right-[11px] z-0 " />
            </div>
          </div>

          <div className="absolute sm:w-[210px] sm:h-[160px] md:block hidden right-[17%] top-[10%] img-bg rounded-[32px] px-[12px] py-[10px] ">
            <img
              src="/img.png"
              alt=""
              className="rounded-[32px] object-cover "
            />
            <div className="map-gradient-1" />

            <div className="absolute top-[40%] w-[80%] justify-between items-center flex px-1">
              <div className="imgs mb-5">
                <img
                  src="/Ellipse 42.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-2 absolute"
                />
                <img
                  src="/Ellipse 43.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-1 absolute left-5"
                />
                <img
                  src="/Ellipse 44.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-0 absolute left-8"
                />
              </div>

              <p className="text-white text-[10px] mb-0">+ 257 has joined</p>
            </div>
            <h1 className="absolute text-white font-semibold top-[6.5rem] right-[3.9rem]">
              Hawkins Labs
            </h1>
          </div>

          <div className="absolute sm:w-[210px] sm:h-[160px] md:block hidden left-[15%] top-[30%] img-bg rounded-[32px] px-[12px] py-[10px] ">
            <img
              src="/img2.png"
              alt=""
              className="rounded-[32px] object-cover "
            />
            <div className="map-gradient-2" />

            <div className="absolute top-[40%] w-[80%] justify-between items-center flex px-1">
              <div className="imgs mb-5">
                <img
                  src="/Ellipse 42.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-2 absolute"
                />
                <img
                  src="/Ellipse 43.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-1 absolute left-5"
                />
                <img
                  src="/Ellipse 44.png"
                  alt="people"
                  className="w-[24px] h-[24px] z-0 absolute left-8"
                />
              </div>

              <p className="text-white text-[10px] mb-0">+ 3519 has joined</p>
            </div>
            <h1 className="absolute text-white font-semibold top-[6.5rem] right-[3.9rem]">
              Hawkins Labs
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
