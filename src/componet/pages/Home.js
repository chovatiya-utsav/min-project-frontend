import React, { useState } from 'react'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import '../../styles/pages_Styles/home.css';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';
import DisplayIndustries from '../commonComponet/DisplayIndustries';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RegistrationModal from '../commonComponet/RegistrationModal';
import DisplayCaseStudies from '../commonComponet/DisplayCaseStudies';

const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },]
    };
    const brandlogosettings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    const [RegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [appointment, setAppointment] = useState(null);

    const openModal = () => {
        setRegistrationModalOpen(true);
        setAppointment(1)
    }

    const closeModal = () => {
        setRegistrationModalOpen(!RegistrationModalOpen);
    }


    return (
        <div>
            <section className='banner_section'>
                <div className='banner_content'>
                    <div className='banner_inner_div'>
                        <img src="./images/logo.png" alt="logo" width={178} height={60} />
                        <h1>The Map Intelligence</h1>
                        <h6>We offer a complete suite of tools and features to streamline field force management effortlessly.</h6>
                        <button className='btn_primary btn_sheduled' type='button' onClick={() => openModal()}>Schedule An Appointment</button>
                    </div>

                </div>
            </section>
            <section className='experience_section'>
                <div className='container'>
                    <div className='experience_details'>
                        <h2>
                            From task assignment and tracking to communication and analytics, our platform provides a unified and efficient solution for managing your field force.
                        </h2>
                        <div className='data_section'>
                            <div className='experience_box'>
                                <h3>10+</h3>
                                <h4>Years of Experience</h4>
                            </div>
                            <div className='experience_box'>
                                <h3>400+</h3>
                                <h4>Customers across the world</h4>
                            </div>
                            <div className='experience_box'>
                                <h3>2000+</h3>
                                <h4>Field employees tracked</h4>
                            </div>
                            <div className='experience_box'>
                                <h3>300,000+</h3>
                                <h4>Field data points collected</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='brand_trust_section'>
                    <div className='brand_logos_slider'>
                        <Slider {...brandlogosettings}>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/slider-img-9-color.jpg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/logo-support-elders.jpg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/vishesh.jpeg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/manan.jpeg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/slider-img-2-color.jpg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/vishesh.jpeg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/manan.jpeg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/slider-img-9-color.jpg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/logo-support-elders.jpg" alt="slider images" width={150} height={60} />
                            </div>
                            <div className='monitor_img'>
                                <img src="./images/brandstrust/slider-img-2-color.jpg" alt="slider images" width={150} height={60} />
                            </div>

                        </Slider>
                    </div>
                </div>
            </section>

            <section className='our_value_section'>
                <div className='container'>
                    <h2 className='main_title'>Our <span> core values</span> help us stand out from others</h2>
                    <div className='our_value_box'>
                        <Slider {...settings}>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="./images/corevalues/value-icon-2.png" alt="" width={35} height={35} />
                                </div>
                                <h3>GPS based distance measurement </h3>
                                <p>Utilizing GPS from the users mobile device for precise distance measurement.</p>
                            </div>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="./images/corevalues/value-icon-1.png" alt="" width={35} height={35} />
                                </div>
                                <h3>Real-time tracking  </h3>
                                <p>Track people, vehicles or goods on a real time basis on our custom maps.</p>
                            </div>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="./images/corevalues/value-icon-3.png" alt="" width={35} height={35} />
                                </div>
                                <h3>Leverage form builder  </h3>
                                <p>Comprehensive field reports with data, images, videos and documents.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <DisplayIndustries />
            <Registration />
            <section className='case_studies_section'>
                <div className='container'>
                    <h2 className='main_title'> Our <span> case studies </span>prove the effectiveness of our <span>key features</span></h2>
                    <DisplayCaseStudies />
                </div>
            </section>
            <ClientsAboutUs />
            <FrequentlyAskedQuestions />
            <RegistrationModal ModalOpen={RegistrationModalOpen} closeModal={closeModal} appointment={appointment} />

        </div>
    )
}

export default Home
