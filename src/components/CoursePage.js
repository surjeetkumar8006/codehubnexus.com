import React from "react";
import "../style/CoursePage.css";
import { Card, Accordion, Col, Badge } from "react-bootstrap";

const CoursePage = ({ courseData }) => {
  return (
    <div className="course-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">{courseData.title}</h1>
        <p className="hero-subtitle">{courseData.description}</p>
        <div className="course-info">
          <Badge pill bg="primary" className="course-info-item">
            📄 20+ Assignments
          </Badge>
          <Badge pill bg="success" className="course-info-item">
            💻 5+ Projects
          </Badge>
          <Badge pill bg="info" className="course-info-item">
            ⏱️ {courseData.duration}
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="course-content"> {/* Removed Container and Row */}
        {/* Course Highlights */}
        <div className="course-highlights">
          <h2>Key Highlights</h2>
          <ul className="tight-list">
            {courseData.highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                ✅ {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Details Accordion */}
        <Accordion defaultActiveKey="0" className="custom-accordion">
          {/* About the Course */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>About the Course</Accordion.Header>
            <Accordion.Body>{courseData.about}</Accordion.Body>
          </Accordion.Item>

          {/* Course Curriculum (Modified) */}
          {courseData.curriculum.map((module, index) => (
            <Accordion.Item eventKey={(index + 1).toString()} key={index}>
              <Accordion.Header>{module.title}</Accordion.Header>
              <Accordion.Body>
                {Array.isArray(module.content) ? (
                  <ul className="tight-list">
                    {module.content.map((point, i) => (
                      <li key={i}>📌 {point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{module.content}</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Mentors Section */}
        <h2 className="mentor-heading">Meet Your Mentors</h2>
        <div className="mentor-section">
          {courseData.mentors.map((mentor, index) => (
            <Card key={index} className="mentor-card">
              <Card.Img
                variant="top"
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
              <Card.Body>
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-description">{mentor.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
{/* Career Opportunities Section */}
<h2 className="career-heading">Career Opportunities</h2>
<div className="career-section">
  <ul className="tight-list">
    {courseData.careerOpportunities.map((career, index) => (
      <li key={index} className="career-item">
        🚀 {career}
        {/* Salary and Experience Details */}
        {courseData.salaryDetails && courseData.salaryDetails[career] && (
          <div>
            {courseData.salaryDetails[career].freshers && (
              <p>
                <strong>Freshers (1-2 years):</strong> ₹{courseData.salaryDetails[career].freshers} (Approx.)
              </p>
            )}
            {courseData.salaryDetails[career].experienced && (
              <p>
                <strong>10+ years experience:</strong> ₹{courseData.salaryDetails[career].experienced} (Approx.)
              </p>
            )}
          </div>
        )}
      </li>
    ))}
  </ul>
</div>

        {/* Tech Stack Section */}
        <div className="tech-stack-section">
          <h2 className="tech-stack-heading">Tech Stack</h2>
          <div className="tech-stack-icons">
            {courseData.techStack.map((tech, index) => (
              <img
                key={index}
                src={tech.image}
                alt={tech.name}
                className="tech-icon"
              />
            ))}
          </div>
        </div>

        {/* Project Showcase Section */}
        <div className="project-showcase-section">
          <h2 className="project-showcase-heading">Project Showcase</h2>
          <div className="project-grid">
            {courseData.projects.map((project, index) => (
              <Card key={index} className="project-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <Card.Body>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="testimonials-heading">Student Testimonials</h2>
          <div className="testimonials-grid">
            {courseData.testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <Card.Body>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <Accordion className="custom-accordion">
          {courseData.faqs.map((faq, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CoursePage;