/*import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 16 },
  enrolled: { type: Boolean, default: false }
}, { timestamps: true });

export const Student = mongoose.model('Student', studentSchema);
*/

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name must be at least 3 characters long"],
    validate: {
      validator: function (v) {
        // Only allow alphabetic names
        return /^[A-Za-z\s]+$/.test(v);
      },
      message: props => `${props.value} is not a valid name (letters only)`
    }
  },
  age: {
    type: Number,
    required: true,
    min: [18, "Age must be at least 18"],
    max: [60, "Age must be less than 60"]
  },
  enrolled: { type: Boolean, default: false }
}, { timestamps: true });



export const Student = mongoose.model("Student", studentSchema);


