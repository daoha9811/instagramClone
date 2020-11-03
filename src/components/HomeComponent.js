import React, { useState, useEffect, useCallback } from "react";
import EmptyImg from "../assets/images/empty.svg";
import { getAllFollowPost } from "../service";
import { useRequest } from "@umijs/hooks";
import AuthenHoc from "./AuthenHoc";
import HomePostComponent from "./HomePostComponent";
import "../assets/Css/HomeComponent.css";

const HomePage = () => {
  const asyncGetFollowPost = useRequest(getAllFollowPost, {
    manual: true,
  });

  useEffect(() => {
    asyncGetFollowPost.run();
  }, []);

  const renderPost = useCallback(
    (posts) => {
      return posts?.map((post) => <HomePostComponent post={post} />);
    },
    [asyncGetFollowPost?.data]
  );

  return <div>
      {
        asyncGetFollowPost?.data && renderPost(asyncGetFollowPost?.data?.data)
       }
  </div>;
};

export default AuthenHoc(HomePage);
