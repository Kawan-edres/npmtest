
import Head from 'next/head';
import {Fragment} from 'react';
import Styles from './OurMessage.module.css';
function HomePage(){

    return(
        <Fragment>

        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" /> 
        </Head>

        <div className={Styles.header}>

        <div className={Styles.headerContent}>

        <div className={Styles.headerTitle}>
        <h1 className={Styles.title}>OUR MESSAGE</h1>
        </div>

        <div className={Styles.headerDiscreption}>
        <p>As I continue to my professional journey, I like to think of my career as one big learning experience that continually grows with each project and collaboration. With a dedication to functionality and curiosity for what's ahead of the curve. I keep my work practical, relevant anf creative. Have a look at my past project. and feel free to rech out with any questions.</p>

        </div>

        </div>

        </div>
          
        </Fragment>
    )
}

export default HomePage

