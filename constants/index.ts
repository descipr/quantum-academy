import {
  adithiaV,
  AiEngineeringCard,
  AnkitaKundu,
  AtulAnand,
  Bibhuti_Jha,
  BusinessAnalystCard,
  BusinessAnalystFellowshipCard,
  businessAnalystInsights,
  BusinessFundamentals,
  charuGoyal,
  Community,
  CommunityMobile,
  CourseCard,
  CourseCardMobile,
  DataScientistCard,
  DataScientistInsights,
  debjaniMajumder,
  DoubtSupport,
  ExportData,
  FarzandKhan,
  Gaurav_Kumar,
  generativeModel,
  HiringManager,
  HiringManagerMobile,
  instagramIcon,
  Interview,
  JobSimulation,
  KoushikMitra,
  KshitjiJha,
  largeLanguageModel,
  linkedIcon,
  LiveClasses,
  LiveSession,
  Lochan_raj,
  ManishSinha,
  Mentorship,
  MentorshipIcon,
  MentorshipMobile,
  MlLibrary,
  MockInterview,
  ModelBuilding,
  MsExcel,
  PeerLearning,
  Portfolio,
  PowerBi,
  pranoyDewanjee,
  ProblemSolving,
  python,
  ResumeReview,
  SameerDubey,
  samikshaGebise,
  Sampath_vinayak,
  samridhi,
  Sayan_paul,
  sql,
  SrinivasanBalaji,
  SrishtiShiksha,
  Statistcs,
  Suryansh_abijith,
  TanoyDewanjee,
  transformers,
  VasuBhasin,
  youtubeIcon,
} from "@/utils";

import { StaticImageData } from "next/image";

export interface BentoGridItemProps {
  className?: string;
  imgsrc: StaticImageData;
}

export interface Course {
  imageSrc: StaticImageData;
  title: string;
  date: string;
}

export interface TestimonialCardProps {
  profilePic: string;
  name: string;
  position: string;
  testimonial: string;
  linkedinUrl: string;
}
export interface CardData {
  key: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
  background: string;
}

export interface ScheduledClassProps {
  key: number;
  imageUrl: StaticImageData;
  title: string;
  para: string;
  date: string;
  background: string;
}

export interface LearningCardData {
  id: number;
  title: string;
  listItems: string[];
  time?: string;
  subheading?: string;
  para?: string;
}

export interface CourseCardProps {
  imageSrc: StaticImageData;
  title: string;
  date: string;
}

export interface ListItem {
  label: string;
  email?: string;
  href?: string;
}

export interface SocialLink {
  label: string;
  iconSrc: string;
  link: string;
}

export interface OurTrainerProp {
  src: string;
  alt: string;
  link: string;
}

