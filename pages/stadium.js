import React,{useEffect,useCallback} from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'

import home__styles from '../styles/Home.module.css'
import stadium__styles from '../styles/Stadium.module.css'


export default function stadium() {

  function initMap() {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.6452901, 126.9082951), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다 
    let markerPosition  = new kakao.maps.LatLng(37.6452901, 126.9082951); 

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    
  }

  useEffect(() => {
    initMap();
  }, [])

  return (
    <Layout title={"누캄프풋살장"}>
   
      <br></br>
      <br></br>
      <br></br>
      <HeroSection>
        <div className={home__styles.content_title} style={{borderBottom:"3px solid #181818"}}>
          <p><strong style={{color:'#ffe500'}}>BULLS </strong>STADIUM</p>
        </div>
      </HeroSection>
      <HeroSection>
          <div 
            className={stadium__styles.stadium__img_card} 
            style={{textAlign:"left"}}
          >
            <div 
              className={stadium__styles.stadium__img_card_img}
              style={{backgroundImage:"url('./images/stadium/stadium-img01.jpeg')"}}
            ></div>

          <div className={stadium__styles.stadium__info_card}>
            <div>
              <i className="fas fa-mobile-alt"></i>
              <span>010-8830-2707</span>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <span>경기 고양시 덕양구 동산동 4-12 누캄프 풋살장</span>
            </div>
            <div>
              <i className="far fa-clock"></i>
              <span>매일 00:00 ~ 24:00 (연중무휴)</span>
            </div>
          </div>
          </div>

      </HeroSection>
      <br></br>
      <br></br>
      <HeroSection >
        <div id="map" style={{width:"100%",height:"500px"}}></div>
      </HeroSection>

    </Layout>

  )
}
