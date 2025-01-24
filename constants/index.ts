export interface Card {
  title: string;
  description: string;
}

// Interface for the props
export interface WhoShouldTakeThisCourseProps {
  heading: string;
  data: Card[];
}
export const AiForSmeData = [
  {
    title: "Small Business Owners",
    description:
      "Entrepreneurs looking to innovate and grow through AI-powered strategies.",
  },
  {
    title: "Local Business Leaders",
    description:
      "Owners of retail, service, or hospitality businesses seeking operational efficiency.",
  },
  {
    title: "Freelancers and Solopreneurs",
    description:
      "Individuals aiming to integrate AI into their personal business processes.",
  },
];

export const AiForLeaderData = [
  {
    title: "Business Leaders",
    description:
      "CEOs, CTOs, and executives looking to integrate AI into their organizations",
  },
  {
    title: "Entrepreneurs",
    description:
      "Startup founders aiming to leverage AI for competitive advantage",
  },
  {
    title: "Decision Makers",
    description:
      "Managers and directors responsible for strategic technology adoption",
  },
];

export const GoldTierData = [
  {
    title: "Aspiring Data Professionals",
    description:
      "Start your journey in AI and data science with a strong foundation.",
  },
  {
    title: "Career Switchers",
    description:
      "Explore exciting opportunities in the fast-growing AI job market.",
  },
  {
    title: "Students & Graduates",
    description:
      "Build a solid understanding of AI and its applications in today's world.",
  },
];

export const DaimondTierData = [
  {
    title: "Data Scientists",
    description:
      "Advanced practitioners ready to master complex AI architectures and enterprise-scale model deployment.",
  },
  {
    title: "AI Developers",
    description:
      "Developers aiming to excel in transformer architectures and LLM implementations for production environments.",
  },
  {
    title: "DevOps Engineers",
    description:
      "Infrastructure specialists focused on AI system architecture and MLOps for high-performance deployments.",
  },
];
export const PlatinumTierData = [
  {
    title: "Data Professionals",
    description:
      "Data professionals seeking to scale their expertise in advanced analytics, machine learning, and AI-powered dashboards.",
  },
  {
    title: "Business Analysts",
    description:
      "Business analysts transitioning into data science roles, leveraging their analytical skills with cutting-edge AI tools.",
  },
  {
    title: "Developers",
    description:
      "Developers looking to integrate AI into their workflows, building intelligent applications and systems.",
  },
];

// key takeaways

