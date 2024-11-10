import React from 'react'
import './HeroPage.css'
import hero from '../assets/hero.png'
import TypingEffect from '@/components/typing/TypingEffect'
import { useNavigate } from 'react-router-dom'

const HeroPage = () => {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate('/signup')
    }

    return (
        <div className='herobg'>
            <section className="hero">
                <div className="herocharacter">
                    <img src={hero} alt="hero" />
                </div>
                <div className="hero-text">
                    <h1>WELCOME!</h1>
                    <div className='content'>
                        <TypingEffect />
                    </div>
                    <h4 className='content'>
                        Do you know what is Shiksha Sankalp?
                    </h4>
                    <p className='content'>
                        Shiksha Sankalp is a next-generation platform designed to empower users with seamless communication,
                        collaboration, and creativity. Whether you're managing a community or building your own online presence,
                        Shiksha Sankalp helps you stay connected with your team, friends, and other users.
                    </p>
                    <button onClick={handleGetStarted}>Let's Get Started</button>
                    {/* <div className="herochat"><span className="makeyellow">Welcome</span> to Interior Experts, your go-to community for exceptional design.</div>
                    <div className="herochat">I'm envisioning something truly captivating for your space. Would you like to transform your home with a stunning interior? <span className="makeyellow">Let's make it happen!</span></div> */}
                </div>
            </section>
        </div>
    )
}

export default HeroPage
