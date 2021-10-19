import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Nav from '../../Components/Nav/Nav';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;