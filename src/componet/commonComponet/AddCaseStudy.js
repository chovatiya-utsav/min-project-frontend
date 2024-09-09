import React, { useRef, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import '../../styles/AddCaseStudy.css';
import { Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import AddCaseStudyBaseResponseModal from './AddCaseStudyBaseResponseModal';
const AddCaseStudy = () => {


    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [deleteRecoedName, setDeleteRecoedName] = useState(null);
    const [resultToDeleteIndex, setResultToDeleteIndex] = useState(null);
    const [CaseStudyTitleImageurlError, setCaseStudyTitleImageurlError] = useState(null);
    const [CaseStudyTitleImageurl, setCaseStudyTitleImageurl] = useState(null);
    const [CaseStudySolutionImageError, setCaseStudySolutionImageError] = useState(null);
    const [CaseStudySolutionImageurl, setCaseStudySolutionImageurl] = useState(null);
    const [CaseStudyResultImageError, setCaseStudyResultImageError] = useState(null);
    const [CaseStudyResultImageurl, setCaseStudyResultImageurl] = useState(null);
    const [response, setResponse] = useState(false);
    const [caseStudiesResultsData, setcaseStudiesResultsData] = useState([{
        title: "",
        description: ""
    }]);
    const [caseStudiesProblemData, setcaseStudiesProblemData] = useState([{
        title: "",
        description: ""
    }]);
    const [caseStudiesSolutionData, setcaseStudiesSolutionData] = useState([{
        title: "",
        description: ""
    }]);

    const fileRef = useRef(null);
    const SolutionfileRef = useRef(null);
    const ResultfileRef = useRef(null);

    // console.log("caseStudiesData", caseStudiesData)
    const addCaseStudiesResultData = (setFieldValue) => {
        const newProblem = { title: "", description: "" };
        setcaseStudiesResultsData([...caseStudiesResultsData, {
            title: "",
            description: ""
        }])
        setFieldValue('caseStudiesresult', [...caseStudiesResultsData, newProblem]);
    }
    const addCaseStudiesProblemData = (setFieldValue) => {
        const newProblem = { title: "", description: "" };
        setcaseStudiesProblemData([...caseStudiesProblemData, {
            title: "",
            description: ""
        }])

        setFieldValue('caseStudiesproblem', [...caseStudiesProblemData, newProblem]);
    }
    const addCaseStudiesSolutionData = (setFieldValue) => {
        const newProblem = { title: "", description: "" };
        setcaseStudiesSolutionData([...caseStudiesSolutionData, {
            title: "",
            description: ""
        }])
        setFieldValue('caseStudiessolution', [...caseStudiesSolutionData, newProblem]);
    }

    const deleteResult = (id) => {
        if (id || id === 0) {
            const allData = caseStudiesResultsData;
            if (id === 0) {
                allData.shift();
                setcaseStudiesResultsData([...allData])
            } else {
                const spliceData = allData.slice(0, id).concat(allData.slice(id + 1))
                // console.log("allData", spliceData)
                setcaseStudiesResultsData([...spliceData])
            }
        }
    };
    const deleteProblem = (id) => {
        if (id || id === 0) {
            const allData = caseStudiesProblemData;
            if (id === 0) {
                allData.shift();
                setcaseStudiesProblemData([...allData])
            } else {
                const spliceData = allData.slice(0, id).concat(allData.slice(id + 1))
                // console.log("allData", spliceData)
                setcaseStudiesProblemData([...spliceData])
            }
        }
    };
    const deleteSolution = (id) => {
        if (id || id === 0) {
            const allData = caseStudiesSolutionData;
            if (id === 0) {
                allData.shift();
                setcaseStudiesSolutionData([...allData])
            } else {
                const spliceData = allData.slice(0, id).concat(allData.slice(id + 1))
                // console.log("allData", spliceData)
                setcaseStudiesSolutionData([...spliceData])
            }
        }
    };

    const ResultinputhandleChange = (e, name, index, setFieldValue) => {
        const { value } = e.target;
        if (name) {
            if (name === "title") {
                caseStudiesResultsData[index].title = e.target.value;
            }

            if (name === "description") {
                caseStudiesResultsData[index].description = e.target.value;

            }
            setcaseStudiesResultsData([...caseStudiesResultsData])
            setFieldValue(`caseStudiesresult[${index}].${name}`, value);
        }
        // console.log("e", e.target.name)
    }
    const ProbleminputhandleChange = (e, name, index, setFieldValue) => {
        const { value } = e.target;
        if (name) {
            if (name === "title") {
                caseStudiesProblemData[index].title = e.target.value;
            }

            if (name === "description") {
                caseStudiesProblemData[index].description = e.target.value;

            }

            setcaseStudiesProblemData([...caseStudiesProblemData]);
            setFieldValue(`caseStudiesproblem[${index}].${name}`, value);
        }
        // console.log("e", e.target.name)
    }
    const SolutioninputhandleChange = (e, name, index, setFieldValue) => {
        const { value } = e.target;

        if (name) {
            if (name === "title") {
                caseStudiesSolutionData[index].title = e.target.value;
            }

            if (name === "description") {
                caseStudiesSolutionData[index].description = e.target.value;

            }

            setcaseStudiesSolutionData([...caseStudiesSolutionData])
        }
        setFieldValue(`caseStudiessolution[${index}].${name}`, value);
        // console.log("e", e.target.name)
    }
    const cancelDelete = () => {
        setDeleteModalOpen(false);
    };
    const handleDeleteResultClick = (index, moduleName) => {
        setDeleteRecoedName(moduleName)
        setResultToDeleteIndex(index);
        setDeleteModalOpen(true);
    };
    // Function to handle auto-resizing
    const handleAutoResize = (e) => {
        e.target.style.height = 'auto'; // Reset height
        e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
    };

    const deleteRecord = () => {
        if (deleteRecoedName === "result") {
            deleteResult(resultToDeleteIndex);
            setDeleteModalOpen(false);
            setDeleteRecoedName(null);
        } else if (deleteRecoedName === "solution") {
            deleteSolution(resultToDeleteIndex);
            setDeleteModalOpen(false);
            setDeleteRecoedName(null);
        } else if (deleteRecoedName === "Problem") {
            console.log('delete');
            deleteProblem(resultToDeleteIndex);
            setDeleteModalOpen(false);
            setDeleteRecoedName(null);
        }
    }

    const fileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isValidFileType = validFileTypes.includes(file.type);
            if (!isValidFileType) {
                setCaseStudyTitleImageurlError('Please upload a valid image file (jpg, jpeg, png).');
                return;
            }
            if (file.size < 500000 && isValidFileType) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result;
                    setCaseStudyTitleImageurl(base64String);
                    setCaseStudyTitleImageurlError(null);
                };
                reader.readAsDataURL(file);
            } else {
                console.log("big file")

                setCaseStudyTitleImageurl(null);
                setCaseStudyTitleImageurlError("Image size should be less than 500 KB.");
            }
        }
    }
    const SolutionfileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isValidFileType = validFileTypes.includes(file.type);
            if (!isValidFileType) {
                setCaseStudySolutionImageError('Please upload a valid image file (jpg, jpeg, png).');
                return;
            }
            if (file.size < 500000 && isValidFileType) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result;
                    setCaseStudySolutionImageurl(base64String);
                    setCaseStudySolutionImageError(null);
                };
                reader.readAsDataURL(file);
            } else {
                console.log("big file")

                setCaseStudySolutionImageurl(null);
                setCaseStudySolutionImageError("Image size should be less than 500 KB.");
            }
        }
    }
    const ResultfileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const isValidFileType = validFileTypes.includes(file.type);
            if (!isValidFileType) {
                setCaseStudyResultImageError('Please upload a valid image file (jpg, jpeg, png).');
                return;
            }
            if (file.size < 500000 && isValidFileType) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result;
                    setCaseStudyResultImageurl(base64String);
                    setCaseStudyResultImageError(null);
                };
                reader.readAsDataURL(file);
            } else {
                console.log("big file")

                setCaseStudyResultImageurl(null);
                setCaseStudyResultImageError("Image size should be less than 500 KB.");
            }
        }
    }

    const validationSchema = Yup.object().shape({
        CaseStudyTitle: Yup.string().required('Title is required').min(10, 'Title is too short'),
        CaseStudyTitleDetail: Yup.string().required('Detail is required').min(20, 'Detail is too short'),
        CaseStudyProblem: Yup.string().required('Problem is required').min(10, 'Problem is too short'),
        caseStudiesproblem: Yup.array().of(
            Yup.object().shape({
                title: Yup.string().required('Problem title is required').min(10, 'Problem Title is too short'),
                description: Yup.string().required('Problem description is required').min(20, 'Problem Detail is too short'),
            })
        ),
        CaseStudySolution: Yup.string().required('Solution is required').min(10, 'Solution is too short'),
        CaseStudyResults: Yup.string().required('Results are required').min(10, 'Results are too short'),
        caseStudiessolution: Yup.array().of(
            Yup.object().shape({
                title: Yup.string().required('solution title is required').min(10, 'solution Title is too short'),
                description: Yup.string().required('solution description is required').min(20, 'solution Detail is too short'),
            })
        ),
        CaseStudySummary: Yup.string().required('Summary is required').min(30, 'Summary is too short'),
        caseStudiesresult: Yup.array().of(
            Yup.object().shape({
                title: Yup.string().required('result title is required').min(10, 'result Title is too short'),
                description: Yup.string().required('result description is required').min(20, 'result Detail is too short'),
            })
        ),
    });

    const toggalModal = () => {
        setResponse(!response);
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        CaseStudyTitle: '',
                        CaseStudyTitleImage: CaseStudyTitleImageurl,
                        CaseStudyTitleDetail: '',
                        CaseStudyProblem: '',
                        caseStudiesproblem: caseStudiesProblemData,
                        CaseStudySolution: '',
                        CaseStudySolutionImage: CaseStudySolutionImageurl,
                        CaseStudyResults: '',
                        caseStudiessolution: caseStudiesSolutionData,
                        CaseStudyResultsImage: CaseStudyResultImageurl,
                        CaseStudySummary: '',
                        caseStudiesresult: caseStudiesResultsData,
                    }}

                validationSchema={validationSchema}
                validate={(values) => {
                    const errors = {};
                    if (!CaseStudyTitleImageurl) {
                        setCaseStudyTitleImageurlError("Case Study image is Required.");
                    }
                    if (!CaseStudySolutionImageurl) {
                        setCaseStudySolutionImageError("Case Study Solution image is Required.");
                    }

                    if (!CaseStudyResultImageurl) {
                        setCaseStudyResultImageError("Case Study results image is Required.");
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    console.log("CaseStudyTitleImageurl", values)
                    const allData = {
                        CaseStudyTitle: values.CaseStudyTitle,
                        CaseStudyTitleImage: CaseStudyTitleImageurl,
                        CaseStudyTitleDetail: values.CaseStudyTitleDetail,
                        caseStudiesproblemStatement: {
                            caseStudyProblem: values.CaseStudySolution,
                            caseStudiesproblemPoint: caseStudiesProblemData
                        },
                        caseStudiesResultsStatement: {
                            CaseStudyResults: values.CaseStudyResults,
                            CaseStudyResultsImage: CaseStudyResultImageurl,
                            caseStudiesresultPoint: caseStudiesResultsData
                        },
                        caseStudiesSolutionStatement: {
                            CaseStudySolution: values.CaseStudySolution,
                            CaseStudySolutionImage: CaseStudySolutionImageurl,
                            caseStudiessolutionPoint: caseStudiesSolutionData
                        },
                        CaseStudySummary: values.CaseStudySummary
                    };
                    console.log("caseStudiesResultsData0", caseStudiesResultsData)
                    console.log('s', allData);
                    const strigifyData = JSON.stringify(allData);
                    // alert(strigifyData);
                    setTimeout(() => {
                        // actions.setSubmitting(false);
                        actions.resetForm();
                        setCaseStudyTitleImageurl(null);
                        setCaseStudySolutionImageurl(null);
                        setCaseStudyResultImageurl(null);
                        setcaseStudiesResultsData([{
                            title: "",
                            description: ""
                        }]);
                        setcaseStudiesProblemData([{
                            title: "",
                            description: ""
                        }]);
                        setcaseStudiesSolutionData([{
                            title: "",
                            description: ""
                        }])
                    }, 1);
                    toggalModal();
                }}
            >
                {({ handleChange, values, errors, touched, setFieldValue }) => (
                    <Form className='form'>
                        <h1>Add Case Study</h1>
                        <label >Enter Youer Title :</label>
                        <Field
                            type="text"
                            name="CaseStudyTitle"
                            className='CaseStudyTitle'
                            onChange={handleChange}
                            value={values.CaseStudyTitle} />
                        {errors.CaseStudyTitle && touched.CaseStudyTitle && <span className='error'>{errors.CaseStudyTitle}</span>}

                        <label >upload an image to enhance the impactful of your title :</label>
                        {/* {errors.CaseStudyTitleImage && touched.CaseStudyTitleImage && <span className='error'>{errors.CaseStudyTitleImage}</span>} */}
                        <div className='userInputImageDiv'>
                            <input hidden
                                ref={SolutionfileRef}
                                name="CaseStudyTitleImage"
                                type="file"
                                id="user-image"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e) => fileUploadFolderHandle(e)}
                                action="image/*" >

                            </input>
                            <button type="button" className='UserInputImageButton' onClick={() => { SolutionfileRef.current.click() }}>Uplode image</button>


                            {
                                CaseStudyTitleImageurl && <div className='user-img'>
                                    <img src={CaseStudyTitleImageurl} alt="images" title='user image' width="100px" height="100px" />
                                </div>
                            }
                        </div>

                        {<span className='error'>{!CaseStudyTitleImageurl && CaseStudyTitleImageurlError ? CaseStudyTitleImageurlError : null}</span>}

                        <label>enter the company's background or its strengths :</label>
                        <Field
                            as="textarea"
                            name="CaseStudyTitleDetail"
                            className='CaseStudyTitleDetail'
                            onInput={handleAutoResize} />

                        {errors.CaseStudyTitleDetail && touched.CaseStudyTitleDetail && <span className='error'>{errors.CaseStudyTitleDetail}</span>}

                        <h2>Company information</h2>
                        <div className='Company-information of-Problem'>
                            <h3>enter youer problem you face while running the company</h3>
                            <Field
                                type="text"
                                name="CaseStudyProblem"
                                className='CaseStudyProblem'
                                onChange={handleChange}
                                placeholder="write  your problem here"
                                value={values.CaseStudyProblem} />

                            {errors.CaseStudyProblem && touched.CaseStudyProblem && <span className='error'>{errors.CaseStudyProblem}</span>}

                            {
                                caseStudiesProblemData.map((item, index) => {
                                    return (
                                        <div className='input_fields' key={index + 1}>
                                            <div className='heading-input-fields'>
                                                <h4>Problem {index + 1}</h4>
                                                {caseStudiesProblemData.length > 1 ?

                                                    <i className="fa fa-trash-o fa-lg" id='delete_icone' onClick={() => handleDeleteResultClick(index, "Problem")}>
                                                    </i>
                                                    : null
                                                }
                                            </div>
                                            <label >enter your Problem title :</label>
                                            {console.log("errors", errors)}


                                            <Field
                                                type="text"
                                                name={`caseStudies[${index}].title`}
                                                className='CaseStudyProblemTitle'
                                                placeholder="write  your results title here"
                                                onChange={(e) => ProbleminputhandleChange(e, "title", index, setFieldValue)}
                                                value={item?.title} />

                                            {errors.caseStudiesproblem?.[index]?.title && touched.caseStudiesproblem?.[index]?.title && (
                                                <span className="error">{errors.caseStudiesproblem[index].title}</span>
                                            )}
                                            <label>enter your Problem in detail : </label>
                                            <Field
                                                as="textarea"
                                                name={`caseStudies[${index}].description`}
                                                className='CaseStudyProblemTitleDetail'
                                                placeholder="write  your results detail here..."
                                                onChange={(e) => ProbleminputhandleChange(e, "description", index, setFieldValue)}
                                                value={item?.description} />

                                            {errors.caseStudiesproblem?.[index]?.description && touched.caseStudiesproblem?.[index]?.description && (
                                                <span className="error">{errors.caseStudiesproblem[index].description}</span>
                                            )}
                                        </div>
                                    )
                                })
                            }
                            {caseStudiesProblemData.length < 3 ?
                                <button type='button' onClick={() => addCaseStudiesProblemData(setFieldValue)} title='add Problem' className='add_button'>
                                    <img src="./images/faq/plus.png" alt="add icone" /> Problem
                                </button> : null}
                        </div>
                        <div className='Company-information of-Solution'>
                            <h3>enter a solution to a problem you face while running a company</h3>
                            <Field
                                type="text"
                                name="CaseStudySolution"
                                className='CaseStudySolution'
                                onChange={handleChange}
                                placeholder="write  your solution here"
                                value={values.CaseStudySolution} />

                            {errors.CaseStudySolution && touched.CaseStudySolution && <span className='error'>{errors.CaseStudySolution}</span>}

                            <label >upload an image to Display your solution :</label>
                            <div className='userInputImageDiv'>
                                <input hidden
                                    ref={fileRef}
                                    name="CaseStudySolutionImage"
                                    type="file"
                                    id="user-image"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={(e) => SolutionfileUploadFolderHandle(e)}
                                    action="image/*" >

                                </input>
                                <button type="button" className='UserInputImageButton' onClick={() => { fileRef.current.click() }}>Uplode image</button>
                                {
                                    CaseStudySolutionImageurl && <div className='user-img'>
                                        <img src={CaseStudySolutionImageurl} alt="images" title='user image' width="100px" height="100px" />
                                    </div>
                                }
                            </div>

                            {<span className='error'>{!CaseStudySolutionImageurl && CaseStudySolutionImageError ? CaseStudySolutionImageError : errors.CaseStudySolutionImage}</span>}

                            {
                                caseStudiesSolutionData.map((item, index) => {
                                    return (
                                        <div className='input_fields' key={index}>
                                            <div className='heading-input-fields'>
                                                <h4>solution {index + 1}</h4>
                                                {caseStudiesSolutionData.length > 1 ?

                                                    <i className="fa fa-trash-o fa-lg" id='delete_icone' onClick={() => handleDeleteResultClick(index, "solution")}>
                                                    </i>
                                                    : null
                                                }
                                            </div>
                                            <label >enter your solution title :</label>
                                            <Field
                                                type="text"
                                                name={`caseStudies[${index}].title`}
                                                className='CaseStudysolutionTitle'
                                                placeholder="write  your solution title here"
                                                onChange={(e) => SolutioninputhandleChange(e, "title", index, setFieldValue)}
                                                value={item?.title} />
                                            {errors.caseStudiessolution?.[index]?.title && touched.caseStudiessolution?.[index]?.title && (
                                                <span className="error">{errors.caseStudiessolution[index].title}</span>
                                            )}
                                            <label>enter your solution in detail : </label>
                                            <Field
                                                as="textarea"
                                                name={`caseStudies[${index}].description`}
                                                className='CaseStudysolutionTitleDetail'
                                                placeholder="write  your solution detail here..."
                                                onChange={(e) => SolutioninputhandleChange(e, "description", index, setFieldValue)}
                                                value={item?.description} />

                                            {errors.caseStudiessolution?.[index]?.description && touched.caseStudiessolution?.[index]?.description && (
                                                <span className="error">{errors.caseStudiessolution[index].description}</span>
                                            )}
                                            {/* <input type='text' name="title" placeholder='Enter Title' value={item?.title} onChange={(e) => inputhandleChange(e, "title", index)} /> */}
                                            {/* <textarea placeholder='Enter Details' name='description' value={item?.description} onChange={(e) => inputhandleChange(e, "description", index)} /> */}
                                        </div>
                                    )
                                })
                            }
                            {caseStudiesSolutionData.length < 3 ?
                                <button type='button' onClick={() => addCaseStudiesSolutionData(setFieldValue)} title='add Problem' className='add_button'>
                                    <img src="./images/faq/plus.png" alt="add icone" /> solution
                                </button> : null}
                        </div>
                        <div className='Company-information of-Results'>
                            <h3>enter the results of your solution</h3>
                            <Field
                                type="text"
                                name="CaseStudyResults"
                                className='CaseStudyResults'
                                onChange={handleChange}
                                placeholder="write  your results here"
                                value={values.CaseStudyResults} />

                            {errors.CaseStudyResults && touched.CaseStudyResults && <span className='error'>{errors.CaseStudyResults}</span>}

                            <label >Upload an image displaying your results :</label>
                            <div className='userInputImageDiv'>
                                <input hidden
                                    ref={ResultfileRef}
                                    name="CaseStudyResultsImage"
                                    type="file"
                                    id="user-image"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={(e) => ResultfileUploadFolderHandle(e)}
                                    action="image/*"
                                >

                                </input>
                                <button type="button" className='UserInputImageButton' onClick={() => { ResultfileRef.current.click() }}>Uplode image</button>
                                {
                                    CaseStudyResultImageurl && <div className='user-img'>
                                        <img src={CaseStudyResultImageurl} alt="images" title='user image' width="100px" height="100px" />
                                    </div>
                                }
                            </div>
                            {<span className='error'>{!CaseStudyResultImageurl && CaseStudyResultImageError ? CaseStudyResultImageError : errors.CaseStudyResultsImage}</span>}

                            {
                                caseStudiesResultsData.map((item, index) => {
                                    return (
                                        <div className='input_fields' key={index + 1}>
                                            <div className='heading-input-fields'>
                                                <h4>Result {index + 1}</h4>
                                                {caseStudiesResultsData.length > 1 ?

                                                    <i className="fa fa-trash-o fa-lg" id='delete_icone'
                                                        onClick={() => handleDeleteResultClick(index, "result")}>
                                                    </i>
                                                    : null
                                                }
                                            </div>
                                            <label >enter your results title :</label>
                                            <Field
                                                type="text"
                                                name={`caseStudies[${index}].title`}
                                                className='CaseStudyResultsTitle'
                                                placeholder="write  your results title here"
                                                onChange={(e) => ResultinputhandleChange(e, "title", index, setFieldValue)}
                                                value={item?.title} />

                                            {errors.caseStudiesresult?.[index]?.title && touched.caseStudiesresult?.[index]?.title && (
                                                <span className="error">{errors.caseStudiesresult[index].title}</span>
                                            )}


                                            <label>enter your results in detail : </label>
                                            <Field
                                                as="textarea"
                                                name={`caseStudies[${index}].description`}
                                                className='CaseStudyResultsTitleDetail'
                                                placeholder="write  your results detail here..."
                                                onChange={(e) => ResultinputhandleChange(e, "description", index, setFieldValue)}
                                                value={item?.description} />
                                            {errors.caseStudiesresult?.[index]?.description && touched.caseStudiesresult?.[index]?.description && (
                                                <span className="error">{errors.caseStudiesresult[index].description}</span>
                                            )}
                                        </div>
                                    )
                                })
                            }
                            {caseStudiesResultsData.length < 3 ?
                                <button type='button' onClick={() => addCaseStudiesResultData(setFieldValue)} title='add Results' className='add_button'>
                                    <img src="./images/faq/plus.png" alt="add icone" /> Result
                                </button> : null}
                        </div>
                        <label className='summary'>enter your caseStudy Summary</label>
                        <Field
                            as="textarea"
                            name="CaseStudySummary"
                            className="CaseStudySummary"
                            placeholder="write your summary here...."
                            onInput={handleChange}
                        ></Field>

                        {errors.CaseStudySummary && touched.CaseStudySummary && <span className='error'>{errors.CaseStudySummary}</span>}

                        <button type="submit">Add Casestudy</button>
                    </Form>
                )}
            </Formik >
            <section className='cancel_Modal'>
                <Modal
                    show={deleteModalOpen}
                    onHide={cancelDelete}
                    aria-labelledby="ModalHeader"
                >
                    <Modal.Header >
                        <Modal.Title id='ModalHeader'>
                            <h2>Confirm Deletion </h2>
                            <button className='btn_close_icon' type='button'>
                                <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} onClick={() => cancelDelete()} />
                            </button>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Are you sure you want to delete this {deleteRecoedName}?</h2>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className='schedule_form_button'>
                            <button className='btn btn-default' onClick={() => cancelDelete()}>Cancel</button>
                            <button className='btn btn-primary' onClick={() => deleteRecord()} >
                                Confirm
                            </button>
                        </div>

                    </Modal.Footer>
                </Modal>
            </section>
            <div className='user-response'>
                <AddCaseStudyBaseResponseModal open={response} toggalModal={toggalModal} />
            </div>
        </>
    )
}

export default AddCaseStudy
