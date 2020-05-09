import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useSWR from "swr";
import ErrorMessage from "../../utils/ErrorMessage/ErrorMessage";
import API from "../../utils/API/API";
import CountriesStats from "./CountriesStats";

const CountriesStatsContainer = () => {
  const { data, error } = useSWR(API.countriesStatistics);

  if (error) return <ErrorMessage />;

  if (!data)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
      <div className="countries-stats-table">
        <CountriesStats data={data} />
        <style jsx>{`
          .countries-stats {
            width: 100%;
          }
          .countries-stats-table {
            overflow-y: auto;
            height: 400px;
            margin: 20px 0;
            width: 100%;
          }
        `}</style>
      </div>
  );
};

// country, cases, todayCases, deaths, Today's Deaths, Recovered , Active Cases, Critical Cases

export default CountriesStatsContainer;
