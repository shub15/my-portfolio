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
    images: [],
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
    images: [],
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
    images: [],
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