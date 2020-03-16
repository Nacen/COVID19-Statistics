import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <>
      <div className="card-list">
        {Object.keys(data).map(item => (
          <Card key={item} title={item} value={data[item]} />
        ))}
      </div>
      <style jsx>{`
        .card-list {
          display: grid;
          width: 100%;
          grid-gap: 20px;
          grid-template-rows: repeat(2, 1fr);
          grid-template-columns: repeat(2, 1fr);
          justify-items: center;
        }

        @media (max-width: 600px) {
          .card-list {
            grid-template-rows: repeat(auto, 1fr);
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default CardList;
