import Instagram from "instagram-web-api"

import Head from 'next/head'
import Layout from '../components/core/Layout'
import HeroSection from '../components/section/HeroSection'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home({instagramPosts}) {

  console.log("",instagramPosts);

  const [bullsInstagram,setBullsInstagram] = useState([
    {img:"/images/index/home-img-03.jpg", href:"#"},
    {img:"/images/index/home-img-02.jpg", href:"#"},
    // {img:"/images/index/home-img-01.jpg", href:"#"},
    // {img:"/images/index/home-img-03.jpg", href:"#"},
  ]);

  const [academyInstagram,setAcademyInstagram] = useState([
    {img:"/images/index/home-img-03.jpg", href:"#"},
    {img:"/images/index/home-img-02.jpg", href:"#"},
    // {img:"/images/index/home-img-01.jpg", href:"#"},
    // {img:"/images/index/home-img-03.jpg", href:"#"},
  ]);

  return (
    <Layout title="고양불스 홈페이지">
      <div className="w-full flex justify-center" style={{background:"#181818"}}>
        <img className="w-full" style={{maxWidth:"1440px"}} src="./images/index/home-img-00.jpg"></img>
      </div>
      <HeroSection >
        <div className={styles.home__card_reverse}>
          <div className={styles.hidden_btn}>
            <button className={styles.text_btn}>
              <span className="m-2">
                <i className="fas fa-chevron-right"></i>
              </span>
              MORE
            </button>
          </div>
          <div className={styles.home__card_img}>
            <img src="./images/index/home-img-01.jpg"></img>
          </div>

          <div className={styles.home__card_content}>
            <div className={styles.content_title}>
              <p className={styles.sub_title}>고양불스 선수와 함께하는</p>
              <p>YOUTH <strong style={{color:'#ffe500'}}>ACADEMY</strong></p>
            </div>
            <div className={styles.text_btn_group }>
              <p>
                <button style={{backgroundColor:"var(--bulls-yellow)"}} className={styles.text_btn}>U-4</button>
                <button style={{backgroundColor:"var(--bulls-yellow)"}} className={styles.text_btn}>U-5</button>
                <button style={{backgroundColor:"var(--bulls-yellow)"}} className={styles.text_btn}>U-6</button>
              </p>
              <p>
                <button style={{backgroundColor:"var(--bulls-yellow)"}} className={styles.text_btn}>U-10</button>
                <button style={{backgroundColor:"var(--bulls-yellow)"}} className={styles.text_btn}>U-12</button>
              </p>
            </div>
          </div> 
        </div>
      </HeroSection>

      <HeroSection style={{background:'rgba(255, 229, 0, 0.7)'}} >
        <div className={styles.home__card}>
          <div className={styles.hidden_btn}>
            <button className={styles.text_btn}>
              <span className="m-2">
                <i className="fas fa-chevron-right"></i>
              </span>
              MORE
            </button>
          </div>
          <div className={styles.home__card_img}>
            <img src="./images/index/home-img-02.jpg"></img>
          </div>
          <div className={styles.home__card_content}>
           <div className={styles.content_title}>
              <p className={styles.sub_title}>국가대표 선수와 함께하는</p>
              <p><strong style={{color:'#fff'}}>BULLS</strong> ACADEMY</p>
            </div>
            <div className={styles.text_btn_group }>
              <p>
                <button style={{backgroundColor:"#181818",color:"#fff"}} className={styles.text_btn}>BEGINNER CLASS</button>
              </p>
              <p>
                <button style={{backgroundColor:"#181818",color:"#fff"}} className={styles.text_btn}>ADVANCE CLASS</button>
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
            <iframe className={styles.home__video_content} src="https://www.youtube.com/embed/fZ6CH94cNCs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </HeroSection>

      <HeroSection style={{background:'rgba(255, 229, 0, 0.7)'}}>
        <div className="flex flex-col m-10">
          <div className={styles.content_title}>
            {/* <p><strong style={{color:'#fff'}}>SNS</strong> on GOYANG BULLS</p> */}
            <div className="flex justify-center items-center" >
              <i className="fab fa-instagram" style={{fontSize:"3.5rem"}}></i>
              <img src="/images/index/Instagram_Logo_Large.png" className="mt-2 ml-3 w-28" style={{width:"11rem"}} />
            </div>
          </div>

          <div style={{
              marginLeft:"3rem",
              display:"flex", justifyContent:"space-between" ,
              width:"50rem",
              fontSize:"1.5rem"
            }}
          >
            <div>#goyang_bulls_official</div>
            <div>#goyang_bulls_academy</div>
          </div>
    
          <div className={styles.home__sns_card_group}>
            
              <ul className={styles.home__sns_card_group}>
                {bullsInstagram.map((insta,i) => 
                  <li 
                    key={"bulls" + i}
                    className="m-2"
                  >
                    <a href={insta.href}>
                      <img 
                        className={styles.home__sns_card}
                        src={insta.img}
                      />
                    </a>
                  </li>
                )}
              </ul>
            
          
            <ul className={styles.home__sns_card_group}>
              {academyInstagram.map((insta,i) => 
                <li 
                  key={"academy" + i}
                  className="m-2 "
                >
                  <a href={insta.href}>
                    <img 
                      className={styles.home__sns_card}
                      src={insta.img}
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </HeroSection>

    </Layout>
  )
}

//https://www.aboutmonica.com/blog/adding-instagram-timeline-to-next-js-site

export async function getStaticProps(context) {

  // set account
  const client = new Instagram({
    username:process.env.IG_USERNAME,
    password:process.env.IG_PASSWORD
  })

  console.log("client:=======",client);
  // set posts to an empty array as a placeholder
  let posts = []
  try {

    await client.login()
    console.log(await client.getHome());

    // const instagram = await client.getPhotosByUsername({
    //   username: process.env.IG_USERNAME,
    // })

    // if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
    //   // if we receive timeline data back
    //   //  update the posts to be equal
    //   // to the edges that were returned from the instagram API response
    //   posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    // }

    // posts = response.user.edge_owner_to_timeline_media.edges

  } catch(err) {
    console.log("Something went wrong while logging into Instagram", err);
  }

  return {
    props: {
      // return the posts as the prop instagramPosts
      // for the Index function to use
      instagramPosts: posts,
    },
  }
}