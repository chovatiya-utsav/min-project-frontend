import { Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react'
import '../../styles/addIndustries.css';
import * as Yup from 'yup';

const AddIndustries = () => {
    const [industriesImageurlError, setindustriesImageurlError] = useState(null);
    const [industriesImageurl, setindustriesImageurl] = useState(null);

    const handleAutoResize = (e) => {
        e.target.style.height = 'auto'; // Reset height
        e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
    };

    const fileRef = useRef();

    const fileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isValidFileType = validFileTypes.includes(file.type);
            if (!isValidFileType) {
                setindustriesImageurlError('Please upload a valid image file (jpg, jpeg, png).');
                return;
            }
            if (file.size < 200000 && isValidFileType) {
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
                setindustriesImageurlError("Image size should be less than 200 KB.");
            }
        }
    }

    const validationSchema = Yup.object().shape({
        industriesTitle: Yup.string().required('Title is required').min(10, 'Title is too short'),
        industriesTitleDetail: Yup.string().required('Detail is required').min(20, 'Detail is too short'),
    });
    return (
        <div className='AddIndustriesForm'>
            <Formik
                initialValues={
                    {
                        industriesTitle: '',
                        industriesTitleDetail: '',
                        industriesImageurl: industriesImageurl
                    }}
                validationSchema={validationSchema}
                validate={(values) => {
                    const errors = {};
                    if (!industriesImageurl) {
                        setindustriesImageurlError("Case Study image is Required.");
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const alldata = {
                        ...values,
                        industriesImageurl: industriesImageurl
                    }

                    // const stringify = JSON.stringify(alldata);

                    // alert(stringify);
                    setTimeout(() => {
                        alert(JSON.stringify(alldata, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                    <Form onSubmit={handleSubmit}>
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
                                name="CaseStudyTitleImage"
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

                        <button type="submit" disabled={isSubmitting}>
                            add industries
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddIndustries
