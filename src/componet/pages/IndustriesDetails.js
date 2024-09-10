import React, { useEffect, useState } from 'react';
import '../../styles/pages_Styles/industriesDetails.css'
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import axios from 'axios'

function IndustriesDetails() {

  const [userData, setUserData] = useState(null);
  const [industriesDeleteData, setIndustriesDeleteData] = useState([])
  const [userDelete, setUserDelete] = useState(false);
  const [industriesDeleteName, setIndustriesDeleteName] = useState(null);
  const [openDescription, setOpenDescription] = useState(0)

  console.log(userData)

  useEffect(() => {
    getindustriesdetails();
  }, [])

  const getindustriesdetails = async () => {
    const userDetails = await fetch("http://localhost:5000/api/display", {
      method: "GET",
    })

    const data = await userDetails.json();
    setUserData(data);
  }


  const industriesDeleteModalClose = () => {
    setUserDelete(!userDelete);
  }

  const userIndustriesDelete = (userDeleteId) => {
    industriesDataDelete(userDeleteId);
    setUserDelete(!userDelete);
  }

  const deleteData = (name, id) => {
    setIndustriesDeleteName(name)
    setUserDelete(!userDelete);
    setIndustriesDeleteData(id);
  }

  const industriesDataDelete = async (id) => {
    console.log(id)
    const formData = {
      "id": id
    }
    try {
      const response = await axios.post('http://localhost:5000/api/delete', formData, {
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
        },
      });
      getindustriesdetails();
      console.log('Image delete successfully:', response.data);
    } catch (error) {
      console.error('Error delete image:', error);
    }

  };


  return (
    <section className='industries_details'>
      <div className='industries'>
        <h2>industries details</h2>
        <div className='industries_data'>
          <div className='inner_industries_data_div'>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>image</th>
                  <th>industriesName</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData && userData.length > 0 ?

                    userData.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ width: "50px" }}>{index + 1}</td>
                          <td style={{ width: "100px" }}>
                            <div className='industries_image' >
                              <img
                                src={`http://localhost:5000/public/image/${data?.indestryImage}`}
                                alt={data.title}
                                width={30}
                                height={30}
                              />
                            </div>
                          </td>
                          <td onClick={() => { setOpenDescription(index) }}>
                            <div className={`industries_detail_data ${openDescription === index ? 'open' : 'close '}`} >
                              <h3>{data?.title}</h3>
                              <p> {data?.description} </p>
                            </div>
                          </td>
                          <td style={{ width: "123px" }}>
                            {moment(data?.date).format("DD-MMM-YYYY")}
                          </td>
                          <td className='delete_button'>
                            <button
                              onClick={() => deleteData(data?.title, data?._id)}>
                              <img
                                src="./images/useruserdetails/delete.png"
                                alt="delete icone"
                                className='delete_image'
                                width={20}
                                height={20} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                    :
                    <tr>
                      <td >no appointment</td>
                    </tr>
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='delete-modal'>
        <Modal
          show={userDelete}
          onHide={industriesDeleteModalClose}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header >
            <Modal.Title id='ModalHeader'>
              <h2>Confirm Deletion </h2>
              <button className='btn_close_icon' type='button'>
                <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} onClick={() => industriesDeleteModalClose()} />
              </button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Are you sure you want to remove this industries,{industriesDeleteName}  </h2>
          </Modal.Body>
          <Modal.Footer>
            <div className='schedule_form_button'>
              <button className='btn btn-delete-cansel' onClick={() => industriesDeleteModalClose()}>Cancel</button>
              <button className='btn btn-delete' onClick={() => userIndustriesDelete(industriesDeleteData)} >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  )
}

export default IndustriesDetails
