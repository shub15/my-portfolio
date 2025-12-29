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
import blockchainImage from "../assets/blockchain/blockchain (1).png";
import blockchainImage2 from "../assets/blockchain/blockchain (2).png";
import vitalquest1 from "../assets/vitalquest/vitalquest (1).jpg";
import vitalquest2 from "../assets/vitalquest/vitalquest (2).jpg";
import vitalquest3 from "../assets/vitalquest/vitalquest (3).jpg";
import vitalquest4 from "../assets/vitalquest/vitalquest (4).jpg";
import vitalquest5 from "../assets/vitalquest/vitalquest (5).jpg";
import vitalquest6 from "../assets/vitalquest/vitalquest (6).jpg";
import smartAgriculture from "../assets/smart_agriculture/smart_agri (1).png";
import paisaflow1 from "../assets/paisaflow/AI Financial Coaching App (1).png";
import paisaflow2 from "../assets/paisaflow/AI Financial Coaching App (2).png";
import paisaflow3 from "../assets/paisaflow/AI Financial Coaching App (3).png";
import paisaflow4 from "../assets/paisaflow/AI Financial Coaching App (4).png";
import paisaflow5 from "../assets/paisaflow/AI Financial Coaching App (5).png";
import paisaflow6 from "../assets/paisaflow/AI Financial Coaching App (6).png";
import paisaflow7 from "../assets/paisaflow/AI Financial Coaching App (7).png";
import paisaflow8 from "../assets/paisaflow/AI Financial Coaching App (8).png";
import paisaflow9 from "../assets/paisaflow/AI Financial Coaching App (9).png";
import paisaflow10 from "../assets/paisaflow/AI Financial Coaching App (10).png";
import paisaflow11 from "../assets/paisaflow/AI Financial Coaching App (11).png";
import paisaflow12 from "../assets/paisaflow/AI Financial Coaching App (12).png";
// TODO: Import images for new projects below
// import restroImage from "../assets/restro.png";
// import phishingImage from "../assets/phishing.png";

