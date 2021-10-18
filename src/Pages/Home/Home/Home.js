import React from 'react';
import Header from '../../Header/Header';
import Services from '../Services/Services';
import About from './About/About';
import Doctors from './Doctors/Doctors';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;