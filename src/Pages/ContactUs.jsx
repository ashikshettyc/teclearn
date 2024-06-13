import React, { useState } from 'react';
import toast from 'react-hot-toast';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const { name, email, contact, message } = formData;

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    toast.success("Form Submitted")
    setFormData({
      name: '',
      email: '',
      contact: '',
      message: '',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-blend-color-burn">
      <div className="bg-white bg-opacity-5 backdrop-blur-md border-2 border-white border-opacity-10 rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChangeHandler}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeHandler}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={onChangeHandler}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              What do you want to say?
            </label>
            <textarea
              name="message"
              value={message}
              onChange={onChangeHandler}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
