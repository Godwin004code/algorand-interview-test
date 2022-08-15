import React from 'react';
import Algorands from '../components/Algorands';
import Header from '../components/Header/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
    <meta name='theme-color' content='#F2FBF6' />
    </Head>
     <Header />
      <Algorands />
    </>
  )
}