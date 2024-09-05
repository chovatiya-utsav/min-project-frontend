import React, { useState } from 'react';
import '../../../styles/Hader.css';
import { Link, NavLink } from 'react-router-dom';

const Hader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <header className='header'>
            <div className='navebar'>
                <div className='logo'>
                    <Link to="/Home">
                        <img src="./images/logo.png" alt='logo' />
                    </Link>
                </div>
                <div className='nav-link' >
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Features">Features</NavLink></li>
                        <li><NavLink to="/CaseStudy">Case Studies</NavLink></li>
                        <li><NavLink to="/AddCaseStdies ">Add CaseStudies</NavLink></li>
                        <li><NavLink to="/Industries">industries</NavLink></li>
                        <li><NavLink to="/AppointmentDetails">Appointment</NavLink></li>
                    </ul>
                    <i className="fa fa-bars" aria-hidden="true" onClick={() => setOpenMenu(true)}></i>
                </div>
                <div className={`modal_menu ${openMenu ? 'open' : 'close '}`} >
                    <ul>
                        <li><NavLink to="/" onClick={() => setOpenMenu(false)}>Home</NavLink></li>
                        <li><NavLink to="/Features" onClick={() => setOpenMenu(false)}>Features</NavLink></li>
                        <li><NavLink to="/CaseStudy" onClick={() => setOpenMenu(false)}>Case Studies</NavLink></li>
                        <i className="fa fa-times" aria-hidden="true" onClick={() => setOpenMenu(false)}></i>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Hader;