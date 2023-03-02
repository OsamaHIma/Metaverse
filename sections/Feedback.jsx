"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { TypingText, InsightCard, TitleText } from "../components";
const Feedback = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6 `}
    >
      <motion.div className="flex-[0.5] lg;max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative ">
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-white sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] ">
            Samantha
          </h4>
          <p className="font-normal text-white mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] ">
            Founder | Metaversus
          </p>
        </div>

        <p className="font-normal text-white mt-[24px] sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] ">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px] "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
