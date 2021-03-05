import React from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'

import history__style from '../styles/History.module.css';
import home__styles from '../styles/Home.module.css';

export default function history() {
  return (
    <Layout>
      <br></br>
      <br></br>
      <br></br>

      <HeroSection>
        <div className={home__styles.content_title} style={{borderBottom:"3px solid #181818"}}>
          <p><strong style={{color:'#ffe500'}}>BULLS </strong>HISTORY</p>
        </div>
      </HeroSection>

      <div style={{
          margin:"auto",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center", 
          maxWidth:"1000px",
        }}
      >

        <HeroSection>
          <div className={history__style.history__card}>
            <div 
              className={history__style.history__time_line}
              style={{
                height:"50%",
                top:"50%"
              }}
            ></div>
            <div className={history__style.history__time_point}></div>

            <div 
              className={history__style.history__img_card}
              style={{textAlign:"left"}}
            >
              <div 
                className={history__style.history__img_card_img}
                style={{
                  backgroundImage:"url('./images/history/history-img-2017.png')",
                }}
              ></div>
            </div>


            <div className={history__style.history__discription_card} >
              <h3>2017.10</h3>
              <p>고양불스 풋살클럽 창단</p>
              <p>FK 드림리그(2부) 첫출전</p>
            </div>
          </div>
        </HeroSection>

        <HeroSection>
          <div className={history__style.history__card}>
            <div className={history__style.history__time_line}></div>
            <div className={history__style.history__time_point}></div>

            <div className={history__style.history__discription_card}
              style={{textAlign:"right"}}
            >
              <h3>2018.03</h3>
              <p>FK 드림리그(2부) 우승</p>
            </div>

            <div className={history__style.history__img_card} >
              <div 
                className={history__style.history__img_card_img}
                style={{
                  backgroundImage:"url('./images/history/history-img-2018.png')",
                }}
              ></div>
            </div>
          </div>
        </HeroSection>
        <HeroSection>
          <div className={history__style.history__card}>
            <div className={history__style.history__time_line}></div>
            <div className={history__style.history__time_point}></div>

            <div 
              className={history__style.history__img_card} 
              style={{textAlign:"left"}}
            >
              <div 
                className={history__style.history__img_card_img}
                style={{
                  backgroundImage:"url('./images/history/history-img-2019.png')",
                }}
              ></div>
            </div>

            <div className={history__style.history__discription_card} >
              <h3>2019.03</h3>
              <p>FK 슈퍼리그(1부) 3위</p>
            </div>
          </div>
        </HeroSection>
        <HeroSection>
          <div className={history__style.history__card}>
            <div className={history__style.history__time_line}></div>
            <div className={history__style.history__time_point}></div>

            <div 
              className={history__style.history__discription_card}
              style={{textAlign:"right"}}
            >
              <h3>2019.03</h3>
              <p>FK CUP 준우승</p>
            </div>

            <div 
              className={history__style.history__img_card}>
              <div 
                className={history__style.history__img_card_img}
                style={{
                  backgroundImage:"url('./images/history/history-img-2019-01.png')",
                }}
              ></div>
            </div>
            
          </div>
        </HeroSection>

        <HeroSection>
          <div className={history__style.history__card}>
            <div className={history__style.history__time_line}></div>
            <div className={history__style.history__time_point}></div>

            <div 
              className={history__style.history__img_card} 
              style={{textAlign:"left"}}
            >
              <div 
                className={history__style.history__img_card_img}
                style={{
                  backgroundImage:"url('./images/history/history-img-2020.png')",
                }}
              ></div>
            </div>

            <div className={history__style.history__discription_card} >
            <h3>2020 ~ </h3>
              <p>리그 진행 중</p>
            </div>
          </div>
        </HeroSection>

        <HeroSection>
          <div className={history__style.history__card} style={{height:"250px"}}>
            <div className={history__style.history__time_line}></div>
          </div>
        </HeroSection>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
  )
}
