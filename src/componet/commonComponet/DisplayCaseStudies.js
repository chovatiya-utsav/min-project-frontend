import React from 'react';
import '../../styles/displayCaseStudies.css'
import { useNavigate } from 'react-router-dom';

const DisplayCaseStudies = () => {


    const navigate = useNavigate()

    const selectCaseStudy = () => {
        navigate("/CaseStudy");
        scrollToTop();
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='case_study_cards_section for_desktop'>
            <div className='case_study_card' onClick={() => selectCaseStudy()}>
                <div className='inner_div'>
                    <div className='img_section'>
                        <img src="./images/casestudy/case-study-1.jpg" alt="" />
                    </div>
                    <div className='case_study_details'>
                        <div className='flex_class_case'>
                            <h4>A Leading Tyre Manufacturer of India</h4>
                            <p>The client faced challenges in effectively leveraging prospect data for targeted sales and marketing efforts. Key issues included.</p>
                        </div>
                        <span>13 April 2023</span>
                    </div>
                </div>
            </div>
            <div className='case_study_card' onClick={() => selectCaseStudy()}>
                <div className='inner_div'>
                    <div className='img_section'>
                        <img src="./images/casestudy/case-study-3.jpg" alt="" />
                    </div>
                    <div className='case_study_details'>
                        <div className='flex_class_case'>
                            <h4>A Leading Tyre Manufacturer of India</h4>
                            <p>The business faced challenges in providing assurance to a partner financier regarding the proper utilization of funds and the presence of procured vehicles at its multiple superstores. Key issues included.</p>
                        </div>
                        <span>18 Jun 2023</span>
                    </div>
                </div>
            </div>
            <div className='case_study_card'>
                <div className='inner_div' onClick={() => selectCaseStudy()}>
                    <div className='img_section'>
                        <img src="./images/casestudy/case-study-5.jpg" alt="" />
                    </div>
                    <div className='case_study_details'>
                        <div className='flex_class_case'>
                            <h4>A Direct Insurance Broking Firm part of a large Indian Conglomerate</h4>
                            <p>They encountered challenges in efficiently capturing and evaluating prospect site information for their partner branches. Key issues included.</p>
                        </div>
                        <span> 1 July 2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayCaseStudies
