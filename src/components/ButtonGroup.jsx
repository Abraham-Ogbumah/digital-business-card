import React from "react";
import Button from "./Button";
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ButtonGroup() {
    return (
        <div className="bgGroup">
            <a href="mailto:ab.ogbumah@gmail.com" className="emailBTN">
                <Button
                    cname="button-white"
                    icon={<FaEnvelope />}
                    text="Email"
                />
            </a>
            
            <a href="https://www.linkedin.com/feed/" className="linkedInBTN">
                <Button
                cname="button-blue"z
                icon={<FaLinkedin />}
                text="LinkedIn"    
                />
            </a>
        </div>
    )
}

export default ButtonGroup