// src/data/products.js
//
// Add a new product by adding a new object to this array.
//
// type: "app"     -> shows a "Download APK" button (set link to your Drive file link)
// type: "website" -> shows a "Visit Website" button (set link to the live URL)
// type: "model"   -> shows a "View on GitHub" button (set link to the repo URL)
//
// cover: path to an image in the public folder, e.g. "/products/medha.jpg".
//        Put the actual image file in public/products/medha.jpg (outside src/, served from site root).
//        A plain external URL also works if you'd rather not store the image locally.
// doc: a markdown-ish string (or short text) describing the full guide / features.
//      You can use \n for line breaks. Headings starting with "## " are styled as sub-headings.

export const products = [
  {
    id: "medha",
    title: "Medha",
    tagline: "AI-powered personal diary with RAG memory chat.",
    cover: "/Product/medha_cover.png",
    type: "app",
    link: "https://drive.google.com/file/d/1LtGXWAblml-p-EFF8132kZ8_5G-VWbMt/view?usp=drive_link",
    tags: ["React Native", "FastAPI", "RAG", "Supabase"],
    doc: `## What it is
Medha is a personal diary app that remembers what you write and lets you talk to your own past entries.

## Features
- Daily diary entries with soft delete
- AI Memory Cards that resurface meaningful moments
- Life Trend Graphs with sparkline visualizations
- Social Diary feed for shared reflections
- Astro Medha: bilingual (Hindi/English) astrology chat with Razorpay payments

## Stack
React Native (Expo), FastAPI, Supabase (Postgres + RLS), Pinecone vector store, Gemini embeddings.

## How to use
Install the APK, create an entry, and ask the in-app assistant questions about your own history — it answers using your own diary as memory.`,
  },
  
  {
    id: "stud",
    title: "End to End ML Model Workflow",
    tagline: "End-to-end MLOps pipeline for Student math mark prediction.",
    cover: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    type: "model",
    link: "https://github.com/Erabhaysharma/end-to-end-ML-PROJECT",
    tags: ["MLflow", "DVC", "FastAPI", "Docker"],
    doc: `## What it is
A reproducible fraud-detection model with a full MLOps loop: versioned data, tracked experiments, and monitored deployment.

## Features
- DVC for dataset versioning
- MLflow experiment tracking
- FastAPI inference service, containerized with Docker
- Evidently + Grafana for drift monitoring
- GitHub Actions CI for retraining and deployment

## How to use
Clone the repo, follow the README to pull data with DVC, then run the training pipeline or hit the deployed inference endpoint.`,
  },
];