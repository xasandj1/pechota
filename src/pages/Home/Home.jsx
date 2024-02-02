import React from 'react'
import MainHeader from '../../components/MainHeader';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import Meet from '../../components/Meet';
import Question from '../../components/Question';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Hero />
            <Cards />
            <Meet />
            <Question />
        </>
    )
}

export default Home