import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
         

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './App.css';

// // function App() {
// //   const [name, setName] = useState('');
// //   const [addresses, setAddresses] = useState([
// //     { addressLine1: '', city: '', state: '', postalCode: '' },
// //     { addressLine1: '', city: '', state: '', postalCode: '' }
// //   ]);

// //   const handleAddressChange = (index, field, value) => {
// //     const newAddresses = [...addresses];
// //     newAddresses[index][field] = value;
// //     setAddresses(newAddresses);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:3001/register', {
// //         name,
// //         addresses
// //       });
// //       alert('User registered successfully');
// //     } catch (error) {
// //       console.error('Error registering user', error);
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <h1 className='heading'>User Address Registration</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Name:</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         </div>

// //         <h3>Address 1</h3>
// //         <div>
// //           <label>Address Line 1:</label>
// //           <input
// //             type="text"
// //             value={addresses[0].addressLine1}
// //             onChange={(e) => handleAddressChange(0, 'addressLine1', e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>City:</label>
// //           <input
// //             type="text"
// //             value={addresses[0].city}
// //             onChange={(e) => handleAddressChange(0, 'city', e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>State:</label>
// //           <input
// //             type="text"
// //             value={addresses[0].state}
// //             onChange={(e) => handleAddressChange(0, 'state', e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Postal Code:</label>
// //           <input
// //             type="text"
// //             value={addresses[0].postalCode}
// //             onChange={(e) => handleAddressChange(0, 'postalCode', e.target.value)}
// //             required
// //           />
// //         </div>

// //         <h3>Address 2</h3>
// //         <div>
// //           <label>Address Line 1:</label>
// //           <input
// //             type="text"
// //             value={addresses[1].addressLine1}
// //             onChange={(e) => handleAddressChange(1, 'addressLine1', e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>City:</label>
// //           <input
// //             type="text"
// //             value={addresses[1].city}
// //             onChange={(e) => handleAddressChange(1, 'city', e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>State:</label>
// //           <input
// //             type="text"
// //             value={addresses[1].state}
// //             onChange={(e) => handleAddressChange(1, 'state', e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Postal Code:</label>
// //           <input
// //             type="text"
// //             value={addresses[1].postalCode}
// //             onChange={(e) => handleAddressChange(1, 'postalCode', e.target.value)}
// //           />
// //         </div>

// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [name,setName] = useState('');
//   const [users, setUsers] = useState([]);

//   const [addresses, setAddresses] = useState([
//       { addressLine1: '', city: '', state: '', postalCode: '' },
//       { addressLine1: '', city: '', state: '', postalCode: '' },
//     ]);
  
//     const handleAddressChange = (index, field, value) => {
//       const newAddresses = [...addresses];
//       newAddresses[index][field] = value;
//       setAddresses(newAddresses);
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post('http://localhost:3001/register', {
//           name,
//           addresses,
//         });
//         alert('User registered successfully');
//         // Clear the form after submission
//         setName('');
//         setAddresses([
//           { addressLine1: '', city: '', state: '', postalCode: '' },
//           { addressLine1: '', city: '', state: '', postalCode: '' },
//         ]);
//       } catch (error) {
//         console.error('Error registering user:', error);
//       }
//     };
  
//    // Fetch data from the backend when the component mounts
//    useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/users');
//         setUsers(response.data); // Set the fetched users to state
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="App">
//     <h1>User Registration Form</h1>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>

//       <h3>Address 1</h3>
//       <div>
//         <label>Address Line 1:</label>
//         <input
//           type="text"
//           value={addresses[0].addressLine1}
//           onChange={(e) => handleAddressChange(0, 'addressLine1', e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>City:</label>
//         <input
//           type="text"
//           value={addresses[0].city}
//           onChange={(e) => handleAddressChange(0, 'city', e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>State:</label>
//         <input
//           type="text"
//           value={addresses[0].state}
//           onChange={(e) => handleAddressChange(0, 'state', e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Postal Code:</label>
//         <input
//           type="text"
//           value={addresses[0].postalCode}
//           onChange={(e) => handleAddressChange(0, 'postalCode', e.target.value)}
//           required
//         />
//       </div>

//       <h3>Address 2</h3>
//       <div>
//         <label>Address Line 1:</label>
//         <input
//           type="text"
//           value={addresses[1].addressLine1}
//           onChange={(e) => handleAddressChange(1, 'addressLine1', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>City:</label>
//         <input
//           type="text"
//           value={addresses[1].city}
//           onChange={(e) => handleAddressChange(1, 'city', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>State:</label>
//         <input
//           type="text"
//           value={addresses[1].state}
//           onChange={(e) => handleAddressChange(1, 'state', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Postal Code:</label>
//         <input
//           type="text"
//           value={addresses[1].postalCode}
//           onChange={(e) => handleAddressChange(1, 'postalCode', e.target.value)}
//         />
//       </div>

//       <button type="submit">Register</button>
//     </form>

   
//     <h1>Registered Users and Addresses</h1>

//     {/* Users Table */}
//     <h2>Users</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>User ID</th>
//           <th>Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user._id}>
//             <td>{user._id}</td>
//             <td>{user.name}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//     {/* Addresses Table */}
//     <h2>Addresses</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Address ID</th>
//           <th>User ID</th>
//           <th>Address Line 1</th>
//           <th>City</th>
//           <th>State</th>
//           <th>Postal Code</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) =>
//           user.addresses.map((address) => (
//             <tr key={address._id}>
//               <td>{address._id}</td>
//               <td>{user._id}</td>
//               <td>{address.addressLine1}</td>
//               <td>{address.city}</td>
//               <td>{address.state}</td>
//               <td>{address.postalCode}</td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   </div>
//   );
// }

// export default App;
