import { Button, Layout } from "antd";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { createElement } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: createElement(icon),
//   label: `nav ${index + 1}`,
// }));

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"dashboard"}>Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create-Admin",
//         label: <NavLink to={"create-admin"}>Create Admin</NavLink>,
//       },
//       {
//         key: "Create-Faculty",
//         label: <NavLink to={"create-faculty"}>Create Faculty</NavLink>,
//       },
//       {
//         key: "Create-Student",
//         label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
//       },
//     ],
//   },
// ];
const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
