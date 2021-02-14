import Head from 'next/head'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {

  const [bullsInstagram,setBullsInstagram] = useState([
    {img:"/images/home-img-03.jpg", href:"#"},
    {img:"/images/home-img-02.jpg", href:"#"},
    {img:"/images/home-img-01.jpg", href:"#"},
    {img:"/images/home-img-03.jpg", href:"#"},
  ]);

  const [academyInstagram,setAcademyInstagram] = useState([
    {img:"/images/home-img-03.jpg", href:"#"},
    {img:"/images/home-img-02.jpg", href:"#"},
    {img:"/images/home-img-01.jpg", href:"#"},
    {img:"/images/home-img-03.jpg", href:"#"},
  ]);

  

  return (
    <Layout>
      <div className="w-full flex justify-center" style={{background:"#181818"}}>
        <img className="w-full" style={{maxWidth:"1440px"}} src="./images/home-img-00.jpg"></img>
      </div>
      <HeroSection >
        <div className="flex flex-row-reverse justify-center">
          <div className="m-10" style={{width:'400px'}}>
            <img src="./images/home-img-01.jpg"></img>
          </div>

          <div className="flex flex-col m-10 mx-20">
            <div className={styles.content_title}>
                <p className={styles.sub_title}>고양불스 선수와 함께하는</p>
                <p>YOUTH <strong style={{color:'#fff'}}>ACADEMY</strong></p>
              </div>
              <div className={styles.academy}>
                <p>
                  <button className={styles.text_btn}>U-4</button>
                  <button className={styles.text_btn}>U-5</button>
                  <button className={styles.text_btn}>U-6</button>
                </p>
                <p>
                  <button className={styles.text_btn}>U-10</button>
                  <button className={styles.text_btn}>U-12</button>
                </p>
            </div>
          </div> 
           
       
        </div>
      </HeroSection>

      <HeroSection style={{background:'rgba(255, 229, 0, 0.7)'}} >
        <div className="flex justify-center">
          
          <div className="m-10" style={{width:'400px'}}>
            <img src="./images/home-img-02.jpg"></img>
          </div>
          <div className="m-10 mx-20">
          <div className={styles.content_title}>
              <p className={styles.sub_title}>국가대표 선수와 함께하는</p>
              <p><strong style={{color:'#ffe500'}}>BULLS</strong> ACADEMY</p>
            </div>
            <div className={styles.academy}>
              <p>
                <button className={styles.text_btn}>BEGINNER CLASS</button>
              </p>
              <p>
                <button className={styles.text_btn}>ADVANCE CLASS</button>
              </p>
            </div>
          </div>
        </div>
      </HeroSection>

      <HeroSection>
        <div className="flex flex-col mt-10">
          <div className={styles.content_title}>
            <p>GOYANG <strong style={{color:'#ffe500'}}>BULLS</strong> PLAY MOMENTS</p>
          </div>
          <div className="mb-10">
            <iframe width="780" height="540" src="https://www.youtube.com/embed/fZ6CH94cNCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </HeroSection>

      <HeroSection style={{background:'rgba(255, 229, 0, 0.7)'}}>
        <div className="flex flex-col m-10">
          <div className={styles.content_title}>
            <p><strong style={{color:'#fff'}}>SNS</strong> on GOYANG BULLS</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            
              <ul className="flex flex-row justify-center items-center">
                {bullsInstagram.map((insta,i) => 
                  <li 
                    key={"bulls" + i}
                    className="m-2"
                  >
                    <a href={insta.href}>
                      <img 
                        className="rounded-xl shadow-xl"
                        style={{width:"110px", height:"110px"}}
                        src={insta.img}
                      />
                    </a>
                  </li>
                )}
              </ul>
            
            <div className="flex flex-col justify-center items-center" >
              <i className="fab fa-instagram" style={{fontSize:"30px"}}></i>
              <img src="/images/Instagram_Logo_Large.png" className="w-28" />
            </div>
            
            <ul className="flex flex-row justify-center items-center">
              {academyInstagram.map((insta,i) => 
                <li 
                  key={"academy" + i}
                  className="m-2 "
                >
                  <a href={insta.href}>
                    <img 
                      className="rounded-xl shadow-xl"
                      style={{width:"120px", height:"120px"}}
                      src={insta.img}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </HeroSection>

      <HeroSection>
        <div className="flex flex-row justify-between items-center w-full m-5">
          <img style={{width:"10rem"}} src="/images/goyangsi_logo.jpg" />
          <img style={{width:"10rem"}} src="/images/tikixaka_logo.png" />
          <img style={{width:"10rem"}} src="/images/joma_logo.png" />
          <img style={{width:"10rem"}} src="/images/goyangsoccer_logo.png" />
        </div>

      </HeroSection>


    </Layout>
  )
}
