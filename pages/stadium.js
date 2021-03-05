import React from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'

import home__styles from '../styles/Home.module.css'
import stadium__styles from '../styles/Stadium.module.css'

export default function stadium() {
  return (
    <Layout>
      <br></br>
      <br></br>
      <br></br>
      <HeroSection>
        <div className={home__styles.content_title} style={{borderBottom:"3px solid #181818"}}>
          <p><strong style={{color:'#ffe500'}}>BULLS </strong>STADIUM</p>
        </div>
      </HeroSection>
      <HeroSection>
        <div>
          <div 
              className={stadium__styles.stadium__img_card} 
              style={{textAlign:"left"}}
            >
            <div 
              className={stadium__styles.stadium__img_card_img}
              style={{
                backgroundImage:"url('./images/stadium/stadium-img01.jpeg')",
              }}
            ></div>
          </div>

        </div>

      </HeroSection>
    </Layout>

  )
}
