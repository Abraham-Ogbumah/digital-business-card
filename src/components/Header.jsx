import React from "react";
import Abraham from "./Abraham.jpeg"
import abraham from "./abraham.png"

function Header() {
    return (
        <div className="profile-picture">
            <img src={abraham} alt="my-profile" />
        </div>
    )
}

export default Header