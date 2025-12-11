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
    description: "Developed a production-ready RESTful service using FastAPI and Azure OpenAI to generate adaptive coding interview questions. Established a robust CI/CD pipeline with GitHub Actions and Docker to automate testing and deployment to OKD cloud, ensuring code quality for a collaborative 4-person team. Designed modular PostgreSQL schemas to support efficient content versioning.",
    tags: ["FastAPI", "Azure OpenAI", "CI/CD", "Docker", "PostgreSQL"],
    link: ""
  },
  {
    title: "NeRF vs. 3D Gaussian Splatting: Comparative Analysis",
    description: "Conducted comprehensive comparative analysis of state-of-the-art 3D reconstruction techniques: Mip-NeRF 360, Instant-NGP, and 3D Gaussian Splatting. Implemented end-to-end pipeline including COLMAP-based camera pose estimation on Tanks and Temples dataset. Evaluated models across three dimensions: rendering speed (FPS), view consistency (temporal stability), and detail preservation (PSNR, SSIM, LPIPS), achieving quantitative benchmarks for real-time vs. quality trade-offs in neural rendering.",
    tags: ["Python", "NeRF", "Gaussian Splatting", "COLMAP", "Computer Vision", "3D Reconstruction"],
    link: ""
  },
  {
    title: "Inverse Rendering with Cloud-Based GPU Infrastructure",
    description: "Designed and deployed a cloud-based deep learning environment on AWS EC2 (g4dn.xlarge with NVIDIA T4 GPU) for inverse rendering research. Configured Deep Learning AMI with PyTorch/CUDA stack, implemented cost-efficient resource management strategies under student budget constraints, and established remote development workflows using VS Code Remote-SSH and Jupyter Lab with SSH tunneling for secure model training and experimentation.",
    tags: ["AWS EC2", "PyTorch", "CUDA", "Inverse Rendering", "Cloud Computing", "GPU Optimization"],
    link: ""
  },
  {
    title: "Divide & Conquer: Long Video Understanding with LLMs",
    description: "Developed a novel divide-and-conquer algorithm for long-form video understanding using Large Language Models. Implemented the 'conquer' phase logic that improved contextual understanding (CU) scores by 6%, enabling efficient summarization of 10+ minute videos. Designed chunking and hierarchical merging strategies to handle temporal dependencies across video segments.",
    tags: ["Python", "LLMs", "Video Understanding", "Algorithm Design"],
    link: ""   
  },
  {
    title: "Safe RL Framework with Control Barrier Functions",
    description: "Researched and implemented a Shielded Learning framework integrating Control Barrier Functions (CBFs) with Soft Actor-Critic (SAC) and P2BPO optimization for Safe Reinforcement Learning. Ensured policy compliance with safety constraints while mitigating oscillation issues, demonstrating improved safety metrics in simulation environments.",
    tags: ["Python", "Reinforcement Learning", "CBF", "SAC", "Safety-Critical Systems"],
    link: "" 
  },

  {
    title: "Hierarchical RAG & Summarization Engine",
    description: "Engineered a scalable RAG pipeline for long-context document retrieval using a hierarchical tree-based indexing mechanism (BFS/DFS traversal), reducing query latency by 40%. Integrated Fine-tuned Llama models with LoRA adapters to optimize summarization accuracy (ROUGE-L +15-25%) while cutting training costs by 80%.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "LLM Optimization"],
    link: "" 
  },
  {
    title: "JourneyGo: Group Travel Itinerary Recommender",
    description: "Led a 5-person capstone team to build an intent-based travel recommendation web platform. Designed RESTful APIs and PostgreSQL schemas to support personalized itinerary generation. Integrated BERT models for user intent classification and recommendation ranking, achieving stable performance under load testing with 500+ real-world tourist attractions.",
    tags: ["Python", "BERT", "RESTful API", "PostgreSQL", "Team Leadership"],
    link: "" 
  },
  {
    title: "Slavic Languages Linguistic Search Engine",
    description: "Architected a high-performance linguistic search engine supporting windowed proximity queries (e.g., 'A near B') via positional inverted indexing in PostgreSQL. Built an automated NLP pipeline using spaCy for complex morphological tokenization and lemmatization, bridging raw text data with structured linguistic research needs.",
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
