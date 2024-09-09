import React from 'react';
import '../../styles/pages_Styles/features.css'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';

function Features() {
  return (
    <div>
      <Registration />
      <ClientsAboutUs />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default Features;  
