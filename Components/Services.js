import Head from "next/head";
import { Fragment } from "react";
import Styles from "./Services.module.css";
import Slick from "./Slider";
function HomePage() {
  

  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={Styles.header}>
       
        <Slick />
      </div>

      
    </Fragment>
  );
}

export default HomePage;
