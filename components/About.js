import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <h2 className="about-title">What is the New Corona Virus?</h2>
        <p className="about-content">
          You might've heard different names for the virus like CoV (Corona
          Virus), NCoV (Novel Corona Virus), and COVID-19 (previously known as
          “2019 novel coronavirus”). Currently there are being used interchangeably
          What are the differences?
        </p>
        <p className="about-content">
          Coronaviruses (CoV) are a large family of viruses that cause illness
          ranging from the common cold to more severe diseases such as Middle
          East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory
          Syndrome (SARS-CoV).
        </p>
        <p className="about-content">
          Coronavirus disease 2019 (COVID-19) is the official name that have been announced.
        </p>
        <p>
          It's called Novel Corona Virus (NCoV) because it's a new strain that
          was discovered and has not been previously identified in humans. The
          word novel means new or unusual in an interesting way.
        </p>

        <p className="about-content">
          Coronaviruses are zoonotic, meaning they are transmitted between
          animals and people. Detailed investigations found that SARS-CoV was
          transmitted from civet cats to humans and MERS-CoV from dromedary
          camels to humans. Several known coronaviruses are circulating in
          animals that have not yet infected humans.{" "}
        </p>
        <p>
          Common signs of infection include respiratory symptoms, fever, cough,
          shortness of breath and breathing difficulties. In more severe cases,
          infection can cause pneumonia, severe acute respiratory syndrome,
          kidney failure and even death.
        </p>
      </section>
      <style jsx>{`
        .about {
          border-top: 1px solid #3e3e3e;
        }
        .about-title {
          font-size: 1.4rem;
          margin-top: 1.5rem;
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
