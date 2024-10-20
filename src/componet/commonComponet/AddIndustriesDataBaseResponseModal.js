import React from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function AddIndustriesDataBaseResponseModal(props) {

    const { open, toggalModal, modalContent, industriesName } = props;

    const navigate = useNavigate();

    const riderect = () => {
        if (modalContent === "Industry already exists") {
        } else {
            navigate("/Home")
        }

    }

    return (
        <div>
            <Modal
                show={open}
                onHide={toggalModal}
                aria-labelledby="ModalHeader"
            >
                <Modal.Header >
                    <Modal.Title id='ModalHeader'>
                        <h2>{modalContent}</h2>
                        <button className='btn_close_icon' type='button'>
                            <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} onClick={() => toggalModal()} />
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        modalContent === "Industry already exists" ?
                            (
                                <div className='response_description'>
                                    <div className='response-image' style={{ textAlign: "center", marginTop: "-40px" }}>
                                        <img src="./images/responseicone/cancel-icon-design.png" alt="canse-img" width={150} height={160} />
                                    </div>
                                    <h2>This industry {industriesName} has been already  submitted.</h2>
                                </div>
                            )
                            :
                            (
                                <div className='response_description'>
                                    <div className='response-image' style={{ textAlign: "center", marginTop: "-40px" }}>
                                        <img src="./images/responseicone/check.png" alt="canse-img" width={150} height={160} />
                                    </div>
                                    <h2>This industry name,  {industriesName} was successfully entered into the database.</h2>
                                </div>
                            )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className='schedule_form_button btn_ok'>
                        <button className='btn btn-default' onClick={() => riderect()}>ok</button>
                    </div>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddIndustriesDataBaseResponseModal
