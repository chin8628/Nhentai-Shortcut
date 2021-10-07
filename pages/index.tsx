/* eslint-disable @next/next/no-sync-scripts */
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
      <Head>
        <title>Path to the Heaven!</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png"></link>
        <meta name="theme-color" content="#ed2553" />

        <meta
          property="og:url"
          content="https://path-to-the-heaven.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Path to the Heaven!" />
        <meta
          property="og:description"
          content="No time to type! You must go to the HEAVEN!"
        />
        <meta
          property="og:image"
          content="https://path-to-the-heaven.vercel.app/assets/images/screenshot.png"
        />

        <meta
          name="twitter:title"
          content="No time to type! You must go to the HEAVEN!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://path-to-the-heaven.vercel.app/assets/images/screenshot.png"
        />

        <script
          suppressHydrationWarning={true}
          src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        ></script>
        <script
          suppressHydrationWarning={true}
          dangerouslySetInnerHTML={{
            __html: `kofiWidgetOverlay.draw('chin8628', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#fff'
                  });`,
          }}
        ></script>
      </Head>
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
