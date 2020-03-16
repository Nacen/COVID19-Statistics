import React from "react";

const About = ({ title, content }) => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">About {title}</h2>
        <p className="about-content">{content}</p>
      </section>
      <styled jsx>{`
        .about {
          
        } 
        .about-title {
            
        }
        .about-content {

        }
      `}</styled>
    </>
  );
};

export default About;
