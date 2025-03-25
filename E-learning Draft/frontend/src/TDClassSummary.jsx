import './App.css';
import { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function TDClassSummary() {
   
     const [section, setSection] = useState('A');
   
     const handleSectionChange = (event) => {
       setSection(event.target.value);
     };
   
     return (
       <div className="dashboard-container">
         {/* Sidebar */}
         <div className="sidebar">
           <div className="logo">LOGO <span>SciQuest</span></div>
           <ul>
             <li>Number of students</li>
            <li>
               Chapter Progress</li>
               <li>
               <ul>
                 <li>Student Progress</li>
                 <li>Feedback Analytics</li>
               </ul>
             </li>
             <li>Leaderboard</li>
             <li>Student Performance</li>
           </ul>
         </div>
   
         {/* Main Content */}
         <div className="main-content">
           <div className="header">
             <input type="text" placeholder="🔍 Search Student's Name" className="search-bar" />
   
             {/* Section Dropdown */}
             <FormControl className="section-dropdown">
               <InputLabel>Section</InputLabel>
               <Select value={section} onChange={handleSectionChange}>
                 <MenuItem value="Section A">A</MenuItem>
                 <MenuItem value="Section B">B</MenuItem>
               </Select>
             </FormControl>
           </div>
   
           {/* Table */}
           <div className="table-container">
             <table>
               <thead>
                 <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                 </tr>
               </thead>
               <tbody>
                 {[...Array(5)].map((_, index) => (
                   <tr key={index}>
                     <td className="placeholder"></td>
                     <td className="placeholder"></td>
                   </tr>
                 ))}
               </tbody>
             </table>
             <div className="pagination">
               <span>0 of 5 row(s)</span>
               <div>
                 <button className="prev-btn">Previous</button>
                 <button className="next-btn">Next</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }

export default TDClassSummary;
