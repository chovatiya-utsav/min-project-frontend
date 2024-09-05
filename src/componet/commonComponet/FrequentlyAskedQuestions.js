import React, { useState } from 'react';
import '../../styles/frequentlyAskedQuestions.css';

const FrequentlyAskedQuestions = () => {

    const [openIndex, setOpenIndex] = useState(0);
    const [openQuestion, setOpenQuestion] = useState(true);
    const [showQuestion, setShowQuestion] = useState(5);

    const faq = [
        {
            question: "What can you help me with?",
            anser: "Our Intelomatic application can track your on-field employees on a real time basis and also calculate the distance travelled by the employee to perform tasks in the field. We can set you up instantly."
        },
        {
            question: "Why should I choose you and not hire my own software development team?",
            anser: "We bring over two decades of expertise in this domain, saving you time and resources associated with recruiting, training, and managing an in-house team."
        },
        {
            question: "Can the software be upgraded in the future as new technology becomes available?",
            anser: "Yes, our software is designed to be scalable and adaptable, allowing seamless integration of new technologies and updates to meet evolving needs."
        },
        {
            question: "Why should I go for your software?",
            anser: "Our map on the application and the panel is a proprietary map which uses data across state, district, sub district and village locations which means that our clients are being enabled to use this platform not just to track their employees but also to look at their competitors and do ground level research all by themselves. Aside from these, some of the key features of our software include geofencing capabilities, seamless integration between multiple forms, mapping of multiple locations and scalability in terms of number of users."
        },
        {
            question: "What is Intelomatic/map based intelligence?",
            anser: "Intelomatic is an on-field worker management software which primarily enables you to track your on-field employees. You can organize your field force, customers, competition and business data on maps to increase sales, lower costs and expand profits for your business."
        },
        {
            question: "How do I know which is the right solution for me/my business?",
            anser: "You can go through a number of case studies mentioned on our website. Please schedule an appointment with us through the website and our solutions expert will guide you on the same."
        },
        {
            question: "Can I use only one of the proposed solutions or can I use multiple solutions offered by you?",
            anser: "Our flexible approach allows you to choose individual solutions or combine multiple offerings to create a comprehensive solution tailored to your requirements."
        },
        {
            question: "What is the maps software that you are using?",
            anser: "The maps software is proprietary to Sovereign Solutions."
        },
        {
            question: "If there is a new software update for the solution I am using, how will I get the update?",
            anser: "We provide timely software updates through various channels, including automatic notifications, download links, and dedicated support resources, ensuring you stay up-to-date with the latest features and enhancements."
        },
        {
            question: "How do I submit enhancement ideas or report bugs?",
            anser: "You can submit enhancement ideas or report bugs through our mobile application and our team will promptly address your feedback."
        },
        {
            question: "How quickly will you resolve bugs or any issues I face?",
            anser: "We prioritize rapid resolution of bugs and issues, aiming to provide timely solutions and minimize disruptions to your operations."
        },
        {
            question: "You will be having access to a lot of data of my organization, do you guarantee that it will be secure?",
            anser: "We take data security seriously and employ robust measures, including encryption, access controls, and regular audits, to safeguard your organization's data and ensure compliance with relevant regulations."
        },
        {
            question: "How much does it cost to use Intelomatic?",
            anser: "The cost depends on several factors, including the size and complexity of your organization, the scope of services required, and any customization needs. We offer flexible pricing plans tailored to meet the demands of your business. To provide you with an accurate quote, we would need to understand your specific requirements and objectives. Please reach out to us for a personalized consultation and pricing proposal."
        },
        {
            question: "Is it a one-time fee or does it work like an annual subscription service?",
            anser: "It is an annual subscription fee."
        },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the clicked question
    }

    const showFaq = () => {
        setOpenQuestion(!openQuestion);
        if (showQuestion === 5) {
            setShowQuestion(faq.length);
        } else {
            setShowQuestion(5);
        }
    }

    return (
        <section className='faq_container'>
            <div className='container'>
                <h2>Frequently Asked Questions</h2>
                <div className='faq_question'>
                    {
                        faq ?
                            faq.map((data, index) => {
                                return (
                                    index < showQuestion ?
                                        (
                                            <div className='inner_faq_container' key={index}>
                                                <div className='faq_anser_container'>
                                                    <div className='question'>
                                                        <h3>{data.question}</h3>
                                                        <div className={`close_icon_div ${openIndex === index ? 'open' : 'close '}`} onClick={() => toggleFaq(index)}>
                                                            <img src={openIndex === index ? "./images/faq/plus.png" : "./images/faq/minus.png"} alt="plus-icone" width={25} height={30} />
                                                        </div>
                                                    </div>
                                                    <div className={`anser ${openIndex === index ? 'open' : 'close '}`}>
                                                        <p>{data.anser}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                );
                            })
                            : null
                    }
                </div>
                <div className='faq_button'>
                    <button type='button' className='faq_show_button' onClick={() => showFaq()} >show {openQuestion ? "more" : "less"}</button>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions
