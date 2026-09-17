import { motion } from "framer-motion";

import { styles } from "../styles";
import { summary, focusAreas } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const FocusCard = ({ title, blurb, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className='bg-tertiary rounded-2xl py-6 px-6 h-full flex flex-col shadow-card'
  >
    <h3 className='text-white text-[length:var(--fs-card-title)] font-bold leading-[1.25]'>{title}</h3>
    <p className='mt-3 text-secondary text-[length:var(--fs-card-body)] leading-[1.55]'>{blurb}</p>
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
      className='mt-4 text-secondary text-[length:var(--fs-lead)] max-w-3xl leading-[1.65]'
    >
      {summary}
    </motion.p>

    <div className='mt-[var(--stack-gap)] grid gap-[var(--stack-gap)] sm:grid-cols-2 lg:grid-cols-4'>
      {focusAreas.map((area, index) => (
        <FocusCard key={area.title} index={index} {...area} />
      ))}
    </div>
  </SectionWrapper>
);

export default About;
