import React, { useState } from "react";
import { Modal, Breadcrumb } from "antd";
import PostModal from "./PostModal";

export default props => {
  
  const {img, id, userName} = props;
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalTitle = userName => {
    return (
      <Breadcrumb separator="•">
        <Breadcrumb.Item>
          <span style={{ fontWeight: "700" }}>{userName}</span>
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
        style={{ cursor: "pointer" }}
      />
      <Modal
        title={modalTitle(userName)}
        visible={isModalVisible}
        onCancel={handleCancel}
        style={{ maxWidth: "70%" }}
        width="70%"
        footer={null}
      >
        <PostModal postId={id} />
      </Modal>
    </div>
  );
};
