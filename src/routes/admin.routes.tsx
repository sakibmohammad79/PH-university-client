import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/faculty/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/student/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemseter from "../pages/admin/academicManagement/CreateAcademicSemseter";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import StudentData from "../pages/admin/userManagement/student/studentData";
import StudentDetails from "../pages/admin/userManagement/student/studentDetails";
import StudentUpdate from "../pages/admin/userManagement/student/studentUpdate";
import AdminData from "../pages/admin/userManagement/admin/AdminData";
import FacultyDetails from "../pages/admin/userManagement/faculty/FacultyDetails";
import FacultyData from "../pages/admin/userManagement/faculty/FacultyData";
import AdminDetails from "../pages/admin/userManagement/admin/AdminDetails";
import AdminUpdate from "../pages/admin/userManagement/admin/AdminUpdate";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import FacultyUpdate from "../pages/admin/userManagement/faculty/FacultyUpdate";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import Courses from "../pages/admin/courseManagement/Courses";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemseter />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      //student route
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "All Student",
        path: "student-data",
        element: <StudentData />,
      },
      {
        path: "student-data/details/:studentId",
        element: <StudentDetails />,
      },
      {
        path: "student-data/update/:studentId",
        element: <StudentUpdate />,
      },
      //faculty route
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "All Faculty",
        path: "faculty-data",
        element: <FacultyData />,
      },
      {
        path: "faculty-data/details/:facultyId",
        element: <FacultyDetails />,
      },
      {
        path: "faculty-data/update/:facultyId",
        element: <FacultyUpdate />,
      },
      //admin route
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "All Admin",
        path: "admin-data",
        element: <AdminData />,
      },
      {
        path: "admin-data/details/:adminId",
        element: <AdminDetails />,
      },
      {
        path: "admin-data/update/:adminId",
        element: <AdminUpdate />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semester",
        path: "registered-semester",
        element: <RegisteredSemester />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />,
      },
    ],
  },
];

//admin sidebar items handle dynamically
// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//Programatical way
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// console.log(adminRoutes);

//hard coded way
// const adminPath = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent></CreateStudent>,
//   },
// ];

// export default adminPath;
