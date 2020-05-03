import React from "react";
import Table from "react-bootstrap/Table";
import API from "../../utils/API/API";
import useSWR from "swr";
import ErrorMessage from "../../utils/ErrorMessage/ErrorMessage";
import Spinner from "react-bootstrap/Spinner";

const TotalStats = () => {
  const { data, error } = useSWR(API.totalStats);

  if (error) return <ErrorMessage />;

  if (!data)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <section className="total-stats-container">
      <Table hover variant="dark">
        <thead>
          <tr>
            <th>
              <h3>Total Stats</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Confirmed Cases</td>
            <td>{data.cases}</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td>{data.deaths}</td>
          </tr>
          <tr>
            <td>Deaths Reported Today</td>
            <td>{data.todayDeaths}</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td>{data.recovered}</td>
          </tr>
          <tr>
            <td>Active Cases</td>
            <td>{data.active}</td>
          </tr>
          <tr>
            <td>Critical Condition</td>
            <td>{data.critical}</td>
          </tr>
        </tbody>
      </Table>
      <style jsx>{`
        .total-stats-container {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default TotalStats;
