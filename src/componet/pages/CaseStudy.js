import React from 'react'
import ClientsAboutUs from '../commonComponet/ClientsAboutUs'
import Registration from './Registration';
import '../../styles/pages_Styles/caseStudy.css'
import DisplayCaseStudies from '../commonComponet/DisplayCaseStudies';

const CaseStudy = () => {
    
    return (
        <div>
            <section className='case_studies_banner'>
                <div className='container'>
                    <div className='case_studies_inner_div'>
                        <div className='case_studies_image_section'
                            style={{ backgroundImage: `url("./images/casestudy/case_studies_banner_bg.jpg")` }}
                        >
                            <div className='case_studies_logo'>
                                <h2>A Leading Tyre Manufacturer of India</h2>
                            </div>
                        </div>
                        <div className='key_word_section'>

                        </div>
                    </div>
                </div>
            </section>
            <section className='company_bg_section'>
                <div className='container'>
                    <div className='company_bg_inner_section'>
                        <div className='company_all_details_section'>
                            <div className='company_img_section'>
                                <img
                                    src="./images/casestudy/case_studies_banner_bg.jpg"
                                    alt="usp images" width={381} height={104} />
                                <div className='black_shadow_div'>

                                </div>
                            </div>
                            <div className='company_details_section'>
                                <h2>Company Background</h2>
                                <p>A Large international tyre manufacturer and the leading tyre brand in India, its products are available in over 100 countries through a vast network of branded, exclusive and multi-product outlets. The product portfolio of the company includes the entire range of passenger car, SUV, MUV, light truck, truck-bus, two-wheeler, agriculture, industrial, specialty, bicycle and off-the-road tyres and retreading material and tyres.</p>
                            </div>
                        </div>

                        <div className='problem_statement_section'>
                            <h2>Problem Statement</h2>
                            <p>The client faced challenges in effectively leveraging prospect data for targeted sales and marketing efforts. Key issues included:</p>
                            <div className='problem_statements'>
                                <div className='box_of_number'>
                                    <h6>1</h6>
                                </div>
                                <div className='problem_state'>
                                    <h3>Inaccuracy in data:</h3>
                                    <p>Inaccurate and unreliable location data of prospect, leading to inefficient marketing campaigns and sales activities.</p>
                                </div>
                            </div>
                            <div className='problem_statements'>
                                <div className='box_of_number'>
                                    <h6>2</h6>
                                </div>
                                <div className='problem_state'>
                                    <h3>High cost:</h3>
                                    <p>Low return on investment of its Below-The-Line (BTL) marketing campaigns and sub-optimal resource utilization.</p>
                                </div>
                            </div>
                        </div>
                        <div className='two_section_box'>
                            <div className='let_box'>
                                <h2>Solution</h2>
                                <p>Implementing Intelomatic Field Data Collection solution to:</p>
                                <div className='box_for_number'>
                                    <div className='box_of_number'>
                                        <h6>1</h6>
                                    </div>
                                    <div className='details_of_box'>
                                        <h3>Complete control:</h3>
                                        <p>Have complete control on Marketing Activation activities by collecting prospect information with exact geographical detail and instant upload onto the app.</p>
                                    </div>
                                </div>
                                <div className='box_for_number'>
                                    <div className='box_of_number'>
                                        <h6>2</h6>
                                    </div>
                                    <div className='details_of_box'>
                                        <h3>Heat Maps:</h3>
                                        <p>Heat Maps for better understanding of the performance of marketing activities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='right_box'>
                                <div className='slider_box_img_for_image'>
                                    <img src="./images/casestudy/heat-map.jpg" alt="usp images" />
                                </div>
                            </div>
                        </div>
                        <div className='two_section_box reverse_boxes'>
                            <div className='let_box'>
                                <h2>Results</h2>
                                <p>The implementation of Intelomatic yielded impressive results:</p>
                                <div className='box_for_number'>
                                    <div className='box_of_number'>
                                        <h6>1</h6>
                                    </div>
                                    <div className='details_of_box'>
                                        <h3>200% Improvement in Verified Data List:</h3>
                                        <p>The enhanced data quality enabled the client to target the right audience more accurately, leading to improved campaign effectiveness and higher conversion rates.</p>
                                    </div>
                                </div>
                                <div className='box_for_number'>
                                    <div className='box_of_number'>
                                        <h6>2</h6>
                                    </div>
                                    <div className='details_of_box'>
                                        <h3>40% Reduction in Cost of BTL Marketing Campaigns: </h3>
                                        <p>By optimizing marketing spend and resource allocation, the client could achieve significant cost savings without compromising on campaign reach or impact. This allowed them to reallocate resources towards other strategic initiatives, driving overall business growth.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='right_box'>
                                <img src="./images/casestudy/Result-green-good-data-points-collected.jpg" alt="usp images" />
                            </div>
                        </div>
                        <div className='summery_section'>
                            <h2>Summary</h2>
                            <p>Through the usage of Intelomatic, the company overcame challenges related to data quality and marketing cost inefficiencies. The solution facilitated better data-driven decision-making, resulting in a significant improvement in the accuracy of prospect data and a notable reduction in the cost of BTL marketing campaigns.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='case_studies_section'>
                <div className='container'>
                    <h2 className='main_title'> Related <span> case studies </span></h2>
                    <DisplayCaseStudies />
                </div>
            </section>

            <Registration />
            <ClientsAboutUs />
        </div>
    )
}

export default CaseStudy;
