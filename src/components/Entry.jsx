import React from "react";
import ReactDom from "react-dom";

function Entry(props) {
    return <div className="entry">
        <h1>{props.emoji}</h1>
        <dl>
            <dt>
                {props.name}
            </dt>
            <dd>
                {props.description}
            </dd>
        </dl>
    </div>
}

export default Entry;