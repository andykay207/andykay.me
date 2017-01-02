import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import css from 'next/css'

export default () => (
  <header className={style}>
    <Head>
      <meta charset="UTF-8" />
      <title>Andy Kay</title>
      <style>
        {`
          * { box-sizing: border-box; margin: 0; padding: 0 }
          body {
            background: #f8f8f8
          }
        `}
      </style>
    </Head>
    <Link href="/">
      <a>
        <img src="/static/andykay.jpg" height="200" alt="andykay" />
      </a>
    </Link>
  </header>
)

const style = css({
  marginBottom: '16px',
  padding: '16px 16px',
  backgroundColor: '#fff',
})
