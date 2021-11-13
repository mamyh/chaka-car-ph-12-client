import React from 'react'
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

import Banner from './banner/Banner';
import ChooseUs from './choose/ChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    )
}

export default Home;
