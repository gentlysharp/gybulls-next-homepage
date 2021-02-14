import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import styles from '../../styles/Layout.module.css'

export default function Header() {
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

  return (
    <header className={styles.header}>
      <div className={styles.header__logo_wrap}>
        <Link href="/">
          <a href="/">
            <img className={styles.header__logo} src="/images/logo.png"></img>
          </a>
        </Link>
      </div>
 
    <div className={styles.header__upper_nav}>
      <div className={styles.header__upper_nav_inner}>
        <ul>
          <li>
            <a href="#">
              <button>
                <i className="fab fa-instagram"></i>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>
                <i className="fab fa-facebook-f"></i>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>
                <img className={styles.header__upper_nav_img} src="/images/naver_blog.png"></img>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>
                <i className="fab fa-facebook-f"></i>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button>
                <i className="fab fa-facebook-f"></i>
              </button>
            </a>
          </li>
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
