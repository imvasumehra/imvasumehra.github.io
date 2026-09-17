// Short blurb under the About heading.
const summary =
  "I'm a Data Scientist at Meesho working on the speech stack — Hindi Automatic Speech Recognition including code-mixed speech, Text-to-Speech for Malayalam, Telugu and Tamil, and Large Language Models fine-tuned for narrow jobs like evaluation. I came to it sideways: two years building insurance software, then a master's at IISc spent teaching small models to hear crackles and wheezes in stethoscope recordings. Most of what I've done since is a version of that same problem — audio in, a decision out, and an honest measure of whether it worked.";

// The areas I want to be known for.
const focusAreas = [
  {
    title: "Speech Recognition",
    blurb:
      "**Hindi ASR** on real call audio, including **code-mixed speech** where people switch to English mid-sentence — served at **30 RPS** with **p90 100 ms** latency.",
  },
  {
    title: "Speech Synthesis",
    blurb:
      "**Text-to-Speech** for Indian languages that have far less training audio than English. Output quality assessed by **human auditors**.",
  },
  {
    title: "LLMs in Production",
    blurb:
      "Fine-tuning **Large Language Models** for specific, testable jobs — like **user simulation**, so prompts can be evaluated in a loop instead of against live traffic.",
  },
  {
    title: "Audio & Signal Processing",
    blurb:
      "Spectral features and small architectures. My thesis found **compact CNNs beating wav2vec 2.0** on lung sound classification — bigger isn't automatically better.",
  },
];

const experiences = [
  {
    title: "Data Scientist II",
    org: "Meesho",
    date: "Jan 2026 – Present",
    points: [
      "Fine-tuned **IndicConformer** for **Hindi ASR** — a first version on Devanagari script, and a second handling **code-mixed** speech.",
      "Moved inference to **TensorRT (FP32)**: **30 RPS** at **p90 100 ms / p99 200 ms**, cutting serving cost by **60%**.",
      "Developed an **XGBoost** model ranking sellers by conversion affinity and scoring hourly call slots, with an **explore–exploit** policy for cold-start sellers — reducing outbound calling cost by **50%**.",
    ],
  },
  {
    title: "Data Scientist I",
    org: "Meesho",
    date: "Jul 2024 – Dec 2025",
    points: [
      "Fine-tuned **XTTS** for **Malayalam, Telugu, and Tamil** text-to-speech, with output quality assessed by human auditors.",
      "Built a fine-tuned **Llama 3.2 3B Instruct** model that simulates user behaviour on calls, letting the team test prompts and conversation flows without waiting on live traffic.",
    ],
  },
  {
    title: "Machine Learning and Signal Processing Intern",
    org: "AI Health Highway Pvt. Ltd., Bengaluru",
    date: "May 2023 – Jul 2023",
    points: [
      "Surveyed and replicated state-of-the-art architectures for **lung sound classification** — CNNs and RNNs over **mel-spectrogram** and **MFCC** features — work that became the basis of my thesis.",
    ],
  },
  {
    title: "Software Developer",
    org: "GlobalLogic India Pvt. Ltd., Noida",
    date: "Nov 2020 – Jul 2022",
    points: [
      "Migrated an insurance platform from **VisualBasic to VB.Net** across General Liability, Workers' Compensation, and Property lines of business.",
      "Built an internal query tool for the central database that cut query resolution time by **70%**.",
    ],
  },
];

const education = [
  {
    title: "M.Tech, Computer Science and Automation",
    org: "Indian Institute of Science, Bengaluru",
    date: "Aug 2022 – Jun 2024",
    points: [
      "Thesis: **Lung Sound Classification using Light-Weight Architectures**, advised by Prof. Siddharth Barman and co-advised by Prof. Prasanta Kumar Ghosh.",
      "Carried out in collaboration with AI Health Highway Pvt. Ltd.",
    ],
  },
  {
    title: "B.Tech, Information Technology",
    org: "JSS Academy of Technical Education, Noida",
    date: "2016 – 2020",
    points: [
      "Graduated with **8.53/10**. Published two papers on assistive technology for hearing and speech impairment during this period.",
    ],
  },
];

const projects = [
  {
    name: "Lung Sound Classification",
    description:
      "Detecting **crackles and wheezes** in stethoscope recordings, and classifying the underlying condition. Compact CNNs over mel-spectrogram and MFCC features beat every **wav2vec 2.0** variant tested — **78.7%** on four-class detection.",
    tags: ["signal-processing", "cnn", "wav2vec2", "healthcare"],
    link: "/papers/vasu-mehra-mtech-thesis.pdf",
    linkLabel: "Thesis (PDF)",
    repo: "/papers/vasu-mehra-thesis-presentation.pdf",
    repoLabel: "Slides (PDF)",
  },
  {
    name: "Indic Speech Recognition",
    description:
      "**Hindi ASR** on a fine-tuned **IndicConformer** — first on Devanagari script, then extended to **code-mixed** speech where users switch to English mid-sentence. Served through **TensorRT** (FP32) at **30 RPS**, **p90 100 ms / p99 200 ms**, for **60%** less cost.",
    tags: ["asr", "indicconformer", "tensorrt", "code-mixing"],
  },
  {
    name: "Multilingual Text-to-Speech",
    description:
      "**XTTS** fine-tuned for **Malayalam, Telugu, and Tamil** — three languages with far less training audio than Hindi or English. Output quality assessed by **human auditors**.",
    tags: ["tts", "xtts", "indic-languages"],
  },
  {
    name: "Outbound Calling Cost Model",
    description:
      "Ranks sellers by **conversion affinity** and scores call slots hour by hour, so calling effort goes where it pays, with an **explore–exploit** policy for cold-start sellers. Cut outbound calling cost by **50%**.",
    tags: ["xgboost", "ranking", "explore-exploit", "cost-optimisation"],
  },
  {
    name: "User Simulation for Call Testing",
    description:
      "A fine-tuned **Llama 3.2 3B Instruct** that plays the user side of a call, so prompts and conversation designs can be evaluated in a tight loop instead of against live traffic.",
    tags: ["llm", "fine-tuning", "evaluation"],
  },
];

const publications = [
  {
    title: "Assistive technology-based solution for hearing impairment using smartphones",
    venue: "International Journal of Software Innovation (IJSI)",
    year: "2022",
    authors: "V. Mehra, D. Pandey",
  },
  {
    title: "Technological aids for deaf and mute in the modern world",
    venue: "Recent Patents on Engineering",
    year: "2021",
    authors: "V. Mehra, D. Pandey, A. Rastogi, A. Singh, H. P. Singh",
  },
];

const contact = {
  cv: "/papers/vasu-mehra-cv.pdf",
  email: "imvasumehra@gmail.com",
  github: "https://github.com/imvasumehra",
  linkedin: "https://www.linkedin.com/in/vasumehra/",
  scholar: "https://scholar.google.com/citations?user=7qZykZsAAAAJ&hl=en",
};

export { summary, focusAreas, experiences, education, projects, publications, contact };

// Only link to sections that actually render.
export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  ...(projects.length ? [{ id: "work", title: "Work" }] : []),
  ...(publications.length ? [{ id: "publications", title: "Publications" }] : []),
  { id: "contact", title: "Contact" },
];
