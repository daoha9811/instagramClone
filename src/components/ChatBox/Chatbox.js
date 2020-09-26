import React from "react";

import { Form, Input, Button, Checkbox, message } from "antd";
import {
    SendOutlined
  } from "@ant-design/icons";


export default () => {
    return(
        <div className="Chatbox_z">
            <div className="Chatbox__header">
                <h6 className="Chatbox__username">Dog</h6>
            </div>
            <div className="chatbox__history vt__min">
                <div className="message orther-message">
                Hi Vincent, how are you? How is the project coming along?
                </div>
                <div className="message my-message">
                Are we meeting today? Project has been already finished and I have
                results to show you.
                </div>
                <div className="message orther-message">
                Hi Vincent, how are you? How is the project coming along?
                </div>
                <div className="message my-message">
                Are we meeting today? Project has been already finished and I have
                results to show you.
                </div>
                <div className="message orther-message">
                Hi Vincent, how are you? How is the project coming along?
                </div>
                <div className="message my-message">
                Are we meeting today? Project has been already finished and I have
                results to show you.
                </div>
                <div className="message orther-message">
                Hi Vincent, how are you? How is the project coming along?
                </div>
                <div className="message my-message">
                Are we meeting today? Project has been already finished and I have
                results to show you.
                </div>
                <div className="message orther-message">
                Hi Vincent, how are you? How is the project coming along?
                </div>
                <div className="message my-message">
                Are we meeting today? 
                </div>
            </div>
            <div className="chatbox__input">
                <div className="Input_z">
                   <input type="text" className="chatbox__inbox"></input>
                   <SendOutlined style={{ fontSize: "20px" }}/>
                </div>
            </div>
        </div>
    );
}