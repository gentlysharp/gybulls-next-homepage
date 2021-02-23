import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({title,children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width1'/>
        <link rel="shortcut icon" href="/images/bulls_logo-black.png" />
      </Head>
      <Header />
        {children}
      <Footer />
    </>
  )
}
