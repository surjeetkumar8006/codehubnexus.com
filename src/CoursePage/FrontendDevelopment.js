import React from "react";
import CoursePage from "../components/CoursePage";

const FrontendDevelopment = () => {
  const courseData = {
    title: "Frontend Development Bootcamp with Internship",
    description:
      "Master HTML, CSS, and JavaScript. Build interactive user interfaces and secure a paid internship.",
    about:
      "A focused 10-week Frontend Development Bootcamp designed to equip you with the skills to build modern and responsive user interfaces. Learn HTML, CSS, JavaScript, and popular frameworks like React.js. Gain practical experience through a paid internship and receive placement assistance to kickstart your front-end development career.",
    highlights: [
      "Live + Recorded Lectures for flexible learning",
      "18+ Assignments & 5+ Real-world Projects to build your portfolio",
      "Paid Internship & 100% Placement Assistance",
      "1:1 Mentorship with Industry Experts",
      "Industry-Recognized Certification",
      "Hands-on with HTML, CSS, JavaScript, and React.js",
      "Comprehensive curriculum covering front-end development and UI/UX principles",
      "Access to a supportive community of learners and mentors",
      "Career guidance and interview preparation",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Frontend Development & HTML/CSS Basics",
        content:
          "Introduction to front-end development concepts and HTML/CSS fundamentals for building web pages.",
      },
      {
        title: "Module 2: JavaScript Fundamentals & ES6+",
        content:
          "Master JavaScript basics and advanced ES6+ features for interactive web development.",
      },
      {
        title: "Module 3: Front-End Development with React.js",
        content:
          "Learn React.js for building dynamic and responsive user interfaces.",
      },
      {
        title: "Module 4: UI/UX Principles and Best Practices",
        content:
          "Learn UI/UX principles and best practices for creating user-friendly interfaces.",
      },
      {
        title: "Module 5: Project and Internship Preparation",
        content:
          "Apply your skills to real-world projects and prepare for your paid internship with industry guidance.",
      },
    ],
    mentors: [
      {
        name: "Priya Singh",
        description:
          "Senior Front-End Developer at Google with 7+ years of experience in building interactive user interfaces.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Ravi Kumar",
        description:
          "UI/UX Expert at Facebook, specializing in React.js and user-centered design.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Shalini Patel",
        description:
          "JavaScript and Front-End Specialist with 8+ years of experience in building dynamic web applications.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Front-End Developer",
      "UI/UX Developer",
      "React.js Developer",
      "Web Designer",
      "JavaScript Developer",
      "Front-End Engineer",
    ],
    salaryDetails: {
      "Front-End Developer": {
        freshers: "₹3,50,000 - ₹6,00,000",
        experienced: "₹18,00,000+",
      },
      "UI/UX Developer": {
        freshers: "₹3,00,000 - ₹5,00,000",
        experienced: "₹15,00,000+",
      },
      "React.js Developer": {
        freshers: "₹4,00,000 - ₹7,00,000",
        experienced: "₹20,00,000+",
      },
      "Web Designer": {
        freshers: "₹2,80,000 - ₹5,50,000",
        experienced: "₹16,00,000+",
      },
      "JavaScript Developer": {
        freshers: "₹3,80,000 - ₹6,50,000",
        experienced: "₹19,00,000+",
      },
      "Front-End Engineer": {
        freshers: "₹4,20,000 - ₹7,50,000",
        experienced: "₹21,00,000+",
      },
    },
    faqs: [
      {
        question: "What frameworks will I learn in this bootcamp?",
        answer:
          "You will learn React.js for building dynamic and responsive user interfaces.",
      },
      {
        question: "Is prior coding experience required?",
        answer:
          "No, we start with the basics of HTML, CSS, and JavaScript, making it suitable for beginners.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "You will work on real-world projects covering front-end development and UI/UX principles, building a strong portfolio.",
      },
      {
        question: "What is the duration of the internship?",
        answer:
          "The paid internship is integrated into the bootcamp, providing practical experience alongside your learning.",
      },
      {
        question: "What kind of placement assistance is provided?",
        answer:
          "We offer 100% placement support, including resume building, interview preparation, and connections with our hiring partners.",
      },
    ],
    image: "/images/fullstack.jfif",
    price: "₹22,999 ₹38,000 (40% Discount)",
    techStack: [
      { name: "HTML", image: "/images/mongo.jfif" },
      { name: "CSS", image: "/images/express.png" },
      { name: "JavaScript", image: "/images/react.png" },
      { name: "React.js", image: "/images/node.jfif" },
    ],
    projects: [
      {
        title: "E-commerce UI with React.js",
        description:
          "Build the user interface for an e-commerce website with product listings and shopping cart functionality.",
        image: "/images/paymnet.png",
      },
      {
        title: "Social Media UI with React.js",
        description:
          "Develop the user interface for a social media application with user profiles and posts.",
        image: "/images/sociel.jfif",
      },
      {
        title: "Dashboard UI with React.js",
        description:
          "Create a dashboard UI with interactive charts and data visualizations.",
        image: "/images/chat.jfif",
      },
      {
        title: "Portfolio Website with React.js",
        description:
          "Build a personal portfolio website to showcase your projects and skills.",
        image: "/images/task.jfif",
      },
    ],
    testimonials: [
      {
        name: "Ankita Sharma",
        quote:
          "The Frontend Development Bootcamp was excellent! The hands-on projects and internship helped me land a great job.",
        image: "/images/amit-kumar.jpg",
        role: "Front-End Developer",
      },
      {
        name: "Vikram Patel",
        quote:
          "I learned so much in this bootcamp. The instructors were knowledgeable, and the career support was top-notch.",
        image: "/images/priya-sharma.jpg",
        role: "UI/UX Developer",
      },
      {
        name: "Neha Singh",
        quote:
          "The practical experience I gained was invaluable. I highly recommend this bootcamp to anyone looking to start a career in front-end development.",
        image: "/images/rohan-verma.jpg",
        role: "React.js Developer",
      },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default FrontendDevelopment;