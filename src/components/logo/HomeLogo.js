import React from 'react'
import { NavLink } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'

import homeLogo from '../../assets/homeLogo.png'

import style from './HomeLogo.module.css'

const HomeLogo = props => {
   return (
      <Spring
         from={{ opacity: 0, marginBottom: '-500px' }}
         to={{ opacity: 1, marginBottom: 0 }}
         config={{ delay: 1000 }}>
         {props => (
            <div style={props}>
               <NavLink to='/' exact>
                  <img src={homeLogo} alt='homeLogo' className={style.HomeLogo} />
               </NavLink>
            </div>
         )}
      </Spring>
   )
}

export default HomeLogo
