import React from "react";


function Button(props) {
    return (
        <div className={`button ${props.cname}`}>
            <div>{props.icon}</div>
            <p>{props.text}</p>
        </div>
    )
}

export default Button