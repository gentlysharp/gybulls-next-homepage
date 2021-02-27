import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import HeroSection from '../section/HeroSection'

import styles from '../../styles/Home.module.css'

export default function Layout({title,children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width1'/>
        <link rel="shortcut icon" style={{width:"32px", height:"32px"}} href="/images/bulls_logo-black.png" />
      </Head>
      <Header />
        {children}
      <Footer />
    </>
  )
}
