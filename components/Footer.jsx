'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => (
  <motion.footer variants={footerVariants} initial='hidden' whileInView="show" className={`${styles.paddings} py-8 relative `} >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-center flex-wrap gap-5 ">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaversus</h4>
        <button className="flex items-center h-fit py-4 px-6 "></button>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