export const takeawaysContent = {
  heading: "Key Takeaways",
  takeaways: [
    {
      icon: "✏️",
      text: "Contextualizing AI into your business and the environment today",
    },
    {
      icon: "✨",
      text: "Finding your first AI use case",
    },
    {
      icon: "✔️",
      text: "Methods to evaluate and prioritize use cases",
    },
    {
      icon: "📋",
      text: "AI case studies for enterprise and personal productivity",
    },
    {
      icon: "⚡",
      text: "Real-world tactics of ML execution, including business trade-offs",
    },
    {
      icon: "⭐",
      text: "Responsible AI deployment and risk mitigation",
    },
  ],
};
export const ethicsTakeawaysContent = {
  heading: "Key Takeaways",
  takeaways: [
    {
      icon: "✏️",
      text: "Understand ethical challenges and frameworks for responsible AI",
    },
    {
      icon: "✨",
      text: "Develop policies and strategies for ethical AI deployment",
    },
    {
      icon: "✔️",
      text: "Identify and mitigate bias in datasets and models",
    },
    {
      icon: "📋",
      text: "Explore tools and techniques to ensure compliance.",
    },
    {
      icon: "⚡",
      text: "Build AI systems that are interpretable and accountable",
    },
    {
      icon: "⭐",
      text: "Responsible AI deployment and risk mitigation",
    },
  ],
};
export const SmeTakeawaysContent = {
  heading: "Key Takeaways",
  takeaways: [
    {
      icon: "✏️",
      text: "Understand AI in the context of small business challenges and opportunities.",
    },
    {
      icon: "✨",
      text: "Finding your first AI use case",
    },
    {
      icon: "✔️",
      text: "Techniques to prioritize impactful AI use cases.",
    },
    {
      icon: "📋",
      text: "Real-world applications of AI for marketing, operations, and customer retention.",
    },
    {
      icon: "⚡",
      text: "Evaluate build vs. buy decisions tailored to smaller budgets.",
    },
    {
      icon: "⭐",
      text: "Ethical and practical approaches to ensure AI integrity.",
    },
  ],
};
export const GoldTakeawaysContent = {
  heading: "What You'll Learn: Building Your Skills",
  takeaways: [
    {
      icon: "🧠", // Brain icon
      text: "Master the basics of AI and Machine Learning concepts, establishing your foundation",
    },
    {
      icon: "⚙️", // Gear icon
      text: "Develop expertise in Python, SQL, and Power BI for effective data manipulation",
    },
    {
      icon: "🎯", // Target icon
      text: "Learn structured problem-solving approaches and data-driven decision making",
    },
    {
      icon: "📊", // Bar chart icon
      text: "Build skills in analyzing and visualizing data to uncover meaningful patterns",
    },
    {
      icon: "🤖", // Robot icon
      text: "Master the art of interacting with GenAI models effectively",
    },
  ],
};
export const daimondTakeawaysContent = {
  heading: "What You'll Learn: Building Your Skills",
  takeaways: [
    {
      icon: "🧠", // Brain icon
      text: "Advanced A/B testing and regression analysis.",
    },
    {
      icon: "⚙️", // Gear icon
      text: "Tree-based algorithms and ensemble techniques.",
    },
    {
      icon: "🎯", // Target icon
      text: "Extract insights using state-of-the-art language models.",
    },
    {
      icon: "📊", // Bar chart icon
      text: "Build and deploy Retrieval-Augmented Generation (RAG) systems.",
    },
  ],
};
export const platinumTakeawaysContent = {
  heading: "What You'll Learn: Building Your Skills",
  takeaways: [
    {
      icon: "🧠", // Brain icon
      text: "Apply statistical methods to real-world problems, validate results and draw meaningful conclusions",
    },
    {
      icon: "⚙️", // Gear icon
      text: "Master predictive modeling and Python scripting to extract actionable insights from data",
    },
    {
      icon: "🎯", // Target icon
      text: "Learn supervised and unsupervised learning techniques for classification, regression, and clustering",
    },
    {
      icon: "📊", // Bar chart icon
      text: "Build interactive Power BI dashboards to showcase key performance indicators and trends",
    },
  ],
};

// course structure data

export const courseStructureData = {
  heading: "Course Structure",
  courseItems: [
    {
      id: 1,
      title: "Interactive Live Sessions",
      description: "2 days to interact with instructors and peers.",
    },
    {
      id: 2,
      title: "Lifetime Access",
      description: "Unlimited access to course materials.",
    },
    {
      id: 3,
      title: "In-Depth Lessons",
      description:
        "40+ slides, worksheet, frameworks to learn and apply AI principles.",
    },
    {
      id: 4,
      title: "Case Study Based Learning",
      description: "Real-world case study to put learning into practice.",
    },
    {
      id: 5,
      title: "Guided Feedback",
      description: "Get constructive feedback on your work.",
    },
    {
      id: 6,
      title: "Certificate of Completion",
      description: "Show off your new AI leadership skills.",
    },
  ],
};

export const courseStructureDataGold = {
  heading: "Session-Wise Curriculum: A Step-by-Step Journey",
  courseItems: [
    {
      id: 1,
      title: "Week 1",
      description: [
        "Business Basics for Data Science & AI",
        "Prompt Engineering Fundamentals",
      ],
    },
    {
      id: 2,
      title: "Week 2",
      description: [
        "SQL Basics for Business Analysis",
        "Introduction to Visualization Using Power BI",
      ],
    },
    {
      id: 3,
      title: "Week 3",
      description: [
        "Statistics for Data Science & AI using Python",
        "Live Hands-On Project: SQL",
      ],
    },
    {
      id: 4,
      title: "Week 4",
      description: [
        "Live Hands-On Project: Power BI",
        "Live Hands-On Project: Python",
      ],
    },
  ],
};

