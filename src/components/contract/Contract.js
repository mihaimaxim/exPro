import React from 'react'

import style from './Contract.module.css'

const Contract = props => {
   return (
      <div className={style.Contract}>
         <p>name: {props.name}</p>
         <p>length: {props.length}</p>
      </div>
   )
}

export default Contract
