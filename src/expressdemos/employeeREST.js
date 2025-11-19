import express from 'express';
import bodyParser from 'body-parser';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware setup
app.use(bodyParser.json());
// Sample data: employees array
let employees = [
{ id: 1, name: 'Neha Tahilani', city: 'Jaipur' },
{ id: 2, name: 'Tarun Sharma', city: 'delhi' },
{ id: 3, name: 'Manisha Mittal', city: 'Gurugram' },
{ id: 4, name: 'Utkarsh Kumar', city: 'delhi' }  ];

// GET all employees
app.get('/employees', (req, res) => {
    res.json(employees);
    }); 

    app.get('/employees/search', (req, res) => {
        const city = req.query.city;
        console.log(city);

        const results = employees.filter(emp => emp.city.toLowerCase() === city.toLowerCase());
        console.log(results);
        
        res.json(results);
        });
    
// GET employee by ID
app.get('/employees/:id', (req, res) => {
    const empId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === empId);
    if (employee) {
    res.json(employee);
    } else {
    res.status(404).send('Employee not found');
    }
    });
    

// POST create a new employee
app.post('/employees', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
    });
    //{""}
    
// PUT update an existing employee
app.put('/employees/:id', (req, res) => {
    const empId = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === empId);
    if (index !== -1) {
    employees[index] = req.body;
    res.json(employees[index]);
    } else {
    res.status(404).send('Employee not found');
    }
    });
    
// DELETE an employee
app.delete('/employees/:id', (req, res) => {
    const empId = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === empId);     
    if (index !== -1) {     
    const deletedEmployee = employees.splice(index, 1);
    res.json(deletedEmployee[0]);
    } else {
    res.status(404).send('Employee not found');
    }
    });


    //error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    }); 

    //catch-all route for undefined endpoints
app.use((req, res) => {
    res.status(404).send('Endpoint not found');
    });


      

            
        

    
// Start the server
app.listen(PORT, () => {
    console.log(`Employee REST API server running on http://localhost:${PORT}`);
    }); 
