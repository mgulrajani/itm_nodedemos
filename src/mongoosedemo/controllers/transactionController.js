import { Transaction } from '../models/transactions.js';

export const createTransaction = async (req, res) => {
  try {
    const txn = new Transaction(req.body);
    const savedTxn = await txn.save();
    res.status(201).json(savedTxn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const txns = await Transaction.find();
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
