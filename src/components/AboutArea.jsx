import React from "react";

function AboutArea(props) {
    return (
        <div className="bioSection">
            <h3>{props.header}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default AboutArea;