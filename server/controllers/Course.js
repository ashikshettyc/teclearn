const Course = require('../models/Course');

const User = require('../models/User');
const { uploadImageToCloudinary } = require('../utils/imageUploader');

// Function to create a new course
exports.createCourse = async (req, res) => {
  try {
    // Get user ID from request object
    const userId = req.user.id;

    // Get all required fields from request body
    let { courseName, description, price, category } = req.body;
    // Get thumbnail image from request files
    // const thumbnail = req.files.thumbnailImage;
    // Check if any of the required fields are missing
    if (!courseName || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: 'All Fields are Mandatory',
      });
    }

    // Check if the user is an instructor
    const instructorDetails = await User.findById(userId, {
      accountType: 'Instructor',
    });

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: 'Instructor Details Not Found',
      });
    }

    // Upload the Thumbnail to Cloudinary
    // const thumbnailImage = await uploadImageToCloudinary(
    //   thumbnail,
    //   process.env.FOLDER_NAME
    // );
    // console.log(thumbnailImage);
    // Create a new course with the given details
    const newCourse = await Course.create({
      courseName,
      description,
      instructor: instructorDetails._id,
      price,
      category,
      // thumbnail: thumbnailImage.secure_url,
    });

    // Add the new course to the User Schema of the Instructor
    await User.findByIdAndUpdate(
      {
        _id: instructorDetails._id,
      },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    // Return the new course and a success message
    res.status(200).json({
      success: true,
      data: newCourse,
      message: 'Course Created Successfully',
    });
  } catch (error) {
    // Handle any errors that occur during the creation of the course
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create course',
      error: error.message,
    });
  }
};

// Get Course List
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        price: true,
        thumbnail: true,
        instructor: true,
        category: true,
        studentsEnrolled: true,
        description: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: allCourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: `Can't Fetch Course Data`,
      error: error.message,
    });
  }
};

// Get a list of Course for a given Instructor
exports.getInstructorCourses = async (req, res) => {
  try {
    // Get the instructor ID from the authenticated user or request body
    const instructorId = req.user.id;

    // Find all courses belonging to the instructor
    const instructorCourses = await Course.find({
      instructor: instructorId,
    }).sort({ createdAt: -1 });

    // Return the instructor's courses
    res.status(200).json({
      success: true,
      data: instructorCourses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve instructor courses',
      error: error.message,
    });
  }
};
