import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Avatar,
  Menu,
  Layout,
  Spin,
  message,
  Skeleton,
  Button,
} from "antd";
import axios from "axios";
import Post from "./Post";
import InforUpload from "./InforUpload";

import {createConverStation} from '../service';

import { useHistory, Switch, Route, Link, useParams } from "react-router-dom";

const { Header, Content } = Layout;

const UserInfor = (props) => {
  let history = useHistory();

  const { id: userId } = useParams();

  // let { path, url } = useRouteMatch();

  const [ApiFetch, setApi] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `https://snowy-cuboid-vulcanodon.glitch.me/api/user-by-id/${userId}`
      );

      if (response.data.errors) {
        message.error(response.data.errors);
      } else {
        setUser(response?.data?.user);
        setPosts(response?.data?.posts);
        setLoading(false);
      }
    })();
  }, [ApiFetch]);

  const changeApi = (status) => {
    setApi(status);
  };

  const onChange = async (e) => {
    const avatar = e.target.files[0];

    let formData = new FormData();
    formData.append("avatar", avatar);

    setSpinning(true);

    const token = sessionStorage.getItem("token") || "";
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    const result = await axios.post(
      "https://snowy-cuboid-vulcanodon.glitch.me/api/avatar",
      formData
    );

    if ((result.status = "success")) {
      setApi("change-avatar");
      setSpinning(false);
    }
  };

  const onMessage = async () => {
    const response = await createConverStation(userId);
    if(response?.data?.status === "success") {
      history.push('/inbox')
    }

  };

  const convertPosts = posts && posts.length >=1 ? [...posts].reverse().map((post, index) => {
    return (
      <Col key={index} md={6} lg={6} xs={12}>
        <Post id={post._id} img={post.img} userName={post.userName} />
      </Col>
    );
  }) : [];

  return (
    <div className="person-infor">
      <Skeleton loading={loading} avatar active>
        <Row>
          <Col xs={2} offset={3} md={4} lg={4}>
            <div>
              <label htmlFor="avatar-upload">
                <Spin style={{ width: "120px" }} spinning={spinning}>
                  <Avatar
                    style={{ cursor: "pointer" }}
                    size={120}
                    src={
                      user
                        ? user.avatar
                        : "https://res.cloudinary.com/daoha/image/upload/v1588146078/userTest/download_btdqvy.jpg"
                    }
                  />
                </Spin>
              </label>
              <input
                onChange={onChange}
                type="file"
                id="avatar-upload"
                style={{ display: "none" }}
              />
            </div>
          </Col>
          <Col xs={15} offset={3} md={14} lg={14}>
            <div>
              <div className="infor-user_control" style={{ display: "flex" }}>
                <h2>{user ? user.name : ""}</h2>
                <Button onClick={onMessage} style={{ marginLeft: "20px" }}>
                  Nhan tin
                </Button>
              </div>
              <div className="infor-count_detail">
                <span style={{ marginRight: "20px" }}>0 bai viet</span>
                <span style={{ marginRight: "20px" }}>1 nguoi theo doi</span>
                <span style={{ marginRight: "20px" }}>
                  Dang theo doi 1 nguoi
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="infor-menu_control">
          <Layout style={{ background: "none" }}>
            <Header style={{ background: "none", textAlign: "center" }}>
              <Menu mode="horizontal">
                <Menu.Item>
                  <span>Bai Viet</span>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ marginTop: "30px" }}>
              {convertPosts.length > 0 ? (
                <Row gutter={[10, 20]}>{convertPosts}</Row>
              ) : (
                <h1 style={{ textAlign: "center" }}>Ban chua co anh nao</h1>
              )}
            </Content>
          </Layout>
        </div>
      </Skeleton>
    </div>
  );
};

export default UserInfor;
