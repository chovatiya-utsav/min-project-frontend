import React from 'react'
import { Modal } from 'react-bootstrap'

const AddCaseStudyBaseResponseModal = (props) => {
    const { open, toggalModal } = props;

    return (
        <div>
            <Modal
                show={open}
                onHide={toggalModal}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header >
                    <Modal.Title id='ModalHeader'>
                        <h2>Case Study successfully submited</h2>
                        <button className='btn_close_icon' type='button'>
                            <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} onClick={() => toggalModal()} />
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='response_description'>
                        <div className='response-image' style={{ textAlign: "center", marginTop: "-40px" }}>
                            <img src="./images/responseicone/check.png" alt="canse-img" width={150} height={160} />
                        </div>
                        <h2>Case Study, was successfully entered into the database.</h2>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='schedule_form_button btn_ok'>
                        <button className='btn btn-default' onClick={() => toggalModal()}>ok</button>
                    </div>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddCaseStudyBaseResponseModal
