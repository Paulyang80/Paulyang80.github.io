export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export const RESUME_DATA: Job[] = [
  {
    company: "University of North Carolina at Chapel Hill",
    role: "Research Assistant",
    location: "",
    period: "Aug 2024 – Present",
    description: [],
  },
  {
    company: "Institute of Information Science, Academia Sinica",
    role: "Research Assistant",
    location: "Taipei, Taiwan",
    period: "Jul 2023 – Jun 2024",
    description: [
      "Built and operated a long document summarization service (Python, FastAPI, Docker).",
      "Implemented chunking + hierarchical merge architecture.",
      "Integrated retrieval-augmented answering to improve query focus.",
      "Improved reliability and latency through batching/caching and timeouts/retries.",
      "Implemented Langchain, Tree of Thought, and Chain of Thought.",
      "Utilized multiple GPUs for computation to improve Rouge Score.",
    ],
  },
  {
    company: "National Chengchi University — Learner Corpus of Slavic Languages",
    role: "NLP Full Stack Engineer",
    location: "Taipei, Taiwan",
    period: "Sep 2021 – Jan 2022",
    description: [
      "Designed and launched a searchable corpus web application (Django/FastAPI + SQL).",
      "Supported POS tags, windowed proximity, and syntactic filters.",
      "Implemented pagination, indexing, and parameterized queries to ensure security and efficiency.",
      "Managed Linux server deployment and daily maintenance.",
      "Processed Russian and Czech languages using Spacy NLP.",
    ],
  },
  {
    company: "National Chengchi University — Service Science Research Center",
    role: "Research Assistant",
    location: "Taipei, Taiwan",
    period: "Jan 2021 – Feb 2023",
    description: [
      "Built data preprocessing and evaluation tools for internal ML/NLP projects.",
      "Maintained demo systems and documentation.",
      "Served as a Teaching Assistant, designing NLP courses and practical assignments for DL and ML.",
      "Assisted professors in refining thesis outlines, facilitating the publication of multiple research papers.",
      "Designed practical NLP coding materials for a large number of employees at Taiwan's largest telecom company, receiving positive feedback.",
    ],
  },
];
