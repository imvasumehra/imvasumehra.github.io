
// Short blurb under the About heading.
const summary =
  "I work on signal processing and natural language processing — building models that turn raw sequences, whether waveforms or text, into something interpretable. I care most about the unglamorous parts: clean data pipelines, honest evaluation, and results that survive a second look.";

// The research areas you want to be known for.
const focusAreas = [
  {
    title: "Signal Processing",
    blurb: "Time-series and spectral methods — filtering, feature extraction, and denoising on real, noisy recordings.",
  },
  {
    title: "Natural Language Processing",
    blurb: "Representation learning and sequence modelling for text, from tokenisation choices through to evaluation.",
  },
  {
    title: "Machine Learning",
    blurb: "Training, tuning, and validating models with an emphasis on reproducibility and error analysis.",
  },
  {
    title: "Data Engineering",
    blurb: "Pipelines that make experiments repeatable: versioned datasets, deterministic preprocessing, tracked runs.",
  },
];

// Prune this to what you actually reach for.
const skills = [
  {
    group: "Languages",
    items: ["Python", "SQL", "MATLAB", "C++"],
  },
  {
    group: "ML & Modelling",
    items: ["PyTorch", "scikit-learn", "Hugging Face Transformers", "SciPy", "NumPy"],
  },
  {
    group: "Data & Analysis",
    items: ["pandas", "Matplotlib", "Jupyter", "Polars"],
  },
  {
    group: "Tooling",
    items: ["Git", "Docker", "Linux", "Weights & Biases"],
  },
];

// TODO: your real roles. Each entry renders as one timeline item.
// { title, org, date, points: [] }
const experiences = [];

// TODO: your real projects.
// { name, description, tags: [], link, repo }
const projects = [];

const contact = {
  email: "imvasumehra@gmail.com",
  github: "https://github.com/imvasumehra",
  // TODO: add if you want them shown — left out entirely when empty.
  linkedin: "",
  scholar: "",
};

export { summary, focusAreas, skills, experiences, projects, contact };

// Only link to sections that actually render.
export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  ...(projects.length ? [{ id: "work", title: "Work" }] : []),
  { id: "contact", title: "Contact" },
];
