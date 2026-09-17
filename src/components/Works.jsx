import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";
import RichText from "./RichText";

const ProjectCard = ({
  index,
  name,
  description,
  tags = [],
  link,
  linkLabel = "Read more",
  repo,
  repoLabel = "Code",
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='bg-tertiary p-6 rounded-2xl h-full flex flex-col shadow-card'
  >
    <h3 className='text-white font-bold text-[length:var(--fs-card-title)] leading-[1.25]'>{name}</h3>
    <p className='mt-2 text-secondary text-[length:var(--fs-card-body)] leading-[1.55] flex-1'>
      <RichText>{description}</RichText>
    </p>

    <div className='mt-3 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <span key={tag} className='text-[14px] text-white-100/70'>
          #{tag}
        </span>
      ))}
    </div>

    {(link || repo) && (
      <div className='mt-4 flex gap-4'>
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='text-[15px] text-white underline underline-offset-4'
          >
            {linkLabel}
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target='_blank'
            rel='noreferrer'
            className='text-[15px] text-white underline underline-offset-4'
          >
            {repoLabel}
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

      <div className='mt-[var(--stack-gap)] grid gap-[var(--stack-gap)] sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
