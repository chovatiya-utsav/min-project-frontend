import React from 'react';
import '../../../styles/Hader.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Ficher from '../../pages/Features';
import Header from '../../commonComponet/header/Header'
import CaseStudy from '../../pages/CaseStudy';
import AddIndustries from '../AddIndustries';
import '../../../styles/layout.css'
import Footer from '../footer/Footer';
import AddCaseStudy from '../AddCaseStudy';
import AppointmentDetails from '../../pages/AppointmentDetails';

const Layout = () => {
    return (
        <div className='body'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path='/Ficher' element={<Ficher />} />
                    <Route path='/CaseStudy' element={<CaseStudy />} />
                    <Route path='/Industries' element={<AddIndustries />} />
                    <Route path='/AddCaseStdies' element={<AddCaseStudy />} />
                    <Route path='/AppointmentDetails' element={<AppointmentDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout;
