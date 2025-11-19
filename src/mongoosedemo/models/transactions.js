// models/Transaction.js
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  txnId: { type: String, required: true, unique: true, trim: true },
  accountId: { type: String, required: true, trim: true },
  type: { type: String, enum: ['Credit', 'Debit'], required: true },
  amount: { type: Number, required: true, min: 0 },
  currency: { type: String, enum: ['INR', 'USD', 'EUR'], required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['SUCCESS', 'FAILED', 'PENDING'], default: 'PENDING' },
  channel: { type: String, enum: ['MobileBanking', 'NetBanking', 'ATM', 'Branch'], required: true },
  remarks: { type: String, maxlength: 200 },
  address: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
  },
  tags: {
    type: [String],
    validate: {
      validator: arr => arr.length <= 5,
      message: 'Maximum 5 tags allowed'
    }
  }
}, { timestamps: true });

export const Transaction = mongoose.model('Transaction', transactionSchema);
