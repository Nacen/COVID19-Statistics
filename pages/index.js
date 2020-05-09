import React from "react";
import { SWRConfig } from "swr";
import Head from "next/head";
import Footer from "../components/Footer";
import About from "../components/About";
import Advisory from "../components/Advisory";
import MythBuster from "../components/MythBuster";
import TotalStats from "../components/TotalStats/TotalStats";
import fetcher from "../utils/FETCHER/FETCHER";
import CountriesStatsContainer from "../components/CountriesStats/CountriesStatsContainer";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>COVID19 Statistics</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>

      <SWRConfig
        value={{
          refreshInterval: 0,
          fetcher: fetcher,
        }}
      >
        <main>
          <h1 className="title">COVID-19 Stats</h1>
          <TotalStats />
          <CountriesStatsContainer />
          <div className="scrollable-info">* Table is scrollable</div>

          <About />
          <Advisory />
          <MythBuster />
        </main>
      </SWRConfig>

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

        .title {
          margin: 0 0 2rem;
          line-height: 1.15;
          font-size: 3.6rem;
          text-align: center;
        }

        .scrollable-info {
          font-size: 20px;
          margin: 10px 0;
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
        svg {
          font-size: 20px;
          width: 20px;
          height: 20px;
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

export default Home;
