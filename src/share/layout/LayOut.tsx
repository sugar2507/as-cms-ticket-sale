import React from "react";
import { Layout, Menu } from "antd";
import Header  from './Header';
import {
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FaTicketAlt , FaFileInvoice } from "react-icons/fa";
import Ticket from "../../pages/ticket-m/Ticket";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "../../pages/home/Home";
import CheckTicket from "../../pages/checkticket/CheckTicket";
import Product from "../../pages/product/Product";

const { Footer, Sider } = Layout;

export const LayOut = () => {
  return (
    <div>
      <Router>
        <Layout>
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
            <div className="logo" />
            <Menu
              style={{ height:575,width: 250 }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Trang chủ<Link to="/"></Link>
              </Menu.Item>

              <Menu.Item key="2" icon={<FaTicketAlt />}>
                Quản lý vé<Link to="/ManagerTicket"></Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<FaFileInvoice />}>
                Đối soát vé<Link to="/CheckTicket"></Link>
              </Menu.Item>

              <Menu.Item key="4" icon={<SettingOutlined />}>
                Cài đặt<Link to="/Product"></Link>
              </Menu.Item>
            </Menu>
            <Footer className="title-footer">
              Copyright 2020 Alta Software
            </Footer>
          </Sider>

          <Layout style={{ paddingLeft: 50 }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ManagerTicket" element={<Ticket />} />
              <Route path="/CheckTicket" element={<CheckTicket />} />
              <Route path="/Product" element={<Product/>} />
            </Routes>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default LayOut;
