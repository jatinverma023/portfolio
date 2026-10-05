export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: "Live" | "In Development" | string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "documind-ai",
    number: "01",
    title: "DocuMind AI",
    category: "AI / RAG / Document Intelligence",
    status: "In Development",
    tagline: "Intelligent document understanding with grounded AI answers.",
    description:
      "DocuMind AI is an AI-powered document intelligence platform that allows users to upload documents and interact with them through a ChatGPT-style workspace. It combines document processing, semantic retrieval, vector search, hybrid retrieval, reranking, and grounded answer generation with citation verification to produce context-aware responses from uploaded documents.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MongoDB",
      "FAISS",
      "Sentence Transformers",
      "BM25",
      "Google Gemini",
      "RAG",
    ],
    highlights: [
      "Hybrid Retrieval",
      "Citation Verification",
      "Grounded AI Answers",
    ],
    githubUrl: "https://github.com/jatinverma023/DocuMind",
  },
  {
    id: "yts-chitwan",
    number: "02",
    title: "YTS Chitwan",
    category: "Full-Stack Web Application",
    status: "Live",
    tagline: "A production web platform for community events and youth engagement.",
    description:
      "A full-stack web platform developed for Youth Thinkers' Society Chitwan to provide public information, event management, participant registration, authentication, and contact workflows. The application connects a React frontend with a Node.js/Express backend and MongoDB to support a real-world community organization.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "JWT",
      "Vite",
    ],
    highlights: [
      "Production Deployment",
      "Event Management",
      "JWT Authentication",
      "500+ Youth",
      "50+ Events",
    ],
    githubUrl: "https://github.com/jatinverma023/yts-chitwan",
    liveUrl: "https://yts-chitwan.vercel.app",
  },
  {
    id: "podtrim",
    number: "03",
    title: "The PodTrim",
    category: "AI Automation / Video Processing",
    status: "In Development",
    tagline: "Automated podcast-to-Shorts processing powered by AI.",
    description:
      "The PodTrim is an automated video-processing pipeline designed to transform long-form podcast content into short-form vertical videos. It combines Whisper transcription, LLM-based moment detection, clip quality scoring, frame-accurate FFmpeg processing, silence compression, caption generation, and automated publishing workflows.",
    technologies: [
      "Python",
      "Whisper",
      "Groq",
      "Llama 3.3 70B",
      "FFmpeg",
      "Google Sheets",
      "GitHub Actions",
      "YouTube Data API",
      "Google Drive",
    ],
    highlights: [
      "Automated Video Pipeline",
      "AI Clip Detection",
      "9:16 Shorts Processing",
      "211 Passing Tests",
    ],
    githubUrl: "https://github.com/jatinverma023/YT-Shorts",
  },
  {
    id: "smart-resume-matcher",
    number: "04",
    title: "Smart Resume Matcher",
    category: "AI / Full-Stack",
    status: "In Development",
    tagline: "Deterministic resume-to-job matching for smarter recruitment workflows.",
    description:
      "Smart Resume Matcher is a full-stack recruitment application that analyzes resumes against job requirements and produces structured compatibility scores. It supports candidate and recruiter workflows with document parsing and a deterministic matching approach designed to make resume-to-job evaluation more consistent and explainable.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "pdf-parse",
      "Mammoth",
    ],
    highlights: [
      "70/30 Deterministic Matching",
      "Candidate + Recruiter Workflows",
      "Resume Document Parsing",
    ],
    githubUrl: "https://github.com/jatinverma023/smart-resume-matcher",
  },
];
