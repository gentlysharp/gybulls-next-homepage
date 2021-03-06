import React from 'react'
import Link from 'next/link'
import {useState,useCallback} from 'react'
import styles from '../../styles/Layout.module.css'

export default function Header() {

  // toggle ? 메뉴 열기 : 메뉴 닫기 
  const [toggle, setToggle ] = useState(true)

  const handleClickMemu = useCallback(()=> {
      setToggle(false);
  },[toggle])

  const [menus,setMenus] = useState([
      { title:"ROSTER", path:"/roster", subMenus:[] },
      { title:"STADIUM", path:"/stadium", subMenus:[] },
      { title:"YOUTH", path:"/youth", subMenus:[] },
      { title:"logo", path:"/", subMenus:[] },
      { title:"ACADEMY", path:"/academy", subMenus:[] },
      { title:"HISTORY", path:"/history", subMenus:[] },
      { title:"SHOP", path:"/shop", subMenus:[] }
    ]
  )

  const [icons, setIcons] = useState([
    { href:"https://www.instagram.com/goyang_bulls_official/", name:"fab fa-instagram" },
    { href:"https://www.facebook.com/goyangbulls/", name:"fab fa-facebook-f" },
    { href:"https://post.naver.com/my.nhn?memberNo=40877463", name:"", src:"/images/index/naver_blog.png" },
    // { href:"#", name:"fab fa-instagram" },
  ])

  return (
    <header className={styles.header}>
      <div className={styles.header__sm_btn} onClick={() => setToggle(!toggle)}>
        { toggle 
          ? <div>
              <i className="fas fa-bars"></i>
            </div>
          : <div>
              <i className="fas fa-times"></i>
            </div>
        }
      </div>

      { !toggle
         &&  <div className={styles.header__sm_dropdown}>
              <ul>
                {
                  menus.map((menu,i) => {
                    if(menu.title === "logo"){
                        <li key={"menu" + i} className={styles.header__dropdown_menu_logo}>
                          <Link href={menu.path}>{menu.title}</Link>
                        </li>
                    } else {
                      return (
                        <li 
                          key={"menu" + i} 
                          className={styles.header__dropdown_menu}
                          onClick={() => handleClickMemu()}
                        >
                          <Link href={menu.path}>{menu.title}</Link>
                        </li>
                      )
                    }
                  })
                }
              </ul>
      
              <div className={styles.header__dropdown__footer}> 
                {
                  icons.map((icon,i) => 
                    <a key={"icon" + i}>
                      { icon.name !== "" 
                        ? <button>
                          <i className={icon.name}></i>
                        </button>
                        : <button>
                          <img className={styles.header__upper_nav_img} src={icon.src}></img>
                        </button>
                      }
                    </a>
                  )
                }
              </div>
            </div>
      }

      <div 
        className={styles.header__logo_wrap} 
        onClick={() => handleClickMemu()}
      >
        <Link href="/">
          <a href="/">
            <img className={styles.header__logo} src="/images/index/logo.png"></img>
          </a>
        </Link>
      </div>
 
    <div className={styles.header__upper_nav}>
      <div className={styles.header__upper_nav_inner}>
        <ul>
          { icons.map((icon,i) => 
            <li key={"icon" + i}>
              <a target="_blank" href={icon.href}>
                { icon.name !== "" 
                  ? <button>
                    <i className={icon.name}></i>
                  </button>
                  : <button>
                    <img className={styles.header__upper_nav_img} src={icon.src}></img>
                  </button>
                }
              </a>
            </li>
            )
          }
        </ul>
      </div>
    </div>
    <nav>
    <div className={styles.header__nav}>
      <ul>
        {menus.map((menu,i) => 
          <li key={"menu" + i}><Link href={menu.path}>{menu.title}</Link></li>
        )}
      </ul>
    </div>
  </nav>
  </header>
  )
}
