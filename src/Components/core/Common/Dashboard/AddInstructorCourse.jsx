import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { addCourse } from '../../../../services/operations/CourseDetailsAPI';
import { setCourses } from '../../../../slices/CourseSlice';

function AddInstructorCourse() {
  const dispatch = useDispatch()
  const [selectedFile, setSelectedFile] = useState(null);
  const { token } = useSelector(state => state.auth)
  const {user} = useSelector(state => state.profile)
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    price: '',
    category: '',
    thumbnail: '',
  });
  function onChangeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const { courseName, description, price, category, thumbnail } = formData;
  // const onDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   if (file) {
  //     setSelectedFile(file);
   
  //   }
  // };
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });



  const handleSubmit = async(e) => {
    e.preventDefault();
    const newdata = {...formData,user}
  await addCourse(newdata, token)
// if (result){
//   dispatch(setCourses(result))
  console.log(newdata)
// }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-[60%] space-y-8 rounded-md p-6 border-2 border-gray-500 border-opacity-20 bg-opacity-10 bg-yellow-50 '>
      <label>
        <p className='text-sm text-white mb-3'>
          Course Title<sup className=' text-pink-500'>*</sup>
        </p>
        <input
        className='form-style w-full mb-4'
          type="text"
          name="courseName"
          placeholder="Enter course title require"
          value={courseName}
          onChange={onChangeHandler}
          
          
        />
      </label>
      <label>
        <p className='text-sm text-white mb-3'>Course Description<sup className=' text-pink-500'>*</sup></p>
        <textarea className='form-style w-full mb-4' placeholder="Enter Description" name="description" value={description}
          onChange={onChangeHandler}/>
      </label>
      <label>
        <p className='text-sm text-white mb-3'>Price<sup className=' text-pink-500'>*</sup></p>
        <input className='form-style w-full mb-4' type="number" name="price" value={price}
          onChange={onChangeHandler} />
      </label>
      <label>
        <p className='text-sm text-white mb-3'>Category<sup className=' text-pink-500'>*</sup></p>
        <select className='form-style w-full mb-4' type="text" name="category" placeholder="Enter Category" value={category}
          onChange={onChangeHandler}>
          <option value="" disabled>
            Select from below
          </option>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
        </select>
      </label>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-slate-5">
          <p className='text-sm text-white mb-3'>
            Course Thumbnail<sup className="text-pink-300">*</sup>
          </p>

          {/* <div
            className={`${
              isDragActive ? 'bg-slate-600' : 'bg-slate-700'
            } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-slate-500`}
          >
            <div
              className="flex w-full flex-col items-center p-6"
              {...getRootProps()}
            >
              <input {...getInputProps()} value={thumbnail}
          onChange={onChangeHandler}/>
              <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
                <FiUploadCloud className="text-2xl text-yellow-50" />
              </div>
              <p className="mt-2 max-w-[200px] text-center text-sm text-slate-200">
                Drag and drop an image" , or click to{' '}
                <span className="font-semibold text-yellow-50">Browse</span> a
                file
              </p>
              <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-slate-200">
                <li>Aspect ratio 16:9</li>
                <li>Recommended size 1024x576</li>
              </ul>
            </div>
          </div> */}

          <input type='file' name="thumbnail" onChange={onChangeHandler} value={thumbnail}/>
          
        </label>
      </div>
      <button type="submit" className='flex rounded-md justify-center mx-auto bg-yellow-400 px-6 py-2 w-[60%]'>Submit</button>

    </form>
  );
}

export default AddInstructorCourse;
