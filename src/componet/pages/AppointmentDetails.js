import React, { useEffect, useState } from 'react'
import '../../styles/pages_Styles/appointmentDetails.css'
import { Modal } from 'react-bootstrap'

function AppointmentDetails() {

  const [userData, setUserData] = useState(null);
  const [UserDeleteData, setUserDeleteData] = useState([])
  const [userDelete, setUserDelete] = useState(false);
  const [userDeleteAppointment, setUserDeleteAppointment] = useState(null);
  const [userName, setUserName] = useState([]);

  console.log(userData)

  useEffect(() => {
    getuserdetails();
  }, [])

  const getuserdetails = async () => {
    const userDetails = await fetch("http://localhost:5000/api/displayUser/resive", {
      method: "GET",
    })

    const data = await userDetails.json();
    setUserData(data);
  }


  const userDeleteModalClose = () => {
    setUserDelete(!userDelete);
  }

  const userAppointmentDelete = (userDeleteId) => {
    userDataDelete(userDeleteId);
    setUserDelete(!userDelete);
  }

  const deleteData = (name, id, lastName, firstName) => {
    setUserDeleteAppointment(name)
    setUserDelete(!userDelete);
    setUserDeleteData(id);
    setUserName({
      "lastName": lastName,
      "firstName": firstName
    });
    console.log(userName)
  }

  const userDataDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:5000/api/deleteUserAppointment/delete", {
        method: "POST",
        body: JSON.stringify({
          userid: id,  // Ensure you're sending the correct ID
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const deleteResponse = await response.text();
      console.log(deleteResponse);

      // Optionally refresh the user data after deletion
      getuserdetails();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };



  return (
    <section className='user_appointment_details'>
      <div className='user_details'>
        <h2>user appointment details</h2>
        <div className='user_data'>
          <div className='inner_user_data_div'>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>name</th>
                  <th>email</th>
                  <th>CompanyName</th>
                  <th>TeamSize</th>
                  <th>phoneNo</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData && userData.length > 0 ?

                    userData.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data?.lastName} {data?.firstName}</td>
                          <td>{data?.email}</td>
                          <td> {data?.CompanyName} </td>
                          <td> {data?.TeamSize} </td>
                          <td> {data?.phoneNo} </td>
                          <td className='delete_button'>
                            <button
                              onClick={() => deleteData(data?.email, data?._id, data?.lastName, data?.firstName)}>
                              <img
                                src="./images/useruserdetails/delete.png"
                                alt="delete icone"
                                width={20}
                                height={20} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                    :
                    <tr>
                      <td colSpan="7">no appointment</td>
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
          onHide={userDeleteModalClose}
          aria-labelledby="ModalHeader"
        >
          <Modal.Header >
            <Modal.Title id='ModalHeader'>
              <h2>Confirm Deletion </h2>
              <button className='btn_close_icon' type='button'>
                <img src="./images/faq/plus.png" alt="close icon" width={14} height={14} onClick={() => userDeleteModalClose()} />
              </button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Are you sure you want to remove this appointment's email address,  {userDeleteAppointment}  and client name,{userName?.lastName} {userName?.firstName}  </h2>
          </Modal.Body>
          <Modal.Footer>
            <div className='schedule_form_button'>
              <button className='btn btn-delete-cansel' onClick={() => userDeleteModalClose()}>Cancel</button>
              <button className='btn btn-delete' onClick={() => userAppointmentDelete(UserDeleteData)} >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  )
}

export default AppointmentDetails;
