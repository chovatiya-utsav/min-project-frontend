import React, { useState } from 'react';
import '../../../styles/Hader.css';
import { Link, NavLink } from 'react-router-dom';

const Hader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [addDropDwonopen, setAddDropDwonopen] = useState(false)
    const [viewDropDwonopen, setViewDropDwonopen] = useState(false)

    const handeladdDropdwon = () => {
        setAddDropDwonopen(!addDropDwonopen);
        setViewDropDwonopen(false);
    }
    const handelviewDropdwon = () => {
        setAddDropDwonopen(false);
        setViewDropDwonopen(!viewDropDwonopen);
    }

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
                        <div className="dropdown">
                            <span className="dropbtn" onClick={() => handeladdDropdwon()}>Add
                            </span>
                            <i className="fa fa-caret-down" aria-hidden="true" id='icone'></i>
                            <div className={`dropdown-content ${addDropDwonopen ? "openAdd" : "closeAdd"} `}>
                                <NavLink to="/AddCaseStdies" onClick={() => handeladdDropdwon()}>Add CaseStudies</NavLink>
                                <NavLink to="/Industries" onClick={() => handeladdDropdwon()}>industries</NavLink>
                            </div>
                        </div>
                        <div className="dropdown">
                            <span className="dropbtn" onClick={() => handelviewDropdwon()}>view
                            </span>
                            <i className="fa fa-caret-down" aria-hidden="true" id='icone'></i>
                            <div className={`dropdown-content ${viewDropDwonopen ? "openView" : "closeView"} `}>
                                <NavLink to="/AppointmentDetails" onClick={() => handelviewDropdwon()}>Appointment</NavLink>
                                <NavLink to="/IndustriesDetails" onClick={() => handelviewDropdwon()}>IndustriesDetails</NavLink>
                            </div>
                        </div>

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