import React from 'react'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import '../../styles/pages_Styles/home.css';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';
import DisplayIndustries from '../commonComponet/DisplayIndustries';

const Home = () => {
    return (
        <div>
            <DisplayIndustries />
            <Registration />
            <ClientsAboutUs />
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default Home
