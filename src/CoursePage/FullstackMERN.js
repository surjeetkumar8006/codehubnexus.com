import React from "react";
import CoursePage from "../components/CoursePage";

const FullstackMern = () => {
  const courseData = {
    title: "Full Stack MERN Development with Paid Internship",
    description:
      "Master MongoDB, Express.js, React, and Node.js with real-world projects & industry-level training. Get a paid internship and placement assistance.",
    about:
      "A comprehensive 16-week industry-focused Full Stack MERN Bootcamp designed to equip you with all the essential skills required for modern web development. This course goes beyond theory, emphasizing practical application through numerous assignments, real-world projects, and a paid internship. You'll work closely with industry experts, build a robust GitHub portfolio, and gain hands-on experience with AWS and cloud deployment. By the end of this bootcamp, you'll be job-ready, with a strong understanding of both front-end and back-end development.",
    highlights: [
      "Live + Recorded Lectures for flexible learning",
      "25+ Assignments & 8+ Real-world Projects to build your portfolio",
      "Paid Internship & 100% Placement Assistance to kickstart your career",
      "1:1 Mentorship with Industry Experts for personalized guidance",
      "Industry-Recognized Certification to validate your skills",
      "Dedicated GitHub Portfolio Building to showcase your work",
      "Hands-on with AWS & Cloud Deployment for modern development practices",
      "Comprehensive curriculum covering all aspects of MERN stack development",
      "Access to a supportive community of learners and mentors",
      "Career guidance and interview preparation",
    ],
    curriculum: [
      {
        title: "Module 1: Introduction to Web Development & Git/GitHub",
        content:
          "Dive into the world of web development with HTML, CSS, and JavaScript basics. Learn essential version control with Git and GitHub, and understand best coding practices for collaborative projects.",
      },
      {
        title: "Module 2: Mastering HTML, CSS, and JavaScript (ES6+)",
        content:
          "Advance your JavaScript skills with in-depth coverage of ES6+ features, closures, promises, and async/await. Build dynamic and interactive web pages with advanced CSS techniques.",
      },
      {
        title: "Module 3: Frontend Development with React.js",
        content: [
          "Master React Components, Props, State & Hooks for building reusable UI components",
          "Implement seamless navigation with React Router",
          "Manage complex application state using Context API & Redux Toolkit",
          "Optimize React applications for performance and follow best practices",
          "Learn testing React components with Jest and React Testing Library.",
          "Explore React's ecosystem, including libraries like Material-UI and Ant Design.",
        ],
      },
      {
        title: "Module 4: Backend Development with Node.js & Express.js",
        content: [
          "Design and implement REST APIs, Middleware & Express Routing for server-side logic",
          "Secure your applications with User Authentication (JWT, OAuth, Google Auth)",
          "Implement Role-Based Access Control (RBAC) for managing user permissions",
          "Learn to build scalable and efficient backend services using Node.js and Express.js.",
          "Database integration with MongoDB and Mongoose.",
          "Learn to deploy your backend applications to cloud platforms.",
        ],
      },
      {
        title: "Module 5: MongoDB and Database Management",
        content: [
          "Introduction to NoSQL databases and MongoDB.",
          "Database schema design and modeling.",
          "Performing CRUD operations with MongoDB.",
          "Aggregation and indexing in MongoDB.",
          "Database security and performance optimization.",
        ],
      },
      {
        title: "Module 6: Cloud Deployment and DevOps",
        content: [
          "Introduction to cloud computing and AWS.",
          "Deploying MERN applications to AWS.",
          "Containerization with Docker.",
          "Continuous Integration/Continuous Deployment (CI/CD) pipelines.",
          "Monitoring and logging with cloud services.",
        ],
      },
    ],
    mentors: [
      {
        name: "Surjeet Kumar",
        description:
          "Senior MERN Stack Developer at Google with 10+ years of experience in building scalable web applications.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Jane Smith",
        description:
          "Lead Engineer at Facebook specializing in React.js and frontend architecture, passionate about teaching and mentoring.",
        image: "/images/surjeet.jpeg",
      },
      {
        name: "Rajesh Kumar",
        description:
          "Cloud & DevOps Engineer at Amazon AWS with expertise in deploying and managing cloud-based applications.",
        image: "/images/surjeet.jpeg",
      },
    ],
    careerOpportunities: [
      "Full Stack Developer (MERN)",
      "Frontend Engineer (React.js, JavaScript)",
      "Backend Developer (Node.js, Express.js)",
      "Software Engineer (Web Applications)",
      "MERN Stack Developer (Specialized)",
      "DevOps Engineer (Docker, AWS, CI/CD)",
      "Technical Lead (Web Development)",
      "Web Application Architect",
      "UI/UX Developer",
    ],
    salaryDetails: {
      "Full Stack Developer (MERN)": {
        freshers: "₹4,00,000 - ₹7,00,000",
        experienced: "₹20,00,000+",
      },
      "Frontend Engineer (React.js, JavaScript)": {
        freshers: "₹3,50,000 - ₹6,00,000",
        experienced: "₹18,00,000+",
      },
      "Backend Developer (Node.js, Express.js)": {
        freshers: "₹4,00,000 - ₹6,50,000",
        experienced: "₹19,00,000+",
      },
      "Software Engineer (Web Applications)": {
        freshers: "₹3,80,000 - ₹6,20,000",
        experienced: "₹18,50,000+",
      },
      "MERN Stack Developer (Specialized)": {
        freshers: "₹4,50,000 - ₹7,50,000",
        experienced: "₹22,00,000+",
      },
      "DevOps Engineer (Docker, AWS, CI/CD)": {
        freshers: "₹5,00,000 - ₹8,00,000",
        experienced: "₹25,00,000+",
      },
      "Technical Lead (Web Development)": {
        experienced: "₹30,00,000+",
      },
      "Web Application Architect": {
        experienced: "₹35,00,000+",
      },
      "UI/UX Developer": {
        freshers: "₹3,00,000 - ₹5,00,000",
        experienced: "₹15,00,000+",
      },
    },
    faqs: [
      {
        question: "What is the course duration and schedule?",
        answer:
          "The course spans 16 weeks, with live sessions held [Specify Days/Times]. Recorded lectures are also provided for flexible learning.",
      },
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, we start with the basics of web development and gradually progress to advanced MERN stack concepts. Prior programming experience is helpful but not mandatory.",
      },
      {
        question: "What kind of certification will I receive?",
        answer:
          "Upon successful completion, you'll receive an industry-recognized certification that validates your skills in MERN stack development, along with internship support.",
      },
      {
        question: "What kind of placement assistance is provided?",
        answer:
          "We offer 100% placement support, including resume building, interview preparation, and connections with our network of hiring partners. You'll also gain practical experience through a paid internship.",
      },
      {
        question: "Will I get hands-on experience with cloud technologies?",
        answer:
          "Absolutely! You'll learn to deploy MERN applications on AWS and gain practical experience with Docker for containerization and CI/CD pipelines.",
      },
    ],
    image: "/images/fullstack.jfif",
    price: "₹29,999 ₹50,000 (40% Discount)",
    techStack: [
      { name: "MongoDB", image: "/images/mongo.jfif" },
      { name: "Express.js", image: "/images/express.png" },
      { name: "React.js", image: "/images/react.png" },
      { name: "Node.js", image: "/images/node.jfif" },
      { name: "AWS", image: "/images/aws.jfif" },
      { name: "Docker", image: "/images/docker.png" },
      { name: "Jest", image: "/images/docker.png" },
      { name: "Socket.IO", image: "/images/react.png" },
      { name: "Material-UI", image: "/images/node.jfif" },
    ],
    projects: [
      {
        title: "E-commerce Platform with Payment Gateway",
        description:
          "Build a fully functional e-commerce platform with user authentication, product management, shopping cart, and secure payment gateway integration.",
        image: "/images/paymnet.png",
      },
      {
        title: "Social Media Application with Real-Time Updates",
        description:
          "Develop a social media app where users can create profiles, post content, like, comment, and follow others. Implement real-time updates using Socket.IO.",
        image: "/images/sociel.jfif",
      },
      {
        title: "Real-Time Chat Application with User Authentication",
        description:
          "Create a real-time chat application with user authentication, private messaging, and group chat features using Socket.IO and Node.js.",
        image: "/images/chat.jfif",
      },
      {
        title: "Task Management Application with Kanban Board",
        description:
          "Develop a task management application with a Kanban board, drag-and-drop functionality, and user collaboration.",
        image: "/images/task.jfif",
      },
    ],
    testimonials: [
      {
        name: "Amit Kumar",
        quote:
          "This course transformed my career! The paid internship and real-world projects gave me the confidence to land my dream job. Highly recommended!",
        image: "/images/amit-kumar.jpg",
        role: "Full Stack Developer",
      },
      {
        name: "Priya Sharma",
        quote:
          "The best MERN course out there. The instructors were knowledgeable, and the projects were challenging but rewarding. Loved the hands-on experience!",
        image: "/images/priya-sharma.jpg",
        role: "Frontend Engineer",
      },
      {
        name: "Rohan Verma",
        quote:
          "The internship and real-world projects helped me get a job at a top tech company. The support and mentorship were invaluable!",
        image: "/images/rohan-verma.jpg",
        role: "MERN Stack Developer",
      },
    ],
  };

  return <CoursePage courseData={courseData} />;
};

export default FullstackMern;