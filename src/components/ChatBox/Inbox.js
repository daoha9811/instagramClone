import React from "react";

import { Form, Input, Button, Checkbox, message } from "antd";

import Chatbox from "./Chatbox";
import Firend from "./Fiends";
import "./inbox.css";

export default () => {
    return(
        <div className="inbox_z">
            <Firend/>
            <Chatbox/>
        </div>
    );
}