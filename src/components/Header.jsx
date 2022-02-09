import React from "react";
import ReactDom from "react-dom";

function header(props) {
    return <div className="heading">
        <h1><span>{props.heading}</span></h1>
    </div>
}
export default header;