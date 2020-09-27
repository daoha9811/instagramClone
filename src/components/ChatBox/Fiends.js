import React from "react";

import { Form, Input, Button, Checkbox, message } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { SearchOutlined } from "@ant-design/icons";

export default ({ data, setCurrentConverstation }) => {
  const currentUserId = sessionStorage.getItem('userId');
  return (
    <div className="Friends_z">
      <div className="Friends__header">
        <h6>Firends</h6>
        <SearchOutlined width="10" />
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
