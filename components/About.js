import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">What is the Corona virus?</h2>
        <p className="about-content">
          Coronaviruses (CoV) are a large family of viruses that cause illness
          ranging from the common cold to more severe diseases such as Middle
          East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory
          Syndrome (SARS-CoV).
        </p>
        <p className="about-content">
          Coronavirus disease (COVID-19) is a new strain that was discovered in
          2019 and has not been previously identified in humans.
        </p>
      </section>
      <style jsx>{`
        .about {
          border-top: 1px solid #3e3e3e;
        }
        .about-title {
          font-size: 1.4rem;
        }
        .about-content {
          font-size: 1rem;
          margin: 1rem 0;
        }
      `}</style>
    </>
  );
};

export default About;
