import styles from '../../styles/Layout.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} style={{background:"#181818"}}>
      <img className={styles.footer_img} src="./images/bulls_logo-black.png"/>

      <div>
        <p className="text-gray-50">개인정보처리방침 | 서비스 이용약관</p>
        <p className="text-gray-50">고양시 덕양구 통일로 43-58 누캄프 풋살장 / 전화: 010 - 8330 - 2707</p>
        <p className="text-gray-50">Copyright 2021. goyangbulls all rights reserved.</p>
      </div>

      <img className={styles.footer_img}  src="./images/bulls_logo-black.png"/>
    </footer>
  )
}
