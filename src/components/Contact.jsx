import { motion } from "framer-motion";

import { styles } from "../styles";
import { contact } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const LINKS = [
  { key: "cv", label: "CV (PDF)", href: (v) => v },
  { key: "email", label: "Email", href: (v) => `mailto:${v}` },
  { key: "github", label: "GitHub", href: (v) => v },
  { key: "linkedin", label: "LinkedIn", href: (v) => v },
  { key: "scholar", label: "Google Scholar", href: (v) => v },
];

const Contact = () => (
  <SectionWrapper id='contact'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>
    </motion.div>

    <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-8'>
      <p className='text-secondary text-[length:var(--fs-lead)] max-w-2xl leading-[1.65]'>
        Happy to talk about signal processing, NLP, or anything I've written
        about here.
      </p>

      <div className='mt-8 flex flex-wrap gap-4'>
        {LINKS.filter(({ key }) => contact[key]).map(({ key, label, href }) => (
          <a
            key={key}
            href={href(contact[key])}
            target={key === "email" ? undefined : "_blank"}
            rel='noreferrer'
            className='bg-tertiary text-white py-3 px-6 rounded-xl outline-none w-fit font-medium shadow-card hover:bg-white/10 transition-colors'
          >
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Contact;
