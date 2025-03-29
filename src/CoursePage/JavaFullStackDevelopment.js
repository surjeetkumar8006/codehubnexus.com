import React from "react";
import CoursePage from "../components/CoursePage";

const JavaFullStackDevelopment = () => {
  const courseData = {
    title: "Java Full Stack Development Bootcamp with Internship",
    description:
      "Master Java, Spring Boot, and React.js. Build enterprise-level applications and secure a paid internship.",
    about:
      "A comprehensive 16-week Java Full Stack Development Bootcamp designed to equip you with the skills to build robust and scalable web applications. Learn Java, Spring Boot, and React.js, and apply your knowledge to real-world projects. Gain practical experience through a paid internship and receive placement assistance to kickstart your Java full stack development career.",
    highlights: [
      "Live + Recorded Lectures for flexible learning",
      "25+ Assignments & 8+ Real-world Projects to build your portfolio",
      "Paid Internship & 100% Placement Assistance",
      "1:1 Mentorship with Industry Experts",
      "Industry-Recognized Certification",
      "Hands-on with Java, Spring Boot, and React.js",
      "Comprehensive curriculum covering full stack development with Java",
      "Access to a supportive community of learners and mentors",
      "Career guidance and interview preparation",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Java & Core Concepts",
        content:
          "Introduction to Java programming and core concepts for building robust applications.",
      },
      {
        title: "Module 2: Spring Boot for Back-End Development",
        content:
          "Learn Spring Boot for building scalable and efficient back-end services.",
      },
      {
        title: "Module 3: Database Management with MySQL",
        content:
          "Learn to manage and interact with databases using MySQL.",
      },
      {
        title: "Module 4: Front-End Development with React.js",
        content:
          "Learn React.js for building dynamic and responsive user interfaces.",
      },
      {
        title: "Module 5: RESTful APIs and Microservices",
        content:
          "Build RESTful APIs and microservices for seamless communication between front-end and back-end.",
      },
      {
        title: "Module 6: Project and Internship Preparation",
        content:
          "Apply your skills to real-world projects and prepare for your paid internship with industry guidance.",
      },
    ],
    mentors: [
      {
        name: "Rajesh Kumar",
        description:
          "Senior Java Developer at Oracle with 10+ years of experience in building enterprise-level applications.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Sneha Sharma",
        description:
          "Spring Boot Expert at IBM, specializing in back-end development and microservices.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Amit Patel",
        description:
          "React.js and Front-End Specialist with 9+ years of experience in building dynamic web applications.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Java Full Stack Developer",
      "Spring Boot Developer",
      "Java Developer",
      "Back-End Developer (Java)",
      "Front-End Developer (React.js)",
      "Software Engineer (Java)",
    ],
    salaryDetails: {
      "Java Full Stack Developer": {
        freshers: "₹5,00,000 - ₹9,00,000",
        experienced: "₹25,00,000+",
      },
      "Spring Boot Developer": {
        freshers: "₹4,50,000 - ₹8,00,000",
        experienced: "₹22,00,000+",
      },
      "Java Developer": {
        freshers: "₹4,00,000 - ₹7,00,000",
        experienced: "₹20,00,000+",
      },
      "Back-End Developer (Java)": {
        freshers: "₹4,20,000 - ₹7,50,000",
        experienced: "₹21,00,000+",
      },
      "Front-End Developer (React.js)": {
        freshers: "₹3,80,000 - ₹6,50,000",
        experienced: "₹19,00,000+",
      },
      "Software Engineer (Java)": {
        freshers: "₹5,20,000 - ₹9,50,000",
        experienced: "₹26,00,000+",
      },
    },
    faqs: [
      {
        question: "What frameworks will I learn in this bootcamp?",
        answer:
          "You will learn Spring Boot for back-end development and React.js for front-end development.",
      },
      {
        question: "Is prior Java experience required?",
        answer:
          "No, we start with the basics of Java programming, making it suitable for beginners.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "You will work on real-world projects covering full stack development with Java, building a strong portfolio.",
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
    price: "₹32,999 ₹55,000 (40% Discount)",
    techStack: [
      { name: "Java", image: "/images/mongo.jfif" },
      { name: "Spring Boot", image: "/images/express.png" },
      { name: "MySQL", image: "/images/react.png" },
      { name: "React.js", image: "/images/node.jfif" },
    ],
    projects: [
      {
        title: "E-commerce Application with Spring Boot and React.js",
        description:
          "Build a full-fledged e-commerce application with user authentication, product management, and payment gateway integration.",
        image: "/images/paymnet.png",
      },
      {
        title: "Social Media Application with Java and React.js",
        description:
          "Develop a social media application with user profiles, posts, and real-time updates using Java and React.js.",
        image: "/images/sociel.jfif",
      },
      {
        title: "Task Management Application with Spring Boot and MySQL",
        description:
          "Create a task management application with a Kanban board and user collaboration using Spring Boot and MySQL.",
        image: "/images/task.jfif",
      },
      {
        title: "RESTful API for a Blog Application",
        description:
          "Build a RESTful API for a blog application using Spring Boot and MySQL.",
        image: "/images/chat.jfif",
      },
    ],
    testimonials: [
      {
        name: "Mahesh Kumar",
        quote:
          "The Java Full Stack Development Bootcamp was excellent! The hands-on projects and internship helped me land a great job.",
        image: "/images/amit-kumar.jpg",
        role: "Java Full Stack Developer",
      },
      {
        name: "Priya Reddy",
        quote:
          "I learned so much in this bootcamp. The instructors were knowledgeable, and the career support was top-notch.",
        image: "/images/priya-sharma.jpg",
        role: "Spring Boot Developer",
      },
      {
        name: "Rohan Singh",
        quote:
          "The practical experience I gained was invaluable. I highly recommend this bootcamp to anyone looking to start a career in Java full stack development.",
        image: "/images/rohan-verma.jpg",
        role: "Java Developer",
      },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default JavaFullStackDevelopment;