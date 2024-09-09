import React from 'react';
import '../../styles/pages_Styles/features.css'
import FrequentlyAskedQuestions from '../commonComponet/FrequentlyAskedQuestions';
import ClientsAboutUs from '../commonComponet/ClientsAboutUs';
import Registration from './Registration';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1,
    cssEase: "linear"
  };
  return (
    <div>
      <section className='feture_banner_section'>
        <div className='banner_content'>
          <div className='banner_inner_div'>
            <h1>We have a solution for you</h1>
            <h6> Irrespective of your department profile or industry. Intelomatic fits your requirement</h6>
          </div>
        </div>
        <div className='bottom_img'>
            <img src="./images/Features/feature-bottom-img.png" alt="" />
          </div>
      </section>
      <section className='expand_section'>
        <div className='container'>
          <h2 className='main_title'> <span> Our expertise </span> expands across</h2>
          <div className='for_desktop_expand'>
            <div className='expand_data_div'>
              <div className='expand_number'>
                <h2>100+ industries</h2>
                <h6>Our product has been implemented across diverse industries, embodying the philosophy that small companies deserve powerful tools just like industry giants.</h6>
              </div>
              <div className='expand_number'>
                <h2>Easy to deploy</h2>
                <h6>Software as a service offering with exemplary service support.</h6>
              </div>
              <div className='expand_number'>
                <h2>Distance Calculation</h2>
                <h6>Our GPS based distance measurement methodology is 95% accurate and is easy to deplo</h6>
              </div>
            </div>
            <div className='expand_usp_section'>
              <div className='usp_box'>
                <div className='inner_div'>
                  <img src="./images/ourexpertise/ups-img-1.jpg" alt="" />
                </div>
              </div>
              <div className='usp_box'>
                <div className='inner_div'>
                  <img src="./images/ourexpertise/ups-img-2.jpg" alt="" />
                </div>
              </div>
              <div className='usp_box'>
                <div className='inner_div'>
                  <img src="./images/ourexpertise/ups-img-3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className='monitor_location_section'>
        <div className='container'>
          <div className='monitor_location_box'>
            <div className='monitor_img'>
              <img src="./images/Features/monitor-location-img.jpg" alt="monitor images" width={590} height={420} />
            </div>
            <div className='monitor_details_section'>
              <h2>Want to monitor your team's real time location?</h2>
              <h3>Intelomatic makes it easy for you to know where they are.</h3>
              <div className='monitor_steps'>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>1</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Attendance</h4>
                    <h5>Idle/ Moving Tracking. Know the current status of your field executive - whether the person is 'On Duty' or 'Off Duty'.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>2</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Live Tracking</h4>
                    <h5>Live Location Tracking. Identify the current location of the field executive and the route taken.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>3</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Geocoding</h4>
                    <h5>Reverse Geocoding Address. Understand what latitude and longitude means - convert geographical address to postal address.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='monitor_location_box'>
            <div className='monitor_img'>
              <img className='small_size_img' src="./images/Features/monitor-location-img-1.jpg" alt="monitor images" width={590} height={420} />
            </div>
            <div className='monitor_details_section'>
              <h2>Enhancing the efficiency and resilience of your order management process.</h2>
              <h3>Intelomatic simplifies the management of your order processing with ease and efficiency.</h3>
              <div className='monitor_steps'>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>1</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Shape files</h4>
                    <h5>Shape files uploading. Uploading customize administrative boundary or client data.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>2</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Incremental ID</h4>
                    <h5>Incremental ID. Generate unique IDs in sequence for controlling a process.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>3</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Approval</h4>
                    <h5>Approve or reject form once the field executive submits with notifications.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='monitor_location_box'>
            <div className='monitor_img'>
              <img className='small_size_img' src="./images/Features/monitor-location-img-2.jpg" alt="monitor images" width={590} height={420} />
            </div>
            <div className='monitor_details_section'>
              <h2>Optimizing your field data collection process for superior results and intuitive operation.</h2>
              <h3>Intelomatic seamlessly handles field data collection with intelligence.</h3>
              <div className='monitor_steps'>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>1</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Map Editing </h4>
                    <h5>Map editing feature. Capability of identifying near by point of interest and edit the data with images.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>2</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Two way entry</h4>
                    <h5>Two way data entry. Data can be filled from the web and the remaining from the mobile device by Field staff.</h5>
                  </div>
                </div>
                <div className='steps_box'>
                  <div className='step_number'>
                    <h6>3</h6>
                  </div>
                  <div className='steps_details'>
                    <h4>Approval</h4>
                    <h5>Approve or reject form once the field executive submits with notifications.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='brand_trust_section'>
        <h2 className='main_title'>Several <span> brands trust </span>our product</h2>
        <div className='brand_logos_slider'>
          <Slider {...settings}>
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
      <Registration />
      <ClientsAboutUs />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default Features;  
