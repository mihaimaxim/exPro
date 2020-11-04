import React from 'react'
import { connect } from 'react-redux'

import Toolbar from '../components/navigation/toolbar/Toolbar'
// import Footer from '../components/footer/Footer'
import InstaLogo from '../components/logo/InstaLogo'
import HomeLogo from '../components/logo/HomeLogo'

import style from './Layout.module.css'

const Layout = props => {
   let background = null
   let homeLogo = <HomeLogo />

   if (props.path === '/') {
      background = [style.Layout, style.Home].join(' ')
      homeLogo = null
   } else if (props.path === '/about') {
      // background = [style.Layout, style.About].join(' ')
      background = null
   } else if (props.path === '/contact') {
      background = [style.Layout, style.Contact].join(' ')
   } else if (props.path === '/auth') {
      background = [style.Layout, style.Auth].join(' ')
   } else if (props.path === '/portfolio') {
      background = [style.Layout, style.Portfolio].join(' ')
   }

   return (
      <div className={background}>
         <Toolbar isAuthenticated={props.isAuthenticated} />
         <main className={style.Content}>{props.children}</main>
         {homeLogo}
         <InstaLogo />
         {/* {props.path === '/' ? null : <Footer />} */}
      </div>
   )
}

const mapStateToProps = state => {
   return {
      isAuthenticated: state.auth.token !== null,
   }
}

export default connect(mapStateToProps)(Layout)
