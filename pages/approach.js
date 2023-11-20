import React from 'react';
import Header from '@/components/Header';
import Approachbanner from '@/components/Approach/Approachbanner';
import OurApproach from '@/components/Approach/OurApproach';
import Footer from '@/components/Footer';
import Head from "next/head";



function approach() {
  return (
    <>
    <Head>
        <title>
        Providing practical solutions backed by quantifiable results
        </title>
        <meta
          name="description"
          content="Our approach towards bringing an environmental change is by adopting innovative solutions that are practical and ensure quantifiable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header/>
     <Approachbanner/>
     <OurApproach/>
     <Footer/>

    </>
  )
}

export default approach
