// // src/components/ApplicationsTable.js
// import React from 'react';
// import '../styles/ApplicationsTable.css';

// const ApplicationsTable = () => {
//   const applications = [
//     { id: 1, name: 'John Doe', age: 25, location: 'New York', mobile: '+1 123 456 7890', role: 'Intern', stipend: '$500', status: 'Pending' },
//     { id: 2, name: 'Jane Smith', age: 28, location: 'California', mobile: '+1 987 654 3210', role: 'Junior Developer', stipend: '$1000', status: 'Accepted' },
//     { id: 3, name: 'Sam Wilson', age: 30, location: 'Texas', mobile: '+1 555 666 7777', role: 'Software Engineer', stipend: '$1500', status: 'Rejected' },
//   ];

//   const handleStatusChange = (id, status) => {
//     console.log(`Changed status of application ${id} to ${status}`);
//   };

//   return (
//     <div className="applications-table">
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Location</th>
//             <th>Mobile</th>
//             <th>Role</th>
//             <th>Stipend</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.name}</td>
//               <td>{app.age}</td>
//               <td>{app.location}</td>
//               <td>{app.mobile}</td>
//               <td>{app.role}</td>
//               <td>{app.stipend}</td>
//               <td>
//                 <select 
//                   value={app.status} 
//                   onChange={(e) => handleStatusChange(app.id, e.target.value)}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="Accepted">Accepted</option>
//                   <option value="Rejected">Rejected</option>
//                 </select>
//               </td>
//               <td>
//                 <button onClick={() => handleStatusChange(app.id, 'Accepted')}>Accept</button>
//                 <button onClick={() => handleStatusChange(app.id, 'Rejected')}>Reject</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ApplicationsTable;
