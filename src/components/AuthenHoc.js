import React, { Component, useState, useEffect, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


export default HocComponent => (props) => {

  let history = useHistory();
  
  useEffect(() => {
    const token = sessionStorage.getItem("token") || "";
    if (!token) {
      history.push("/authen");
    }
  });

  return <HocComponent {...props} />;
};
