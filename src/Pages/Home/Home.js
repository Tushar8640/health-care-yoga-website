import React from 'react';
import Banner from '../../Components/Banner/Banner';

import Team from '../../Components/Team/Team';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;