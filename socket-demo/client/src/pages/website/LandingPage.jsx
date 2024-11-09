import React from 'react'
import Navb from '../webpages/Navb.jsx'
import AppDescription from '../webpages/AppDescription.jsx'
import Features from '../webpages/Features.jsx'
import FooterComponent from '../webpages/FooterComponent.jsx'

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
