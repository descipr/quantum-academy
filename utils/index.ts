import headerLogo from "@/public/Images/headerLogo.svg";
import BackgroundLogo from "@/public/Images/backgroundLogo.svg";
import BusinessAnalystCard from "@/public/Images/businessAnalystCard.svg";
import AiEngineeringCard from "@/public/Images/aiEngineerCard.svg";
import DataScientistCard from "@/public/Images/dataScientistCard.svg";
import MlEngineeringCard from "@/public/Images/mlEngineerCard.svg";
import CalenderIcon from "@/public/Images/calenderIcon.svg";
import ArrowIcon from "@/public/Images/arrow.svg";
import Bibhuti_Jha from "@/public/Images/Bibhuti_Jha.svg";
import Gaurav_Kumar from "@/public/Images/GauravKumar.svg";
import SrishtiShiksha from "@/public/Images/Srishti_Shiksha.svg";
import linkedin from "@/public/Images/Linkedin.svg";
import { ClassValue, clsx } from "clsx";
import HiringManager from "@/public/Images/hiring manager.svg";
import Community from "@/public/Images/community.svg";
import CourseCard from "@/public/Images/Course Card.svg";
import Mentorship from "@/public/Images/mentorship.svg";
import { twMerge } from "tailwind-merge";
import ResumeReview from "@/public/Images/resume review.svg";
import Interview from "@/public/Images/interview.svg";
import Portfolio from "@/public/Images/Portfolio.svg";
import QuizBackgroud from "@/public/Images/QuizBackground.svg";
import QuizArrow from "@/public/Images/Quiz-arrow.svg";
import QuizLogo from "@/public/Images/QuizLogo.svg";
import Phone from "@/public/Images/call.svg";
import Whatsapp from "@/public/Images/Whatsapp.svg";
import linkedIcon from "@/public/Images/linkedin-svg.svg";
import instagramIcon from "@/public/Images/instagram_icon.svg";
import twitterIcon from "@/public/Images/twitter-icon.svg";
import youtubeIcon from "@/public/Images/youtube-icon.svg";
import DownloadIcon from "@/public/Images/DownloadIcon.svg";
import LiveClasses from "@/public/Images/LiveClasses.svg";
import DoubtSupport from "@/public/Images/DoubtSupport.svg";
import MentorshipIcon from "@/public/Images/MentorshipIcon.svg";
import InterviewIcon from "@/public/Images/InterviewIcon.svg";
import MockInterview from "@/public/Images/MockInterview.svg";
import TanoyDewanjee from "@/public/Images/TanoyDewanjee.svg";
import SameerDubey from "@/public/Images/SameerDubey.svg";
import SrinivasanBalaji from "@/public/Images/SrinivasanBalaji.svg";
import AtulAnand from "@/public/Images/AtulAnand.svg";
import VasuBhasin from "@/public/Images/VasuBhasin.svg";
import ManishSinha from "@/public/Images/ManishSinha.svg";
import AnkitaKundu from "@/public/Images/AnkitaKundu.svg";
import KshitjiJha from "@/public/Images/KshitijiJha.svg";
import LiveSession from "@/public/Images/LiveSession.svg";
import JobSimulation from "@/public/Images/JobStimulation.svg";
import DoubtSupportIcon from "@/public/Images/DoubtSupportIcon.svg";
import PeerLearning from "@/public/Images/PeerLearning.svg";
import ProblemSolving from "@/public/Images/Problem Solving Frameworks.svg";
import BusinessFundamentals from "@/public/Images/Business Fundamentals.svg";
import Statistcs from "@/public/Images/Statistics.svg";
import ExportData from "@/public/Images/Exploratory Data Analysis.svg";
import python from "@/public/Images/Python.svg";
import MsExcel from "@/public/Images/excel.svg";
import sql from "@/public/Images/sql.svg";
import PowerBi from "@/public/Images/1.svg";
import Template16 from "@/public/Images/Cert Template 16.svg";
import BusinessAnalystFellowshipCard from "@/public/Images/BusinessAnalystFellowshipBackground.svg";
import businessAnalystInsights from "@/public/Images/Business_analyst_insights_image.svg";
import PriceCardImage from "@/public/Images/PriceCardImage.svg";
import FarzandKhan from "@/public/Images/Farzand_khan.jpg";
import Lochan_raj from "@/public/Images/Lochan_raj.jpg";
import Suryansh_abijith from "@/public/Images/suryansh_abijith.jpg";
import Sampath_vinayak from "@/public/Images/sampath_vinayak.jpg";
import Sayan_paul from "@/public/Images/Sayan_paul.jpg";
import transformers from "@/public/Images/Transformers.png";
import largeLanguageModel from "@/public/Images/llm.png";
import ModelBuilding from "@/public/Images/ML Models.png";
import MlLibrary from "@/public/Images/ML Libraries.png";
import generativeModel from "@/public/Images/Generative Models.png";
import HiringManagerMobile from "@/public/Images/hiring_manager_mobile.svg";
import CourseCardMobile from "@/public/Images/Course_card_mobile.svg";
import MentorshipMobile from "@/public/Images/Mentorship_mobile.svg";
import CommunityMobile from "@/public/Images/Community_mobile.svg";
import DataScientistInsights from "@/public/Images/data_scientist_insights.svg";
import workshopInsights from "@/public/Images/workshopInsights.svg";
import Tanoy_profile from "@/public/Images/Tanoy_img.svg";
import HsbcLogo from "@/public/Images/Hsbc.svg";
import KoushikMitra from "@/public/Images/koushik_mitra.png";
import adithiaV from "@/public/Images/Adithia_v.png";
import samikshaGebise from "@/public/Images/samiksha_gebise.png";
import debjaniMajumder from "@/public/Images/debjani_majumder.png";
import charuGoyal from "@/public/Images/charu_goyal.png";
import pranoyDewanjee from "@/public/Images/pranoy_dewanjee.png";
import samridhi from "@/public/Images/samridhi.svg";
import durationIcon from "@/public/Images/duration.svg";
import mentorshipIcon from "@/public/Images/mentorship-icon.svg";
import portfolioIcon from "@/public/Images/portfolio-icon.svg";
import Api from "@/public/Images/Api.jpg";
import OpenAi from "@/public/Images/Open ai.png";
import Analitical from "@/public/Images/analytical framework.png";
import googleBitQuery from "@/public/Images/google-bigquery-logo-1.svg";
import promtEngineering from "@/public/Images/prompt-engineering-logo.png";
import Atul_profile from "@/public/Images/Atul_profile.png";
import sql_logo_workshop from "@/public/Images/sql_swl.png";
import Big_Query_sql_workshop from "@/public/Images/BigQuery_sql.jpg";
import sammer_dubey_profile from "@/public/Images/sammer_dubey_profile.svg";
import home_credit_company_logo from "@/public/Images/home_credit_logo.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanUpSlug = (slug: string): string => {
  let decodedSlug = decodeURIComponent(slug);
  decodedSlug = decodedSlug.replace(/\s+/g, " ");

  if (decodedSlug.toLowerCase().startsWith("course ")) {
    decodedSlug = decodedSlug.slice(7);
  }

  return decodedSlug.toLowerCase();
};

