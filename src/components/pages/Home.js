import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import Contact from '../pages/Contact';
import Footer from '../Footer';
import HeroSection from '../HeroSection'

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;