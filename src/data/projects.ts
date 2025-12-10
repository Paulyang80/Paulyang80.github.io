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
    title: "CSXL: AI-Powered Interview Platform",
    description: "Developed a production-ready RESTful service using FastAPI and Azure OpenAI to generate adaptive coding interview questions[cite: 30, 32]. Established a robust CI/CD pipeline with GitHub Actions and Docker to automate testing and deployment to OKD cloud, ensuring code quality for a collaborative 4-person team[cite: 34, 35]. Designed modular PostgreSQL schemas to support efficient content versioning[cite: 33].",
    tags: ["FastAPI", "Azure OpenAI", "CI/CD", "Docker", "PostgreSQL"],
    link: "https://github.com/paulyang80" // 建議補上
  },
  {
    title: "Hierarchical RAG & Summarization Engine",
    description: "Engineered a scalable RAG pipeline for long-context document retrieval using a hierarchical tree-based indexing mechanism (BFS/DFS traversal), reducing query latency by 40%. Integrated Fine-tuned Llama models with LoRA adapters to optimize summarization accuracy (ROUGE-L +15-25%) while cutting training costs by 80%.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "LLM Optimization"],
    link: "https://github.com/paulyang80" // 建議補上
  },
  {
    title: "Slavic Languages Linguistic Search Engine",
    description: "Architected a high-performance linguistic search engine supporting windowed proximity queries (e.g., 'A near B') via positional inverted indexing in PostgreSQL. Built an automated NLP pipeline using spaCy for complex morphological tokenization and lemmatization, bridging raw text data with structured linguistic research needs[cite: 73, 74].",
    link: "https://lcsl.nccu.edu.tw/", 
    tags: ["Django", "PostgreSQL", "NLP Pipeline", "Search Algorithms"],
  },
  {
    title: "Personal Portfolio v2",
    description: "Modern personal website built with Next.js 16 and Tailwind CSS v4. Features a dark mode aesthetic and Markdown-based blog.",
    github: "https://github.com/Paulyang80/Paulyang80.github.io",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
];
