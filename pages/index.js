import React from 'react'
import Header from '../components/header.js'
import css from 'next/css'

export default () => (
  <div>
    <Header />
    <div className={style}>
      Hey, it's Andy!
    </div>
  </div>
)

const style = css({
  margin: '0 16px',
})
