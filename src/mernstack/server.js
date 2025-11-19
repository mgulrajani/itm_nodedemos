import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';    

const app = express();

app.use(cors({origin:'http://localhost:3000',credentials:false})); // Enables CORS for all routes
/* app.use(cors({
    origin: 'http://localhost:3000',   // React dev server
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
  })); */

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/empdata',
{ serverSelectionTimeoutMS: 5000 });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB');
});

// Employee Schema
const employeeSchema = new mongoose.Schema({
id: Number,
name: String,
department: String,
company: String,
city: String
});
const Employee = mongoose.model('Employee', employeeSchema);
  
app.use(bodyParser.json());
// Routes
app.get('/employees', async (req, res) => {
try {
const employees = await Employee.find();
res.json(employees);

} catch (error) {
    res.status(500).json({ message: error.message });
    }
    });
    // Read single employee
    app.get('/employees/:id', async (req, res) => {
    try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
    });
    //create employee
    app.post('/employees', async (req, res) => {
    const employee = new Employee(req.body);
    try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
    });
    // Update employee
    app.put('/employees/:id', async (req, res) => {
    try {
    const employee = await Employee.findByIdAndUpdate(req.params.id,
    req.body, { new: true });
    if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });

}
res.json(employee);
} catch (error) {
res.status(400).json({ message: error.message });
}
});
// Delete employee
app.delete('/employees/:id', async (req, res) => {
try {
const employee = await Employee.findByIdAndDelete(req.params.id);
if (!employee) {
return res.status(404).json({ message: 'Employee not found' });
}
res.json({ message: 'Employee deleted successfully' });
} catch (error) {
res.status(500).json({ message: error.message });
}
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
