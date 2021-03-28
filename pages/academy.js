import React from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'
import home__styles from '../styles/Home.module.css'

export default function academy() {
  return (
    <Layout title="고양불스 아카데미">
    <br></br>
    <br></br>
    <br></br>

      <HeroSection>
        <div className={home__styles.content_title} style={{borderBottom:"3px solid #181818"}}>
          <p><strong style={{color:'#ffe500'}}>BULLS </strong>ACADEMY</p>
        </div>
      </HeroSection>

      <HeroSection>
        <div className={home__styles.content_title} >
          <p>Comming Soon</p>
        </div>
      </HeroSection>
    </Layout>
  )
}