export const courseStructureDataDaimond = {
  heading: "Session-Wise Curriculum: A Step-by-Step Journey",
  courseItems: [
    {
      id: 1,
      title: "Week 1",
      description: [
        "Introduction to Product Analytics",
        "Experiment Design and A/B Testing",
      ],
    },
    {
      id: 2,
      title: "Week 2",
      description: [
        "Regression Analysis in Depth",
        "Live Hands-On Project: Credit Decisioning Systems",
      ],
    },
    {
      id: 3,
      title: "Week 3",
      description: [
        "Advanced Tree-Based Algorithms",
        "Live Hands-On Project: Propensity Modeling",
      ],
    },
    {
      id: 4,
      title: "Week 4",
      description: [
        "NLP Fundamentals, Transformers, and LLMs",
        "Live Hands-On Project: Building a Functional RAG System",
      ],
    },
  ],
};
export const courseStructureDataPlatinum = {
  heading: "Session-Wise Curriculum: A Step-by-Step Journey",
  courseItems: [
    {
      id: 1,
      title: "Week 1",
      description: [
        "Structured Problem-Solving for Data Science",
        "Advanced SQL for Business KPI Design",
      ],
    },
    {
      id: 2,
      title: "Week 2",
      description: [
        "Advanced Python Scripting for Insight Automation",
        "Building Production-Grade Dashboards with Power BI",
      ],
    },
    {
      id: 3,
      title: "Week 3",
      description: [
        "Statistical Inference for Data Science Applications",
        "Machine Learning Fundamentals",
      ],
    },
    {
      id: 4,
      title: "Week 4",
      description: [
        "Live Hands-On Project: Supervised Learning Models",
        "Live Hands-On Project: Unsupervised Learning Models",
      ],
    },
  ],
};

// case studies data

export const goldCaseStudiesData = {
  heading: "Case Studies: Applying Your Skills",
  caseStudies: [
    {
      id: 1,
      title: "Home Credit",
      description:
        "Learn portfolio management through roll rate analysis, applying data science techniques to real loan data.",
    },
    {
      id: 2,
      title: "Instacart",
      description:
        "Analyze sales patterns and delivery performance metrics to optimize operations.",
    },
    {
      id: 3,
      title: "Google Merchandise",
      description:
        "Deep dive into e-commerce website traffic patterns and user behavior.",
    },
    {
      id: 4,
      title: "Big Basket",
      description:
        "Master product assortment strategies using data-driven decision making.",
    },
    {
      id: 5,
      title: "Medicare",
      description:
        "Build and implement dashboard solutions for identifying fraudulent activities.",
    },
  ],
};
export const platinumCaseStudiesData = {
  heading: "Case Studies: Applying Your Skills",
  caseStudies: [
    {
      id: 1,
      title: "Amazon",
      description:
        "Weekly performance tracker for CXOs.",
    },
    {
      id: 2,
      title: "Novafit",
      description:
        "Marketing channel analysis dashboard.",
    },
    {
      id: 3,
      title: "Home Credit",
      description:
        "Loan application quality analysis.",
    },
    {
      id: 4,
      title: "Ebay",
      description:
        "Fraud detection algorithm development.",
    },
    {
      id: 5,
      title: "Walmart",
      description:
        "Customer segmentation for targetted marketing.",
    },
  ],
};
export const daimondCaseStudiesData = {
  heading: "Case Studies: Applying Your Skills",
  caseStudies: [
    {
      id: 1,
      title: "Peter England",
      description:
        "A/B testing for product launches.",
    },
    {
      id: 2,
      title: "Home Credit",
      description:
        "Develop a credit decisioning system.",
    },
    {
      id: 3,
      title: "Apple",
      description:
        "Social media sentiment analysis using Twitter data.",
    },
    {
      id: 4,
      title: "The New York Times",
      description:
        "Build a chatbot for interactive news delivery.",
    },
    {
      id: 5,
      title: "AirBNB",
      description:
        "Predict guest booking behavior using advanced ML models.",
    },
  ],
};

