import React from 'react';
import Action from './Action';
import Cart from './Cart';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Nav from './Nav';



const Home = () => {
    return (
        <div>
            <div className=''>
            <Nav></Nav>
            <HeroSection></HeroSection>
            <Cart></Cart>
            <Action></Action>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;