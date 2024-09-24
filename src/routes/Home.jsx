import React from 'react';
import Container from '../css/HomeStyle';
import { useInView } from 'react-intersection-observer';



const Home = () => {
    const {ref:textHome, inView:homeVisible} = useInView();
    return (
        <Container>
            <h1 
            ref={textHome}
            className={homeVisible ? 'animate' : ''}>
            BEM-VINDO AO SITE</h1>
        </Container>
    );
};

export default Home;
