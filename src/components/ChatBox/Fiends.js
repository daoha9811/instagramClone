import React from "react";

import { Form, Input, Button, Checkbox, message } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { FormOutlined } from "@ant-design/icons";

export default ({ data, setCurrentConverstation }) => {
  const currentUserId = sessionStorage.getItem('userId');
  return (
    <div className="Friends_z">
      <div className="Friends__header">
        <div className="Text_center Bold">Firends</div>
        <FormOutlined width="10" style={{fontSize: '20px', cursor: "pointer"}} />
      </div>
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
