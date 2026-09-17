import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const Tech = () => (
  <SectionWrapper id='skills'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I work with</p>
      <h2 className={styles.sectionHeadText}>Toolkit.</h2>
    </motion.div>

    <div className='mt-12 flex flex-col gap-10'>
      {skills.map((group, index) => (
        <motion.div
          key={group.group}
          variants={fadeIn("up", "spring", index * 0.15, 0.6)}
          className='flex flex-col gap-4'
        >
          <h3 className='text-secondary text-[14px] uppercase tracking-wider'>
            {group.group}
          </h3>
          <ul className='flex flex-wrap gap-3'>
            {group.items.map((item) => (
              <li
                key={item}
                className='bg-tertiary text-white-100 text-[15px] rounded-full py-2 px-5 border border-white/5'
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Tech;