export {
  home_credit_company_logo,
  sammer_dubey_profile,
  samridhi,
  adithiaV,
  samikshaGebise,
  debjaniMajumder,
  charuGoyal,
  pranoyDewanjee,
  Sayan_paul,
  headerLogo,
  BackgroundLogo,
  CalenderIcon,
  ArrowIcon,
  linkedin,
  ResumeReview,
  QuizBackgroud,
  QuizArrow,
  QuizLogo,
  Phone,
  Whatsapp,
  linkedIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
  HiringManager,
  CourseCard,
  Mentorship,
  Community,
  DownloadIcon,
  BusinessAnalystCard,
  AiEngineeringCard,
  DataScientistCard,
  MlEngineeringCard,
  Bibhuti_Jha,
  Gaurav_Kumar,
  SrishtiShiksha,
  Interview,
  Portfolio,
  LiveClasses,
  DoubtSupport,
  MentorshipIcon,
  InterviewIcon,
  MockInterview,
  TanoyDewanjee,
  SameerDubey,
  SrinivasanBalaji,
  AtulAnand,
  VasuBhasin,
  ManishSinha,
  AnkitaKundu,
  KshitjiJha,
  LiveSession,
  JobSimulation,
  DoubtSupportIcon,
  PeerLearning,
  ProblemSolving,
  BusinessFundamentals,
  Statistcs,
  ExportData,
  python,
  MsExcel,
  sql,
  PowerBi,
  Template16,
  BusinessAnalystFellowshipCard,
  businessAnalystInsights,
  PriceCardImage,
  FarzandKhan,
  Lochan_raj,
  Suryansh_abijith,
  Sampath_vinayak,
  transformers,
  largeLanguageModel,
  ModelBuilding,
  MlLibrary,
  generativeModel,
  HiringManagerMobile,
  CourseCardMobile,
  CommunityMobile,
  MentorshipMobile,
  DataScientistInsights,
  workshopInsights,
  Tanoy_profile,
  HsbcLogo,
  KoushikMitra,
  durationIcon,
  mentorshipIcon,
  portfolioIcon,
  Api,
  OpenAi,
  Analitical,
  googleBitQuery,
  promtEngineering,
  Atul_profile,
  sql_logo_workshop,
  Big_Query_sql_workshop,
};
