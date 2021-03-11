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
        <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.APP_KEY}`}></script>
      </Head>
      <Header />
        {children}

      <HeroSection> 
        <div className={styles.home__sponsor_group} style={{margin:"1rem"}}>
          <img className={styles.home__sponsor_img} src="/images/index/goyangsi_logo.jpg" />
          <img className={styles.home__sponsor_img} src="/images/index/tikixaka_logo.png" />
          <img className={styles.home__sponsor_img} src="/images/index/filder_img.png" />
          <img className={styles.home__sponsor_img} src="/images/index/joma_logo.png" />
          <img className={styles.home__sponsor_img} style={{width:"8%", minWidth:"140px"}} src="/images/index/goyangsoccer_logo.png" />
        </div>
      </HeroSection>
      <Footer />
    </>
  )
}
