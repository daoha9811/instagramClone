import React from "react";
import { Menu, Row, Col } from "antd";

export default props => {
  const { routePaths } = props;

  const paths = routePaths.map((routepath, index) => {
    return <Menu.Item style={{borderBottom: "none"}} key={index}>{routepath.component}</Menu.Item>;
  });

  return (
    <div className="nav-bar">
      <Row align="middle">
        <Col offset={4} span={4}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram"
          />
        </Col>
        <Col lg={{ offset: 8 }} md={{ offset: 4 }} xs={{ offset: 0 }}>
          <Menu mode="horizontal">{paths}</Menu>
        </Col>
      </Row>
    </div>
  );
};
