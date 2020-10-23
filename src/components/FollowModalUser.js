import React, { useEffect } from "react";
import { useRequest } from "@umijs/hooks";
import { getUserInfor } from "../service";
import { Link } from "react-router-dom";
import { List, Avatar } from "antd";

const FollowModalUser = ({ id }) => {
  // console.log(id, 'here');
  const asyncGetUser = useRequest(getUserInfor, {
    manual: true,
  });

  useEffect(() => {
    asyncGetUser.run(id);
  }, []);

  return (
    <>
      {asyncGetUser?.data?.data?.user && (
        <List.Item.Meta
          avatar={
            <Avatar src={asyncGetUser?.data?.data?.user?.avatar} />
          }
          title={
            <Link to={`user/${id}`}>
              {asyncGetUser?.data?.data?.user?.name}
            </Link>
          }
          
        />
      )}
    </>
  );
};

export default FollowModalUser;
