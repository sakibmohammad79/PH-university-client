import EnrolloedCourse from "../pages/Student/EnrolloedCourse";
import RegisteredCourse from "../pages/Student/RegisteredCourse";
import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Enrolled Course",
        path: "enrolled-course",
        element: <EnrolloedCourse />,
      },
      {
        name: "Register Coruse",
        path: "register-course",
        element: <RegisteredCourse />,
      },
    ],
  },
];
