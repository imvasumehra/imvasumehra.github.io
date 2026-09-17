import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const ProjectCard = ({ index, name, description, tags = [], link, repo }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full flex flex-col shadow-card'
  >
    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
    <p className='mt-2 text-secondary text-[14px] leading-[22px] flex-1'>
      {description}
    </p>

    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <span key={tag} className='text-[13px] text-white-100/70'>
          #{tag}
        </span>
      ))}
    </div>

    {(link || repo) && (
      <div className='mt-5 flex gap-4'>
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='text-[14px] text-white underline underline-offset-4'
          >
            Read more
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
            className='text-[14px] text-white underline underline-offset-4'
          >
            Code
          </a>
        )}
      </div>
    )}
  </motion.div>
);

const Works = () => {
  if (!projects.length) return null;

  return (
    <SectionWrapper id='work'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've built</p>
        <h2 className={styles.sectionHeadText}>Work.</h2>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
