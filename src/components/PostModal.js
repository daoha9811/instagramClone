import React, { useState, useEffect } from "react";
import { List, Avatar, Skeleton, message, Spin } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import axios from "axios";

const fakeData = [
  {
    user: {
      name: "DaoHa",
      avatar:
        "https://res.cloudinary.com/daoha/image/upload/v1588146078/userTest/download_btdqvy.jpg"
    },
    message: "Like di moi nguoi"
  },
  {
    user: {
      name: "DaoHa",
      avatar:
        "https://res.cloudinary.com/daoha/image/upload/v1588146078/userTest/download_btdqvy.jpg"
    },
    message: "Like di moi nguoi"
  }
];

export default props => {
  const { postId } = props;

  const [ApiFetch, setApiFetch] = useState();
  const [detailPost, setDetailPost] = useState({});
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    (async function() {
      // const token = localStorage.getItem("token");
      const token = sessionStorage.getItem("token") || "";
      axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
      const postDetail = await axios.get(
        `https://snowy-cuboid-vulcanodon.glitch.me/api/posts/${postId}`
      );

      if (postDetail.data.errors) {
        message.error(postDetail.data.errors);
      } else {
        setDetailPost(postDetail.data);
        setLoading(false);
      }

      return () => {
        setDetailPost({});
        setLoading(true);
      };
    })();
  }, [ApiFetch]);

  const onChange = e => {
    const target = e.target;
    const value = target.value;
    setComment(value);
  };

  const onComment = async () => {
    try {
      setSpinning(true);

      const token = sessionStorage.getItem("token") || "";
      const postCommentResponse = await axios.post(
        "https://snowy-cuboid-vulcanodon.glitch.me/api/comment",
        {
          token,
          postId,
          comment
        }
      );

      if (postCommentResponse.data.error) {
        message.error("some thing went wrong");
      }

      if ((postCommentResponse.data.status = "success")) {
        setComment("");
        setApiFetch("post-comment");
        setSpinning(false);
      }
    } catch (error) {
      message.error("some thing went wrong");
    }
  };

  return (
    <div className="avatar-modal">
      <Skeleton loading={loading} avatar active>
        <div className="avatar-modal_img">
          <img
            height="400"
            src={
              detailPost
                ? detailPost.img
                : "https://res.cloudinary.com/daoha/image/upload/v1588060705/sample.jpg"
            }
            alt="post-img"
          />
        </div>
        <div className="avatar-modal_comment">
          <div className="avatar-modal_comments">
            <Spin spinning={spinning}>
              <List
                dataSource={detailPost ? detailPost.comments : fakeData}
                renderItem={item => {
                  return (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.user.avatar} />}
                        title={
                          <a href="https://ant.design">
                            <span style={{ fontWeight: "700" }}>
                              {item.user.name}
                            </span>
                          </a>
                        }
                        description={item.message}
                      />
                    </List.Item>
                  );
                }}
              />
            </Spin>
          </div>
          <div className="avatar-modal_comment_control">
            <div className="like-group">
              <HeartOutlined />
            </div>
            <div className="comment-group">
              <input
                placeholder="Them binh luan..."
                type="text"
                onChange={e => {
                  onChange(e);
                }}
                value={comment}
              />
              {comment ? (
                <span onClick={onComment} className={"active-comment_button"}>
                  Dang
                </span>
              ) : (
                <span className={"comment_button"}>Dang</span>
              )}
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};
