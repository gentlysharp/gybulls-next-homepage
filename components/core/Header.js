import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import styles from '../../styles/Layout.module.css'

export default function Header() {

  const [toggle, setToggle ] = useState(false);

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
    { href:"#", name:"fab fa-instagram" },
    { href:"#", name:"fab fa-facebook-f" },
    { href:"#", name:"", src:"/images/naver_blog.png" },
    { href:"#", name:"fab fa-instagram" },
  ])

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__btn} onClick={() => toggleMenu()}>
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
         &&  <div className={styles.header__dropdown}>
              <ul>
                {menus.map((menu,i) => 
                  <li key={"menu" + i} className={styles.header__dropdown_menu}>
                    <Link href={menu.path}>{menu.title}</Link>
                  </li>
                )}
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
          { icons.map((icon,i) => 
            <li key={"icon" + i}>
              <a>
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
