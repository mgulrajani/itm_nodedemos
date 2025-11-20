import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      console.error("MONGO_URI is not defined!");
      process.exit(1);
    }
    
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error("MongoDB connection error:", error)); 
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
    
