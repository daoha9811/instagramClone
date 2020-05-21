import React, { useState, useEffect } from "react";
import { Upload, Button, message } from "antd";

import { UploadOutlined } from "@ant-design/icons";

export default props => {
  const { changeApi } = props;

  const token = sessionStorage.getItem("token") || "";

  const onChange = ({ file }) => {
    const key = "postUpload";

    if (file.status == "uploading") {
      message.loading({ content: "Uploading...", key });
    }

    if (file.status == "done") {
      if ((file.response.status = "success")) {
        message.success({ content: "Upload thanh cong", key });
        changeApi("post-upload");
        return;
      }
      if (file.response.errors) {
        message.errors({ content: "Upload that bai", key });
        return;
      }
    }
  };

  return (
    <Upload
      onChange={onChange}
      action="https://snowy-cuboid-vulcanodon.glitch.me/api/post/upload"
      method="post"
      name="post"
      headers={{
        authorization: `Bearer ${token}`
      }}
    >
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
  );
};
