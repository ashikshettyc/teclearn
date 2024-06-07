// Import the required modules
const express = require('express');
const router = express.Router();

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,

  getInstructorCourses,
} = require('../controllers/Course');

// Importing Middlewares
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require('../middlewares/auth');
router.post('/createCourse', auth, isInstructor, createCourse);

// Get all Courses Under a Specific Instructor
router.get('/getInstructorCourses', auth, isInstructor, getInstructorCourses);
// Get all Registered Courses
router.get('/getAllCourses', getAllCourses);
// // Get Details for a Specific Courses
// router.post('/getCourseDetails', getCourseDetails);

module.exports = router;
