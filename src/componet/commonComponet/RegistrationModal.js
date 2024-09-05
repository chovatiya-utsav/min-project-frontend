import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import '../../styles/RegistrationModal.css';
import * as Yup from 'yup'
import DataBaseResponseModal from './DataBaseResponseModal';

const RegistrationModal = (props) => {

    const { ModalOpen, closeModal, appointment } = props;

    const [response, setResponse] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const phoneRegExp = /^[0-9]*$/;

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('first name is required'),
        CompanyName: Yup.string().required('Company Name is required'),
        phoneNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number is not valid").max(10, "Phone number is not valid").required('first name is required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const toggalModal = (responseName) => {
        setResponse(!response);
        setModalContent(responseName);
    }


    return (
        <div className='form_modal'>
            <Modal
                show={ModalOpen}
                onHide={closeModal}
                aria-labelledby="ModalHeader"
            >
                {/* {console.log(props.appointment)} */}
                <Modal.Header >
                    <Modal.Title id='ModalHeader'>
                        <h2>{appointment ? "Schedule an appointment" : "You are one step away from a 7-day free trial"}</h2>
                        <button className='btn_close_icon' type='button' onClick={() => closeModal()}>
                            <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} />
                        </button>
                    </Modal.Title>

                </Modal.Header>
                <Formik
                    initialValues={
                        {
                            firstName: '',
                            lastName: '',
                            CompanyName: '',
                            TeamSize: '',
                            phoneNo: '',
                            email: '',

                        }}

                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(async () => {
                            // alert(JSON.stringify(values, null, 2));
                            // console.log(JSON.stringify(values, null, 2))
                            const userData = JSON.stringify(values);
                            console.log(userData);
                            if (userData) {
                                // try {
                                //     const result = await axios.post("http://localhost:5000/api/submit", formData);
                                //     console.log("result ", result)
                                // } catch (err) {
                                //     console.error(err);
                                // }

                                const response = await fetch("http://localhost:5000/api/userAppointments/register", {
                                    method: "POST",
                                    body: userData,
                                    headers: {
                                        'content-Type': 'application/json'
                                    }
                                })
                                const data = await response.json();
                                if (data.msg === "User already exists") {
                                    console.log("exists", data);
                                    toggalModal("appointment rejected");
                                    closeModal();
                                } else {
                                    console.log("successfully", data);
                                    toggalModal("appointment request  send");
                                    closeModal();
                                }
                                // setResponse(data)
                            }
                            actions.setSubmitting(false);
                            // setResponse(!response);
                        });
                    }}
                >
                    {(
                        values,
                        handleBlur,
                        handleChange,
                        errors,
                        touched
                    ) => (
                        <Form>
                            {/* {console.log('values', values)} */}
                            {/* {console.log(values.errors)} */}

                            <div className='schedule_form'>

                                <div className='form_group'>
                                    <h5>First Name <span> * </span></h5>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        placeholder="Enter Name"
                                        id={values.errors.firstName ? "error" : null}
                                    />

                                </div>
                                <div className='form_group'>
                                    <h5>Last Name </h5>
                                    <Field
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        placeholder="Enter Name"
                                    />
                                </div>
                            </div>
                            <div className='schedule_form'>
                                <div className='form_group'>
                                    <h5>Company Name <span> * </span></h5>
                                    <Field
                                        type="text"
                                        name="CompanyName"
                                        value={values.CompanyName}
                                        placeholder="Enter name of the company"
                                        id={values.errors.CompanyName ? "error" : null}
                                    />

                                </div>
                                <div className='form_group'>
                                    <h5>Team Size<span> * </span></h5>
                                    <Field
                                        name="TeamSize"
                                        list="TeamSize"
                                        value={values.TeamSize}
                                        placeholder="Select team size"
                                    />
                                    <datalist id="TeamSize">
                                        <option value="10 - 25" >10 - 25</option>
                                        <option value="25 - 50">25 - 50</option>
                                        <option value="50 - 100">50 - 100</option>
                                        <option value="100+">100+</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className='schedule_form'>
                                <div className='form_group'>
                                    <h5>Mobile No <span> * </span></h5>
                                    <Field
                                        type="tel"
                                        name="phoneNo"
                                        value={values.phoneNo}
                                        pattern="[0-9]*"
                                        id={values.errors.phoneNo ? "error" : null}
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className='form_group'>
                                    <h5>Email ID<span> * </span></h5>
                                    <Field
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        id={values.errors.email ? "error" : null}
                                        placeholder="Enter your company email id" />
                                </div>
                            </div>

                            {
                                appointment ?
                                    <div className='schedule_form_button'>
                                        <button className='btn btn-default' type='submit'>Request a callback</button>
                                        <button className='btn btn-primary' type='submit'  >
                                            Schedule Appointment
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <button className='btn btn-primary' type='submit'  >
                                            Verify Your Email Id
                                        </button>
                                    </div>
                            }
                        </Form>
                    )}
                </Formik>
            </Modal>
            <div className='user-response'>

                <DataBaseResponseModal open={response} toggalModal={toggalModal} modalContent={modalContent} />
            </div>
        </div >
    )
}

export default RegistrationModal
