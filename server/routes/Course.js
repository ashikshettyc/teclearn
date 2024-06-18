// Import the required modules
const express = require('express');
const router = express.Router();

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  buyCourses,
  getInstructorCourses,
  studentsCourse,
  deleteCourse,
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

router.post('/buyCourse', auth, isStudent, buyCourses);

router.get('/studentsCourse', auth, studentsCourse);
router.delete('/deleteCourse', auth, isInstructor, deleteCourse);
module.exports = router;
