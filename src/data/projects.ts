export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags: string[];
  image?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "Long Document Summarization Service",
    description: "Built a long document summarization service using Python, FastAPI, and Docker. Implemented hierarchical merge architecture and RAG to improve query focus.",
    tags: ["Python", "FastAPI", "Docker", "LLM"],
  },
  {
    title: "Learner Corpus of Slavic Languages",
    description: "Designed and launched searching corpus web application for Russian and Czech languages using Django and Spacy NLP.",
    link: "https://slavic-corpus.nccu.edu.tw/", 
    tags: ["Django", "NLP", "Spacy", "SQL"],
  },
  {
    title: "Personal Portfolio v2",
    description: "Modern personal website built with Next.js 16 and Tailwind CSS v4. Features a dark mode aesthetic and Markdown-based blog.",
    github: "https://github.com/Paulyang80/Paulyang80.github.io",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
];
