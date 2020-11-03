import React, { useState } from "react";

import { Form, Input, Button, Checkbox, message, Modal, List, Avatar, Skeleton } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { FormOutlined, AudioOutlined } from "@ant-design/icons";

export default ({ data, setCurrentConverstation }) => {
  const { Search } = Input;

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

  const currentUserId = sessionStorage.getItem('userId');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
    <div className="Friends_z">
      <div className="Friends__header">
        <div className="Text_center Bold">Firends</div>
        <FormOutlined onClick={showModal} width="10" style={{fontSize: '20px', cursor: "pointer"}} />
      </div>
      <Modal
          title="Bạn bè"
          visible={isModalVisible}
          style={{ maxWidth: "70%", maxHeight:"300", overflowY: "auto" }}
          width="40%"
          onCancel={handleCancel}
          footer={null}
        >
        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        
        <List
        itemLayout="horizontal"
        dataSource={user}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <List.Item
            actions={[<a key="list-loadmore-edit" style={{color:"#007bff", fontWeight:"bold"}}>Nhắn tin</a>]}
            ></List.Item>
          </List.Item>
         )}
        />
      </Modal>
      <div className="List__z">
        <div className="Z__list">
          {data?.messages?.map((mess) => {
            if(currentUserId === mess?.from?.id) {
              return (
                <div className="Friends_list" onClick={()=>{setCurrentConverstation(mess?._id)}}>
                  <img
                    className="inbox_friend_avatar"
                    src={mess?.to?.avatar}
                    alt="avatar"
                  />
                  <div className="inbox__text">
                    <h5>{mess?.to?.name}</h5>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="Friends_list" onClick={()=>{setCurrentConverstation(mess?._id)}}>
                  <img
                    className="inbox_friend_avatar"
                    src={mess?.from?.avatar}
                    alt="avatar"
                  />
                  <div className="inbox__text">
                    <h5>{mess?.from?.name}</h5>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};
