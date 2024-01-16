import { Layout, Menu, MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
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

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create-Admin",
        label: <NavLink to={"create-admin"}>Create Admin</NavLink>,
      },
      {
        key: "Create-Faculty",
        label: <NavLink to={"create-faculty"}>Create Faculty</NavLink>,
      },
      {
        key: "Create-Student",
        label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
      },
    ],
  },
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>PH University</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
