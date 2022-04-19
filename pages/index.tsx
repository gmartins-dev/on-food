import type { NextPage } from "next";
import Head from "next/head";
import { Character, PageTemplate, Search } from "@/components";
import Styles from "../styles/internals.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>iHungry - Food Delivery App - See the best food places in your city</title>
        <meta name="description" content="iHungry - Food Delivery App - See the best food places in your city"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate>
        <div className={Styles.content}>
          <h1>Find the best delivery options near you.</h1>
          <Search />
          <h2>
          Discover your new favorite delivery. Thousands of options at a click.
          </h2>
          <Character />
        </div>
      </PageTemplate>
    </>
  );
};

export default Home;
