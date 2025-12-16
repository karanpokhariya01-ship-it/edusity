import React, { useState } from "react";
import "./About.css";
import AboutVideo from "./AboutVideo/AboutVideo.jsx";

const About = () => {
  const [video, setvideo] = useState(false);

  return (
    <>
      <div className="About">
        <div className="container">
          <div className="about_img_section">
            <img src="edusity_assets/about.png" alt="about_img" className="about_img" />
            <img
              src="edusity_assets/play-icon.png"
              alt="about_icon"
              className="play_icon"
              onClick={() => setvideo(true)}
            />
          </div>

          <div className="about_content_section">
            <h3 className="textBlue">ABOUT UNIVERSITY</h3>
            <h2 className="textDarkblue">Nurturing Tomorrow's Leaders Today</h2>
            <p className="textGray mb-3">
              Embark on a transformative educational journey with our university.comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education  
            </p>
            <p className="textGray mb-3">
              With a focus on innovation, hands-on learning, and mentorship...our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p className="textGray mb-3">
              Whether you aspire to become a teacher, administrator, or educational leader... our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
          </div>
        </div>
      </div>

      {/* 👇 Yaha AboutVideo likhna hai — RETURN ke ANDAR */}
      <AboutVideo video={video} setvideo={setvideo} />
    </>
  );
};

export default About;