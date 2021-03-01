import React from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'

import youth__styles from '../styles/Youth.module.css'
import home__styles from '../styles/Home.module.css'

export default function youth() {
  return (
    <Layout>
      <br></br>
      <br></br>
      <br></br>
      <HeroSection >
        <div 
          className={youth__styles.youth__img_card} 
          style={{
            backgroundImage:"url('./images/youth/youth-img-01.jpg')",
            backgroundSize:"cover"
          }}
        >
          {/* <img src="./images/youth/youth-img-01.jpg" style={{width:"100%"}}></img> */}
          <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"70%"
            }}
          ></div>
        </div>
        <div className={youth__styles.youth__img_card_description}>
            <div className={youth__styles.youth__img_card_text}>
              <h3>YOUTH HEAD COACH</h3>
              <h3>장규범</h3>
              <p>2013년 NIKE 파주 스피드트랙챌린지 우승</p>
              <p>2013년 중랑코러스무스탕축구단 선수</p>
              <p>2013년 NIKE THE CHANCE KOREA 최종 24인 </p>
              <p>2014년 영국에서 열린 NIKE THE CHANCE 세계 유망주 44인</p>
              <p>2017 PUMA 원배틀 우승</p>
              <p>2017~현 고양불스 풋살클럽 선수</p>
              <p>유소년 코칭 2016년 ~ 2021년</p>
              <p>나이키(NIKE).트레이닝 코치</p>
            </div>
        </div>
      </HeroSection>
   
      <HeroSection>
        <div className={youth__styles.youth__img_card_description}>
          <h3>YOUTH COACH</h3>
          <h3>엄성식</h3>
          <p>용인대 체육학(태권도)전공 </p>
          <p>유아체육교육 자격증 </p>
          <p>유아체육강사 1년 </p>
          <p>태권도 사범 2년 </p>
          <p>유소년 축구 코칭 3년 </p>
          <p>리틀대교 코치 1년 </p>
          <p>고양불스 아카데미 코치 2019 ~ 현재 </p>
        </div>
        <div
          className={youth__styles.youth__img_card_reverse}
          style={{
            backgroundImage:"url('./images/youth/youth-img-01.jpg')",
            backgroundSize:"cover",
          }}
        >
           <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"-30%",
              transform: "skewX(-20deg) translate(30%)"
            }}
          ></div>
        </div>
      </HeroSection>

      <HeroSection >
        <div 
          className={youth__styles.youth__img_card} 
          style={{
            backgroundImage:"url('./images/youth/youth-img-02.jpeg')",
            backgroundSize:"cover"
          }}
        >
          {/* <img src="./images/youth/youth-img-01.jpg" style={{width:"100%"}}></img> */}
          <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"70%"
            }}
          ></div>
        </div>
        <div className={youth__styles.youth__img_card_description}>
            <div className={youth__styles.youth__img_card_text}>
              <h3>교 육 철 학</h3>
              <br></br>
              <p>축구와 풋살 경기에서 유소년이 경험하는 즐거움이</p>
              <p>축구를 계속하게 만드는 원동력이 된다는 점을 유념. </p>
              <br></br>
              <p>도전과 실수를 허용하는 분위기에서</p>
              <p>개인의 볼터치를 늘리고 기술향상을 목표.</p>
              <br></br>
              <p>스포츠 뿐만 아니라 모든 면에서 스스로 판단하고</p>
              <p>책임을 질 줄 아는 용기를 가진 학생으로 육성.</p>
            </div>
        </div>
      </HeroSection>
      
      <HeroSection>
        <div className={youth__styles.youth__img_card_description}>
          <h3>취 미 반 수 업</h3>
          <h3>월 교육비 70,000원 (주1회)</h3>
          <p>주 1회 /월 4회 취미반 수업으로 </p>
          <p>코디네이션, 기본기, 체력운동을 통해</p>
          <p>신체 발달과 협동심을 기르고 축구에 흥미를 느낀다.</p> 
        </div>
        <div
          className={youth__styles.youth__img_card_reverse}
          style={{
            backgroundImage:"url('./images/youth/youth-img-02.jpeg')",
            backgroundSize:"cover",
          }}
        >
           <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"-30%",
              transform: "skewX(-20deg) translate(30%)"
            }}
          ></div>
        </div>
      </HeroSection>


      <HeroSection >
        <div 
          className={youth__styles.youth__img_card} 
          style={{
            backgroundImage:"url('./images/youth/youth-img-03.jpeg')",
            backgroundSize:"cover"
          }}
        >
          {/* <img src="./images/youth/youth-img-01.jpg" style={{width:"100%"}}></img> */}
          <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"70%"
            }}
          ></div>
        </div>
        <div className={youth__styles.youth__img_card_description}>
            <div className={youth__styles.youth__img_card_text}>
            <h3>준 선 수 반 수 업</h3>
            <h3>월 교육비 130,000원 (주2회)</h3>
            <p>주2회/월 8회 운동을 통하여 기본기를 다지고,</p>
            <p>취미반 보다 조금 더 기술적인 수업을 진행하여</p> 
            <p>전문성을 갖는다.</p>
            </div>
        </div>
      </HeroSection>
          
      <HeroSection>
        <div className={youth__styles.youth__img_card_description}>
          <h3>선 수 반 수 업</h3>
          <h3>월 교육비 190,000 (주3회)</h3>
          <br></br>
          <p>주3회 / 월 12회 운동을 통하여 기본기 및 기술을 갖추고 </p>
          <p>전술적인 부분에 대해 공부하게 되어 </p>
          <p>선수로의 자질을 갖춘다.</p>
        </div>
        <div
          className={youth__styles.youth__img_card_reverse}
          style={{
            backgroundImage:"url('./images/youth/youth-img-02.jpeg')",
            backgroundSize:"cover",
          }}
        >
           <div className={youth__styles.youth__img_card_panel} 
            style={{
              width:"17vw",
              left:"-30%",
              transform: "skewX(-20deg) translate(30%)"
            }}
          ></div>
        </div>
      </HeroSection>
      <HeroSection> 
        <div className={home__styles.home__sponsor_group} style={{margin:"1rem"}}>
          <img className={home__styles.home__sponsor_img} src="/images/index/goyangsi_logo.jpg" />
          <img className={home__styles.home__sponsor_img} src="/images/index/tikixaka_logo.png" />
          <img className={home__styles.home__sponsor_img} src="/images/index/filder_img.png" />
          <img className={home__styles.home__sponsor_img} src="/images/index/joma_logo.png" />
          <img className={home__styles.home__sponsor_img} style={{width:"8%"}} src="/images/index/goyangsoccer_logo.png" />
        </div>
      </HeroSection>
    </Layout>
  )
}



