import React from 'react'

import style from './drawerToggle.modules.css'

const DrawerToggle = ({ clicked }) => {
	return <div onClick={clicked} className={style.DrawerToggle} />
}
