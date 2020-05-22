import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";



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
