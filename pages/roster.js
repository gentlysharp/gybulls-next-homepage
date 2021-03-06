import React,{useState} from 'react'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'

import home__styles from '../styles/Home.module.css'
import roster__styles from '../styles/Roster.module.css'

export default function roster() {

  // Fixo
  const [fixos,setfixos] = useState([
    {src:"/images/players/player-10.png", href:"#"},
    {src:"/images/players/player-55.png", href:"#"},
  ]);

  // Pivo
  const [pivos,setPivos] = useState([
    {src:"/images/players/player-09.png", href:"#"},
    {src:"/images/players/player-15.png", href:"#"},
    {src:"/images/players/player-17.png", href:"#"},
    {src:"/images/players/player-19.png", href:"#"},
  ]);

  // Ala
  const [alas,setAlas] = useState([
    {src:"/images/players/player-07.png", href:"#"},
    {src:"/images/players/player-11.png", href:"#"},
    {src:"/images/players/player-13.png", href:"#"},
    {src:"/images/players/player-14.png", href:"#"},
    {src:"/images/players/player-40.png", href:"#"},
  ]);

  // Goleiro
  const [goleiros,setGoleiros] = useState([
    {src:"/images/players/player-18.png", href:"#"},
    {src:"/images/players/player-25.png", href:"#"},
  ]);


  return (
    <Layout title="고양불스 선수단">
      <br></br>
      <br></br>
  
      <HeroSection>
        <div className={home__styles.content_title} style={{borderBottom:"3px solid #181818"}}>
          <p><strong style={{color:'#ffe500'}}>2021 </strong>SEASON</p>
        </div>
      </HeroSection>
      <br></br>
      <br></br>

      <HeroSection>
        <div className={roster__styles.roster__img_group}>
          <h3>FIXO <div className={roster__styles.roster__img_group_title_panel}></div></h3>
          <div className={roster__styles.roster__img_card}>
          {
            fixos.map((fixo,i) => {
              return(
                <div key={"fixo" + i} >
                  <img src={fixo.src} alt="" />
                </div>
              )
            })
          }
          </div>
        </div>
      </HeroSection>

      <HeroSection>
        <div className={roster__styles.roster__img_group} >
          <hr className={roster__styles.horizontal_line}></hr>
          <h3>PIVO <div className={roster__styles.roster__img_group_title_panel}></div></h3>
          <div className={roster__styles.roster__img_card}>
          {
            pivos.map((pivo,i) => {
              return(
                <div key={"pivo" + i} >
                  <img src={pivo.src} alt="" />
                </div>
              )
            })
          }
          </div>
        </div>
      </HeroSection>

      <HeroSection >
        <div className={roster__styles.roster__img_group}>
        <hr className={roster__styles.horizontal_line}></hr>
          <h3>ALA <div className={roster__styles.roster__img_group_title_panel}></div></h3>
          <div className={roster__styles.roster__img_card}>
          {
            alas.map((ala,i) => {
              return(
                <div key={"ala" + i} >
                  <img src={ala.src} alt="" />
                </div>
              )
            })
          }
          </div>
        </div>
      </HeroSection>

      <HeroSection>
        <div className={roster__styles.roster__img_group}>
        <hr className={roster__styles.horizontal_line}></hr>
          <h3>GOLEIRO<div className={roster__styles.roster__img_group_title_panel}></div></h3>
          <div className={roster__styles.roster__img_card}>
          {
            goleiros.map((gole,i) => {
              return(
                <div key={"gole" + i} >
                  <img src={gole.src} alt="" />
                </div>
              )
            })
          }
          </div>
        </div>
      </HeroSection>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    </Layout>

  )
}
