import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import VerifyEmail from "./Pages/VerifyEmail";
import LogIn from "./Pages/LogIn";
import Dashboard from "./Pages/Dashboard";
import Instructor from "./Components/core/Common/Dashboard/Instructor"
import AddInstructorCourse from "./Components/core/Common/Dashboard/AddInstructorCourse";
import StudentEnrolled from "./Components/core/Common/Dashboard/StudentEnrolled";
import AllCourses from "./Pages/AllCourses";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className=" bg-slate-900 min-h-screen w-screen ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/verify-email" element={<VerifyEmail/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/courses" element={<AllCourses/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>         
          <Route path="/dashboard/my-courses" element={<Instructor/>}/>
          <Route path="/dashboard/add-course" element={<AddInstructorCourse/>}/>
          <Route path="/dashboard/enrolled-courses" element={<StudentEnrolled/>}/> 
        </Route>

      </Routes>
    </div>
  );
}

export default App;
