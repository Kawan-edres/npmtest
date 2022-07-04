import { Fragment } from "react";
import Header from "../components/Header";
import OurMessage from "../components/OurMessage";
import Services from "../components/Services";
import Map from "../components/Map";
import Client from "../components/Client";
import Head from "next/head";

import Footer from "../Components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function HomePage() {

     
  return (
    <Fragment>

    <Head>
       <title>DEV | Space</title>
       <meta name="description" content="Brows a Dev Space for software solutions and developmnet technologies " />
       
      </Head>


        <Header />
        <OurMessage />
         <Services />
        
       
        <Client />
        <Map />
        <Footer /> 

        
      
    </Fragment>
  );
}

export default HomePage;



