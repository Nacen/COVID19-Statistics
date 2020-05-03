import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

const CountriesStats = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortColumn, setSortColumn] = useState({
    key: "cases",
    order: "desc",
  });

  const sortData = (columnKey) => {
    const currentSortColumn = { ...sortColumn };
    if (currentSortColumn.key === columnKey)
      currentSortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      currentSortColumn.key = columnKey;
      currentSortColumn.order = "desc";
    }
    setSortColumn(currentSortColumn);
  };

  useEffect(() => {
    setSortedData(_.orderBy(data, [sortColumn.key], [sortColumn.order]));
  }, [sortColumn]);

  const resetFilters = () => {
    setSortedData(data);
  };

  // const sortedData = _.orderBy(data, [sortColumn.key], [sortColumn.order]);

  return (
    <Table hover variant="dark">
      <thead>
        <tr>
          <th className="table-heading" onClick={() => sortData("country")}>
            <span>Country </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("cases")}>
            <span>Confirmed Cases </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("todayCases")}>
            <span>Cases Today </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("deaths")}>
            <span>Deaths </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("todayDeaths")}>
            <span>Deaths Today </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("recovered")}>
            <span>Recovered </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("active")}>
            <span>Active Cases </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
          <th className="table-heading" onClick={() => sortData("critical")}>
            <span>Critical Cases </span>
            <FontAwesomeIcon icon={faSort} size="xs" />
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((countryData) => {
          return (
            <tr key={countryData.country}>
              <td>{countryData.country} </td>
              <td>{countryData.cases}</td>
              <td>{countryData.todayCases}</td>
              <td>{countryData.deaths}</td>
              <td>{countryData.todayDeaths}</td>
              <td>{countryData.recovered}</td>
              <td>{countryData.active}</td>
              <td>{countryData.critical}</td>
            </tr>
          );
        })}
      </tbody>
      <style jsx>{`
        .table-heading {
          vertical-align: middle;
          position: sticky;
          top: 0;
          white-space: nowrap;
          background-color: #343a40;
          box-shadow: 0 0 0 1px #343a40;
        }
        th ~ svg {
          width: 0.75em;
          font-size: 0.75em;
        }
      `}</style>
    </Table>
  );
};

export default CountriesStats;
