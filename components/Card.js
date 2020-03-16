import React from "react";

const Card = ({ title, value }) => {
  let cardTitle = title.split(/(?=[A-Z])/).join(" ");
  return (
    <>
      <div className="card">
        <h3>{cardTitle.slice(0, 1).toUpperCase() + cardTitle.slice(1)}</h3>
        <p>{value}</p>
      </div>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            width: 75%;
            padding: 1.5rem;
            height: 150px;
            align-self: center;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 3px solid #d1d1d1;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 2rem;
          }

          .card p {
            margin: 0;
            font-size: 1.5rem;
            line-height: 1.5;
          }
          @media (max-width: 600px) {
          .card {
            width: 60%;
          }
        }
        `}
      </style>
    </>
  );
};

export default Card;
