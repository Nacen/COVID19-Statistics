import React from "react";

const Advisory = () => {
  return (
    <section className="public-advisory">
      <h2>Basic protective measures against the new coronavirus</h2>
      <p>
        Stay aware of the latest information on the COVID-19 outbreak, available
        on the{" "}
        <a
          className="public-advisory-link"
          target="_blank"
          href="https://www.who.int"
          rel="noopener noreferrer"
        >
          WHO
        </a>{" "}
        website and through your national and local public health authority.
      </p>
      <h4>Wash your hands frequently</h4>
      <p>
        Regularly and thoroughly clean your hands with an alcohol-based hand rub
        or wash them with soap and water.{" "}
        <span className="public-advisory-why">Why? </span>
        Washing your hands with soap and water or using alcohol-based hand rub
        kills viruses that may be on your hands.
      </p>
      <h4>Maintain social distancing</h4>
      <p>
        Maintain at least 1 metre (3 feet) distance between yourself and anyone
        who is coughing or sneezing.{" "}
        <span className="public-advisory-why">Why? </span>
        When someone coughs or sneezes they spray small liquid droplets from
        their nose or mouth which may contain virus. If you are too close, you
        can breathe in the droplets, including the COVID-19 virus if the person
        coughing has the disease.
      </p>
      <h4>Avoid touching eyes, nose and mouth</h4>
      <p>
        <span className="public-advisory-why">Why? </span>
        Hands touch many surfaces and can pick up viruses. Once contaminated,
        hands can transfer the virus to your eyes, nose or mouth. From there,
        the virus can enter your body and can make you sick.
      </p>
      <h4>Practice respiratory hygiene</h4>
      <p>
        Make sure you, and the people around you, follow good respiratory
        hygiene. This means covering your mouth and nose with your bent elbow or
        tissue when you cough or sneeze. Then dispose of the used tissue
        immediately. <span className="public-advisory-why">Why? </span>
        Droplets spread virus. By following good respiratory hygiene you protect
        the people around you from viruses such as cold, flu and COVID-19.
      </p>
      <h4>
        If you have fever, cough and difficulty breathing, seek medical care
        early
      </h4>
      <p>
        Stay home if you feel unwell. If you have a fever, cough and difficulty
        breathing, seek medical attention and call in advance. Follow the
        directions of your local health authority.
      </p>
      <p>
        <span className="public-advisory-why">Why? </span>
        National and local authorities will have the most up to date information
        on the situation in your area. Calling in advance will allow your health
        care provider to quickly direct you to the right health facility. This
        will also protect you and help prevent spread of viruses and other
        infections.
      </p>
      <style jsx>{`
        .public-advisory h2 {
          font-size: 1.6rem;
        }

        .public-advisory p {
          line-height: 1.5;
        }

        .public-advisory h4 {
          font-size: 1.2rem;
        }

        .public-advisory-link {
          color: #B3C7D6FF;
        }
        .public-advisory-why {
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default Advisory;
