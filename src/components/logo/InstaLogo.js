import React from 'react'

import Insta from '../../assets/goldInsta.png'

import style from './InstaLogo.module.css'

const InstaLogo = props => {
   return (
      <a
         href='http://www.instagram.com/jesuismaxim'
         target='_blank'
         rel='noopener noreferrer'>
         <img src={Insta} alt='Insta' className={style.Insta} />
      </a>
   )
}

export default InstaLogo
