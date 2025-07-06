import React from 'react'
import Menu from '../components/Home/Menu'
import SpecialListing from '../components/Home/SpecialListing'
import TopSelling from '../components/Home/TopSelling'
import '../css/Header-appbanner-footer.css'
import '../css/Home.css'


const Home = () => {
    return (
        <>
            <header className="hero-section flex">
                <img src="Image/Hero-section/Hero-section.jpg" alt="Hero Image" className='hero-image' />
            </header>
            <Menu />
            <main className="stsp-section">
                <div className="container stsp-container flex">
                    <SpecialListing />
                    <TopSelling />
                </div>
            </main>


        </>
    )
}

export default Home
