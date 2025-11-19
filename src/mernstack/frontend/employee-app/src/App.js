import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
const [employees, setEmployees] = useState([]);
const [newEmployee, setNewEmployee] = useState({
  id: '',
  name: '',
  department: '',
  company: '',
  city: ''
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  useEffect(() => {
  fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
  try {
  const response = await axios.get(`http://localhost:5000/employees`);
  setEmployees(response.data);
  } catch (error) {
  console.error('Error fetching employees:', error);
  }
  };
  const addEmployee = async () => {
  try {
    console.log(newEmployee);
    console.log('Adding employee...');
  await axios.post(`http://localhost:5000/employees`, newEmployee);
  setNewEmployee({
  id: 0,
  name: '',
  department: '',
  company: '',
  city: ''
  });
  fetchEmployees();
  } catch (error) {
  console.error('Error adding employee:', error);
  }
  };
  const updateEmployee = async () => {
  try {
  await axios.put(`http://localhost:5000/employees/${selectedEmployee.id}`, selectedEmployee);
  setSelectedEmployee(null);
  fetchEmployees();
  } catch (error) {
  console.error('Error updating employee:', error);
  }
  };
  const deleteEmployee = async (id) => {
  try {
  await axios.delete(`http://localhost:5000/employees/${id}`);
  fetchEmployees();
  } catch (error) {
  console.error('Error deleting employee:', error);
  }
  };
  return (
  <div className="App">
  <h1>Employee Management</h1>
  {/* Employee List */}
  <h2>Employees</h2>
  <ul>
  {employees.map((emp) => (
  <li key={emp.id}>
  {emp.name} - {emp.department} - {emp.company} - {emp.city}
  <button onClick={() => setSelectedEmployee(emp)}>Edit</button>
  <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
  </li>
  ))}
  </ul>
  {/* Add New Employee */}
  <h2>Add New Employee</h2> 
  <input
  type="text"
  placeholder="ID"
  value={newEmployee.id}
  onChange={(e) => setNewEmployee({ ...newEmployee, id: e.target.value })}
/>
<input
  type="text"
  placeholder="Name"
  value={newEmployee.name}
  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
/>
<input
  type="text"
  placeholder="Department"
  value={newEmployee.department}
  onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
/>
<input
  type="text"
  placeholder="Company"
  value={newEmployee.company}
  onChange={(e) => setNewEmployee({ ...newEmployee, company: e.target.value })}
/>
<input
  type="text"
  placeholder="City"
  value={newEmployee.city}
  onChange={(e) => setNewEmployee({ ...newEmployee, city: e.target.value })}
/>
<button onClick={addEmployee}>Add Employee</button>
{/* Edit Selected Employee */}
{selectedEmployee && (
<div>
<h2>Edit Employee</h2>
<input
  type="text"
  placeholder="Name"
  value={selectedEmployee.name}
  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, name: e.target.value })}
/>
<input
  type="text"
  placeholder="Department"
  value={selectedEmployee.department}
  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })}
/>
<input
  type="text"
  placeholder="Company"
  value={selectedEmployee.company}
  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, company: e.target.value })}
/>
<input
  type="text"
  placeholder="City"
  value={selectedEmployee.city}
  onChange={(e) => setSelectedEmployee({ ...selectedEmployee, city: e.target.value })}
/>
<button onClick={updateEmployee}>Update Employee</button>
<button onClick={() => setSelectedEmployee(null)}>Cancel</button>
</div>
)}
</div>
);
}
export default App;     