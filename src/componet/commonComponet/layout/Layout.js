import React from 'react';
import '../../../styles/Hader.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Header from '../../commonComponet/header/Header'
import CaseStudy from '../../pages/CaseStudy';
import AddIndustries from '../AddIndustries';
import '../../../styles/layout.css'
import Footer from '../footer/Footer';
import AddCaseStudy from '../AddCaseStudy';
import AppointmentDetails from '../../pages/AppointmentDetails';
import Features from '../../pages/Features';
import IndustriesDetails from '../../pages/IndustriesDetails';

const Layout = () => {
    return (
        <div className='body'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path='/Features' element={<Features />} />
                    <Route path='/CaseStudy' element={<CaseStudy />} />
                    <Route path='/Industries' element={<AddIndustries />} />
                    <Route path='/AddCaseStdies' element={<AddCaseStudy />} />
                    <Route path='/AppointmentDetails' element={<AppointmentDetails />} />
                    <Route path='/IndustriesDetails' element={<IndustriesDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout;
