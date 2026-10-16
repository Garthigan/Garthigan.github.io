
export interface Publication {
  id: number;
  title: string;
  authors: string;
  conference: string;
  location: string;
  date: string;
  type: "conference" | "workshop" | "journal";
  link?: string;
  label?: string;
  image?: string;
  description?: string;
}

// ─── Publications ─────────────────────────────────────────────────────────────

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "When Does Post-Hoc Prototype Refinement Help? Adaptive Boundary Refinement as a Controlled Study for Few-Shot Learning",
    authors: "Garthigan Kumarasamy, Uthayasanker Thayasivam, Damminda Alahakoon",
    conference: "Asian Conference on Computer Vision (ACCV) 2026",
    location: "Osaka, Japan",
    date: "Dec 2026",
    type: "conference",
    image: "/images/research/few-shot-accv.jpg",
    description:
      "A controlled study of post-hoc prototype refinement for few-shot classification, isolating when a lightweight plug-in module (MLP, GNN, or attention) actually improves frozen-encoder prototypes.\nShows refinement helps most under class imbalance and support-set noise, but offers little gain in clean, well-separated settings.",
  },
  {
    id: 2,
    title:
      "A Systematic Review of AI-Based Food and Calorie Detection Systems in Healthcare: Trends, Techniques, and Applications",
    authors:
      "Garthigan Kumarasamy, Minh Vi Nguyen, Prasad Hettiarachchige, Priyanga Ranasinghe, Uthayasanker Thayasivam, Damminda Alahakoon",
    conference: "DIGITAL HEALTH",
    location: "SAGE Publications",
    date: "2026",
    type: "journal",
    label: "Q1 Journal",
    link: "https://journals.sagepub.com/doi/full/10.1177/20552076261490819",
    image: "/images/research/digital-health-review.jpg",
    description:
      "Traces the evolution of AI-based food and calorie detection from manual diaries and CNN classifiers to vision transformers and multimodal foundation models.\nSynthesizes trends, techniques, and open challenges in automated dietary assessment for digital health applications.",
  },
  {
    id: 3,
    title:
      "Thiruppugazh-KG Dataset: A Manually Annotated Resource for Computational Analysis of Tamil Devotional Literature",
    authors:
      "Garthigan Kumarasamy, Jubeerathan Thevakumar, Sathurgini Uthayakumar, Disne Kajanath, Narthana Sivalingam, Uthayasanker Thayasivam",
    conference:
      "Sixth Workshop on Speech, Vision, and Language Technologies for Dravidian Languages (DravidianLangTech)",
    location: "Virtual",
    date: "Jul 2026",
    type: "workshop",
    link: "https://aclanthology.org/2026.dravidianlangtech-1.8/",
    image: "/images/research/thiruppugazh-kg.jpg",
    description:
      "A manually annotated knowledge graph built from Thiruppugazh, linking entities, imagery, themes, philosophy, and mythological events across the devotional Tamil corpus.\nEnables computational analysis of low-resource Tamil literature through structured entity and relationship extraction.",
  },
  {
    id: 4,
    title:
      "Enabling Conversational Intelligence in Service Robots Through Multimodal Fusion and Resource-Aware Generative Models",
    authors: "Tharmilan, K. Garthigan, Henoshan",
    conference: "World AIIoT Congress 2025",
    location: "Seattle, USA",
    date: "May 2025",
    type: "conference",
    link: "https://ieeexplore.ieee.org/abstract/document/11105269",
    image: "/images/research/service-robot-aiiot.jpg",
    description:
      "A modular framework fusing speech, vision, and emotion recognition through an LLM-based intent analyser and conversation initiator for service robots.\nCombines context retrieval, user/object identification, and a fusion algorithm to drive adaptive, resource-aware multimodal interaction.",
  },
  {
    id: 5,
    title:
      "WebBioAuth: Privacy-Preserving Multimodal Biometric Authentication in the Browser",
    authors: "K. Garthigan, T. Uthayasanker",
    conference:
      "CVPR Workshop 2026 — Computer Vision for Biomechanics Workshop",
    location: "Denver, USA",
    date: "Sep 2025",
    type: "workshop",
    image: "/images/research/webbioauth-cvbw.jpg",
    description:
      "An in-browser biometric authentication system fusing face (YOLOv8 + FaceNet) and voice (MFCC + GMM) recognition entirely on the client side.\nKeeps biometric templates in locally encrypted storage (AES-256) and sends only a verification decision to the server, preserving user privacy.",
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    degree: "Master of Science (Major Component of Research)",
    specialization:
      "Image-Based Calorie and Nutrition Estimation System for Sri Lankan Mixed Dishes using Deep Learning",
    institution: "University of Moratuwa",
    department: "Department of Computer Science and Engineering",
    year: "Sep 2025 – Oct 2026",
    status: "Reading",
  },
  {
    degree: "Bachelor of Science in Engineering (Hons) — Electrical Engineering",
    institution: "University of Moratuwa",
    department: "Department of Electrical Engineering",
    year: "2021 – 2025",
    status: "Completed",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    specialization:
      "3As | Island Rank: 198 | District Rank: 19 | Z-Score: 2.4765",
    institution: "Jaffna Hindu College",
    year: "2011 – 2019",
    status: "Completed",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const aboutMe = {
  name: "Garthigan Kumarasamy",
  role: "Research Assistant & Machine Learning Engineer",
  affiliation: "University of Moratuwa, Sri Lanka",
  scholarUrl: "https://scholar.google.com/citations?user=733ZCgUAAAAJ&hl=en",
  summary:
    "I am a Research Assistant at the Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka, pursuing an MSc by Research under the supervision of Prof. Uthayasanker Thayasivam, with research collaborations involving Prof. Priyanga Ranasinghe at the University of Colombo and Prof. Damminda Alahakoon at La Trobe University, Australia. My research interests include computer vision, few-shot learning, representation learning, multimodal AI, generative models, and resource-efficient machine learning.\n\nPreviously, I worked as a Machine Learning Engineer Intern at SenzMate IoT Intelligence, developing computer vision solutions for edge deployment using YOLO-based models, NVIDIA Jetson devices, and TensorRT. I completed my BSc in Electrical Engineering at the University of Moratuwa, Sri Lanka, where my undergraduate research was supervised by Prof. Buddhika Jayasekara and Dr. Logeeshan. My long-term goal is to advance data-efficient, generalizable, and resource-aware AI systems for real-world applications.",
  supervisorLinks: {
    "Prof. Uthayasanker Thayasivam": "https://rtuthaya.staff.uom.lk/",
    "Prof. Priyanga Ranasinghe": "https://www.res.cmb.ac.lk/medicine/priyanga-ranasinghe/",
    "Prof. Damminda Alahakoon": "https://scholars.latrobe.edu.au/dalahakoonnghe/",
    "Prof. Buddhika Jayasekara": "https://uom.lk/staff/Jayasekara.AGBP",
    "Dr. Logeeshan": "https://uom.lk/staff/Logeeshan.V",
  } as Record<string, string>,
  email: "garthidata@gmail.com",
  links: {
    scholar: "https://scholar.google.com/citations?user=733ZCgUAAAAJ&hl=en",
    github: "https://github.com/Garthigan",
    linkedin: "https://www.linkedin.com/in/garthigan-kumarasamy-1450891a9/",
  },
};
