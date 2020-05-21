import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default () => {
  let history = useHistory();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  };

  const onFinish = async values => {
    const key = "updateable";
    try {
      message.loading({ content: "cho 1 chut", key });

      const loginFetch = await axios.post(
        "https://snowy-cuboid-vulcanodon.glitch.me/api/authen",
        values,
        {
          onUploadProgress: progressEvent => {
            var percentCompleted = Math.round(
              progressEvent.loaded / (progressEvent.total * 100)
            );
            console.log("--");
            console.log(`${percentCompleted} %`);
          }
        }
      );

      if (loginFetch.data.errors) {
        message.error({ content: loginFetch.data.errors, key });
        return;
      }

      sessionStorage.setItem(
        "token",
        `${loginFetch.data.token.accessToken}`
      );
      sessionStorage.setItem("userName", loginFetch.data.user.name);

      message.success({ content: "Dang nhap thang cong", key });

      history.push("/explore");
    } catch (error) {
      message.error("error");
    }
  };

  return (
    <div className="authen">
      <Form {...layout} onFinish={onFinish}>
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
        <Form.Item
          wrapperCol={{ offset: 8, span: 8 }}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button style={{ marginRight: "20px" }} htmlType="submit">
            Dang nhap
          </Button>
          <Button>
            <Link to="/register">Dang ky</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
