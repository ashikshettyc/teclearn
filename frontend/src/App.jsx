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
import ContactUs from "./Pages/ContactUs";
import PrivateRoute from "./Components/PrivateRoute";
import NotFound from "./Pages/NotFound";

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
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/courses" element={<AllCourses/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>         
        <Route path="/dashboard/my-courses" element={<PrivateRoute><Instructor /></PrivateRoute>} />
      <Route path="/dashboard/add-course" element={<PrivateRoute><AddInstructorCourse /></PrivateRoute>} />
      <Route path="/dashboard/enrolled-courses" element={<PrivateRoute><StudentEnrolled /></PrivateRoute>} />
        </Route>


<Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
