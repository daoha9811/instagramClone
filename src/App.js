//https://glitch.com/~snowy-cuboid-vulcanodon -api
import React from "react";
import Routers from "./routes";
import "antd/dist/antd.css";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout, Menu, Dropdown, Avatar, List } from "antd";

import HeaderMenu from "./components/header";
import Explore from "./components/Explore";
import Authen from "./components/Authen";
import Register from "./components/Register";
import Infor from "./components/Infor";
import UserInfor from "./components/UserInfor";
import NotFound from "./components/NotFound";
import HomeComponent from './components/HomeComponent';

//Chat box
import Inbox from './components/ChatBox/Inbox';

import { Container } from 'reactstrap';

import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HomeOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
  MailTwoTone
} from "@ant-design/icons";

const { Header, Content, Image } = Layout;

const user = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const menu = (
  <Menu style= {{width: 350, maxWidth: 350, margin: 12, overflow: "auto", maxHeight: 300}}>
    <List
    maxHeight="100"
    itemLayout="horizontal"
    dataSource={user}
    renderItem={item => (
      <List.Item style={{maxHeight:100, paddingLeft: 5}}>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
  </Menu>
);
const routes = [
  {
    path: "/",
    component: <HomeComponent />,
    exact: true
  },
  {
    path: "/explore",
    component: <Explore />,
    exact: true
  },
  {
    path: "/register",
    component: <Register />,
    exact: true
  },
  {
    path: "/authen",
    component: <Authen />,
    exact: true
  },
  {
    path: "/infor",
    component: <Infor />,
    exact: false
  },
  {
    path: "/user/:id",
    component: <UserInfor />,
    exact: false
  },
  {
    path: "/inbox",
    component: <Inbox />,
    exact: false
  },
  {
    path: "*",
    component: <NotFound />
  }
];

const routePaths = [
  {
    component: (
      <Link to="/">
        <HomeOutlined style={{ fontSize: "20px" }} />
      </Link>
    )
  },
  {
    component: (
      <Link to="/explore">
        <CompassOutlined style={{ fontSize: "20px", color: "#000" }} />
      </Link>
    )
  },
  {
    component: (
        <Dropdown overlay={menu} placement="bottomCenter">
          <HeartOutlined style={{ fontSize: "20px" }} />
        </Dropdown>
    )
  },
  {
    component: (
      <Link to={`/infor`}>
        <UserOutlined style={{ fontSize: "20px" }} />
      </Link>
    )
  },
  {
    component: (
      <Link to={`/inbox`}>
        <MailTwoTone style={{ fontSize: "20px" }} />
      </Link>
    )
  }
];

const App = props => {
  
  return (
    <div className="App">
      <Router>
        <Layout style={{ background: "none" }}>
          <Header
            className="nav-bar_borderBottom"
            style={{ background: "none" }}
          >
            <HeaderMenu routePaths={routePaths} />
          </Header>
          <Container>
            <Content style={{ padding: "0 50px", marginTop: "30px" }}>
              <Routers routes={routes} />
            </Content>
          </Container>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
