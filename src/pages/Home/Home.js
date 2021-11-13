import React from 'react'
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

import Banner from './banner/Banner';
import ChooseUs from './choose/ChooseUs';
import MyCars from './MyCars/MyCars';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <MyCars></MyCars>
            <Review></Review>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    )
}

export default Home;
