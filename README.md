# MERN Course Marketplace

Welcome to TecLearn, This application allows students to buy courses and
instructors to add new courses.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)

## Overview

TecLearn is a full-stack web application built using MongoDB, Express.js,
React.js, and Node.js. It allows students to browse and purchase courses, while
instructors can add and manage courses.

## Features

- **User Authentication:** Users can sign up, log in, and log out.
- **Course Listing:** Courses are displayed with details like name, description,
  price, and instructor.
- **Course Purchase:** Users can add courses to their cart and complete the
  purchase.
- **Instructor Dashboard:** Instructors have a dashboard to add new courses and
  manage existing ones.

## Technologies Used

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Cloudinary
- **Authentication:** JSON Web Tokens (JWT)
- **API Integration:** Axios
- **Deployment:** Render (backend), Vercel (frontend)

## Prerequisites

Before starting, make sure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- MongoDB (v4.x or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashikshettyc/teclearn
   cd teclearn.

   ```

2. Install dependencies:

   npm install

   # or

   yarn install

## Configuration

1.  Create a .env file in the backend directory with the following environment
    variables:

         MAIL_HOST = smtp.gmail.com MAIL_USER = MAIL_USER MAIL_PASS = MAIL_PASS

         JWT_SECRET = "JWT_SECRET" FOLDER_NAME = "FOLDER_NAME"

         CLOUD_NAME = CLOUD_NAME API_KEY = API_KEY API_SECRET = API_SECRET

         MONGODB_URL = "MONGODB_URL"

         PORT = 4000

         FRONTEND_URL= https://teclearn.vercel.app

## Running the Application

- _Backend_ To run the backend server: cd backend npm start # or yarn start

  The backend will start at http://localhost:5000.

- _Frontend_ To run the frontend development server: cd frontend npm start # or
  yarn start

  The frontend will start at http://localhost:3000

## Deployment

1. Deploy the backend on Render by signing up and importing the repo from github
   and selecting backend for deployment folder.
2. Connect your GitHub repository to Vercel and from there you can deploy the
   frontend to vercel. Add the backend link to the frontend.
