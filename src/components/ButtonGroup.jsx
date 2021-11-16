import React from "react";
import Button from "./Button";
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ButtonGroup() {
    return (
        <div className="bgGroup">
            <Button
                cname="button-white"
                icon={<FaEnvelope />}
                text="Email"
            />
            
            <Button
            cname="button-blue"
            icon={<FaLinkedin />}
            text="LinkedIn"    
            />
        </div>
    )
}

export default ButtonGroup