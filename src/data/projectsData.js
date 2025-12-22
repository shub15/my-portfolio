import collegeFinderImage from "../assets/college_finder/preview.png";
import smsCertificate from "../assets/sms_analysis/certificate.jpg";
import smsPresentation from "../assets/sms_analysis/presentation.jpeg";
import roboconImage from "../assets/robocon/robocon_2025_bot_photo.jpeg";
import flagr1 from "../assets/flagr/flagr (1).png";
import flagr2 from "../assets/flagr/flagr (2).png";
import flagr3 from "../assets/flagr/flagr (3).png";
import flagr4 from "../assets/flagr/flagr (4).png";
import flagr5 from "../assets/flagr/flagr (5).png";
import flagr6 from "../assets/flagr/flagr (6).png";
import flagr7 from "../assets/flagr/flagr (7).png";
import flagr8 from "../assets/flagr/flagr (8).png";
// TODO: Import images for new projects below
// import blockchainImage from "../assets/blockchain.png";
// import restroImage from "../assets/restro.png";
// import phishingImage from "../assets/phishing.png";

export const projectsData = [
  {
    id: "flagr-ai",
    title: "Flagr: AI Legal Advisor",
    subtitle: "Multi-Agent System for Contract Analysis",
    description: "An AI-powered legal advisor that uses a multi-agent system (Skeptic, Strategist, Auditor) with RAG-enhanced LLM councils to analyze employment contracts against Indian Labour Law. It identifies critical risks, missing clauses, and negotiable terms, providing a safety score with actionable recommendations and generating contextually-refined contracts.",
    link: "https://github.com/shub15/flagr",
    img: flagr1,
    images: [flagr1, flagr2, flagr3, flagr4, flagr5, flagr6, flagr7, flagr8],
    imageDetails: [
      {
        title: "Landing Page & Contract Upload",
        description: "Clean, intuitive interface for uploading employment contracts. Users can drag-and-drop PDF files or paste contract text directly for instant analysis.",
        images: [flagr1, flagr2],
        features: [
          "Drag-and-drop PDF upload",
          "Text paste support",
          "Real-time file validation",
          "Responsive design"
        ]
      },
      {
        title: "Multi-Agent Analysis Dashboard",
        description: "Real-time visualization of the three AI agents (Skeptic, Strategist, Auditor) working in parallel to analyze different aspects of the contract, powered by LangGraph orchestration.",
        images: [flagr3],
        features: [
          "Real-time agent visualization",
          "Parallel processing display",
          "LangGraph orchestration",
          "Progress tracking"
        ]
      },
      {
        title: "Risk Assessment & Safety Score",
        description: "Comprehensive safety score calculation with visual breakdown of critical risks, missing clauses, and compliance issues identified against Indian Labour Law.",
        images: [flagr4],
        features: [
          "0-100 safety score",
          "Risk categorization",
          "Visual breakdown charts",
          "Compliance checklist"
        ]
      },
      {
        title: "Detailed Clause-by-Clause Review",
        description: "In-depth analysis highlighting problematic clauses with severity indicators, legal explanations, and specific recommendations for negotiation.",
        images: [flagr5],
        features: [
          "Severity indicators",
          "Legal explanations",
          "Negotiation tips",
          "Highlighted problem areas"
        ]
      },
      {
        title: "RAG-Enhanced Recommendations",
        description: "AI-powered suggestions backed by legal precedents and regulations retrieved from the Pinecone vector database, ensuring contextually accurate advice.",
        images: [flagr6],
        features: [
          "Legal precedent citations",
          "Regulation references",
          "Vector database integration",
          "Context-aware suggestions"
        ]
      },
      {
        title: "Contract Refinement & Export",
        description: "Automated contract generation with side-by-side comparison and professional PDF reports with analysis summary, ready to share with legal advisors or employers.",
        images: [flagr7, flagr8],
        features: [
          "Side-by-side comparison",
          "PDF report generation",
          "Automated rewriting",
          "Export options"
        ]
      },
    ],
    stack: ["React", "FastAPI", "LLM Orchestration", "LangGraph", "Pinecone (VectorDB)", "Postgres"],
    features: [
      "Multi-Agent Architecture (Skeptic, Strategist, Auditor)",
      "RAG-Enhanced LLM Analysis",
      "Critical Risk Identification",
      "Safety Score Calculation",
      "Automated Contract Refinement",
    ],
    featureHeading: "Comprehensive Automated Legal Analysis",
  },
  {
    id: "robocon-2025",
    title: "Basketball Playing Robot",
    subtitle: "Robocon 2025 (Ranked 16th/40)",
    description: "Designed and built for the ABU Robocon 2025 competition. Implemented a 3-wheel holonomic drive with pneumatic actuations and integrated various sensors. The system uses an embedded control setup with STM32 and ESP32 for wireless communication, controlled via a PS5 controller for precise robotic operations.",
    link: "https://github.com/robocon-kjsieit",
    img: roboconImage,
    images: [roboconImage],
    imageDetails: [
      {
        title: "Holonomic Drive System",
        description: "Custom-designed 3-wheel omnidirectional drive system enabling precise movement in any direction without rotation, crucial for basketball gameplay mechanics.",
        images: [roboconImage],
        features: [
          "360° movement capability",
          "Zero turning radius",
          "Precise positioning control",
          "High-torque DC motors"
        ]
      },
    ],
    stack: ["STM32", "ESP32", "Arduino", "C/C++", "Pneumatics", "Control Systems"],
    features: [
      "3-Wheel Holonomic Drive System",
      "Pneumatic Actuation for Mechanisms",
      "Wireless PS5 Controller Integration",
      "STM32 & ESP32 Embedded Control",
      "Real-time Sensor Fusion",
    ],
    featureHeading: "Precision Robotics & Embedded Control",
  },
  {
    id: "blockchain-verification",
    title: "Blockchain Document Verification",
    subtitle: "Decentralized Certificate Platform",
    description: "Developed a decentralized document verification platform enabling institutions to issue tamper-proof digital certificates. Implemented smart contracts to ensure document integrity and prevent forgery without relying on centralized servers.",
    link: "https://github.com/shub15",
    img: "https://via.placeholder.com/600x400?text=Blockchain+Project",
    images: ["https://via.placeholder.com/600x400?text=Blockchain+Project"],
    imageDetails: [
      {
        title: "Certificate Issuance",
        description: "Institutions can issue tamper-proof digital certificates stored on the blockchain, ensuring authenticity and preventing forgery.",
        images: ["https://via.placeholder.com/600x400?text=Blockchain+Project"],
        features: [
          "Smart contract deployment",
          "Institutional dashboard",
          "Batch certificate issuance",
          "Immutable record storage"
        ]
      },
    ],
    stack: ["Ethereum", "Solidity", "Hardhat", "MERN Stack", "Blockchain"],
    features: [
      "Tamper-proof Digital Certificates",
      "Decentralized Verification",
      "Smart Contract Integration",
      "Forgery Prevention",
      "Serverless Integrity Check",
    ],
    featureHeading: "Secure & Immutable Document Verification",
  },
  {
    id: "restro-stats",
    title: "RestroStats",
    subtitle: "SaaS Business Analytics Platform",
    description: "Built a SaaS platform providing actionable insights from payment transactions to help businesses increase sales revenue. Delivers daily and monthly reports on peak hours analysis, customer purchasing patterns, and sales forecasting.",
    link: "https://github.com/shub15",
    img: "https://via.placeholder.com/600x400?text=RestroStats",
    images: ["https://via.placeholder.com/600x400?text=RestroStats"],
    imageDetails: [
      {
        title: "Analytics Dashboard",
        description: "Comprehensive business intelligence dashboard providing actionable insights from transaction data to boost revenue and optimize operations.",
        images: ["https://via.placeholder.com/600x400?text=RestroStats"],
        features: [
          "Revenue analytics",
          "Peak hour identification",
          "Customer behavior tracking",
          "ML-powered forecasting"
        ]
      },
    ],
    stack: ["Python", "Flask", "React", "Tailwind CSS", "MySQL", "Scikit-Learn"],
    features: [
      "Peak Hour Sales Analysis",
      "Customer Purchasing Patterns",
      "Sales Forecasting (ML)",
      "Daily & Monthly Reporting",
      "Actionable Revenue Insights",
    ],
    featureHeading: "Data-Driven Business Intelligence",
  },
  {
    id: "sms-data-analysis",
    title: "SMS Data Analysis",
    subtitle: "Analyzed 100k+ SMS records",
    description: "Analyzed 100,000+ daily SMS data entries to extract financial information related to credit & debit transactions, loans, EMI amounts, and user spending & earning trends. Created during the Finathon hackathon to showcase financial literacy potential.",
    link: "https://github.com/shub15/sms_data_analysis",
    img: "https://media.licdn.com/dms/image/v2/D4D22AQHmXcTFixMFRA/feedshare-shrink_2048_1536/B4DZUOq32FHkAo-/0/1739707875836?e=1756944000&v=beta&t=gkrW0uQ2JKp1Qn99SZhMEBvvLGwI48KpWZPEMLl7sik",
    images: [smsCertificate, smsPresentation],
    imageDetails: [
      {
        title: "Hackathon Achievement",
        description: "Award-winning project at Finathon hackathon demonstrating the potential of SMS data for financial literacy and insights.",
        images: [smsCertificate],
        features: [
          "Hackathon winner certificate",
          "Financial literacy focus",
          "Real-world application",
          "Team collaboration"
        ]
      },
      {
        title: "Data Analysis & Insights",
        description: "Comprehensive analysis pipeline processing 100,000+ SMS records to extract actionable financial intelligence.",
        images: [smsPresentation],
        features: [
          "Transaction categorization",
          "Trend visualization",
          "Spending pattern detection",
          "EMI & loan tracking"
        ]
      },
    ],
    stack: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    features: [
      "Automated Transaction Categorization",
      "Credit & Debit Trend Analysis",
      "EMI & Loan Detection",
      "Spending vs Earning Visualization",
      "Large-scale Data Processing (100k+)",
    ],
    featureHeading: "Financial Insights from Unstructured Data",
  },
  {
    id: "phishing-detection",
    title: "Phishing URL Detection",
    subtitle: "ML-Powered Browser Extension",
    description: "Developed a browser extension backed by a Flask API to detect phishing URLs. Achieved 95% accuracy in identifying malicious links using Machine Learning techniques.",
    link: "https://github.com/shub15",
    img: "https://via.placeholder.com/600x400?text=Phishing+Detection",
    images: ["https://via.placeholder.com/600x400?text=Phishing+Detection"],
    imageDetails: [
      {
        title: "Real-time URL Detection",
        description: "Browser extension with ML backend that analyzes URLs in real-time to detect phishing attempts with 95% accuracy.",
        images: ["https://via.placeholder.com/600x400?text=Phishing+Detection"],
        features: [
          "Instant URL scanning",
          "95% detection accuracy",
          "Visual threat indicators",
          "One-click reporting"
        ]
      },
    ],
    stack: ["Flask", "Pandas", "NumPy", "Scikit-Learn", "BeautifulSoup"],
    features: [
      "Real-time URL Scanning",
      "95% Detection Accuracy",
      "Browser Extension Integration",
      "Flask API Backend",
      "Machine Learning Classification",
    ],
    featureHeading: "Proactive Cybersecurity Protection",
  },
  {
    id: "college-finder",
    title: "College Finder",
    subtitle: "Admission Assistance Platform",
    description: "A full-stack application with a user dashboard to assist students in finding colleges based on scores and cutoffs. Features include search, filtering, and comparison tools.",
    link: "https://github.com/shub15/cetcollegefinder",
    img: collegeFinderImage,
    images: [collegeFinderImage],
    imageDetails: [
      {
        title: "College Search & Dashboard",
        description: "Intuitive search interface allowing students to filter colleges based on entrance exam scores, cutoffs, location, and preferences with a personalized dashboard.",
        images: [collegeFinderImage],
        features: [
          "Multi-criteria search",
          "Real-time filtering",
          "Personalized dashboard",
          "Cutoff comparison"
        ]
      },
    ],
    stack: ["Java", "Spring Boot", "Docker", "React", "MySQL", "JDBC", "TailwindCSS"],
    features: [
      "Cutoff-based Search Filters",
      "College Comparison Tool",
      "Personalized User Dashboard",
      "Secure Authentication",
      "Responsive UI Design",
    ],
    featureHeading: "Student can prepare customized list of colleges",
  },
];