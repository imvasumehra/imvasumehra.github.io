import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  // Nothing to show is better than placeholder history.
  if (!experiences.length) return null;

  return (
    <SectionWrapper id='experience'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I've worked</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className='mt-[var(--stack-gap)] flex flex-col'>
        {experiences.map((exp) => (
          <div
            key={`${exp.org}-${exp.title}`}
            className='border-l border-white/10 pl-5 pb-[var(--stack-gap)] last:pb-0'
          >
            <h3 className='text-white text-[length:var(--fs-entry-title)] font-bold leading-[1.25]'>{exp.title}</h3>
            <p className='text-secondary text-[length:var(--fs-entry-meta)] font-semibold'>
              {exp.org} · {exp.date}
            </p>
            <ul className='mt-2 list-disc ml-5 space-y-1'>
              {exp.points?.map((point, i) => (
                <li key={i} className='text-white-100 text-[length:var(--fs-entry-body)] leading-[1.6]'>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
