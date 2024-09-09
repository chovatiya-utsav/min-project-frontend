import React from 'react'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import '../../styles/pages_Styles/home.css';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';
import DisplayIndustries from '../commonComponet/DisplayIndustries';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
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
    return (
        <div>
            <section className='brand_trust_section'>
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
            </section>
            <section className='our_value_section'>
                <div className='container'>
                    <h2 className='main_title'>Our <span> core values</span> help us stand out from others</h2>
                    <div className='our_value_box'>
                        <Slider {...settings}>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="https://www.intelomatic.ai/images/value-icon-2.svg" alt="" width={35} height={35} />
                                </div>
                                <h3>GPS based distance measurement </h3>
                                <p>Utilizing GPS from the users mobile device for precise distance measurement.</p>
                            </div>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="https://www.intelomatic.ai/images/value-icon-1.svg" alt="" width={35} height={35} />
                                </div>
                                <h3>Real-time tracking  </h3>
                                <p>Track people, vehicles or goods on a real time basis on our custom maps.</p>
                            </div>
                            <div className='our_value_card'>
                                <div className='image_div'>
                                    <img src="https://www.intelomatic.ai/images/value-icon-3.svg" alt="" width={35} height={35} />
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
            <ClientsAboutUs />
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default Home
