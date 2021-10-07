import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

function goToHeaven(code: string) {
  window.location.href = `https://www.nhentai.net/g/${code}`;
}

const Home: NextPage = () => {
  const [code, setCode] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/nhentai.png"
          alt="n-hentai logo"
          layout="fill"
        />
      </div>
      <form
        className={styles.searchBox}
        onSubmit={(e) => {
          e.preventDefault();
          goToHeaven(code);
        }}
      >
        <input
          type="number"
          className={styles.codeField}
          onChange={(event) => setCode(event.target.value)}
        />
        <button
          className={styles.goBtn}
          type="button"
          onClick={() => goToHeaven(code)}
        >
          Go!
        </button>
      </form>
    </div>
  );
};

export default Home;
