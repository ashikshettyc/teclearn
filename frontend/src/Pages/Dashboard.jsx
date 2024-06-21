// import React from 'react'
// import SideBar from '../Components/core/Common/SideBar'
// import { Outlet } from 'react-router-dom'


// function Dashboard() {

//   return (

//     <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//  <SideBar/>
//   <div className='h-[100vh] flex-1 overflow-auto'>
//       <div className='mx-auto w-11/12 max-w-[1000px] py-5 md:py-10'>
// <Outlet/>
//       </div>
//   </div>


// </div>    
//   )
// }

// export default Dashboard

// import React from 'react';
// import SideBar from '../Components/core/Common/SideBar';
// import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function Dashboard() {
//   const {user}  = useSelector(state=>state.profile)
//   const userName = user.firstName; // This can be dynamically fetched from user data

//   return (
//     <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-gray-900 text-white">
//       <SideBar />
//       <div className='h-[100vh] flex-1 overflow-auto'>
//         <div className='mx-auto w-11/12 max-w-[1000px] py-5 md:py-10'>
//           {/* Greeting and Overview */}
//           <header className="mb-5">
//             <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
//             <p className="text-lg text-gray-400">Here’s what’s happening with your courses today:</p>
//           </header>

//           {/* Statistics Section */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
//             <div className="bg-gray-800 p-5 rounded-lg shadow">
//               <h2 className="text-xl font-semibold">Courses</h2>
//               <p className="text-3xl font-bold">{user.courses.length}</p>
//               <p className="text-gray-400">Total Courses</p>
//             </div>
//             <div className="bg-gray-800 p-5 rounded-lg shadow">
//               <h2 className="text-xl font-semibold">Students</h2>
//               <p className="text-3xl font-bold">1,200</p>
//               <p className="text-gray-400">Total Enrolled Students</p>
//             </div>
//             <div className="bg-gray-800 p-5 rounded-lg shadow">
//               <h2 className="text-xl font-semibold">Instructors</h2>
//               <p className="text-3xl font-bold">15</p>
//               <p className="text-gray-400">Total Instructors</p>
//             </div>
//           </section>

//           {/* Recent Activities */}
//           <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-3">Recent Activities</h2>
//             <ul className="bg-gray-800 p-5 rounded-lg shadow space-y-3">
//               <li className="p-3 bg-gray-700 rounded">New course "React for Beginners" added by Jane Smith</li>
//               <li className="p-3 bg-gray-700 rounded">John Doe enrolled in "Advanced JavaScript"</li>
//               <li className="p-3 bg-gray-700 rounded">Course "Python 101" updated</li>
//             </ul>
//           </section>

//           {/* Quick Actions */}
//           <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-3">Quick Actions</h2>
//             <div className="flex space-x-4">
//               <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg shadow">Add New Course</button>
//               <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg shadow">View All Courses</button>
//               <button className="bg-yellow-600 hover:bg-yellow-700 py-2 px-4 rounded-lg shadow">Manage Students</button>
//             </div>
//           </section>

          
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default Dashboard;




import React from 'react';
import SideBar from '../Components/core/Common/SideBar';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Dashboard() {
  const { user } = useSelector((state) => state.profile);
  const userName = user.firstName;
  const userRole = user.accountType; // Assuming `role` is either 'student' or 'instructor'

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-gray-900 text-white">
      <SideBar />
      <div className='h-[100vh] flex-1 overflow-auto'>
        <div className='mx-auto w-11/12 max-w-[1000px] py-5 md:py-10'>
          {/* Greeting and Overview */}
          <header className="mb-5">
            <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
            <p className="text-lg text-gray-400">Here’s what’s happening with your courses today:</p>
          </header>

          {/* Render different content based on user role */}
          {userRole === 'Instructor' ? (
            // Instructor-specific content
            <>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <div className="bg-gray-800 p-5 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">Courses</h2>
                  <p className="text-3xl font-bold">{user.courses.length}</p>
                  <p className="text-gray-400">Total Courses</p>
                </div>
                <div className="bg-gray-800 p-5 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">Students</h2>
                  <p className="text-3xl font-bold">1,200</p>
                  <p className="text-gray-400">Total Enrolled Students</p>
                </div>
                <div className="bg-gray-800 p-5 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">Instructors</h2>
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-gray-400">Total Instructors</p>
                </div>
              </section>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">Recent Activities</h2>
                <ul className="bg-gray-800 p-5 rounded-lg shadow space-y-3">
                  <li className="p-3 bg-gray-700 rounded">New course "React for Beginners" added by Jane Smith</li>
                  <li className="p-3 bg-gray-700 rounded">John Doe enrolled in "Advanced JavaScript"</li>
                  <li className="p-3 bg-gray-700 rounded">Course "Python 101" updated</li>
                </ul>
              </section>
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">Quick Actions</h2>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg shadow">Add New Course</button>
                  <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg shadow">View All Courses</button>
                  <button className="bg-yellow-600 hover:bg-yellow-700 py-2 px-4 rounded-lg shadow">Manage Students</button>
                </div>
              </section>
            </>
          ) : (
            // Student-specific content
            <>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <div className="bg-gray-800 p-5 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">Enrolled Courses</h2>
                  <p className="text-3xl font-bold">{user.courses
.length}</p>
<p className="text-gray-400">Total Enrolled Courses</p>
</div>
<div className="bg-gray-800 p-5 rounded-lg shadow">
<h2 className="text-xl font-semibold">Completed Courses</h2>
<p className="text-3xl font-bold">{user.completedCourses}</p>
<p className="text-gray-400">Courses Completed</p>
</div>
<div className="bg-gray-800 p-5 rounded-lg shadow">
<h2 className="text-xl font-semibold">Active Courses</h2>
<p className="text-3xl font-bold">{user.activeCourses}</p>
<p className="text-gray-400">Courses In Progress</p>
</div>
</section>
<section className="mb-10">
<h2 className="text-2xl font-semibold mb-3">Upcoming Deadlines</h2>
<ul className="bg-gray-800 p-5 rounded-lg shadow space-y-3">
<li className="p-3 bg-gray-700 rounded">Assignment 1 for "React for Beginners" due on June 25</li>
<li className="p-3 bg-gray-700 rounded">Project submission for "Advanced JavaScript" due on July 5</li>
<li className="p-3 bg-gray-700 rounded">Quiz for "Python 101" on July 10</li>
</ul>
</section>
<section className="mb-10">
<h2 className="text-2xl font-semibold mb-3">Quick Actions</h2>
<div className="flex space-x-4">
<button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg shadow">
  <Link to="/dashboard/enrolled-courses">
  View All Courses
  </Link>
  </button>
<button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg shadow">Track Progress</button>
<button className="bg-yellow-600 hover:bg-yellow-700 py-2 px-4 rounded-lg shadow">Contact Instructor</button>
</div>
</section>
</>
)}


</div>

</div>
<Outlet />
</div>
);
}

export default Dashboard;
