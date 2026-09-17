import { motion } from "framer-motion";

import { styles } from "../styles";
import { publications, contact } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const Publications = () => {
  if (!publications.length) return null;

  return (
    <SectionWrapper id='publications'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Published work</p>
        <h2 className={styles.sectionHeadText}>Publications.</h2>
      </motion.div>

      <div className='mt-[var(--stack-gap)] flex flex-col gap-[var(--stack-gap)]'>
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className='border-l border-white/10 pl-6'
          >
            <h3 className='text-white text-[length:var(--fs-card-title)] font-bold leading-[1.3]'>
              {pub.title}
            </h3>
            <p className='mt-1 text-secondary text-[length:var(--fs-entry-body)]'>{pub.authors}</p>
            <p className='mt-1 text-secondary text-[length:var(--fs-entry-body)] italic'>
              {pub.venue}, {pub.year}
            </p>
          </motion.div>
        ))}
      </div>

      {contact.scholar && (
        <a
          href={contact.scholar}
          target='_blank'
          rel='noreferrer'
          className='inline-block mt-8 text-[14px] text-white underline underline-offset-4'
        >
          Google Scholar
        </a>
      )}
    </SectionWrapper>
  );
};

export default Publications;
