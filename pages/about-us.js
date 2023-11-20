import React from 'react';
import Header from '../components/Header';
import Aboutbanner from '../components/About/Aboutbanner';
import Journey from '../components/About/Journey';
import Mission from '../components/About/Mission';
import Team from '../components/About/Team';
import Logoslider from "../components/Logoslider"
import Footer from '../components/Footer';
import Head from "next/head";


function aboutUs() {
  return (
    <>
    <Head>
        <title>
        Eco-social initiative that improves plastic waste management
        </title>
        <meta
          name="description"
          content="An eco-social initiative by the Catalyst Group, Noble Plastics, has a vision to recycle plastic waste effectively and is backed by professionals who are passionate to bring a change."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>
     <Aboutbanner/>
     <Journey/>
     <Mission/>
     <Team/>
     <Logoslider/>
     <Footer/>
    </>

  )
}

export default aboutUs
