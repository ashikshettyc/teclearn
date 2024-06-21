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
    const thumbnail = req.files.thumbnail;
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
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    console.log(thumbnailImage);
    // Create a new course with the given details
    const newCourse = await Course.create({
      courseName,
      description,
      instructor: instructorDetails._id,
      price,
      category,
      active: false,
      thumbnail: thumbnailImage.secure_url,
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
        active: true,
      }
    )
      .populate('instructor')
      .exec();
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

// exports.buyCourses = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const courseDetailsArray = req.body;

//     console.log('Received course details:', courseDetailsArray); // Debugging statement

//     // Validate each course in the array
//     for (const courseDetails of courseDetailsArray) {
//       console.log('Processing course:', courseDetails); // Add this line
//       const { courseName, description, price, category } = courseDetails;
//       if (!courseName || !description || !price || !category) {
//         return res.status(400).json({
//           success: false,
//           message: 'Incomplete course details provided',
//           courseDetails,
//         });
//       }
//     }

//     // Check if the user is a student
//     const student = await User.findOne({ _id: userId, accountType: 'Student' });

//     if (!student) {
//       return res.status(404).json({
//         success: false,
//         message: 'Student not found or not a student account',
//       });
//     }

//     // Create a new course
//     const newCourse = new Course({
//       ...courseDetailsArray,
//       studentsEnroled: [userId],
//     });

//     const savedCourse = await newCourse.save();

//     // Update the student's courses
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $addToSet: { courses: savedCourse._id } }, // Using $addToSet to avoid duplicates
//       { new: true }
//     ).populate('courses');
//     //return resonpse
//     res.status(200).json({
//       success: true,
//       data: updatedUser,
//       message: 'Course updated Successfully',
//     });
//   } catch (error) {
//     // Handle any errors that occur during the creation of the course
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to add course',
//       error: error.message,
//     });
//   }
// };

exports.buyCourses = async (req, res) => {
  //get userId
  const userId = req.user.id;
  //get the array of data
  const courseDetails = req.body;
  console.log('the course detail is', courseDetails);
  //validating the details
  if (!courseDetails) {
    return res.status(400).json({
      success: false,
      message: 'no details found',
      courseDetails,
    });
  }
  //for each data send the data to user courses details
  for (let courseId of courseDetails) {
    try {
      const alreadyPresent = await User.findOne({
        _id: userId,
        courses: courseId,
      });
      console.log('they are present', alreadyPresent);
      if (alreadyPresent) {
        return res.status(400).json({
          success: false,
          message: 'course already present',
          alreadyPresent,
        });
      }
      const enrolledCourse = await Course.findOneAndUpdate(
        {
          _id: courseId,
        },
        {
          $push: { studentsEnroled: userId },
        },
        { new: true }
      )
        .populate('studentsEnroled')
        .exec();

      console.log('course Updated', enrolledCourse);
      const enrolledStudent = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            courses: courseId,
          },
        },
        { new: true }
      );
      console.log('Enrolled student: ', enrolledStudent);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: error.message });
    }
  }
};

exports.studentsCourse = async (req, res) => {
  try {
    //get userId
    const userId = req.user.id;
    //validate user
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'user not present',
      });
    }
    //fetch all courses for that id
    const studentsCourse = await User.findById({ _id: userId })
      .populate('courses')
      .exec();

    console.log(studentsCourse);
    return res.status(200).json({
      success: true,
      message: 'All courses of student retrived',
      studentsCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: ('cannot retrieve students course', error),
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const courseDetails = req.body._id;
    console.log('the id is this one', courseDetails);

    const deleteCourse = await Course.findOneAndDelete({
      courseDetails,
    });
    console.log('this is the course deleted', deleteCourse);

    if (!deleteCourse) {
      return res.status(400).json({
        success: false,
        message: 'course not found to delete',
        deleteCourse,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'course deleted',
      deleteCourse,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: ('cannot delete course', error),
    });
  }
};
