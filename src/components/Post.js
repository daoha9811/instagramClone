import React, { useState } from "react";
import { Modal, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import PostModal from "./PostModal";

export default (props) => {
  const { img, id, userName, userId } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalTitle = (userName) => {
    return (
      <Breadcrumb separator="•">
        <Breadcrumb.Item>
          <Link to={`/user/${userId}`}>
            <span style={{ fontWeight: "700" }}>{userName}</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <span style={{ color: "#0095f6" }}>Theo Doi</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  return (
    <div className="avatar">
      <img
        onClick={showModal}
        height="250"
        src={img}
        style={{ cursor: "pointer", width: "100%" }}
        alt="post-img"
      />
      <Modal
        title={modalTitle(userName)}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <PostModal postId={id} />
      </Modal>
    </div>
  );
};
