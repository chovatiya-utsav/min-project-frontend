import React from 'react';
import '../../styles/clientsAboutUs.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ClientsAboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },]
    };
    return (
        <section className='about_us_details_section'>
            <div className='container'>
                <h2 className='main_title'>Hear what  <span> our clients </span> say about us</h2>
                <div className='about_us_slider'>
                    <Slider {...settings}>
                        <div className='about_us_card'>
                            <img src="./images/aboutUs/quotation.png" alt="quotation_photo" width={36} height={30} />
                            <p>Thanks to Intelomatic's innovative solution, we are now able to efficiently validate school audits. With geofencing and real-time image capture features, they ensure field executives are on-site, creating much better accountability and data integrity.</p>
                            <div className='user_details_section'>
                                <div className='user_icon'>
                                    <img src="./images/aboutUs/man.jpg" alt="images" width={36} height={36} />
                                </div>
                                <div className='user_details'>
                                    <h2>Naandi Foundation</h2>
                                </div>
                            </div>
                        </div>
                        <div className='about_us_card'>
                            <img src="./images/aboutUs/quotation.png" alt="quotation_photo" width={36} height={30} />
                            <p>At Shriram Finance, our extensive field team plays a crucial role in our operations, with thousands of executives conducting various visits daily. Intelomatic's real-time tracking functionality has revolutionized how we monitor their activities. With over 90% accuracy in distance traveled, this solution streamlines our reimbursement processes, ensuring efficiency and transparency across our operations.</p>
                            <div className='user_details_section'>
                                <div className='user_icon'>
                                    <img src="./images/aboutUs/man.jpg" alt="images" width={36} height={36} />
                                </div>
                                <div className='user_details'>
                                    <h2>Shriram Finance</h2>
                                </div>
                            </div>
                        </div>
                        <div className='about_us_card'>
                            <img src="./images/aboutUs/quotation.png" alt="quotation_photo" width={36} height={30} />
                            <p>At Mahindra Insurance Brokers, our admin and Infrastructure team relies on Intelomatic to streamline the site evaluation process for our Paybima branches. Previously, manual presentations and evaluations posed challenges in tracking and centralizing information. Now, with Intelomatic, we efficiently capture comprehensive site data, including multimedia, and implement a multi-level approval system, ensuring a centralized repository and smoother decision-making processes.</p>
                            <div className='user_details_section'>
                                <div className='user_icon'>
                                    <img src="./images/aboutUs/man.jpg" alt="images" width={36} height={36} />
                                </div>
                                <div className='user_details'>
                                    <h2>Mahindra Insurance Brokers</h2>
                                </div>
                            </div>
                        </div>
                        <div className='about_us_card'>
                            <img src="./images/aboutUs/quotation.png" alt="quotation_photo" width={36} height={30} />
                            <p>At Mahindra First Choice Wheels, ensuring transparency in inventory management is paramount. With Intelomatic, we provide our partner financier with real-time assurance by using QR codes embedded with vehicle details. Our store executives utilize Intelomatic to scan these codes daily, capturing real-time images and videos of each vehicle within geofenced store premises. By blocking gallery access, we ensure authenticity and accuracy in inventory documentation, fostering trust and accountability in our operations.</p>
                            <div className='user_details_section'>
                                <div className='user_icon'>
                                    <img src="./images/aboutUs/man.jpg" alt="images" width={36} height={36} />
                                </div>
                                <div className='user_details'>
                                    <h2>Mahindra First Choice Wheels</h2>
                                </div>
                            </div>
                        </div>
                        <div className='about_us_card'>
                            <img src="./images/aboutUs/quotation.png" alt="quotation_photo" width={36} height={30} />
                            <p>Apollo Tyres utilizes Intelomatic to capture prospect data and generate heat maps, enabling targeted sales activities and optimized inventory distribution. With comprehensive event performance analysis, they refine marketing strategies for maximum impact, streamlining operations and enhancing customer satisfaction.</p>
                            <div className='user_details_section'>
                                <div className='user_icon'>
                                    <img src="./images/aboutUs/man.jpg" alt="images" width={36} height={36} />
                                </div>
                                <div className='user_details'>
                                    <h2>Apollo Tyres</h2>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>


            </div>
        </section>
    )
}

export default ClientsAboutUs
