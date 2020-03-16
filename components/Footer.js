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
          <p>Credits to WHO, EliteDaMyth.</p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            width: 100%;
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
            color: #0070f3;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Footer;
