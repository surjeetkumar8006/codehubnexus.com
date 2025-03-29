import React from "react";
import CoursePage from "../components/CoursePage";

const WebDevelopmentBootcamp = () => {
  const courseData = {
    title: "Web Development Bootcamp with Paid Internship",
    description:
      "Master front-end and back-end web development. Build real-world projects and secure a paid internship.",
    about:
      "A comprehensive 14-week Web Development Bootcamp designed to equip you with the skills to build modern web applications. Learn HTML, CSS, JavaScript, and popular frameworks like React and Node.js. Gain practical experience through a paid internship and receive placement assistance to kickstart your web development career.",
    highlights: [
      "Live + Recorded Lectures for flexible learning",
      "22+ Assignments & 7+ Real-world Projects to build your portfolio",
      "Paid Internship & 100% Placement Assistance",
      "1:1 Mentorship with Industry Experts",
      "Industry-Recognized Certification",
      "Hands-on with HTML, CSS, JavaScript, React, and Node.js",
      "Comprehensive curriculum covering front-end and back-end development",
      "Access to a supportive community of learners and mentors",
      "Career guidance and interview preparation",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Web Development & HTML/CSS Basics",
        content:
          "Introduction to web development concepts and HTML/CSS fundamentals for building web pages.",
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
        title: "Module 4: Back-End Development with Node.js & Express.js",
        content:
          "Build server-side applications and APIs using Node.js and Express.js.",
      },
      {
        title: "Module 5: Database Management with MongoDB",
        content:
          "Learn to manage and interact with databases using MongoDB.",
      },
      {
        title: "Module 6: Project and Internship Preparation",
        content:
          "Apply your skills to real-world projects and prepare for your paid internship with industry guidance.",
      },
    ],
    mentors: [
      {
        name: "Deepak Kumar",
        description:
          "Senior Web Developer at Google with 9+ years of experience in building scalable web applications.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Aishwarya Singh",
        description:
          "Front-End Lead at Facebook, specializing in React.js and UI/UX design.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Manish Sharma",
        description:
          "Back-End Expert with 11+ years of experience in Node.js and database management.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Web Developer",
      "Front-End Developer",
      "Back-End Developer",
      "Full Stack Developer",
      "UI/UX Developer",
      "Web Application Developer",
    ],
    salaryDetails: {
      "Web Developer": {
        freshers: "₹4,00,000 - ₹7,00,000",
        experienced: "₹20,00,000+",
      },
      "Front-End Developer": {
        freshers: "₹3,50,000 - ₹6,00,000",
        experienced: "₹18,00,000+",
      },
      "Back-End Developer": {
        freshers: "₹4,00,000 - ₹6,50,000",
        experienced: "₹19,00,000+",
      },
      "Full Stack Developer": {
        freshers: "₹4,50,000 - ₹8,00,000",
        experienced: "₹22,00,000+",
      },
      "UI/UX Developer": {
        freshers: "₹3,00,000 - ₹5,00,000",
        experienced: "₹15,00,000+",
      },
      "Web Application Developer": {
        freshers: "₹4,20,000 - ₹7,50,000",
        experienced: "₹21,00,000+",
      },
    },
    faqs: [
      {
        question: "What frameworks will I learn in this bootcamp?",
        answer:
          "You will learn React.js for front-end development and Node.js/Express.js for back-end development.",
      },
      {
        question: "Is prior coding experience required?",
        answer:
          "No, we start with the basics of HTML, CSS, and JavaScript, making it suitable for beginners.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "You will work on real-world projects covering front-end and back-end development, building a strong portfolio.",
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
    price: "₹27,999 ₹45,000 (38% Discount)",
    techStack: [
      { name: "HTML", image: "/images/mongo.jfif" },
      { name: "CSS", image: "/images/express.png" },
      { name: "JavaScript", image: "/images/react.png" },
      { name: "React.js", image: "/images/node.jfif" },
      { name: "Node.js", image: "/images/aws.jfif" },
      { name: "MongoDB", image: "/images/docker.png" },
    ],
    projects: [
      {
        title: "E-commerce Website with React.js",
        description:
          "Build a fully functional e-commerce website with user authentication and product management using React.js.",
        image: "/images/paymnet.png",
      },
      {
        title: "Social Media Application with Node.js",
        description:
          "Develop a social media application with user profiles and posts using Node.js and Express.js.",
        image: "/images/sociel.jfif",
      },
      {
        title: "Real-Time Chat Application with Socket.IO",
        description:
          "Create a real-time chat application with user authentication and private messaging.",
        image: "/images/chat.jfif",
      },
      {
        title: "Task Management Application with MongoDB",
        description:
          "Develop a task management application with a Kanban board and user collaboration using MongoDB.",
        image: "/images/task.jfif",
      },
    ],
    testimonials: [
      {
        name: "Divya Patel",
        quote:
          "The Web Development Bootcamp was fantastic! The hands-on projects and internship helped me land a great job.",
        image: "/images/amit-kumar.jpg",
        role: "Web Developer",
      },
      {
        name: "Suresh Kumar",
        quote:
          "I learned so much in this bootcamp. The instructors were knowledgeable, and the career support was top-notch.",
        image: "/images/priya-sharma.jpg",
        role: "Front-End Developer",
      },
      {
        name: "Pooja Sharma",
        quote:
          "The practical experience I gained was invaluable. I highly recommend this bootcamp to anyone looking to start a career in web development.",
        image: "/images/rohan-verma.jpg",
        role: "Back-End Developer",
      },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default WebDevelopmentBootcamp;