import React from "react";
import "../style/Home.css"; // Custom Styling

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <span className={`course-badge ${course.level === "Professional" ? "professional" : "student"}`}>
        {course.level}
      </span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <a href={course.link} className="explore-btn">
        {course.btnText} →
      </a>
    </div>
  );
};

export default CourseCard;
