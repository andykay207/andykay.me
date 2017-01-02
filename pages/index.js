import React from 'react'
import Header from '../components/header.js'
import css from 'next/css'

export default () => (
  <div>
    <Header />
    <div className={style}>
      <h2>2017</h2>

      <ul style={{ marginTop: '16px', listStyle: 'none' }}>
        <li>Meditations: <b>1</b></li>
        <li>Lifts: <b>0</b></li>
        <li>Drinks: <b>0</b></li>
        <li>Chess games: <b>2</b></li>
      </ul>
    </div>
  </div>
)

const style = css({
  padding: '0 16px',
})
