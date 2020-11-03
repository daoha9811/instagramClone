import React, { useEffect, useState } from "react";

import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { getConverstationById } from "../../service";
import { useRequest } from "@umijs/hooks";
import { SendOutlined, InfoCircleOutlined } from "@ant-design/icons";


export default ({ currentConvertation, sendMess, messages }) => {
  const currentUser = sessionStorage.getItem("userId");

  const [value, setValue] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { run, loading, data } = useRequest(getConverstationById, {
    manual: true,
  });

  useEffect(() => {
    run(currentConvertation);
  }, [currentConvertation, messages]);

  const handleSendMess = () => {
    if (value) {
      sendMess(
        {
          currentUser,
          message: value,
        },
        currentConvertation
      );
      setValue("");
    }
  };

  const handleOnChangle = (e) => {
    setValue(e?.target?.value);
  };

  return (
    <Spin spinning={loading} >
      <div className="Chatbox_z">
        <div className="Chatbox__header">
          <div className="Chatbox__username Bold">Dog</div>
          <InfoCircleOutlined width="10" style={{fontSize: '20px', cursor: "pointer"}} />
        </div>
        <div className="chatbox__history">
          {data?.data &&
            data?.data?.message?.converstation?.map((conver) => {
              if (conver?.fromId === currentUser) {
                return (
                  <div className="Recive">
                    <div className="message my-message">
                      <div>{conver?.message}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="Sent">
                    <div className="message orther-message">
                      <div>{conver?.message}</div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div className="chatbox__input">
          <div className="Input_z">
            <input
              value={value || ''}
              onChange={handleOnChangle}
              type="text"
              className="chatbox__inbox"             
            ></input>
            <SendOutlined 
              style={{ fontSize: "20px"}}
              onClick={handleSendMess}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};
