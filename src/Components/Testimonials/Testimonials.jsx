import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    quote:
      "The team at Iona Tech was phenomenal! From start to finish, their expertise and professional approach made everything incredibly smooth. We couldn't be happier with the experience and the results!",
    name: "Mutebi Christopher",
    title: "Marketing Manager at City Sites",
    image: "/images/chris.jpg", 
  },
  {
    quote:
      "Their software solutions transformed our workflow. We saw a 45% boost in efficiency within the first three months.",
    name: "SSuubi ",
    title: "Operations Manager at Delipu Cash",
    image: "/images/placeholder-avatar.png", // Placeholder
  },
  {
    quote:
      "Reliable, responsive, and results-driven. We couldn't have asked for a better technology partner.",
    name: "Buyinza Jonathan",
    title: "CEO at FutureWorks",
    image: "/images/placeholder-avatar.png", // Placeholder
  },
];

export default function TestimonialsPage() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>
          At Iona Tech, we deliver innovative solutions and exceptional
          support to our clients worldwide. Here’s what they have to say.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image">
              <img src={t.image} alt={`${t.name} profile`} />
            </div>
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <p className="author-name">{t.name}</p>
              <p className="author-title">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
