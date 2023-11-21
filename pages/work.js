import React from 'react';
import Header from '@/components/Header';
import Workbanner from '@/components/work/Workbanner';
import CreateImpact from '@/components/work/CreateImpact';
import Footer from '@/components/Footer';
import Head from "next/head";

function work() {
  return (
    <div>
       <Head>
       <link rel="icon" href="./images/noble-plastic-favicon.webp" />
        <title>
        Working to create a Circular Economy of plastic
        </title>
        <meta
          name="description"
          content="At Noble plastics we are focused on results that will help us achieve the UN SDGs and create a Circular Economy. Learn more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Workbanner/>
        <CreateImpact/>
        <Footer/>
    </div>
  )
}

export default work
