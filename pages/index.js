import React, { useState, useEffect } from "react";
import Head from "next/head";
import fetch from "node-fetch";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import About from "../components/About";
import LocationPicker from "../components/LocationPicker";
import Advisory from "../components/Advisory";

const API_ENDPOINT_ALL = "https://corona.lmao.ninja/all";
const API_ENDPOINT_COUNTRIES = "https://corona.lmao.ninja/countries";

const Home = ({ data, locationData }) => {
  console.log(data);
  const [location, setLocation] = useState("Worldwide");
  const statisticalData = data ? data : {};

  const [dataStatistics, setDataStatistics] = useState({
    ...statisticalData
  });

  const handleLocationChange = evt => {
    setLocation(evt.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        if (location === "Worldwide") {
          console.log("location is worldwide");
          const res = await fetch(API_ENDPOINT_ALL);
          const responseData = await res.json();
          const { cases, deaths, recovered } = await responseData;
          setDataStatistics({ cases, deaths, recovered });
        } else {
          console.log("location is a country");
          const res = await fetch(API_ENDPOINT_COUNTRIES);
          const data = await res.json();
          let filterDataByCountry = await {
            ...data.filter(item => item.country === location)[0]
          };
          console.log(filterDataByCountry);

          const {
            cases,
            deaths,
            recovered,
            todayCases: casesToday
          } = await filterDataByCountry;
          setDataStatistics({ cases, deaths, recovered, casesToday });
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    console.log(dataStatistics);
  }, [location]);

  return (
    <div className="container">
      <Head>
        <title>COVID19 Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Novel Corona Virus Statistics</h1>
        <LocationPicker
          handleLocationChange={handleLocationChange}
          location={location}
          locationData={locationData ? locationData : {}}
        />
        <CardList data={dataStatistics} />
        <About />
        <Advisory />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0 3rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          width: 85%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.6rem;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #222;
          color: #e2e2e2;
        }

        * {
          box-sizing: border-box;
        }

        @media (max-width: 600px) {
          html {
            font-size: 87.5%;
          }
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  // statistics data of corona virus that we fetch from the api
  try {
    const res = await fetch(API_ENDPOINT_ALL);
    const responseData = await res.json();

    const { cases, deaths, recovered } = responseData;
    const data = { cases, deaths, recovered };

    // location data for dropdown
    const getLocationData = await fetch(API_ENDPOINT_COUNTRIES);
    const locationData = await getLocationData.json();
    const sortedLocationData = locationData.sort((a, b) => {
      let countryNameA = a.country.toLowerCase(),
        countryNameB = b.country.toLowerCase();
      if (countryNameA < countryNameB)
        //sort string ascending
        return -1;
      if (countryNameA > countryNameB) return 1;
      return 0; //default return value (no sorting)
    });
    // Pass data to the page via props
    return { props: { data, locationData: sortedLocationData } };
  } catch (err) {}
}

export default Home;
