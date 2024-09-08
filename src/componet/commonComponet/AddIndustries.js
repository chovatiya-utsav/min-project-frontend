import { Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react'
import '../../styles/addIndustries.css';
import * as Yup from 'yup';
import axios from 'axios';
import AddIndustriesDataBaseResponseModal from './AddIndustriesDataBaseResponseModal';

const AddIndustries = () => {
    const [industriesImageurlError, setindustriesImageurlError] = useState(null);
    const [industriesImageurl, setindustriesImageurl] = useState(null);
    const [fileObject, setFileObject] = useState(null);
    const [response, setResponse] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [industriesName, setIndustriesName] = useState(null);

    const handleAutoResize = (e) => {
        e.target.style.height = 'auto'; // Reset height
        e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
    };

    const fileRef = useRef();


    const fileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        setFileObject(file);
        if (file) {
            const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isValidFileType = validFileTypes.includes(file.type);
            if (!isValidFileType) {
                setindustriesImageurlError('Please upload a valid image file (jpg, jpeg, png).');
                return;
            }
            if (file.size < 500000 && isValidFileType) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result;
                    setindustriesImageurl(base64String);
                    setindustriesImageurlError(null);
                };
                reader.readAsDataURL(file);
            } else {
                console.log("big file")

                setindustriesImageurl(null);
                setindustriesImageurlError("Image size should be less than 500 KB.");
            }
        }
    }

    const toggalModal = (responseName, industriesName) => {
        setResponse(!response);
        setModalContent(responseName);
        setIndustriesName(industriesName);

    }


    const validationSchema = Yup.object().shape({
        industriesTitle: Yup.string().required('Title is required').min(5, 'Title is too short'),
        industriesTitleDetail: Yup.string().required('Detail is required').min(20, 'Detail is too short'),
    });
    return (
        <div className='AddIndustriesForm'>
            <Formik
                initialValues={
                    {
                        industriesTitle: '',
                        industriesTitleDetail: '',
                        industriesImageurl: fileObject
                    }}
                validationSchema={validationSchema}
                validate={(values) => {
                    const errors = {};
                    if (!fileObject) {
                        setindustriesImageurlError("Case Study image is Required.");
                    }
                    return errors;
                }}
                onSubmit={async (values, actions) => {

                    const formData = new FormData();
                    formData.append('title', values.industriesTitle);
                    formData.append('description', values.industriesTitleDetail);
                    formData.append('image', fileObject); // Append the image

                    console.log(formData);

                    try {
                        const response = await axios.post('http://localhost:5000/api/upload', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });
                        console.log(response.data);
                        const data = await response.data;
                        console.log("exists", data.msg);
                        if (data.msg === "Industry already exists") {
                            toggalModal("Industry already exists", values.industriesTitle);
                            actions.resetForm();
                            setindustriesImageurl(null); // Reset the image preview
                            setFileObject(null); // Reset the file object

                        } else {
                            console.log("successfully", data);
                            toggalModal("Industry successfully submited", values.industriesTitle);
                            actions.resetForm();
                            setindustriesImageurl(null); // Reset the image preview
                            setFileObject(null); // Reset the file object
                        }


                    } catch (error) {
                        console.error('Error uploading image:', error);
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit} >
                        <h1>Add industries</h1>
                        <label >Enter Youer Title :</label>
                        <Field
                            type="text"
                            name="industriesTitle"
                            className='IndustriesTitle'
                            onChange={handleChange}
                            value={values.industriesTitle} />
                        {errors.industriesTitle && touched.industriesTitle && <span className='error'>{errors.industriesTitle}</span>}
                        <label >upload a picture showcasing your business :</label>
                        {/* {errors.CaseStudyTitleImage && touched.CaseStudyTitleImage && <span className='error'>{errors.CaseStudyTitleImage}</span>} */}
                        <div className='userInputImageDiv'>
                            <input hidden
                                ref={fileRef}
                                name="image"
                                type="file"
                                id="user-image"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => fileUploadFolderHandle(e, setFieldValue)}
                                action="image/*" >

                            </input>
                            <button type="button" className='UserInputImageButton' onClick={() => { fileRef.current.click() }}>Uplode image</button>


                            {
                                industriesImageurl && <div className='user-img'>
                                    <img src={industriesImageurl} alt="images" title='user image' width="100px" height="100px" />
                                </div>
                            }
                        </div>

                        {<span className='error'>{!industriesImageurl && industriesImageurlError ? industriesImageurlError : null}</span>}


                        <label>Enter what our product supports in your industry :</label>
                        <Field
                            as="textarea"
                            name="industriesTitleDetail"
                            className='industriesTitleDetail'
                            onInput={handleAutoResize} />

                        {errors.industriesTitleDetail && touched.industriesTitleDetail && <span className='error'>{errors.industriesTitleDetail}</span>}

                        <button type="submit" >
                            add industries
                        </button>
                    </Form>
                )}
            </Formik>

            <div className='user-response'>
                <AddIndustriesDataBaseResponseModal open={response} toggalModal={toggalModal} modalContent={modalContent} industriesName={industriesName} />
            </div>
        </div>
    )
}

export default AddIndustries
