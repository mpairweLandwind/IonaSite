import React from "react";
import "./About.css";
import Afrikan from "../../assets/Afrikan.jpg";

const About = () => {
  return (
    <div>
      <div className="collab">
        <img className="cola" src={Afrikan} alt="" />
      </div>
      <div className="descrip">
        <h2 className="abt">About us</h2>
        <p>
        In today’s fast-paced digital world, standing out and making a lasting impact is more important than ever. At iONA Tech, we don’t just offer services—we become your creative partner, helping businesses and organizations 
        harness the power of design and technology to engage, inspire, and grow. <p> Making it Big in Software</p>
        </p>
      </div>
    </div>
  );
};

export default About;
