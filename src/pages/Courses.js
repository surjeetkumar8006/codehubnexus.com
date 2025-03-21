import React, { useEffect, useState } from "react";
import CourseCard from "../pages/CourseCard";
import "../style/Home.css"; 

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="courses-container">
      <h2>Our Popular Courses</h2>
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid-container">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
