import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import AuthenHoc from "../AuthenHoc";
import socketIOClient from "socket.io-client";
import { fetchChatByUserId } from "../../service";
import { useRequest } from "@umijs/hooks";
import Chatbox from "./Chatbox";
import Firend from "./Fiends";
import "./inbox.css";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "https://snowy-cuboid-vulcanodon.glitch.me/";

const Inbox = () => {
  const socket = socketIOClient(SOCKET_SERVER_URL);
  const [ messages, setMessages ] = useState([]);
  const [ currentConvertation, setCurrentConverstation ] = useState(null);

  const { run, loading, data } = useRequest(fetchChatByUserId, {
    manual: true,
  });

  useEffect(() => {
    socket.on(NEW_CHAT_MESSAGE_EVENT, (incommingMessage) => {
      console.log(incommingMessage, 'here');
      setMessages([incommingMessage]);
    });
  }, []);

  useEffect(() => {
    run();
  }, []);

  useEffect(()=>{
    if(data) {
      setCurrentConverstation(data?.data?.messages && data?.data?.messages[0]?._id || null);
    }
  },[data])

  const sendMess = (message, converstationId) => {
    socket.emit(NEW_CHAT_MESSAGE_EVENT, { message, converstationId });
  };

  return (
    <Spin spinning={loading}>
      {data && (
        <div className="inbox_z">
          <Firend data={data?.data} setCurrentConverstation={setCurrentConverstation} />
          {currentConvertation && <Chatbox currentConvertation={currentConvertation} sendMess={sendMess} messages={messages} />}
        </div>
      )}
    </Spin>
  );
};

export default AuthenHoc(Inbox);
