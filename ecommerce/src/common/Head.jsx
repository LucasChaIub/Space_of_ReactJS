import React from 'react'

import { BsTelephoneFill } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i><BsTelephoneFill /></i>
            <label>+55 33 99999-9999</label>
            <i><FaEnvelope /></i>
            <label>exemplo@gmail.com</label>
          </div >
          <div className='right row RText'>
            <label>FAQ's</label>
            <label>Preciso de Ajuda</label>
            <span>🏴‍☠️</span>
            <label>PT</label>
            <span>🏁</span>
            <label>BR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head