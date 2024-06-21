import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../../../services/operations/CourseDetailsAPI';
import toast from 'react-hot-toast';

function AddInstructorCourse() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    price: '',
    category: '',
  });

  function onChangeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function onFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  const { courseName, description, price, category } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('courseName', formData.courseName);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('thumbnail', selectedFile);
    data.append('user', JSON.stringify(user));

    await addCourse(data, token);
    setFormData({
      courseName: '',
      description: '',
      price: '',
      category: '',
    });
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Course created');
  };

  return (
    <div className="flex justify-center w-screen">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] space-y-8 rounded-lg p-8 border border-gray-500 bg-slate-800 text-white my-10 shadow-lg"
      >
        <label>
          <p className="text-sm text-gray-300 mb-2">
            Course Title<sup className="text-red-500">*</sup>
          </p>
          <input
            className="form-style w-full p-2 rounded-md bg-gray-700 text-white mb-4 border border-gray-600 focus:outline-none focus:border-yellow-500"
            type="text"
            name="courseName"
            placeholder="Enter course title"
            value={courseName}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <p className="text-sm text-gray-300 mb-2">
            Course Description<sup className="text-red-500">*</sup>
          </p>
          <textarea
            className="form-style w-full p-2 rounded-md bg-gray-700 text-white mb-4 border border-gray-600 focus:outline-none focus:border-yellow-500"
            placeholder="Enter Description"
            name="description"
            value={description}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <p className="text-sm text-gray-300 mb-2">
            Price<sup className="text-red-500">*</sup>
          </p>
          <input
            className="form-style w-full p-2 rounded-md bg-gray-700 text-white mb-4 border border-gray-600 focus:outline-none focus:border-yellow-500"
            type="number"
            name="price"
            value={price}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <p className="text-sm text-gray-300 mb-2">
            Category<sup className="text-red-500">*</sup>
          </p>
          <select
            className="form-style w-full p-2 rounded-md bg-gray-700 text-white mb-4 border border-gray-600 focus:outline-none focus:border-yellow-500"
            name="category"
            value={category}
            onChange={onChangeHandler}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
          </select>
        </label>
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300">
            <p className="text-sm text-gray-300 mb-2">
              Course Thumbnail<sup className="text-red-500">*</sup>
            </p>
            <input
              type="file"
              name="thumbnail"
              onChange={onFileChange}
              className="text-white"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddInstructorCourse;
