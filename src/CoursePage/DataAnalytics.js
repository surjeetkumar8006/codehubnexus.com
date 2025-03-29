// DataAnalytics.js
import React from "react";
import CoursePage from "../components/CoursePage";

const DataAnalytics = () => {
  const courseData = {
    title: "Data Analytics Bootcamp with Internship",
    description:
      "Master data analysis tools and techniques. Gain hands-on experience with real-world projects and secure a paid internship.",
    about:
      "A comprehensive bootcamp designed to equip you with the skills needed to excel in data analytics. Learn data visualization, statistical analysis, and machine learning basics. Gain practical experience through projects and a paid internship.",
    highlights: [
      "Live interactive sessions with industry experts",
      "Hands-on projects and case studies",
      "Paid internship for real-world experience",
      "Career guidance and placement assistance",
      "Industry-recognized certification",
      "Access to a supportive learning community",
      "Comprehensive curriculum covering data analysis tools",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Data Analytics",
        content: "Fundamentals of data analytics, tools, and techniques.",
      },
      {
        title: "Module 2: Data Visualization with Python",
        content: "Creating insightful visualizations using libraries like Matplotlib and Seaborn.",
      },
      {
        title: "Module 3: Statistical Analysis",
        content: "Understanding statistical concepts and applying them to data analysis.",
      },
      {
        title: "Module 4: Machine Learning Basics",
        content: "Introduction to machine learning algorithms and their applications.",
      },
      {
        title: "Module 5: SQL for Data Analysis",
        content: "Querying and manipulating data using SQL.",
      },
      {
        title: "Module 6: Project and Internship",
        content: "Real-world projects and a paid internship to apply your skills.",
      },
    ],
    mentors: [
      {
        name: "Aishwarya Patel",
        description: "Data Scientist with 8+ years of experience.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Vikram Singh",
        description: "Analytics Manager at a leading tech company.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Neha Sharma",
        description: "Data Visualization Expert.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "Market Research Analyst",
      "Data Visualization Specialist",
    ],
    salaryDetails: {
      "Data Analyst": { freshers: "₹3,50,000 - ₹6,00,000", experienced: "₹15,00,000+" },
      "Business Analyst": { freshers: "₹4,00,000 - ₹7,00,000", experienced: "₹18,00,000+" },
      "Data Scientist": { freshers: "₹5,00,000 - ₹8,00,000", experienced: "₹22,00,000+" },
      "Market Research Analyst": { freshers: "₹3,00,000 - ₹5,50,000", experienced: "₹14,00,000+" },
      "Data Visualization Specialist": { freshers: "₹3,20,000 - ₹5,80,000", experienced: "₹16,00,000+" },
    },
    faqs: [
      { question: "What tools will I learn?", answer: "Python, SQL, Tableau, and more." },
      { question: "Is prior experience required?", answer: "No, it's beginner-friendly." },
      { question: "What kind of projects?", answer: "Real-world projects from various industries." },
    ],
    image: "/images/fullstack.jfif",
    price: "₹24,999 ₹40,000 (37% Discount)",
    techStack: [
      { name: "Python", image: "/images/mongo.jfif" },
      { name: "SQL", image: "/images/express.png" },
      { name: "Tableau", image: "/images/react.png" },
      { name: "Pandas", image: "/images/node.jfif" },
      { name: "NumPy", image: "/images/aws.jfif" },
    ],
    projects: [
      { title: "Sales Data Analysis", description: "Analyze sales data to identify trends.", image: "/images/paymnet.png" },
      { title: "Customer Segmentation", description: "Segment customers based on behavior.", image: "/images/sociel.jfif" },
      { title: "Financial Data Analysis", description: "Analyze financial data for insights.", image: "/images/chat.jfif" },
    ],
    testimonials: [
      { name: "Rahul Mehta", quote: "Great course! Got a job as a Data Analyst.", image: "/images/amit-kumar.jpg", role: "Data Analyst" },
      { name: "Sneha Reddy", quote: "The internship was very helpful.", image: "/images/priya-sharma.jpg", role: "Business Analyst" },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default DataAnalytics;