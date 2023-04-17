import React from 'react'
import '../../App.css'
// import Cards from '../Cards';
// import Contact from '../pages/Contact';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import Services from './Services';

function Home () {
    return (
        <>
            <HeroSection />
            <Services />
            {/* <Contact /> */}
            <Footer />
        </>
    )
}

export default Home;