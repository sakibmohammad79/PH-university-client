const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "AdminDashboard",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "AdminDashboard",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "AdminDashboard",
      },
    ],
  },
];

const result = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: item.path,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((chiled) => ({
        key: chiled.name,
        label: chiled.path,
      })),
    });
  }

  return acc;
}, []);
console.log(result);