export const projectsData = [
  {
    id: "flagr-ai",
    title: "Flagr: AI Legal Advisor",
    subtitle: "Multi-Agent System for Contract Analysis",
    description: "An AI-powered legal advisor that uses a multi-agent system (Skeptic, Strategist, Auditor) with RAG-enhanced LLM councils to analyze employment contracts against Indian Labour Law. It identifies critical risks, missing clauses, and negotiable terms, providing a safety score with actionable recommendations and generating contextually-refined contracts.",
    link: "https://github.com/shub15/flagr",
    img: flagr4,
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
    id: "vitalquest",
    title: "VitalQuest",
    subtitle: "Gamified Health & Wellness App",
    description: "A mobile application that transforms healthy habits into an engaging RPG experience. Track daily activities like walking, meditating, and hydration while earning XP to level up your personalized character. Built with React Native and gamification mechanics to make wellness fun and sustainable.",
    link: "https://github.com/shub15/vitalquest",
    img: vitalquest1,
    images: [vitalquest1, vitalquest2, vitalquest3, vitalquest4, vitalquest5, vitalquest6],
    aspectRatio: "9/16",
    imageDetails: [
      {
        title: "Home Dashboard",
        description: "Main quest dashboard displaying daily health activities, XP progress, and active quests. Track your wellness journey with an intuitive RPG-style interface.",
        images: [vitalquest1],
        features: [
          "Daily quest overview",
          "XP progress tracking",
          "Active health activities",
          "Character level display"
        ]
      },
      {
        title: "User Profile & Stats",
        description: "Personalized profile showcasing your wellness journey, character stats, achievements earned, and overall progress metrics.",
        images: [vitalquest2],
        features: [
          "Character statistics",
          "Achievement showcase",
          "Progress history",
          "Personal wellness metrics"
        ]
      },
      {
        title: "Character Classes",
        description: "Choose from different character classes, each with unique abilities and progression paths. Customize your wellness journey based on your preferred playstyle.",
        images: [vitalquest3],
        features: [
          "Multiple character classes",
          "Unique class abilities",
          "Class-specific progression",
          "Visual character customization"
        ]
      },
      {
        title: "Achievements & Trophies",
        description: "Unlock achievements and trophies as you complete wellness milestones. Celebrate your health victories with a comprehensive trophy system.",
        images: [vitalquest4],
        features: [
          "Achievement unlocking system",
          "Trophy collection",
          "Milestone celebrations",
          "Progress badges"
        ]
      },
      {
        title: "Community Feed",
        description: "Share your wellness journey with the community. View posts from other users, get inspired, and stay motivated through social engagement.",
        images: [vitalquest5],
        features: [
          "Community post feed",
          "Social engagement",
          "Motivational content",
          "User interactions"
        ]
      },
      {
        title: "Post Upload",
        description: "Share your achievements and wellness milestones with the community. Upload photos, add captions, and inspire others on their health journey.",
        images: [vitalquest6],
        features: [
          "Photo upload",
          "Caption creation",
          "Achievement sharing",
          "Community posting"
        ]
      },
    ],
    stack: ["TypeScript", "React Native", "Python", "Kotlin", "Mobile Development"],
    features: [
      "RPG Character Progression",
      "Daily Quest System",
      "Health Activity Tracking",
      "Gamification Mechanics",
      "Cross-platform Mobile App",
    ],
    featureHeading: "Make Wellness Fun Through Gaming",
  },
  {
    id: "paisaflow",
    title: "PaisaFlow",
    subtitle: "SMS-Based Expense Tracker",
    description: "An intelligent expense tracking system that automatically analyzes SMS messages from banks to categorize transactions, track spending patterns, and provide financial insights. Uses Python backend with Celery for asynchronous processing and MongoDB for data storage.",
    link: "https://github.com/shub15/paisaflow",
    img: paisaflow1,
    images: [paisaflow1, paisaflow2, paisaflow3, paisaflow4, paisaflow5, paisaflow6, paisaflow7, paisaflow8, paisaflow9, paisaflow10, paisaflow11, paisaflow12],
    aspectRatio: "9/16",
    imageDetails: [
      {
        title: "Dashboard Overview",
        description: "Main dashboard providing a comprehensive view of your financial health with real-time balance tracking, recent transactions, and quick access to key features.",
        images: [paisaflow1],
        features: [
          "Real-time balance display",
          "Recent transaction feed",
          "Quick action buttons",
          "Financial health score"
        ]
      },
      {
        title: "Transaction Analysis",
        description: "Detailed transaction list with automatic categorization from SMS parsing. View all your income and expenses with smart filtering and search capabilities.",
        images: [paisaflow2, paisaflow3],
        features: [
          "Automatic SMS parsing",
          "Smart categorization",
          "Transaction filtering",
          "Search functionality"
        ]
      },
      {
        title: "AI Financial Coaching",
        description: "Personalized AI-powered financial advice and insights based on your spending patterns. Get actionable recommendations to improve your financial health.",
        images: [paisaflow4, paisaflow5],
        features: [
          "AI-powered insights",
          "Personalized recommendations",
          "Spending pattern analysis",
          "Financial tips"
        ]
      },
      {
        title: "Spending Insights & Analytics",
        description: "Visual analytics showing spending trends, category breakdowns, and monthly comparisons. Understand where your money goes with interactive charts.",
        images: [paisaflow6, paisaflow7, paisaflow8],
        features: [
          "Category-wise breakdown",
          "Trend visualization",
          "Monthly comparisons",
          "Interactive charts"
        ]
      },
      {
        title: "Category Management",
        description: "Customize and manage expense categories to match your lifestyle. Set budgets for each category and track your spending against limits.",
        images: [paisaflow9, paisaflow10],
        features: [
          "Custom categories",
          "Budget setting",
          "Category-wise limits",
          "Spending alerts"
        ]
      },
      {
        title: "Financial Goals & Savings",
        description: "Set and track financial goals with progress monitoring. Plan your savings and get insights on how to achieve your targets faster.",
        images: [paisaflow11, paisaflow12],
        features: [
          "Goal setting",
          "Progress tracking",
          "Savings recommendations",
          "Achievement milestones"
        ]
      },
    ],
    stack: ["Python", "Celery", "MongoDB", "Docker", "SMS Processing"],
    features: [
      "Automated SMS Parsing",
      "Transaction Categorization",
      "Expense Trend Analysis",
      "Asynchronous Processing",
      "Financial Insights Dashboard",
    ],
    featureHeading: "Effortless Expense Tracking from SMS",
  },
  {
    id: "axiom-station",
    title: "Axiom Station: AI Agent Workflow Platform",
    subtitle: "Lovable for AI Agents",
    description: "A comprehensive platform for building, deploying, and managing AI agent workflows effortlessly. Reef enables users to create intelligent multi-agent systems through natural language interfaces and visual workflow builders. Features a Next.js frontend and FastAPI backend (Axiom Factory) for containerized agent deployment.",
    link: "https://github.com/shub15/axiom-station-final",
    img: "https://via.placeholder.com/600x400?text=Axiom+Station",
    images: ["https://via.placeholder.com/600x400?text=Axiom+Station"],
    imageDetails: [
      {
        title: "AI Agent Workflow Platform",
        description: "Build complex multi-agent systems through conversational AI and visual workflow design. Features real-time monitoring, containerized deployment, and extensive tool integration.",
        images: ["https://via.placeholder.com/600x400?text=Axiom+Station"],
        features: [
          "Natural language workflow creation",
          "Visual workflow designer",
          "Real-time monitoring & analytics",
          "Docker-based agent deployment"
        ]
      },
    ],
    stack: ["TypeScript", "Next.js", "Python", "FastAPI", "Docker", "Firebase", "Kotlin"],
    features: [
      "Natural Language Workflow Creation",
      "Visual Workflow Designer",
      "Firebase Authentication",
      "Real-time Trace Viewing",
      "Containerized Agent Deployment",
      "Multi-Agent Orchestration",
      "Tool Integration via Arcade",
    ],
    featureHeading: "Build AI Agents Through Conversation",
  },
  {
    id: "blockchain-verification",
    title: "Blockchain Document Verification",
    subtitle: "Decentralized Certificate Platform",
    description: "Developed a decentralized document verification platform enabling institutions to issue tamper-proof digital certificates. Implemented smart contracts to ensure document integrity and prevent forgery without relying on centralized servers.",
    link: "https://github.com/shub15/blockchain-document",
    img: blockchainImage,
    images: [blockchainImage],
    imageDetails: [
      {
        title: "Certificate Issuance",
        description: "Institutions can issue tamper-proof digital certificates stored on the blockchain, ensuring authenticity and preventing forgery.",
        images: [blockchainImage],
        features: [
          "Smart contract deployment",
          "Institutional dashboard",
          "Batch certificate issuance",
          "Immutable record storage"
        ]
      },
      {
        title: "User Dashboard",
        description: "Users can view their certificates and verify them using the blockchain.",
        images: [blockchainImage2],
        features: [
          "Certificate verification",
          "User dashboard",
          "Certificate history",
          "Certificate download"
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
    link: "https://github.com/shub15/restrostats",
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
    img: smsPresentation,
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
    link: "https://github.com/shub15/phishing-url-detection",
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
  {
    id: "iot-water-monitoring",
    title: "IoT Water Quality Monitor",
    subtitle: "Real-time Water Analysis System",
    description: "An IoT-based water quality monitoring system using Arduino and various sensors to measure pH, turbidity, temperature, and other water quality parameters. Provides real-time data collection and analysis for ensuring safe drinking water.",
    link: "https://github.com/shub15/iot-water-monitoring",
    img: "https://via.placeholder.com/600x400?text=Water+Monitor",
    images: ["https://via.placeholder.com/600x400?text=Water+Monitor"],
    imageDetails: [
      {
        title: "Real-Time Water Quality Sensing",
        description: "Monitor water quality parameters in real-time using IoT sensors. Track pH levels, turbidity, temperature, and contamination to ensure water safety.",
        images: ["https://via.placeholder.com/600x400?text=Water+Monitor"],
        features: [
          "Multi-sensor integration",
          "Real-time monitoring",
          "Water quality analysis",
          "Arduino-based system"
        ]
      },
    ],
    stack: ["C++", "Arduino", "IoT", "Embedded Systems", "Sensors"],
    features: [
      "Real-time Water Quality Monitoring",
      "Multi-Parameter Sensing",
      "IoT Data Collection",
      "Arduino Integration",
      "Safety Alert System",
    ],
    featureHeading: "Ensuring Safe Water Through IoT",
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture System",
    subtitle: "IoT-Enabled Farming Solution",
    description: "An intelligent agriculture system leveraging IoT sensors and automation to optimize farming practices. Monitors soil moisture, temperature, humidity, and automates irrigation to improve crop yield and resource efficiency.",
    link: "https://github.com/shub15/smart-agriculture",
    img: smartAgriculture,
    images: [smartAgriculture],
    imageDetails: [
      {
        title: "Automated Farming Intelligence",
        description: "IoT-based system that monitors environmental conditions and automates irrigation. Optimizes water usage and improves crop health through data-driven decisions.",
        images: [smartAgriculture],
        features: [
          "Soil moisture monitoring",
          "Automated irrigation",
          "Environmental sensing",
          "Resource optimization"
        ]
      },
    ],
    stack: ["C++", "Arduino", "IoT", "Embedded Systems", "Automation"],
    features: [
      "Automated Irrigation Control",
      "Soil Moisture Monitoring",
      "Environmental Data Collection",
      "Resource Optimization",
      "IoT Sensor Integration",
    ],
    featureHeading: "Precision Farming Through IoT",
  },
];