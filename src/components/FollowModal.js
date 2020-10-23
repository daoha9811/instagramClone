import React from "react";
import { Modal } from "antd";
import { List, Avatar, Button } from 'antd';
import FollowModalUser from './FollowModalUser';

const FollowModal = ({ visible, ids, onClose }) => {
  return (
    <Modal
      title="Follow"
      visible={visible}
      footer={null}
      onCancel={onClose}
      centered
    >
      {ids && (
        <List
          dataSource={ids}
          renderItem={items => <List.Item>
            <FollowModalUser id ={items}/>
          </List.Item>}
        />
      )}
    </Modal>
  );
};

export default FollowModal;
