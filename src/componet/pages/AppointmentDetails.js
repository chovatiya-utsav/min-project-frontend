import React, { useEffect, useState } from 'react'
import '../../styles/pages_Styles/appointmentDetails.css'

function AppointmentDetails() {

  const [userData, setUserData] = useState([])

  console.log(userData)

  const deleteData = (id) => {
    console.log(id);
  }

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
                          <td className='delete_button'> <button onClick={() => deleteData(data?.email)}> <img src="./images/useruserdetails/delete.png" alt="delete icone" width={20} height={20} /> </button></td>
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
    </section>
  )
}

export default AppointmentDetails;
