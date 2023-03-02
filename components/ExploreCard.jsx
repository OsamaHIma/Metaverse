'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, index, title, active, handelClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'la:flex-[0.5] flex-[2]'
    } flex items-center transition-[flex] justify-center h-[700px] min-w-[170px] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handelClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3 className="text-white font-semibold sm:text-[26px] text-[18px] absolute z-0 lg:bottom-15 lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <motion.div
        className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] "
        // variants={fadeIn("top", "spring", 0.7, 0.75)}
      >
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] mb-[16px] glassmorphism `}
        >
          <img
            src="/headset.svg"
            alt=""
            className="w-1/2 h-1/2 object-contain "
          />
        </div>
        <p className="font-normal text-[16px] uppercase text-white leading-[20px]">
          Enter the Metaverse
        </p>
        <h2 className="text-white mt-[24px] font-semibold sm:text-[32px] text-[24px] ">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
