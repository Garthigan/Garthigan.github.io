
export interface Publication {
  id: number;
  title: string;
  authors: string;
  conference: string;
  location: string;
  date: string;
  type: "conference" | "workshop" | "journal";
  link?: string;
  demoUrl?: string;
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
    demoUrl: "https://garthigan.github.io/thirupukal-webpage/",
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
  fullBio:
    "Hi, I'm Garthigan from Jaffna, Sri Lanka. I spent my childhood and adolescence in Nallur, Jaffna, my all-time favourite place.\n\nI come from a typical middle-class family with one brother and one sister. My parents have sacrificed so much for us, and I know this is a common story in many families. I really love my family.\n\nThey sent me to one of the most famous schools in Jaffna, Jaffna Hindu College. I was a very average student with no particular dreams. I didn't even have a good understanding of my studies. Everything started to change when my brother entered the Faculty of Engineering at the University of Peradeniya while I was in Grade 8. That was when I first realised that I needed to work harder and take my studies seriously.\n\nI love cricket, and I played for my school cricket team from Grade 6 to Grade 12. However, I gave it up to focus on my A/L studies.\n\nI don't consider myself an exceptionally intelligent person, but I'm absolutely sure that I can work hard and study hard. For example, if I don't understand a chapter while studying, I might spend an entire month trying to understand it. I search for information, explore different resources, and do whatever I can until I understand the topic.\n\nAbove all, I'm just an ordinary guy. I enjoy hanging out with friends, spending time at restaurants, and going on at least two trips every month.\n\nAfter finishing my A/Ls, I moved to the University of Moratuwa for my undergraduate studies. I was excited to go there because it is the dream university for many Sri Lankan students in the physical sciences. By God's grace, I was selected.\n\nStill, nothing compares to life back home and the weather in Jaffna.\n\nUniversity life is an important phase in our lives. It is where we begin to understand who we are and what we are capable of. In my first year, we experienced COVID-19 in 2020, so we had to attend our first semester online. (I really hated online lectures!)\n\nAfter that semester, I joined the Department of Electrical Engineering and eventually completed my undergraduate degree.\n\nDuring that time, I secured an internship at SenzMate IoT Intelligence as a Machine Learning Engineer Intern. There, I had two great mentors, Alex and Arunn, who introduced me to the world of computer vision. Until then, I hadn't known much about computer vision, but that experience opened up a whole new area of interest for me.\n\nI got involved in research activities during my internship and gradually developed an interest in research. For my final-year project, I worked on topics related to computer vision and robotics, and I also published a research paper.\n\nAfter completing my undergraduate degree, I found myself stuck, unsure of what to do next, and without any clear plans. But whenever I found myself in a difficult situation, there was always someone to help me move forward. One such person was Shiveswarran. He was already pursuing his master's degree under Professor Uthayasanker Thayasivam, and he told me that the professor was looking for a master's research student.\n\nI met Professor Uthayasanker and began my master's research journey. My research involves three supervisors and collaborations with the University of Colombo and La Trobe University in Melbourne, Australia.\n\nAnd that's how my journey has unfolded so far.\n\nI've experienced many ups and downs over the years. Somehow, I'm still moving forward. I've been fortunate to have so many good friends along the way, although everyone has chosen their own career path. I also lost my friend Abinajan in 2023, a loss that remains part of my story.\n\nThere is so much more to tell, but this is just a short introduction to who I am.\n\nJust an ordinary person with confidence, a willingness to work hard, and a long way still to go.",
  travelledCountries: ["Singapore", "Malaysia", "India"],
  favouriteQuote: {
    tamil: "யாதும் ஊரே யாவரும் கேளிர்",
    translation: "I am a world citizen; every citizen is my own kith and kin.",
  },
};
