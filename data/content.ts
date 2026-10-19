export const site = {
  name: "sandeep mehta",
  title: "sandeep mehta — policy research & economics",
  description:
    "Policy research at the intersection of data, tech, governance and economics.",
  url: "https://sandeepmehta.vercel.app",
};

export const hero = {
  photo: "/profile.jpg",
  tagline: "policy research at the intersection of data, tech, governance and economics",
  intro:
    "I'm Sandeep, an economics student and policy researcher digging into how data, tech and governance shape public decisions, from regulation to research notes and everything in between. Explore my work below :)",
};

export type Entry = {
  role: string;
  company: string;
  url?: string;
  date: string;
  logo: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Entry[] = [
  {
    role: "Social Media and Communications Intern",
    company: "YLAC",
    url: "https://www.ylac.in/",
    date: "June 2026 – Present",
    logo: "/logos/ylac.png",
    bullets: [
      "Developed and executed a communications strategy to build greater visibility of YLAC's programs across digital platforms.",
      "Launched digital campaigns grounded in YLAC's work and aligned with social media trends to improve audience engagement.",
      "Produced content and designed visual collateral for various social media channels.",
    ],
  },
  {
    role: "Public Policy Fellow",
    company: "YLAC",
    url: "https://www.ylac.in/",
    date: "April 2026 – May 2026",
    logo: "/logos/ylac.png",
    bullets: [
      "Spearheaded live policy research for Lok Sabha MP Malvika Devi on improving agricultural incomes through crop diversification in Odisha.",
      "Examined agricultural data, farmer income trends, and government policy frameworks using research reports and secondary datasets.",
      "Constructed evidence-based policy recommendations through comparative analysis of successful agricultural models across Indian states.",
    ],
  },
];

export const openSource: Entry[] = [
  {
    role: "Contributor",
    company: "NVIDIA",
    url: "https://github.com/NVIDIA/nvcf/pull/1417",
    date: "Aug 2026",
    logo: "/logos/nvidia.png",
    bullets: [
      "Cut Stargate scale-up wait time by enabling **early readiness detection**, building a sampler that checks backend health every 1s and promotes readiness after 5 stable reads.",
      "Delivered a production Rust feature to NVIDIA's **nvcf** repo, validated by 349 tests, shipping a stabilization detector with timeout fallback.",
      "Made warmup tunable across deployments, adopted in **6+ NVIDIA services**, by exposing new CLI/Helm config options.",
    ],
    tags: ["Rust", "Helm", "Kubernetes", "Distributed Systems", "CLI Tools"],
  },
  {
    role: "Maintainer",
    company: "Invisible Notes",
    url: "https://github.com/navyabijoy/invisible-notes",
    date: "Aug 2026 - Sep 2026",
    logo: "/logos/invisible-notes.png",
    bullets: [
      "Created and maintain **invisible-notes**, an open-source Electron app for screen-share-invisible sticky notes, growing it to **35 stars** and **20 contributors**.",
      "Reviewed and merged code for **25 pull requests**, guiding contributor submissions and maintaining code quality across the repo.",
      "Grew adoption to **160+ downloads**, driving feature direction and prioritizing community-suggested improvements.",
    ],
    tags: ["JavaScript", "Electron", "Desktop Apps"],
  },
  {
    role: "Core Contributor",
    company: "Aden (YC W20)",
    url: "https://github.com/aden-hive/hive",
    date: "Mar 2026",
    logo: "/logos/aden.png",
    bullets: [
      "Integrated **7 Databricks MCP tools**, enabling AI agents to query SQL Warehouses, Vector Search indexes, and Unity Catalog functions.",
      "Engineered a read-only **safety/guardrail layer** for LLM tool-calling, blocking destructive SQL operations.",
      "Resolved a live multi-session **race condition** via two-layer PID validation across Linux and Windows.",
    ],
    tags: ["Python", "LLMs", "MCP", "Databricks"],
  },
  {
    role: "Contributor",
    company: "GirlScript Summer of Code",
    date: "Mar 2024 – May 2024",
    logo: "/logos/gssoc.png",
    bullets: [
      "Contributed **Machine Learning models** spanning data preprocessing, training, and evaluation.",
      "Finished in the **top 0.7% of contributors**, merging **9 PRs** into high-traffic ML repositories.",
    ],
    tags: ["Machine Learning", "Python"],
  },
];

export const education = [
  {
    title: "B.A (Hons) Business Economics",
    org: "Delhi University",
    date: "Aug 2024 – Present",
    logo: "/logos/du.png",
    bullets: [
      "**CGPA:** 7.91",
    ],
  },
];

export const achievements = {
  title: "Highlights & Awards",
  bullets: [
    "**LeetCode Knight (1909):** Ranked in the top **4%** globally across 800k+ participants. Placed **63** in weekly contest.",
    "**Google DeepMind Hackathon:** Top 25 Team at Bangalore Hackathon (2026), selected from top 250 participants out of 4000+ applicants.",
    "**Research:** Presented \"Hybrid Learning and Enhancing Strip Steel Surface Defect Detection Using Adaptive FusionNet Framework\" at an International Conference.",
    "**Hack Summit 5.0:** Won \"Best Scalable Idea\" and a cash prize among 200+ participants.",
  ],
};

export const excites =
  "I'm drawn to questions about how data and tech shape public decisions. Right now I'm deep into quantitative research and policy analysis, building work that makes sense of complex systems.";

export const connect =
  "Interested in policy, data and tech, or want to collaborate on research? Feel free to reach out!";

export const links = [
  { label: "email", href: "mailto:sandeepmehta2508.connect@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sandeep-mehta-25bb99231/" },
  { label: "github", href: "https://github.com/sandeepmehta08" },
];

export type Project = {
  title: string;
  url: string;
  thumbnail: string;
  date?: string;
  bullets: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Customer Predictive Value Modelling",
    url: "https://github.com/sandeepmehta08",
    thumbnail: "/projects/customer-predictive-value.png",
    date: "Nov 2025 – Dec 2025",
    bullets: [
      "Analyzed **500K+** retail transaction records to identify key revenue drivers across products, customers, and countries.",
      "Identified top-performing products and high-value customer segments based on revenue and purchasing behavior.",
      "Derived actionable insights to support AI/ML use cases such as customer value prediction and segmentation.",
    ],
    tags: ["Pandas", "NumPy", "Datetime", "Plotly"],
  },
  {
    title: "India's Economic Growth Analysis",
    url: "https://github.com/sandeepmehta08",
    thumbnail: "/projects/india-economic-growth.png",
    date: "Jan 2025 – Feb 2025",
    bullets: [
      "Conducted exploratory data analysis (EDA) on **60+ years** of India's macroeconomic data, focusing on GDP and key economic indicators.",
      "Analyzed structural breaks, cyclical patterns, and shock periods in economic growth.",
      "Produced decade-wise comparative analysis to capture transitions between stable growth and high-volatility phases.",
    ],
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Retail Price Elasticity Analysis",
    url: "https://github.com/sandeepmehta08",
    thumbnail: "/projects/retail-price-elasticity.png",
    date: "July 2025 – Aug 2025",
    bullets: [
      "Analyzed **10,000+** retail sales observations to examine the relationship between price and consumer demand.",
      "Estimated price elasticity of demand and derived optimal pricing insights grounded in microeconomic theory.",
      "Quantified revenue impact across different price levels to identify price–revenue trade-offs.",
    ],
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statsmodels"],
  },
  {
    title: "Conduit: SaaS Integration Gateway",
    url: "https://github.com/navyabijoy/conduit-go",
    thumbnail: "/projects/conduit.png",
    bullets: [
      "Architected a pluggable **Go SDK** enabling third-party API integration (GitHub, Slack, Stripe) with zero core-engine changes.",
      "Automated API documentation generation via runtime schema introspection, eliminating manual **OpenAPI 3.x** maintenance.",
      "Built a background schema-drift monitor flagging breaking upstream changes within **30 seconds**.",
    ],
    tags: ["Golang", "SQLite", "OpenAPI", "Prometheus"],
  },
  {
    title: "k8s Self-Healing Platform",
    url: "https://github.com/navyabijoy/k8s-self-healing-platform",
    thumbnail: "/projects/k8s-self-healing.png",
    bullets: [
      "Developed an automated remediation system handling **6 alert types** via Prometheus/Alertmanager webhooks, reducing MTTR from **5+ minutes to under 60 seconds**.",
      "Provisioned scalable, self-healing infrastructure across **3 Availability Zones** using **Terraform**.",
      "Configured autoscaling (2–10 replicas) with CI/CD-enforced validation on every deployment.",
    ],
    tags: ["Kubernetes", "Terraform", "Python", "Docker"],
  },
  {
    title: "Anchorpoint: Real-Time Geospatial Facility Siting Tool",
    url: "https://github.com/navyabijoy/mireye-anchorpoint",
    thumbnail: "/projects/anchorpoint.png",
    bullets: [
      "Built a self-serve **two-stage data pipeline** that clusters demand data and ranks candidate sites across 17+ variables.",
      "Architected an **async REST API** / microservice with a custom **WebSocket** manager for streaming live scoring progress.",
      "Designed a **two-tiered SQLite coordinate cache** with dynamic weight redistribution to cut redundant API calls.",
    ],
    tags: ["Python", "FastAPI", "React.js", "SQLite", "WebSockets"],
  },
  {
    title: "Fault-Tolerant Background Job Processing Service",
    url: "https://github.com/navyabijoy/job-processor",
    thumbnail: "/projects/job-processor.png",
    bullets: [
      "Designed an **asynchronous backend microservice** where REST API services enqueue jobs into **Redis** for independent worker processing.",
      "Architected **job lifecycle management** with persistent state tracking via **PostgreSQL/JPA** and retry logic guaranteeing at-least-once delivery.",
      "Benchmarked **100 jobs/sec** system throughput with horizontal scalability.",
    ],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    title: "recallAI: Agentic Knowledge-Graph Memory System",
    url: "https://github.com/navyabijoy/recallai",
    thumbnail: "/projects/recallai.png",
    bullets: [
      "Built a multi-user **agentic memory system** that creates persistent knowledge graphs from browser-captured activity, supporting **500K+ embeddings**.",
      "Implemented secure multi-tenant architecture using **JWT + API-key** authentication and a **FastAPI** backend.",
    ],
    tags: ["Python", "FastAPI", "Pinecone", "Neo4j"],
  },
  {
    title: "Encore: AI-Powered Semantic Recommendation Marketplace",
    url: "https://github.com/navyabijoy/mern-project",
    thumbnail: "/projects/encore.png",
    bullets: [
      "Built a **semantic search and recommendation engine** using **128D embeddings** for intent-aware product discovery with **sub-10ms matching latency**.",
      "Architected a full-stack marketplace using **MongoDB Atlas and Supabase**, decoupling 100% of binary assets for high performance.",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "NLP"],
  },
  {
    title: "StockUp - AI Pantry Management System",
    url: "https://github.com/navyabijoy/pantry-management",
    thumbnail: "/projects/stockup.png",
    bullets: [
      "Built an **AI-powered** pantry tracking system with real-time Supabase storage and Gemini-based recipe generation.",
      "Trained a MobileNet model achieving **96% image recognition accuracy** and deployed it to Hugging Face.",
    ],
    tags: ["Next.js", "TensorFlow", "Supabase", "Gemini API"],
  },
];

export const posts = [
  {
    emoji: "📝",
    title: "Building Retrieval Augmented Generation based Chatbots",
    url: "https://medium.com/@navyabijoy2004/building-retrieval-augmented-generation-based-chatbots-part-1-bea33e8ad078",
    date: "July 2024",
  },
  {
    emoji: "🧠",
    title: "Unraveling Tidy Data: Lessons from Hadley Wickham's Research",
    url: "https://medium.com/@navyabijoy2004/unraveling-tidy-data-lessons-from-hadley-wickhams-research-e9a496e4b021",
    date: "June 2024",
  },
];
