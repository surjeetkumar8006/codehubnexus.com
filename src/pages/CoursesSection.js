import React from "react";
import "../style/Home.css";

const courses = [
  {
    title: "Full Stack Development",
<<<<<<< HEAD
    description:
      "Master MERN: MongoDB, Express.js, React, Node.js. Hands-on projects, expert guidance.",
    image: "/images/fullstack.jfif",
    level: "Professional",
    btnText: "Explore Full Stack",
  },
  {
    title: "Data Analytics",
    description:
      "Master Data Analytics: Hands-on projects, expert guidance, and real-world insights.",
    image: "/images/dataana.jfif",
    level: "Professional",
    btnText: "Explore Data Analytics",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Join our Web Development Bootcamp: master HTML, CSS, and JavaScript.",
    image: "/images/fullstack.jfif",
    level: "Student",
    btnText: "Explore Web Dev",
  },
  {
    title: "Learn Frontend Development",
    description:
      "Learn React with practical projects and expert instruction.",
    image: "/images/frent.jfif",
    level: "Professional",
    btnText: "Explore React",
  },
  {
    title: "Learn Java Full Development",
    description:
      "Learn React with practical projects and expert instruction.",
    image: "/images/java.jfif",
    level: "Professional",
    btnText: "Explore Java Full.",
  },
  {
    title: "Learn Backand Developer",
    description:
      "Learn React with practical projects and expert instruction.",
    image: "/images/backand.jfif",
    level: "Professional",
    btnText: "Explore Node,Express",
  },
=======
    description: "Master MERN: MongoDB, Express.js, React, Node.js. Hands-on projects, expert guidance.",
    image: "/images/fullstack.jfif",
    level: "Professional",
    btnText: "Explore Full Stack",
    link: "/courses/fullstack-mern"
  },
  {
    title: "Data Analytics",
    description: "Master Data Analytics: Hands-on projects, expert guidance, and real-world insights.",
    image: "/images/dataana.jfif",
    level: "Professional",
    btnText: "Explore Data Analytics",
    link: "/courses/data-analytics"
  },
  {
    title: "Web Development Bootcamp",
    description: "Join our Web Development Bootcamp: master HTML, CSS, and JavaScript.",
    image: "/images/fullstack.jfif",
    level: "Student",
    btnText: "Explore Web Dev",
    link: "/courses/web-development-bootcamp"
  },
  {
    title: "Frontend Development",
    description: "Learn React with practical projects and expert instruction.",
    image: "/images/frent.jfif",
    level: "Professional",
    btnText: "Explore React",
    link: "/courses/frontend-development"
  },
  {
    title: "Java Full Stack Development",
    description: "Master Java Full Stack development with Spring Boot and Hibernate.",
    image: "/images/java.jfif",
    level: "Professional",
    btnText: "Explore Java Full",
    link: "/courses/java-full-stack-development"
  },
  {
    title: "Backend Development",
    description: "Learn Node.js, Express.js, and databases with hands-on projects.",
    image: "/images/backand.jfif",
    level: "Professional",
    btnText: "Explore Backend",
    link: "/courses/backend-development"
  }
>>>>>>> recovered-files
];

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <span className={`course-badge ${course.level === "Professional" ? "professional" : "student"}`}>
        {course.level}
      </span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
<<<<<<< HEAD
      <a href="#" className="explore-btn">
=======
      <a href={course.link} className="explore-btn">
>>>>>>> recovered-files
        {course.btnText} →
      </a>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <div className="courses-container">
      <h2>Our Popular Courses</h2>
      <div className="grid-container">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
