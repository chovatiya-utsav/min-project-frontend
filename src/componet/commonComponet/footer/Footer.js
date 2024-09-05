import React from 'react';
import '../../../styles/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='inner_footer_section'>
                    <div className='logo_setion'>
                        <Link to={"/Home"}><img src="./images/logo.png" alt="logo" height={40} width={200} /></Link>
                    </div>
                    <div className='menu_container'>
                        <div className='menus'>
                            <Link to={"/Home"} >Home</Link>
                            <Link to={"/Features"} >Features</Link>
                            <Link to={"/CaseStudy"} >Case Studies</Link>
                        </div>
                    </div>
                    <div className='menu_container'>
                        <div className='menus'>
                            <Link to={"#"}>Privacy Policy</Link>
                            <Link to={"#"} >Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
