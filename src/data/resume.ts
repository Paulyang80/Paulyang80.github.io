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
    period: "2024 年 8 月 – Present",
    description: [],
  },
  {
    company: "Institute of Information Science, Academia Sinica",
    role: "Research Assistant",
    location: "Taipei, Taiwan",
    period: "2023 年 7 月 – 2024 年 6 月",
    description: [
      "建立並運營長文檔摘要服務（Python, FastAPI, Docker）",
      "實現 chunking + hierarchical merge 架構",
      "加入 retrieval-augmented answering 提升查詢聚焦能力",
      "通過 batching/caching, timeouts/retries 提升可靠性與延遲",
      "實作 Langchain, Tree of Thought, Chain of Thought",
      "使用多個 GPU 進行運算，提升 Rouge Score",
    ],
  },
  {
    company: "National Chengchi University — Learner Corpus of Slavic Languages",
    role: "NLP Full Stack Engineer",
    location: "Taipei, Taiwan",
    period: "2021 年 9 月 – 2022 年 1 月",
    description: [
      "設計並上線可搜尋的語料庫網頁應用（Django/FastAPI + SQL）",
      "支援 POS tags, windowed proximity, syntactic filters",
      "實現分頁、索引、參數化查詢，確保安全與效能",
      "管理 Linux 伺服器部署與日常維護",
      "使用 Spacy NLP 處理 Russian 跟捷克語",
    ],
  },
  {
    company: "National Chengchi University — Service Science Research Center",
    role: "Research Assistant",
    location: "Taipei, Taiwan",
    period: "2021 年 1 月 – 2023 年 2 月",
    description: [
      "為內部 ML/NLP 專案建立資料前處理與評估工具",
      "維護 demo 系統與文件",
      "擔任助教，設計 NLP 課程，也設計過 DL 跟 ML 的實作作業",
      "協助教授調整論文大綱，讓多份研究順利發表",
      "設計多份實作 NLP 程式碼給台灣最大的電信公司大量員工學習，獲得良好反饋",
    ],
  },
];