export interface DesciprDiffernceProps {
  src: string;
  alt: string;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface fellowship {
  label: string;
  link: string;
}

export interface CourseDetail {
  heading: string;
  description: string;
  dateOfStart: string;
  floatingBar: string;
  timeCommitment: string;
  timePerweek?: string;
  cost: string;
  seatsLeft: number;
  sessionInsights: any;
  id: string;
  actualcost: string;
  imgUrl: any;
  razorPay: {
    src: string;
    paymentButtonId: string;
  };
  pdf: string;
  discount: string;
  EmiOptions: string;
  weekSchedule?: LearningCardData[];
  videoUrl: string;
  learning: DesciprDiffernceProps[];
  tools: DesciprDiffernceProps[];
}

export interface IwebinarForData {
  id: number;
  title: string;
  description: string;
  background: string;
}

export const companyList: ListItem[] = [
  { label: "About Us", href: "/aboutus" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    iconSrc: linkedIcon,
    link: "https://www.linkedin.com/company/descipr/",
  },
  {
    label: "Instagram",
    iconSrc: instagramIcon,
    link: "https://www.instagram.com/descipr.official/",
  },
  {
    label: "YouTube",
    iconSrc: youtubeIcon,
    link: "https://www.youtube.com/@team_descipr",
  },
];

export const courses: Course[] = [
  {
    imageSrc: DataScientistCard,
    title: "Data Scientist Fellowship",
    date: "23 Nov - 29 Mar",
  },

  {
    imageSrc: AiEngineeringCard,
    title: "AI Engineer Fellowship",
    date: "23 Nov - 22 Feb",
  },
  {
    imageSrc: BusinessAnalystCard,
    title: "Business Analyst Fellowship",
    date: "23 Nov - 01 Mar",
  },
];
export const items = [
  {
    className: "md:col-span-2",
    imgsrc: HiringManager,
  },
  {
    className: "md:col-span-2",
    imgsrc: CourseCard,
  },
  {
    className: "md:col-span-3",
    imgsrc: Mentorship,
  },
  {
    className: "md:col-span-1",
    imgsrc: Community,
  },
];

export const testimonials = [
  {
    profilePic: KoushikMitra,
    name: "Koushik Mitra",
    position: "PowerBI Developer",
    testimonial:
      "My heartfelt gratitude to the entire team. I feel extremely lucky to be a part of Descipr. The sessions which I have attended, are the best so far. As I have got a thorough understanding of domains and its areas related to analysis. Looking forward to more amazing sessions.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235298945701208064%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235298945701208064%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: adithiaV,
    name: "Adithia V",
    position: "Data Analyst",
    testimonial:
      "Being a part of Descipr's first Data Scientist Fellowship cohort has been an incredible journey. The growth I’ve experienced, both technically and professionally, has exceeded my expectations. The emphasis on real-world applications through case studies has been invaluable. I highly recommend this fellowship to anyone looking to elevate their data science skills and business acumen.🚀",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235203541722656770%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235203541722656770%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: samikshaGebise,
    name: "Samiksha Gebise",
    position: "Analyst, Rubixe",
    testimonial:
      "I want to express my sincere gratitude to the entire Descipr team for conducting this incredible Cohort. It has greatly enriched my industrial knowledge and provided me with invaluable insights. A special thank you to Tanoy Sir for his outstanding sessions, which have significantly enhanced my analytical skills. This cohort has truly helped me explore and develop my thinking abilities in new and diverse ways.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235259291165716480%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235259291165716480%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: debjaniMajumder,
    name: "Debjani Majumder",
    position: "Fraud Analyst",
    testimonial:
      "I would like to thank to team Descipr for arranging some engaging sessions. It helped me to enhance my knowledge and drive my interest more into data science. I am happy be a part of this team and quite hopeful to become a contributor in future.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235218954296705025%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235218954296705025%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: charuGoyal,
    name: "Charu Goyal",
    position: "Asst Manager, Data Science",
    testimonial:
      "I want to thank to the entire Descipr team for taking such wonderful initiatives and arranging the sessions. Would like to extend a big thank you to Srinivasan balaji for taking a well detailed session on AB testing. It really helped me in gaining valuable insights and having a detailed understanding of the concepts & business problems.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235193173008867328%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235193173008867328%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: pranoyDewanjee,
    name: "Pranoy Dewanjee",
    position: "Senior Analyst",
    testimonial:
      "I want to extend a big thank you to the entire Descipr team for organizing this incredible cohort. It has been a truly enriching journey for me. I’m grateful for the support and would love to continue being involved with the Descipr community. Looking forward to staying connected.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235184559074525184%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235184559074525184%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: FarzandKhan,
    name: "Farzand Khan",
    position: "Business Analyst",
    testimonial:
      "I got a chance to be a part of amazing online community where industry experts discuss case studies on analytic solutions across various industries. It’s a fantastic platform for brainstorming and learning.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7197913173914472448/",
  },
  {
    profilePic: Bibhuti_Jha,
    name: "Bibhuti Jha",
    position: "Decision Scientist",
    testimonial:
      "Attending the bootcamp was a transformative experience for me. Highly recommended for anyone looking to accelerate their career in AI.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7213443197241286656?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7213443197241286656%2C7226886405719777280%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226886405719777280%2Curn%3Ali%3AugcPost%3A7213443197241286656%29",
  },
  {
    profilePic: Gaurav_Kumar,
    name: "Gaurav Kumar",
    position: "Student, IIT Guwahati",
    testimonial:
      "Thank you for the insightful session, Tanoy Dewjanee! The case study you shared was incredibly informative and address real-world problems. It provided valuable practical knowledge.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203123434413776896%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287203123434413776896%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: SrishtiShiksha,
    name: "Srishti Shikha",
    position: "Technology Consultant",
    testimonial:
      "Engaging content, expert guidance, and insights into a hiring manager’s perspective made the session outstanding.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211084994981560320?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211084994981560320%2C7226887320233242626%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287226887320233242626%2Curn%3Ali%3AugcPost%3A7211084994981560320%29",
  },
  {
    profilePic: Lochan_raj,
    name: "Lochan Raj T D",
    position: "Data Scientist",
    testimonial:
      "It was an informative session given by Tanoy Dewanjee and the Descipr team. Thank you for sharing insights regarding the 3 P's and case studies.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7202708895214047232%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287202708895214047232%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: Suryansh_abijith,
    name: "Suryansh Abhijit",
    position: "Student, MIT",
    testimonial:
      "Attended the very first workshop of the cohort, the sessions were very insightful and interactive. Descipr did a fantastic job with introducing the business aspect of different industries and how data analytics actually helps businesses in real life, something that is not much talked upon, and the one on one mentorship is just a cherry on the top.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7235173094980476929?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7235173094980476929%2C7235516085750353921%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287235516085750353921%2Curn%3Ali%3Aactivity%3A7235173094980476929%29",
  },
  {
    profilePic: Sampath_vinayak,
    name: "Sampath Vinayak",
    position: "Data Scientist",
    testimonial:
      "It was an amazing session, very informative and full of insights by Tanoy Dewanjee. Thanks for the STAR method and the real world case studies.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7202704501504368641?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7202704501504368641%2C7203396111527538689%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287203396111527538689%2Curn%3Ali%3Aactivity%3A7202704501504368641%29",
  },
  {
    profilePic: Sayan_paul,
    name: "Sayan Paul",
    position: "Student, IIEST Shibpur",
    testimonial:
      "A really insightful session. Enjoyed every bit of it. Looking forward for more sessions like this.",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7205048134664642562?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7205048134664642562%2C7205095558686932992%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287205095558686932992%2Curn%3Ali%3Aactivity%3A7205048134664642562%29",
  },
];

export const careerCardData: CardData[] = [
  {
    key: 1,
    imageUrl: ResumeReview,
    title: "Resume review",
    description:
      "Enhance your resume with personalized feedback from experienced mentors. Receive tailored advice to ensure your resume stands out for your dream role.",
    background: "#F5F3FF",
  },
  {
    key: 2,
    imageUrl: Interview,
    title: "Mock Interviews with Hiring Managers",
    description:
      "Sharpen your interview skills with mock interviews led by industry experts. Gain valuable insights and boost your confidence for real-world interviews.",
    background: "#FFF0ED",
  },
  {
    key: 3,
    imageUrl: Portfolio,
    title: "Portfolio Building",
    description:
      "Craft an outstanding portfolio with our hands-on business problems that captivate hiring managers and sets you apart.",
    background: "#DBE5FF",
  },
];

export const fellowshipList: fellowship[] = [
  {
    label: "Data Scientist Fellowship",
    link: "/courses/Data%20Scientist%20Fellowship",
  },
  {
    label: "AI Engineer Fellowship",
    link: "/courses/AI%20Engineer%20Fellowship",
  },
  {
    label: "Business Analyst Fellowship",
    link: "/courses/Business%20Analyst%20Fellowship",
  },
];

export const ScheduledClassData: ScheduledClassProps[] = [
  {
    key: 1,
    imageUrl: LiveClasses,
    title: "Live Classes",
    para: "Every Saturday and Sunday",
    date: "10:00 AM - 01:00 PM",
    background: "#FFF0ED",
  },
  {
    key: 2,
    imageUrl: DoubtSupport,
    title: "Doubt Support",
    para: "Every Wednesday",
    date: "8:00 PM – 9:00 PM",
    background: "#FFF5ED",
  },
  {
    key: 3,
    imageUrl: MentorshipIcon,
    title: "Mentorship Connect",
    para: "Once every 2 weeks",
    date: "Duration 1 hour",
    background: "#F5F3FF",
  },
  {
    key: 4,
    imageUrl: MockInterview,
    title: "Mock Interview",
    para: "Once every 6 weeks",
    date: "Duration 2 hours",
    background: "#DBE5FF",
  },
];

export const OutTrainers: OurTrainerProp[] = [
  {
    src: TanoyDewanjee,
    alt: "Image 1",
    link: "https://www.linkedin.com/in/tanoydewanjee/",
  },
  {
    src: SameerDubey,
    alt: "Image 2",
    link: "https://www.linkedin.com/in/sameerz/",
  },
  {
    src: SrinivasanBalaji,
    alt: "Image 3",
    link: "https://www.linkedin.com/in/srinivasan-balaji-912364b6/",
  },
  {
    src: AtulAnand,
    alt: "Image 4",
    link: "https://www.linkedin.com/in/atul-anand-6075bb58/",
  },
  {
    src: VasuBhasin,
    alt: "Image 5",
    link: "https://www.linkedin.com/in/vasubhasin/",
  },
  {
    src: samridhi,
    alt: "Image 6",
    link: "https://www.linkedin.com/in/samriddhisinha/",
  },

  // Add more images as needed
];

export const Mentors: OurTrainerProp[] = [
  {
    src: ManishSinha,
    alt: "Image 1",
    link: "https://www.linkedin.com/in/manishsinha1bittu/",
  },
  {
    src: AnkitaKundu,
    alt: "Image 2",
    link: "https://www.linkedin.com/in/ankita-kundu-2a50ba66/",
  },
  {
    src: KshitjiJha,
    alt: "Image 3",
    link: "https://www.linkedin.com/in/ankita-kundu-2a50ba66/",
  },
];

export const DesciprDiffernce: DesciprDiffernceProps[] = [
  { src: LiveSession, alt: "Image 1", title: "Live Sessions" },
  { src: JobSimulation, alt: "Image 1", title: "Job Simulations" },
  { src: DoubtSupport, alt: "Image 1", title: "Doubt Support" },
  { src: PeerLearning, alt: "Image 1", title: "Peer Learning" },
];

export const Learning: DesciprDiffernceProps[] = [
  { src: ProblemSolving, alt: "Image 1", title: "Problem Solving Frameworks" },
  { src: BusinessFundamentals, alt: "Image 1", title: "Business Fundamentals" },
  { src: Statistcs, alt: "Image 1", title: "Statistics" },
  { src: ExportData, alt: "Image 1", title: "Exploratory Data Analysis (EDA)" },
];

export const Tools: DesciprDiffernceProps[] = [
  { src: python, alt: "Image 1", title: "Python" },
  { src: MsExcel, alt: "Image 1", title: "MS Excel" },
  { src: sql, alt: "Image 1", title: "SQL" },
  { src: PowerBi, alt: "Image 1", title: "PowerBI" },
];

export const faqData: FAQItem[] = [
  {
    question: "What's the format of the Exit exam?",
    answer:
      "The exit exam will comprise of a problem statement along with scenario based questions to assess your understanding and readiness for the professional world.",
  },
  {
    question:
      "What are the key responsibilities of a Fellow during the program?",
    answer:
      "All Fellowships require a commitment of 12-14 hours per week. As a participant in this program, you will need to attend weekly live sessions with instructors, scheduled for Saturdays and Sundays. Additionally, you will be expected to review weekly learning materials on the Descipr website and submit your work for the weekly milestone, which involves solving a job-simulated project related to that week's topic. At the end of the fellowship, you will be required to take an exit exam.",
  },
  {
    question:
      "What kind of support and resources will Fellows have access to during the program?",
    answer:
      "During your weekly live sessions with instructors, you'll benefit from insights provided by industry experts. Each learner is also paired with a mentor who will assist with case study analyses, resolve any doubts, and help plan your career path. Additionally, each week you'll receive learning materials on that week’s topic and access a real-world problem statement as part of your weekly milestone.",
  },
  {
    question:
      "If I am unable to attend the program or need to pull out at the last minute, will I get a refund?",
    answer:
      "Refund requests can only be submitted up to 2 weeks before the start date of the Fellowship. If the reason for the request is deemed valid, we will issue a full refund. Requests made after this deadline will not be processed. The Descipr team reserves the right to make the final decision on all refund requests.",
  },
];

export const courseDetails: CourseDetail[] = [
  {
    heading: "Data Scientist Fellowship",
    description:
      "Master data analysis, machine learning, AI, and real-world skills with expert guidance and hands-on projects. Prepare for top roles at leading tech companies.",
    dateOfStart: "November 23, 2024",
    floatingBar: "Nov 23",
    timeCommitment: "4 months",
    timePerweek: "12 hours/week",
    cost: "₹11,999",
    seatsLeft: 25,
    sessionInsights: DataScientistInsights,
    id: "4",
    actualcost: "₹29,999",
    imgUrl: BusinessAnalystFellowshipCard,
    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OihX6GjL94bcj4",
    },
    pdf: "/Data_Scientist_Fellowship.pdf",
    discount: "60% OFF",
    EmiOptions: "699",
    videoUrl: "https://www.youtube.com/embed/yXmK7TAJ1Mc?si=dfbTOXvm8rfRi_XJ",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        subheading: "Case studies on",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canvas",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        subheading: "Case studies on",
        para: "Designing a Data/AI Product",
      },
      {
        id: 3,
        title: "Intro to Analytics with SQL",
        listItems: [
          "Relational data base & SQL syntax",
          "Joins and Subqueries",
          "Conditional and Case Statements",
        ],
        time: "Week 3",
        subheading: "Case studies on",
        para: "Grocery E-commerce Performance Analysis",
      },
      {
        id: 4,
        title: "Advanced Business Analysis with SQL",
        listItems: [
          "Effective KPI Design Principles",
          "KPI Trees and Impact Mapping",
          "Advanced SQL Techniques for Production",
        ],
        time: "Week 4",
        subheading: "Case studies on",
        para: "Business Review Tracker for CEO Office",
      },
      {
        id: 5,
        title: "Intro to Visualization with PowerBI",
        listItems: [
          "Understanding Data Models & Relationships",
          "Understanding Chart Types, Trends",
          "Creating Dashboards",
        ],
        time: "Week 5",
        subheading: "Case studies on",
        para: "E-Commerce Store Google Analytics",
      },
      {
        id: 6,
        title: "Advanced Business Intelligence with PowerBI",
        listItems: [
          "Decision Funnel Understanding",
          "Self Serve Dashboard Design Principles",
          "Efficient Data Models for Speed and Accuracy",
        ],
        time: "Week 6",
        subheading: "Case studies on",
        para: "Marketing Dashboard for a D2C Fitness Brand",
      },
      {
        id: 7,
        title: "Essential Statistics for Business Insights",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 7",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 8,
        title: "Feature Design and Insights with A/B Testing",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 8",
        subheading: "Case studies on",
        para: "Launch Strategy for a Lifestyle Brand’s Landing Page",
      },
      {
        id: 9,
        title: "Intro to MS-Excel & Python",
        listItems: [
          "Data Cleaning Techniques in Excel",
          "PivotTable, Grouping, & Lookup Functions for Data Analysis in Excel",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 9",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 10,
        title: "Advanced Business Insights with Python",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 10",
        subheading: "Case studies on",
        para: "Loan Application Quality Assessment for an NBFC",
      },
      {
        id: 11,
        title: "Fundamentals of Machine Learning",
        listItems: [
          "Problem Scope Definition & Evaluation Framework",
          "Exploratory Data Analysis",
          "Feature Engineering & Scaling",
        ],
        time: "Week 11",
        subheading: "Case studies on",
        para: "Credit Decisioning System for an NBFC",
      },
      {
        id: 12,
        title: "Advanced Machine Learning Techniques",
        listItems: [
          "Ensemble Learning – Bagging/Boosting",
          "Hyperparameter Tuning – Grid Search",
          "Optimizing for Accuracy & Explainability",
        ],
        time: "Week 12",
        subheading: "Case studies on",
        para: "Valued Shopper Retention in E-Commerce",
      },
      {
        id: 13,
        title: "Fundamentals of Deep Learning",
        listItems: [
          "Layers and Architectures",
          "Backpropagation & Gradient Descent",
          "Sequential Modeling Techniques (RNN, LSTM)",
        ],
        time: "Week 13",
        subheading: "Case studies on",
        para: "Brand’s Social Listening from X (Twitter) feed",
      },
      {
        id: 14,
        title: "Generative AI: The Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Working with OpenAI and Opensource LLM Models",
        ],
        time: "Week 14",
        subheading: "Case studies on",
        para: "Negative News Screener for Fraud Alerts",
      },
      {
        id: 15,
        title: "Generative AI: Building RAG Systems",
        listItems: [
          "Understanding RAG Architecture",
          "Design & Implement RAG Pipeline",
          "Finetune and Evaluate Model Performance",
        ],
        time: "Week 15",
        subheading: "Case studies on",
        para: "Develop and Deploy a Privacy bot",
      },
      {
        id: 16,
        title: "Interview Prep & Portfolio Building",
        listItems: [
          "Building Project Portfolio & Optimizing your Resume",
          "Business Case Study Interview Questions",
          "Technical Interview Questions",
        ],
        time: "Week 16",
        subheading: "Final assessment on",
        para: "Exit Exam, Resume Feedback, & Mock Interviews",
      },
    ],
    learning: [
      {
        src: ProblemSolving,
        alt: "Image 1",
        title: "Problem Solving Frameworks",
      },
      {
        src: BusinessFundamentals,
        alt: "Image 1",
        title: "Business Fundamentals",
      },
      { src: ModelBuilding, alt: "Image 1", title: "Model Building" },
      {
        src: largeLanguageModel,
        alt: "Image 1",
        title: "Large Language Models",
      },
    ],
    tools: [
      { src: python, alt: "Image 1", title: "Python" },
      { src: MsExcel, alt: "Image 1", title: "MS Excel" },
      { src: MlLibrary, alt: "Image 1", title: "ML Libraries" },
      { src: generativeModel, alt: "Image 1", title: "Generative Models" },
    ],
  },
  {
    heading: "AI Engineer Fellowship",
    description:
      "Tackle cutting-edge projects and prepare for top roles at leading tech giants. Your AI future begins now!",
    dateOfStart: "November 23, 2024 ",
    floatingBar: "Nov 23",
    timeCommitment: "12 hours/week",
    timePerweek: "12 hours/week",
    cost: "₹9,999",
    seatsLeft: 25,
    sessionInsights: businessAnalystInsights,
    id: "3",
    actualcost: "₹19,999",
    imgUrl: BusinessAnalystFellowshipCard,
    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OhyfCxUlrva95Q",
    },
    pdf: "/AI_Engineering_Fellowship.pdf",
    discount: "50% OFF",
    EmiOptions: "485",
    videoUrl: "https://www.youtube.com/embed/md7C78glaGQ?si=3o-7rtKvM_sTg8gM",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        subheading: "Case studies on",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canvas",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        subheading: "Case studies on",
        para: "Designing a Data/AI Product",
      },
      {
        id: 3,
        title: "Essential Statistics for Business Insights",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 3",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 4,
        title: "Feature Design and Insights with A/B Testing",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 4",
        subheading: "Case studies on",
        para: "Launch Strategy for a New E-Commerce Fashion Store",
      },
      {
        id: 5,
        title: "Intro to MS-Excel & Python",
        listItems: [
          "Data Cleaning, Pivot Tables, & Lookup for Analysis",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 5",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 6,
        title: "Advanced Business Insights with Python",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 6",
        subheading: "Case studies on",
        para: "Loan Application Quality Assessments for an NBFC",
      },
      {
        id: 7,
        title: "Fundamentals of Machine Learning",
        listItems: [
          "Problem Scope Definition & Evaluation Framework",
          "Exploratory Data Analysis",
          "Feature Engineering & Scaling",
        ],
        time: "Week 7",
        subheading: "Case studies on",
        para: "Credit Decisioning System for an NBFC",
      },
      {
        id: 8,
        title: "Advanced Machine Learning Techniques",
        listItems: [
          "Ensemble Learning – Bagging/Boosting",
          "Hyperparameter Tuning – Grid Search",
          "Optimizing for Accuracy & Explainability",
        ],
        time: "Week 8",
        subheading: "Case studies on",
        para: "Valued Shopper Retention in E-Commerce",
      },
      {
        id: 9,
        title: "Fundamentals of Deep Learning",
        listItems: [
          "Layers and Architectures",
          "Backpropagation & Gradient Descent",
          "Sequential Modeling Techniques (RNN, LSTM)",
        ],
        time: "Week 9",
        subheading: "Case studies on",
        para: "Brand’s Social Listening from X (Twitter) feed",
      },
      {
        id: 10,
        title: "Generative AI: The Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Working with OpenAI and Opensource LLM Models",
        ],
        time: "Week 10",
        subheading: "Case studies on",
        para: "Negative News Screener for Fraud Alerts",
      },
      {
        id: 11,
        title: "Generative AI: Building RAG Systems",
        listItems: [
          "Understanding RAG Architecture",
          "Design & Implement RAG Pipeline",
          "Finetune and Evaluate Model Performance",
        ],
        time: "Week 11",
        subheading: "Case studies on",
        para: "Develop and Deploy a Privacy bot",
      },
      {
        id: 12,
        title: "Interview Prep & Portfolio Building",
        listItems: [
          "Building Project Portfolio & Optimizing your Resume",
          "Business Study Interview Questions",
          "Technical Interview Questions",
        ],
        time: "Week 12",
        subheading: "Final assessment on",
        para: "Exit Exam, Resume Feedback, & Mock Interviews",
      },
    ],
    learning: [
      {
        src: ProblemSolving,
        alt: "Image 1",
        title: "Problem Solving Frameworks",
      },
      {
        src: BusinessFundamentals,
        alt: "Image 1",
        title: "Business Fundamentals",
      },
      { src: transformers, alt: "Image 1", title: "Transformer Concepts" },
      {
        src: largeLanguageModel,
        alt: "Image 1",
        title: "Large Language Models",
      },
    ],
    tools: [
      { src: python, alt: "Image 1", title: "Python" },
      { src: MsExcel, alt: "Image 1", title: "MS Excel" },
      { src: MlLibrary, alt: "Image 1", title: "ML Libraries" },
      { src: generativeModel, alt: "Image 1", title: "Generative Models" },
    ],
  },
  {
    heading: "Business Analyst Fellowship",
    description:
      "Kickstart your Business analyst career at top companies like Amazon, Dell, Swiggy etc. Your future in business analysis starts here!",
    dateOfStart: "November 23, 2024 ",
    floatingBar: "Nov 23",
    timeCommitment: "10 hours/week",
    timePerweek: "10 hours/week",
    cost: "₹9,999",
    seatsLeft: 25,
    sessionInsights: businessAnalystInsights,
    id: "1",
    actualcost: "₹19,999",
    imgUrl: BusinessAnalystFellowshipCard,
    razorPay: {
      src: "https://checkout.razorpay.com/v1/payment-button.js",
      paymentButtonId: "pl_OhyVw2SEjrbyw4",
    },
    pdf: "/Business_analyst_fellowship.pdf",
    discount: "45% OFF",
    EmiOptions: "499",
    weekSchedule: [
      {
        id: 1,
        title: "Business Fundamentals",
        listItems: [
          "Business Models and Customer Segmentation",
          "Products, Value Proposition and Distribution Channels",
          "Revenue Streams and Costs Models",
        ],
        time: "Week 1",
        subheading: "Case studies on",
        para: "Dissecting Business of Indian Unicorns",
      },
      {
        id: 2,
        title: "Problem Solving Approach",
        listItems: [
          "Structured Problem Solving Canvas",
          "Human Centered Solution Design",
          "Stakeholders Communication",
        ],
        time: "Week 2",
        subheading: "Case studies on",
        para: "Designing a Data/AI Product",
      },
      {
        id: 3,
        title: "Intro to Analytics with SQL",
        listItems: [
          "Relational data base & SQL syntax",
          "Joins and Subqueries",
          "Conditional and Case Statements",
        ],
        time: "Week 3",
        subheading: "Case studies on",
        para: "Grocery E-commerce Performance Analysis",
      },
      {
        id: 4,
        title: "Advanced Business Analysis with SQL",
        listItems: [
          "Effective KPI Design Principles",
          "KPI Trees and Impact Mapping",
          "Advanced SQL Techniques for Production",
        ],
        time: "Week 4",
        subheading: "Case studies on",
        para: "Business Review Tracker for CEO Office",
      },
      {
        id: 5,
        title: "Intro to Visualization with PowerBI",
        listItems: [
          "Understanding Data Models & Relationships",
          "Understanding Chart Types, Trends",
          "Creating Dashboards",
        ],
        time: "Week 5",
        subheading: "Case studies on",
        para: "E-Commerce Store Google Analytics",
      },
      {
        id: 6,
        title: "Advanced Business Intelligence with PowerBI",
        listItems: [
          "Decision Funnel Understanding",
          "Self Serve Dashboard Design Principles",
          "Efficient Data Models for Speed and Accuracy",
        ],
        time: "Week 6",
        subheading: "Case studies on",
        para: "Marketing Dashboard for a D2C Fitness Brand",
      },
      {
        id: 7,
        title: "Essential Statistics for Business Insights",
        listItems: [
          "Types of statistics: Descriptive vs. Inferential",
          "Basic Probability Concepts & Distributions",
          "Hypothesis Testing, p-Value, Correlation",
        ],
        time: "Week 7",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 8,
        title: "Feature Design and Insights with A/B Testing",
        listItems: [
          "Understanding Business Metrics to Optimize",
          "Customer Cohort Analysis",
          "Statistical Analysis for Launch Decisions",
        ],
        time: "Week 8",
        subheading: "Case studies on",
        para: "Launch Strategy for a Lifestyle Brand’s Landing Page",
      },
      {
        id: 9,
        title: "Intro to Insights with MS-Excel & Python",
        listItems: [
          "Data Cleaning Techniques in Excel",
          "PivotTable, Grouping, & Lookup Functions for Data Analysis in Excel",
          "Python Programming Fundamentals",
          "Data Manipulation using Pandas",
        ],
        time: "Week 9",
        subheading: "Case studies on",
        para: "Assortment Analysis for a Quick Commerce Company",
      },
      {
        id: 10,
        title: "Advanced Business Insights with Python",
        listItems: [
          "Exploratory Data Analysis",
          "Advanced Data Wrangling Techniques",
          "Detailed Insights Report Writing for Stakeholders",
        ],
        time: "Week 10",
        subheading: "Case studies on",
        para: "Loan Application Quality Assessment for an NBFC",
      },
      {
        id: 11,
        title: "Generative AI: The Art of Prompt Engineering",
        listItems: [
          "NLP and LLM Fundamentals",
          "Efficient Prompt Engineering",
          "Working with OpenAI and Opensource LLM Models",
        ],
        time: "Week 11",
        subheading: "Case studies on",
        para: "Negative News Screener for Fraud Alerts",
      },
      {
        id: 12,
        title: "Interview Prep & Portfolio Building",
        listItems: [
          "Building your Resume",
          "Building your Project Portfolio",
          "Technical Interview Questions",
        ],
        time: "Week 12",
        subheading: "Final assessment on",
        para: "Exit Exam, Resume Feedback, & Mock Interviews",
      },
    ],
    learning: [
      {
        src: ProblemSolving,
        alt: "Image 1",
        title: "Problem Solving Frameworks",
      },
      {
        src: BusinessFundamentals,
        alt: "Image 1",
        title: "Business Fundamentals",
      },
      { src: Statistcs, alt: "Image 1", title: "Statistics" },
      {
        src: ExportData,
        alt: "Image 1",
        title: "Exploratory Data Analysis (EDA)",
      },
    ],
    tools: [
      { src: python, alt: "Image 1", title: "Python" },
      { src: MsExcel, alt: "Image 1", title: "MS Excel" },
      { src: sql, alt: "Image 1", title: "SQL" },
      { src: PowerBi, alt: "Image 1", title: "PowerBI" },
    ],
    videoUrl: "https://www.youtube.com/embed/mctYPXz85CA?si=sM2oW7pLucnQgfIU",
  },
];

