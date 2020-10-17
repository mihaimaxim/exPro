import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Homepage.module.css'

const Homepage = props => {
   return (
      <div className={style.Heading}>
         <h3>CONSULTANTA / INGINERIE / URBANISM</h3>
         <h1>EXPERT PROIECT</h1>
         <h2>Specialisti in gasirea solutiilor tehnice si juridice</h2>
         <hr />
         <NavLink to='/portfolio'>
            <button className={style.PortfolioButton}>Portofoliu</button>
         </NavLink>
      </div>
   )
}

export default Homepage
