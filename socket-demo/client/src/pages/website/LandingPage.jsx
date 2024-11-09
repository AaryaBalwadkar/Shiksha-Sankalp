import React from 'react'
import Navb from '../webpages/Navb.js'
import AppDescription from '../webpages/AppDescription.js'
import Features from '../webpages/Features.js'
import FooterComponent from '../webpages/FooterComponent.js'

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E"}}>
    <Navb/>
    <AppDescription/>
    <Features/>
    <FooterComponent/>
    </div>
  )
}

export default LandingPage