export const FellowshipImages = [
  HiringManager,
  CourseCard,
  Mentorship,
  Community,
];

export const MobileFellowshipImages = [
  HiringManagerMobile,
  CourseCardMobile,
  MentorshipMobile,
  CommunityMobile,
];



export const workshopFaqData: FAQItem[] = [
  {
    question: "What is the focus of this workshop?",
    answer:
      "The workshop will cover strategies and best practices for successfully navigating data science interviews. Topics will include technical assessments, problem-solving techniques, common interview questions, and how to effectively present your experience and skills.",
  },

  {
    question: "Who should attend this workshop?",
    answer:
      "This workshop is ideal for aspiring data scientists, recent graduates, or professionals looking to transition into data science roles. It’s also valuable for experienced data scientists who want to improve their interview performance.",
  },
  {
    question: "How do I register for the workshop?",
    answer:
      "You can register through our website or contact our support team for assistance with registration.",
  },
  {
    question: "What if I have more questions after the workshop?",
    answer:
      "You can reach out to the workshop facilitator via email or join our community forum where you can continue the discussion and get additional support.",
  },
];

interface Insight {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}

export const workshopData: LearningCardData[] = [
  {
    id: 1,
    title: "Overview of Different Career Paths in Data Science/AI",
    listItems: [
      "Not everyone with the title of Data Scientist performs the same role. Make an informed decision about the one you would enjoy the most.",
    ],
  },
  {
    id: 2,
    title: "Frameworks for Selecting the Right Data Science Project",
    listItems: [
      "Not all projects hold the same value. Learn the right framework to identify the best ones for your target industries or companies.",
    ],
  },
  {
    id: 3,
    title: "Essential Elements of an Effective Data Science Resume",
    listItems: [
      "Craft a profile that captures the attention of hiring managers and helps you secure the right opportunity.",
    ],
  },
  {
    id: 4,
    title: "Data Science Interview Stages and Preparation Strategies",
    listItems: [
      "Learn what to expect from each interview round for top data science positions and how to prepare effectively.",
    ],
  },
  {
    id: 5,
    title:
      "How to approach Business Case Study Round – Live Solution Demonstration",
    listItems: [
      "Discover how to confidently tackle case studies using a 7-step framework and steer clear of common pitfalls.",
    ],
  },
];


