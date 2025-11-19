// app.js
import express from 'express';
import mongoose from 'mongoose';
import transactionRoutes from './routes/transactionRoutes.js';

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/financeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(' MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

// Routes
app.use('/transactions', transactionRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// sample payload for creating a transaction
/*
{
  "txnId": "T1001",
  "accountId": "A5001",
  "type": "Credit",
  "amount": 2500.75,
  "currency": "INR",
  "date": "2025-09-29T10:15:30Z",
  "status": "SUCCESS",
  "channel": "MobileBanking",
  "remarks": "Salary credit",
  "address": {
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India"
  },
  "tags": ["monthly", "salary", "priority"]
}   


*/
