import React, { useEffect, useState } from 'react';
import '../../styles/DisplayIndustries.css';
import axios from 'axios';
import moment from 'moment';


function DisplayIndustries() {

    const [industries, setIndustries] = useState([]);

    useEffect(() => {
        const fetchIndustries = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/display');
                setIndustries(response.data);
            } catch (error) {
                console.error('Error fetching industries:', error);
            }
        };

        fetchIndustries();
    }, []);
    return (
        <section className='our_target_section'>
            <div className='container'>
                <h2 className='main_title'>Our product support customers <span> across industries </span> </h2>
                <div className='target_details'>
                    <div className='target_listing for_desktop'>
                        {industries ?
                            industries.map((data, index) => {
                                return (
                                    <div className='target_list_box active ' key={index}>
                                        <div className='target_icons'>
                                            <img
                                                 src={`http://localhost:5000/public/image/${data?.indestryImage}`}
                                                alt={data.title}
                                            />
                                        </div>
                                        <div className='list_details'>
                                            <h2>{data?.title}</h2>
                                            <p>{data?.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                            : null}

                    </div>
                    <div className='target_img'>
                        <img src="./images/industries/target-img.png" alt="target icon" loading='lazy' width={500} height={500} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DisplayIndustries
