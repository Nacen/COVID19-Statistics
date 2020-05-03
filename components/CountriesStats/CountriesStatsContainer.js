import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";
import ErrorMessage from "../../utils/ErrorMessage/ErrorMessage";
import API from "../../utils/API/API";
import CountriesStats from "./CountriesStats";

const CountriesStatsContainer = () => {
  const { data, error } = useSWR(API.countriesStatistics);

  if (error) return <ErrorMessage />;
  // i was given an option to mutate the data, but i dont want to mutate it i want to store it in a usestate

  if (!data)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <div className="countries-stats-wrapper">
      <CountriesStats data={data} />
      <small className="scrollable-info">* Table is scrollable</small>
      <style jsx>{`
        .countries-stats-wrapper {
          overflow-y: auto;
          height: 400px;
          margin: 20px 0;
          width: 100%;
        }
        .scrollable-info {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

// country, cases, todayCases, deaths, Today's Deaths, Recovered , Active Cases, Critical Cases

export default CountriesStatsContainer;
