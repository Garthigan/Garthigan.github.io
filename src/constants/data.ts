
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  caseStudy?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string[];
  technologies?: string[];
  type: "research" | "industry" | "teaching";
}

// Keep backward-compatible alias so TimelineItem import still resolves
export type TimelineItem = ExperienceItem;

export interface Publication {
  id: number;
  title: string;
  authors: string;
  conference: string;
  location: string;
  date: string;
  type: "conference" | "workshop" | "journal";
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  organization?: string;
  year: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 1,
    title: "Image-Based Calorie and Nutrition Estimation for Sri Lankan Mixed Dishes",
    description:
      "Developing a deep learning system for calorie and nutrition estimation of Sri Lankan mixed meals. The pipeline covers food recognition, semantic segmentation, portion estimation, and nutrient prediction using RAG with culturally specific datasets containing ingredient and portion annotations.",
    technologies: [
      "Python",
      "PyTorch",
      "Segmentation",
      "RAG",
      "Deep Learning",
      "Computer Vision",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan",
  },
  {
    id: 2,
    title: "Enhanced Multimodal Human-Robot Interaction using Generative AI",
    description:
      "Developed a modular framework for service robots integrating OpenAI Whisper, YOLOv8, and LLaVA-NeXT-Video for speech recognition, vision understanding, and emotion recognition. Models were optimised through quantization and fine-tuning for resource-constrained hardware.",
    technologies: [
      "Python",
      "OpenAI Whisper",
      "YOLOv8",
      "LLaVA-NeXT-Video",
      "PyTorch",
      "ROS",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan",
  },
  {
    id: 3,
    title: "Real-Time People Detection on Nvidia Jetson Nano",
    description:
      "Deployed a real-time people detection system using YOLO on the Nvidia Jetson Nano, achieving 50 FPS. Implemented TensorRT optimisation, reducing inference time by 30% for production edge AI deployment.",
    technologies: [
      "Python",
      "YOLO",
      "TensorRT",
      "Jetson Nano",
      "CUDA",
      "DeepStream",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan/tensorrt_demos",
  },
  {
    id: 4,
    title: "Automated Machine Learning Pipeline for NLP Sentiment Analysis",
    description:
      "Designed a modular pipeline for automated preprocessing, feature extraction, and model selection for text data. Integrated AutoML techniques to streamline the machine learning workflow for sentiment classification.",
    technologies: [
      "Python",
      "Scikit-learn",
      "AutoML",
      "AutoSklearn",
      "Pandas",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan/AUTO_ML_NLP",
  },
  {
    id: 5,
    title: "Robust Face Detection and Recognition System",
    description:
      "Real-time face detection and recognition pipeline combining YOLO, Facenet, and OpenCV for robust identification in live video streams. Designed for scalable deployment in access-control scenarios.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "YOLO",
      "Facenet",
      "Ultralytics",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    githubUrl: "https://github.com/Garthigan/Face_Recoginiton",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    id: 1,
    date: "Jul 2025 – Present",
    title: "Research Assistant",
    company:
      "Department of Computer Science and Engineering, University of Moratuwa",
    description: [
      "Conducting deep-learning research under Dr. T. Uthayasanker, Prof. Damminda Alahakoon, and Prof. Priyanga Ranasinghe in collaboration with La Trobe University and the University of Colombo.",
      "Developing an image-based system for calorie and nutrition estimation of Sri Lankan mixed meals.",
      "Working on food recognition, segmentation, portion estimation, and nutrient prediction using RAG.",
      "Using culturally specific datasets with ingredient and portion annotations.",
      "Producing publishable outcomes for computer vision and digital health conferences.",
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "RAG",
      "PyTorch",
    ],
    type: "research",
  },
  {
    id: 2,
    date: "Sep 2025 – Present",
    title: "Machine Learning Engineer",
    company: "Mammilway (Pvt) Ltd.",
    description: [
      "Designing and implementing MLOps workflows on AWS for AI-driven applications.",
      "Working on LLM agents, chatbot services, and recommendation engines.",
      "Handling model deployment, cloud infrastructure, API integration, CI/CD, and optimization.",
    ],
    technologies: ["Python", "AWS", "LLM", "MLOps", "Docker", "CI/CD"],
    type: "industry",
  },
  {
    id: 3,
    date: "Aug 2024 – Present",
    title: "Research Project — Enhanced Multimodal Human-Robot Interaction",
    company: "University of Moratuwa",
    description: [
      "Developed a modular framework for service robots using OpenAI Whisper, YOLOv8, and LLaVA-NeXT-Video.",
      "Integrated speech, vision, emotion recognition, and multimodal fusion for adaptive communication.",
      "Optimized models through quantization and fine-tuning for resource-limited hardware.",
      "Supervised by Dr. Buddhika Jayasekara and Dr. V Logeeshan.",
    ],
    technologies: [
      "Python",
      "OpenAI Whisper",
      "YOLOv8",
      "LLaVA-NeXT-Video",
      "PyTorch",
      "ROS",
    ],
    type: "research",
  },
  {
    id: 4,
    date: "Jan 2025 – Jun 2025",
    title: "Visiting Instructor",
    company: "Electrical Engineering Department, University of Moratuwa",
    description: [
      "Guided undergraduate students in hands-on robotics experiments.",
      "Focused on sensor integration, motor control, and autonomous navigation.",
      "Assisted in designing robotics and automation lab exercises.",
      "Worked under the supervision of Dr. Manuja Gunawardhana.",
    ],
    technologies: ["Robotics", "Embedded Systems", "Python", "C++"],
    type: "teaching",
  },
  {
    id: 5,
    date: "May 2024 – Jan 2025",
    title: "Associate Machine Learning Engineer",
    company: "SenzMate AIOT Intelligencies",
    description: [
      "Conducted performance analysis using people detection datasets.",
      "Improved detection accuracy and developed optimization strategies.",
      "Deployed YOLO with TensorRT on Nvidia Jetson Nano.",
      "Enhanced inference efficiency for edge AI deployment.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "YOLO",
      "TensorRT",
      "Jetson Nano",
      "CUDA",
    ],
    type: "industry",
  },
  {
    id: 6,
    date: "Nov 2023 – May 2024",
    title: "Machine Learning Engineer Intern",
    company: "SenzMate AIOT Intelligencies",
    description: [
      "Developed a real-time people detection system using YOLO on Nvidia Jetson Nano.",
      "Implemented TensorRT optimization, achieving a 30% reduction in inference time.",
      "Delivered 50 FPS performance in live video stream processing.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "MQTT",
      "Jetson Nano",
      "C++",
      "CUDA",
    ],
    type: "industry",
  },
];

// ─── Publications ─────────────────────────────────────────────────────────────

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Towards Enhanced Multimodal Human-Robot Interaction in Service Robots using Generative AI",
    authors: "Tharmilan, K. Garthigan, Henoshan",
    conference: "World AIIoT Congress 2025",
    location: "Seattle, USA",
    date: "May 2025",
    type: "conference",
  },
  {
    id: 2,
    title:
      "WebBioAuth: Privacy-Preserving Multimodal Biometric Authentication in the Browser",
    authors: "K. Garthigan, T. Uthayasanker",
    conference:
      "CVPR Workshop 2026 — Computer Vision for Biomechanics Workshop",
    location: "Denver, USA",
    date: "Sep 2025",
    type: "workshop",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "Java"],
  },
  {
    category: "Research Domains",
    items: [
      "Computer Vision",
      "Deep Learning",
      "Machine Learning",
      "Image Processing",
      "Human-Robot Interaction",
      "Robotics and Automation",
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    category: "MLOps and Cloud",
    items: ["AWS", "Docker", "CI/CD", "TensorRT", "CUDA", "MLflow"],
  },
  {
    category: "Platforms and Tools",
    items: ["NVIDIA Jetson Nano", "ROS", "Linux", "MQTT", "DeepStream"],
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
    specialization: "GPA: 3.68 / 4.0",
    institution: "University of Moratuwa",
    department: "Department of Electrical Engineering",
    year: "2021 – 2025",
    status: "Completed",
    coursework: [
      "Robotics and Control",
      "Pattern Recognition",
      "Neural Networks and Fuzzy Logic",
      "Intelligent Systems and Machine Learning",
      "Embedded Systems Design and Programming",
      "Digital Signal Processing",
      "Industrial Automation",
    ],
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

// ─── Awards ───────────────────────────────────────────────────────────────────

export const awards: Award[] = [
  {
    title: "Champions — Inter School Chemistry Quiz Competition",
    organization: "Sampath Bank",
    year: "2018",
  },
  {
    title: "Champions — District Level Badminton Championship",
    organization: "JDBA",
    year: "2018",
  },
  {
    title: "Second Place — Video Clip Contest",
    organization: "IEEE Signal Processing Society",
    year: "2021",
  },
  {
    title: "Participant — National Mathematics Olympiad",
    organization: "Ministry of Education",
    year: "2016, 2017",
  },
  {
    title: "Participant — U19 Provincial Level Cricket Championship",
    year: "2019",
  },
];

// ─── Leadership ───────────────────────────────────────────────────────────────

export const leadership: LeadershipItem[] = [
  {
    role: "President",
    organization: "St John Ambulance, Jaffna Hindu College",
    duration: "2011 – 2019",
    description: [
      "Led first aid training sessions and emergency drills.",
      "Organised health awareness programs.",
      "Currently serving as a certified First Aid Instructor.",
    ],
  },
  {
    role: "Director of Design",
    organization: "IEEE Power and Energy Society, University of Moratuwa",
    duration: "2023 – 2024",
    description: [
      "Led visual design, event branding, and promotional content creation.",
    ],
  },
  {
    role: "President",
    organization: "Media Team, University of Moratuwa",
    duration: "2024 – 2025",
    description: [
      "Led media team for event coverage and content creation.",
    ],
  },
  {
    role: "Captain",
    organization: "U17 Cricket Team, Jaffna Hindu College",
    duration: "2016 – 2017",
    description: [
      "Led the U17 cricket team and developed strategies for team performance.",
    ],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  {
    name: "Neural Networks and Machine Learning",
    issuer: "Coursera (Andrew Ng)",
    year: "2023",
  },
  {
    name: "Intro to TensorFlow for Deep Learning",
    issuer: "Udacity",
    year: "2024",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    year: "2023",
  },
  {
    name: "Generative AI for Everyone",
    issuer: "Coursera (Andrew Ng)",
    year: "2024",
  },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const aboutMe = {
  name: "Garthigan Kumarasamy",
  role: "Research Assistant & Machine Learning Engineer",
  affiliation: "University of Moratuwa, Sri Lanka",
  scholarUrl: "https://scholar.google.com/citations?user=733ZCgUAAAAJ&hl=en",
  summary:
    "I am a Research Assistant and Machine Learning Engineer at the University of Moratuwa, currently pursuing an MSc focused on image-based calorie and nutrition estimation using deep learning. My research spans computer vision, multimodal AI systems, and edge AI deployment. I am particularly interested in building AI systems that bridge the gap between academic research and real-world impact — from nutritional health monitoring to service robotics.",
  researchInterests: [
    "Computer Vision and Image Processing",
    "Deep Learning for Health and Nutrition Applications",
    "Multimodal Human-Robot Interaction",
    "Edge AI and On-Device Inference",
    "Generative AI and Large Language Models",
    "Retrieval-Augmented Generation (RAG)",
  ],
  personalInterests: [
    "Cricket",
    "Badminton",
    "Videography",
    "Video Editing",
    "Teaching",
    "Graphic Design",
  ],
};
