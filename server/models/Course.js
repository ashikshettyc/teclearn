const mongoose = require('mongoose');

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String },
  description: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  studentsEnroled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
  ],

  createdAt: { type: Date, default: Date.now },
});

// Export the Courses model
module.exports = mongoose.model('Course', coursesSchema);
