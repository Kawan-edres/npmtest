import Head from "next/head";
import { Fragment } from "react";
import Styles from "./Header.module.css";
import DevIcon from "../Assets/Images/dev.svg";
import Image from "next/image";
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={Styles.header}>
        <div className={Styles.headerContent}>
          <div className={Styles.headerTitle}>
            <Image className={Styles.title} src={DevIcon} alt="DevSpace" />
          </div>

          <div className={Styles.headerDiscreption}>
            <p>
              We help business to digitalize their works by today’s technology.
              Devspace is made for people that are looking for innovative
              technologies to fix their problems or to improve their works. Our
              Company provides a unionized and standard approach to creation and
              development, We think in order to enhance and to get better
              service you need to use the presents technology.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
