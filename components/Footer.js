import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
        <div>
          <p>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credits to WHO,
            </a>
            <a
              href="https://github.com/EliteDaMyth"
              target="_blank"
              rel="noopener noreferrer"
            >
              EliteDaMyth.
            </a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            width: 85%;
            height: 100px;
            border-top: 1px solid #3e3e3e;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #B3C7D6FF;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Footer;
