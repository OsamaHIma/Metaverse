'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ index, title, imgUrl, subtitle }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className='flex md:flex-row flex-col gap-4'
  >
    <img
      src={imgUrl}
      alt='plant'
      className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover '
    />
    <div className='flex justify-between items-center w-full '>
      <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px] '>
        <h4 className='font-normal text-white lg:text-[42px] text-[26px] '>
          {title}
        </h4>
        <p className='text-secondary-white text-[14px] lg:text-[20px] mt-[16px] font-normal'>
          {subtitle}
        </p>
      </div>

      <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px] border-white bg-transparent cursor-pointer '>
        <img
          src='arrow.svg'
          alt='arrow'
          className='h-[40%] w-[40%] object-contain '
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
