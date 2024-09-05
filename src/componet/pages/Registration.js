import React, { useState } from 'react'
import '../../styles/pages_Styles/Registration.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RegistrationModal from '../commonComponet/RegistrationModal';

const Registration = () => {

    const [RegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [appointment, setAppointment] = useState(null);

    const settings = {
        className: "center",
        centerPadding: "80px",
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerPadding: "10px",
                }
            },]
    };

   
    const openModal = (n) => {
        setRegistrationModalOpen(true);
        if (n) {
            setAppointment(0)
        } else {
            setAppointment(1)
        }
    }

    const closeModal = () => {
        setRegistrationModalOpen(!RegistrationModalOpen);
    }

    return (
        <section className='procedures_section'>
            <div className='container'>
                <h2 className='main_title'>You can <span> register with us </span> using any of the <span> 3 procedures </span> </h2>
                <div className='procedures_cards_section for_desktop'>
                    <div className='procedures_card'>
                        <div className='inner_div'>
                            <div className='img_section'>
                                <img src="./images/Registration/procedure-img-1.png" alt="truck images" />
                            </div>
                        </div>
                        <div className='procedures_details'>
                            <h4>Book an appointment </h4>
                            <ul>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6> Go to 'Schedule Appointment' </h6> </li>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Select a suitable date and time </h6> </li>
                                <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Enter details </h6> </li>
                                <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Meet us on the scheduled date and time! </h6> </li>
                            </ul>
                            <button type='button' onClick={() => openModal()} className='btn_secondary btn_get_now' >Book Now</button>
                        </div>
                    </div>
                    <div className='procedures_card'>
                        <div className='inner_div'>
                            <div className='img_section'>
                                <img src="./images/Registration/procedure-img-2.png" alt="truck images" />
                            </div>
                        </div>
                        <div className='procedures_details'>
                            <h4>Book an appointment </h4>
                            <ul>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6>Register and create an enterprise account with us</h6> </li>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6>Experience the product using our free 7-day trial</h6> </li>
                            </ul>
                            <button type='button' onClick={() => openModal(1)} className='btn_secondary btn_get_now'>Get Now</button>
                        </div>
                    </div>
                    <div className='procedures_card'>
                        <div className='inner_div'>
                            <div className='img_section'>
                                <img src="./images/Registration/procedure-img-3.png" alt="truck images" />
                            </div>
                        </div>
                        <div className='procedures_details'>
                            <h4>Book an appointment </h4>
                            <ul>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6> Use our WhatsApp chatbot </h6> </li>
                                <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Start chat with chatbot </h6> </li>
                                <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Continue on the app and ask us anything </h6> </li>
                            </ul>
                            <button type='button' onClick={() => openModal()} className='btn_secondary btn_get_now'>Chat Now</button>
                        </div>
                    </div>
                </div>
                <div className='procedures_cards_section for_mobile '>
                    <Slider {...settings}>
                        <div className='procedures_card'>
                            <div className='inner_div'>
                                <div className='img_section'>
                                    <img src="./images/Registration/procedure-img-1.png" alt="truck images" />
                                </div>
                            </div>
                            <div className='procedures_details'>
                                <h4>Book an appointment </h4>
                                <ul>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6> Go to 'Schedule Appointment' </h6> </li>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Select a suitable date and time </h6> </li>
                                    <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Enter details </h6> </li>
                                    <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Meet us on the scheduled date and time! </h6> </li>
                                </ul>
                                <button type='button' onClick={() => openModal()}className='btn_secondary btn_get_now'>Book Now</button>
                            </div>
                        </div>
                        <div className='procedures_card'>
                            <div className='inner_div'>
                                <div className='img_section'>
                                    <img src="./images/Registration/procedure-img-2.png" alt="truck images" />
                                </div>
                            </div>
                            <div className='procedures_details'>
                                <h4>Book an appointment </h4>
                                <ul>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6>Register and create an enterprise account with us</h6> </li>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6>Experience the product using our free 7-day trial</h6> </li>
                                </ul>
                                <button type='button' onClick={() => openModal(1)} className='btn_secondary btn_get_now'>Get Now</button>
                            </div>
                        </div>
                        <div className='procedures_card'>
                            <div className='inner_div'>
                                <div className='img_section'>
                                    <img src="./images/Registration/procedure-img-3.png" alt="truck images" />
                                </div>
                            </div>
                            <div className='procedures_details'>
                                <h4>Book an appointment </h4>
                                <ul>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /> <h6> Use our WhatsApp chatbot </h6> </li>
                                    <li>  <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Start chat with chatbot </h6> </li>
                                    <li> <img src="./images/Registration/right-icon.png" alt="icone" /><h6> Continue on the app and ask us anything </h6> </li>
                                </ul>
                                <button type='button' onClick={() => openModal()} className='btn_secondary btn_get_now'>Chat Now</button>
                            </div>
                        </div>
                    </Slider>


                </div>
            </div>
            <RegistrationModal ModalOpen={RegistrationModalOpen} closeModal={closeModal} appointment={appointment} />
        </section>
    )
}

export default Registration
