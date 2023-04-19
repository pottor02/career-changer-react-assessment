import Navbar from './navbar'
import { useState } from 'react';


const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [choices, setChoices] = useState()

  

  let showChoices;
  if (choices === 'User') {
    showChoices = <h1>Home - User Sector</h1>;
  } else if (choices === 'Admin') {
    showChoices = <h1>Home - Admin Sector</h1>;
  } else {
    showChoices = <h1>React - Assessment</h1>;
  }


  return (
    <div>
      <Navbar />

        {/* HEADER */}
        <div className='homehead'>

          <h1>Generation Thailand</h1>
          { showChoices }
        </div>

        {/* BUTTON */}
        <div className='homebutton'>
          <button onClick={() => setChoices('User')}>User Home Sector</button>
          <button onClick={() => setChoices('Admin')}>Admin Home Sector</button>
        </div>
        <br /><br />

        {/* <div>
        if (role === user) {
          <p>USERRRRRRRR</p>
        } else {
          <p>ADMINNNNNN</p>
        }
        </div> */}


        {/* START - USER SECTOR */}
        <table>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
        </tr>
        <tr>
            <td>DATA-NAME</td>
            <td>DATA-Last</td>
            <td>DATA-Position</td>
        </tr>
        </table>
        {/* END - USER SECTOR */}


        {/* START - ADMIN SECTOR */}
        <h3>Create User Here</h3>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="text" placeholder='Position'/>
        <button>SAVE</button>


        <table>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>DATA-NAME</td>
            <td>DATA-Last</td>
            <td>DATA-Position</td>
            <td>DELETE</td>
        </tr>
        </table>
        {/* END - ADMIN SECTOR */}










    </div>
  )
}



export default Home