// faqs

export const faqData = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is the duration of the course?",
        answer: "The course is a 2-day (12 hours) live interactive course delivered over Zoom.",
      },
      {
        question: "Will it be in-person or online?",
        answer: "This is online delivered over Zoom. However, we have in-person arrangements as well for corporate tie-ups.",
        linkText: "Contact us",
        linkHref: "#",
      },
      {
        question: "Will I get access to recordings and materials?",
        answer: "Yes, you will have lifetime access to the recordings and all materials part of the course.",
      },
    ],
  };

  export const goldFaqData = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do I need prior experience?",
        answer: "No, this course is designed for beginners with no prior experience in AI or data science.",
      },
      {
        question: "What tools will I learn?",
        answer: "You will learn Python, SQL, Power BI, and basic exploratory data analysis techniques.",
      },
      {
        question: "How is this course delivered?",
        answer: "The course consists of live, interactive online sessions with hands-on projects.",
      },
      {
        question: "Will there be real-world applications?",
        answer: "Yes, you will work on case studies such as Instacart's delivery performance analysis and Google Merchandise traffic analysis.",
      },
      {
        question: "What can I do after completing this course?",
        answer: "You will be able to analyze data, create dashboards, and identify AI opportunities for small-scale applications.",
      },
    ],
  };

  export const platinumFaqData = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer: "You should have basic knowledge of Python, SQL, and visualization tools like Power BI.",
      },
      {
        question: "Will I learn unsupervised machine learning in this course?",
        answer: "Yes, the course includes a case study on customer segmentation using clustering techniques, as seen in the Walmart case study.",
      },
      {
        question: "How much hands-on experience will I gain?",
        answer: "Each session includes live, project-based work, and you’ll complete case studies like fraud detection and customer segmentation.",
      },
      {
        question: "Can I use these skills in my current role?",
        answer: "Absolutely, this course equips you with practical, job-ready skills in machine learning, advanced analytics, and data visualization.",
      },
      {
        question: "What support is available during the course?",
        answer: "You’ll have access to mentors for live feedback, Q&A sessions, and lifetime access to the course materials for self-paced learning.",
      },
    ],
  };
  export const daimondFaqData = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Who should take this course?",
        answer: "This course is ideal for experienced data scientists and AI developers seeking advanced skills in NLP, LLMs, and scalable AI systems.",
      },
      {
        question: "What advanced topics are covered in this course?",
        answer: "Topics include A/B testing, tree-based algorithms, NLP fundamentals, LLMs, and Retrieval-Augmented Generation (RAG) systems.",
      },
      {
        question: "What case studies will I work on?",
        answer: "Case studies include sentiment analysis for Apple, credit decision systems for Home Credit, and building a chatbot for The Hindu.",
      },
      {
        question: "Do I need experience with NLP or machine learning?",
        answer: "Yes, a basic understanding of machine learning and NLP concepts is recommended for this advanced course.",
      },
      {
        question: "What outcomes can I expect?",
        answer: "You will gain expertise in building production-ready AI systems, solving complex business problems, and deploying advanced AI solutions.",
      },
    ],
  };
  export const ethicsFaqData = {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do I need a technical background to take this course?",
        answer: "No, this course is designed for both technical and non-technical professionals involved in AI projects.",
      },
      {
        question: "What tools will I learn to ensure ethical AI practices?",
        answer: "You’ll explore tools like AI Fairness 360, Explainable AI (XAI) platforms, and bias detection frameworks.",
      },
      {
        question: "Will this course cover compliance with global AI regulations?",
        answer: "Yes, topics include GDPR, CCPA, and emerging AI governance policies worldwide.",
      },
      {
        question: "How practical is this course?",
        answer: "The cohort includes hands-on projects focused on ethical challenges like bias mitigation and governance framework design.",
      },
      {
        question: "What can I do after completing this course?",
        answer: "You’ll be equipped to implement ethical AI practices, advise on AI governance, and build trust in AI systems.",
      },
    ],
  };


  // course benefits

  export const benefitsData = {
    heading: "Course Benefits",
    benefits: [
      {
        title: "Growth Strategies",
        description: "Learn to identify AI-driven opportunities for growth.",
      },
      {
        title: "Operational Mastery",
        description: "Gain tools to optimize day-to-day business operations.",
      },
      {
        title: "Cost Efficiency",
        description: "Understand how to implement AI without breaking the bank.",
      },
      {
        title: "Networking",
        description: "Build ethical AI practices that customers can rely on",
      },
    ],
  };

  export const ethicsBenefitsData = {
    heading: "Course Benefits",
    benefits: [
      {
        title: "Develop Responsible AI Expertise",
        description: "Learn to identify, mitigate, and address ethical risks in AI systems, ensuring fairness, transparency, and accountability.",
      },
      {
        title: "Master AI Governance and Compliance",
        description: "Gain insights into building policies and frameworks that align with global regulations like GDPR, CCPA, and AI-specific legal standards.",
      },
      {
        title: "Enhance Trust and Inclusivity",
        description: "Build AI systems that are interpretable, unbiased, and privacy-conscious, fostering trust among users and stakeholders.",
      },
      {
        title: "Hands-On Ethical AI Solutions",
        description: "Apply practical tools and techniques like AI Fairness 360 and Explainable AI to real-world scenarios, solving key ethical challenges.",
      },
    ],
  };
  export const smeBenefitsData = {
    heading: "Course Benefits",
    benefits: [
      {
        title: "AI Leadership",
        description: "Develop your AI leadership skills.",
      },
      {
        title: "Strategic Implementation",
        description: "Master the art of effective AI deployment.",
      },
      {
        title: "Ethical Considerations",
        description: "Understand and mitigate ethical and risk implications of AI.",
      },
      {
        title: "Networking",
        description: "Connect with leading AI experts and your peers.",
      },
    ],
  };


  // course content

  export const courseContent = [
    {
        number: 1,
        title: "AI Essentials for Small Businesses",
        description:
            "Simplified concepts of AI and practical applications tailored to small business scenarios.",
    },
    {
        number: 2,
        title: "AI-Powered Marketing",
        description:
            "Boost customer acquisition and retention with AI tools like personalization and predictive analytics.",
    },
    {
        number: 3,
        title: "Operational Efficiency",
        description:
            "Streamline inventory, supply chain, and staffing through automation and forecasting.",
    },
    {
        number: 4,
        title: "Affordable AI Tools",
        description:
            "Explore budget-friendly AI tools and platforms suitable for small businesses.",
    },
    {
        number: 5,
        title: "Change Management",
        description:
            "Inspire teams to adopt AI practices and maintain adaptability for future trends.",
    },
    {
        number: 6,
        title: "Exclusive Networking",
        description:
            "Connect with AI experts and forward-thinking professionals.",
    },
];

export const ethicsCourseContent = [
  {
      number: 1,
      title: "AI Fundamental",
      description:
          "Identify and prioritize AI opportunities tailored to your industry, role, and goals.",
  },
  {
      number: 2,
      title: "Ethical Considerations",
      description:
          "Get introduced to AI Ethics and Governance. Build understanding of bias and fairness in AI Models.",
  },
  {
      number: 3,
      title: "Explainable AI Systems",
      description:
          "Learn to build transparent and explainable AI systems with tools for bias detection and mitigation.",
  },
  {
      number: 4,
      title: "AI Privacy",
      description:
          "Understand and confidently navigate the data protection and AI privacy, and regulations.",
  },
  {
      number: 5,
      title: "Ethical AI Leadership",
      description:
          "Understand risks, navigate regulations, and build trust through responsible AI practices.",
  },
  {
      number: 6,
      title: "Exclusive Networking",
      description:
          "Connect with AI experts and forward-thinking professionals.",
  },
];
