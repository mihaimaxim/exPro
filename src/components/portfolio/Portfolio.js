import React from 'react'

import style from './Portfolio.module.css'

const Portfolio = props => {
   return (
      <div className={style.Portfolio}>
         <div className={style.Heading}>
            <div className={style.ChildHeading}>
               <h1>Portfolio</h1>
               <hr />
            </div>
         </div>
         <div className={style.Content}>
            <div className={[style.ChildContent, style.BackgroundOne].join(' ')}>
               <span>Roads</span>
            </div>
            <div className={[style.ChildContent, style.BackgroundTwo].join(' ')}>
               <span>Bridges</span>
            </div>
         </div>
      </div>
   )
}

export default Portfolio
