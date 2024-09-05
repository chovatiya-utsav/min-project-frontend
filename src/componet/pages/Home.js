import React from 'react'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import '../../styles/pages_Styles/home.css';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';

const Home = () => {
    return (
        <div>
            <Registration />
            <ClientsAboutUs />
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default Home
