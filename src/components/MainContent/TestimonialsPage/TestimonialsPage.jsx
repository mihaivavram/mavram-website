import React, { Component } from "react";
import "./TestimonialsPage.css";

const testimonials = [
  {
    id: 1,
    name: "Zach Panos",
    role: "Founder & CEO, 4casters",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHuFgmT7kui-w/profile-displayphoto-shrink_800_800/B56ZUa4wrYGUAs-/0/1739912842257?e=1766016000&v=beta&t=AiVcDRmQ0s6dxVM9wLTZOSc8KAISjYvRAknz39t9mCM",
    text: "Mihai is a great person to be around who has a good technical background and is eager to learn. ",
  }
];

class TestimonialsPage extends Component {
  render() {
    return (
      <div className="primary-content">
        <div className="testimonials-header">
          <h3>What People Say</h3>
          <p className="testimonials-subtitle">
            Feedback from clients and collaborators I've had the pleasure of working with.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TestimonialsPage;
