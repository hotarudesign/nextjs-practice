import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import styles from "src/styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};
export default Home;
