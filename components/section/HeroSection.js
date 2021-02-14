import React from 'react'
import styles from '../../styles/Layout.module.css'

export default function HeroSection({children,style}) {

  return (
    <section className="flex justify-center" style={style}>
      {children}
    </section>
  )
}
