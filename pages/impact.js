'use client';
import React from 'react';
import Header from '@/components/Header';
import ImpactBanner from '@/components/Impact/ImpactBanner';
import CounterImpact from '@/components/Impact/CounterImpact';
import Communities from '@/components/Impact/Communities';
import Footer from '@/components/Footer';
import Head from "next/head";


function impact() {
  return (
    <div>
       <Head>
       <link rel="icon" href="./images/noble-plastic-favicon.webp" />
        <title>
        Achieving social development through synergising people
        </title>
        <meta
          name="description"
          content="We collaborate with like-minded partners to facilitate the creation of a circular economy and are on a path to achieve our mission of synergising people, planet and profits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ImpactBanner/>
      <CounterImpact/>
      <Communities/>
      <Footer/>
    </div>
  )
}

export default impact 