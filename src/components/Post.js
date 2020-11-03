import React, { useState, useCallback } from "react";
import { Modal, Breadcrumb, notification } from "antd";
import { Link } from "react-router-dom";
import { createFollow } from '../service';
import { useRequest } from '@umijs/hooks';
import PostModal from "./PostModal";

export default (props) => {
  const { img, id, userName, userId } = props;

  const { confirm } = Modal;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const asyncFollow = useRequest(createFollow, {
    manual: true
  })

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFollow = useCallback((id) => {
    asyncFollow.run(id);
    notification.open({
      message: 'Follow thành công',
      duration: 1
    });
    setIsModalVisible(false);
  },[])

  const modalTitle = (userName) => {
    return (
      <Breadcrumb separator="•">
        <Breadcrumb.Item>
          <Link to={`/user/${userId}`}>
            <span style={{ fontWeight: "700" }}>{userName}</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
          <span style={{ cursor: 'pointer'}} onClick={() => handleFollow(userId)} style={{ color: "#0095f6" }}>Theo Doi</span>
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
