//https://glitch.com/~snowy-cuboid-vulcanodon -api
import React from "react";
import Routers from "./routes";
import "antd/dist/antd.css";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from "antd";

import HeaderMenu from "./components/header";
import Explore from "./components/Explore";
import Authen from "./components/Authen";
import Register from "./components/Register";
import Infor from "./components/Infor";
import { Container } from 'reactstrap';

import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HomeOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined
} from "@ant-design/icons";

const { Header, Content } = Layout;

const routes = [
  {
    path: "/",
    component: "",
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
    path: "*",
    component: ""
  }
];

const routePaths = [
  {
    component: (
      <Link to="/home">
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
      <Link to="/about">
        <HeartOutlined style={{ fontSize: "20px" }} />
      </Link>
    )
  },
  {
    component: (
      <Link to={`/infor`}>
        <UserOutlined style={{ fontSize: "20px" }} />
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
