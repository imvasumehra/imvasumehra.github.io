import { motion } from "framer-motion";

import { styles } from "../styles";
import { summary, focusAreas } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const FocusCard = ({ title, blurb, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className='xs:w-[250px] w-full bg-tertiary rounded-2xl py-6 px-8 min-h-[220px] flex flex-col shadow-card'
  >
    <h3 className='text-white text-[20px] font-bold'>{title}</h3>
    <p className='mt-3 text-secondary text-[14px] leading-[22px]'>{blurb}</p>
  </motion.div>
);

const About = () => (
  <SectionWrapper id='about'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      {summary}
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-8'>
      {focusAreas.map((area, index) => (
        <FocusCard key={area.title} index={index} {...area} />
      ))}
    </div>
  </SectionWrapper>
);

export default About;
