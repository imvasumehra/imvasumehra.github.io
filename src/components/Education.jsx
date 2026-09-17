import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const Education = () => {
  if (!education.length) return null;

  return (
    <SectionWrapper id='education'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I studied</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className='mt-[var(--stack-gap)] flex flex-col'>
        {education.map((item) => (
          <div
            key={`${item.org}-${item.title}`}
            className='border-l border-white/10 pl-5 pb-8 last:pb-0'
          >
            <h3 className='text-white text-[20px] font-bold'>{item.title}</h3>
            <p className='text-secondary text-[length:var(--fs-entry-meta)] font-semibold'>
              {item.org} · {item.date}
            </p>
            {!!item.points?.length && (
              <ul className='mt-2 list-disc ml-5 space-y-1'>
                {item.points.map((point, i) => (
                  <li key={i} className='text-white-100 text-[length:var(--fs-entry-body)] leading-[1.6]'>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
