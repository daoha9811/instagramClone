import React, { useState, useEffect } from "react";
import { Row, Col, message, Spin, Divider } from "antd";
import Post from "./Post";
import axios from "axios";

import AuthenHoc from "./AuthenHoc";

const Explore = props => {
  const [ApiFetch, setApiFetch] = useState();
  const [Posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // const token = localStorage.getItem("token");
      const token = sessionStorage.getItem("token") || "";
      axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
      const posts = await axios.get(
        `https://snowy-cuboid-vulcanodon.glitch.me/api/allposts`
      );

      console.log(posts);

      if (posts.data.errors) {
        message.error(posts.data.errors);
      } else {
        setPosts(posts.data);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      setPosts([]);
      setLoading(true);
    };
  }, [ApiFetch]);

  const convertPosts = [...Posts].reverse().map((post, index) => {
    return (
      <Col key={index} md={6} lg={6} xs={12}>
        <Post id={post._id} img={post.img} userName={post.userName} userId={post.userId} />
      </Col>
    );
  });

  return (
    <div className="explore">
      <Divider orientation="left">Kham pha</Divider>
      <Spin spinning={loading}>
        <Row gutter={[20, 20]}>{convertPosts}</Row>
      </Spin>
    </div>
  );
};

export default AuthenHoc(Explore);
