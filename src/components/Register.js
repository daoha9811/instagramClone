import React from "react";
import { Form, Input, Button, message } from "antd";
import {  useHistory } from "react-router-dom";
import axios from "axios";

export default () => {
  let history = useHistory();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  };

  const onFinish = async values => {
    const key = "register";
    try {
      message.loading({ content: "cho 1 chut", key });

      const registerFetch = await axios.post(
        "https://snowy-cuboid-vulcanodon.glitch.me/api/register",
        values
      );

      if (registerFetch.data.errors) {
        message.error({ content: "registerFetch.data.errors", key });
        return;
      }

      if (registerFetch.data.status === "success") {
        message.success({ content: "dang ky thang cong", key });
        history.push("/authen");
      }
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="authen">
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="Ten nguoi dung:"
          name="name"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Moi nhap ten "
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email:"
          name="email"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Moi nhap tai khoan"
            },
            {
              type: "email",
              message: "Khong dung dinh dang email"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mat Khau:"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Moi nhap mat khau"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button htmlType="submit">Dang Ky</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
