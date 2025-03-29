import React from "react";
import CoursePage from "../components/CoursePage";

const BackendDevelopment = () => {
  const courseData = {
    title: "Backend Development Bootcamp with Internship",
    description:
      "Master Node.js and Express.js. Build robust server-side applications and secure a paid internship.",
    about:
      "A focused 12-week Backend Development Bootcamp designed to equip you with the skills to build scalable and efficient server-side applications. Learn Node.js, Express.js, and database management with MongoDB. Gain practical experience through a paid internship and receive placement assistance to kickstart your back-end development career.",
    highlights: [
      "Live + Recorded Lectures for flexible learning",
      "20+ Assignments & 6+ Real-world Projects to build your portfolio",
      "Paid Internship & 100% Placement Assistance",
      "1:1 Mentorship with Industry Experts",
      "Industry-Recognized Certification",
      "Hands-on with Node.js, Express.js, and MongoDB",
      "Comprehensive curriculum covering back-end development and API design",
      "Access to a supportive community of learners and mentors",
      "Career guidance and interview preparation",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Backend Development & Node.js Basics",
        content:
          "Introduction to back-end development concepts and Node.js fundamentals for building server-side applications.",
      },
      {
        title: "Module 2: Express.js for API Development",
        content:
          "Learn Express.js for building RESTful APIs and server-side logic.",
      },
      {
        title: "Module 3: Database Management with MongoDB",
        content:
          "Learn to manage and interact with databases using MongoDB.",
      },
      {
        title: "Module 4: Authentication and Security",
        content:
          "Implement user authentication and security measures for robust back-end applications.",
      },
      {
        title: "Module 5: Deployment and Scaling",
        content:
          "Learn to deploy and scale back-end applications for production environments.",
      },
      {
        title: "Module 6: Project and Internship Preparation",
        content:
          "Apply your skills to real-world projects and prepare for your paid internship with industry guidance.",
      },
    ],
    mentors: [
      {
        name: "Vikram Sharma",
        description:
          "Senior Back-End Developer at Amazon with 8+ years of experience in building scalable server-side applications.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Kavita Singh",
        description:
          "Node.js and API Expert at Microsoft, specializing in back-end architecture and performance optimization.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Rahul Patel",
        description:
          "Database and Security Specialist with 9+ years of experience in building secure and efficient back-end systems.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Back-End Developer",
      "Node.js Developer",
      "API Developer",
      "Server-Side Developer",
      "Database Administrator",
      "Back-End Engineer",
    ],
    salaryDetails: {
      "Back-End Developer": {
        freshers: "₹4,00,000 - ₹6,50,000",
        experienced: "₹19,00,000+",
      },
      "Node.js Developer": {
        freshers: "₹4,20,000 - ₹7,50,000",
        experienced: "₹21,00,000+",
      },
      "API Developer": {
        freshers: "₹4,50,000 - ₹8,00,000",
        experienced: "₹22,00,000+",
      },
      "Server-Side Developer": {
        freshers: "₹3,80,000 - ₹6,20,000",
        experienced: "₹18,50,000+",
      },
      "Database Administrator": {
        freshers: "₹5,00,000 - ₹9,00,000",
        experienced: "₹25,00,000+",
      },
      "Back-End Engineer": {
        freshers: "₹5,20,000 - ₹9,50,000",
        experienced: "₹26,00,000+",
      },
    },
    faqs: [
      {
        question: "What frameworks will I learn in this bootcamp?",
        answer:
          "You will learn Node.js and Express.js for building server-side applications and RESTful APIs.",
      },
      {
        question: "Is prior coding experience required?",
        answer:
          "Basic JavaScript knowledge is recommended, but we start with the fundamentals of Node.js.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "You will work on real-world projects covering API development, database management, and server-side logic, building a strong portfolio.",
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
    price: "₹26,999 ₹42,000 (36% Discount)",
    techStack: [
      { name: "Node.js", image: "/images/mongo.jfif" },
      { name: "Express.js", image: "/images/express.png" },
      { name: "MongoDB", image: "/images/react.png" },
    ],
    projects: [
      {
        title: "RESTful API for E-commerce Application",
        description:
          "Build a RESTful API for an e-commerce application with product management and user authentication.",
        image: "/images/paymnet.png",
      },
      {
        title: "Social Media API with Node.js and MongoDB",
        description:
          "Develop a social media API with user profiles, posts, and real-time updates using Node.js and MongoDB.",
        image: "/images/sociel.jfif",
      },
      {
        title: "Real-Time Chat Application Backend",
        description:
          "Create the back-end for a real-time chat application with user authentication and private messaging.",
        image: "/images/chat.jfif",
      },
      {
        title: "Task Management API with Node.js",
        description:
          "Build an API for a task management application with a Kanban board and user collaboration.",
        image: "/images/task.jfif",
      },
    ],
    testimonials: [
      {
        name: "Manish Kumar",
        quote:
          "The Backend Development Bootcamp was excellent! The hands-on projects and internship helped me land a great job.",
        image: "/images/amit-kumar.jpg",
        role: "Back-End Developer",
      },
      {
        name: "Shreya Reddy",
        quote:
          "I learned so much in this bootcamp. The instructors were knowledgeable, and the career support was top-notch.",
        image: "/images/priya-sharma.jpg",
        role: "Node.js Developer",
      },
      {
        name: "Deepak Singh",
        quote:
          "The practical experience I gained was invaluable. I highly recommend this bootcamp to anyone looking to start a career in back-end development.",
        image: "/images/rohan-verma.jpg",
        role: "API Developer",
      },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default BackendDevelopment;