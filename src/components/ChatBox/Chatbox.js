import React, { useEffect, useState } from "react";

import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { getConverstationById } from "../../service";
import { useRequest } from "@umijs/hooks";
import { SendOutlined } from "@ant-design/icons";

export default ({ currentConvertation, sendMess, messages }) => {
  const currentUser = sessionStorage.getItem("userId");

  const [value, setValue] = useState();

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
          <h6 className="Chatbox__username">Dog</h6>
        </div>
        <div className="chatbox__history vt__min">
          {data?.data &&
            data?.data?.message?.converstation?.map((conver) => {
              if (conver?.fromId === currentUser) {
                return (
                  <div className="message my-message">
                    <span>{conver?.message}</span>
                  </div>
                );
              } else {
                return (
                  <div className="message orther-message">
                    <span>{conver?.message}</span>
                  </div>
                );
              }
            })}
        </div>
        <div className="chatbox__input">
          <div className="Input_z">
            <input
              value={value}
              onChange={handleOnChangle}
              type="text"
              className="chatbox__inbox"
            ></input>
            <SendOutlined
              style={{ fontSize: "20px" }}
              onClick={handleSendMess}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};
