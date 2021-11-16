import React from "react"
import { FaFacebookSquare} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <a href="https://twitter.com/theRealhaybee?t=ToKQSTvm5mfHJ5eJ3oKqfw&s=08"><FaTwitterSquare className="icon"/></a>
                <a href="https://www.facebook.com/abraham.ogbumah/"><FaFacebookSquare className="icon"/></a>
                <a href="https://www.instagram.com/ogbumah_a/"><FaInstagram className="icon"/></a>
                <a href="https://github.com/Abraham-Ogbumah"><FaGithubSquare className="icon"/></a> 
            </div>
        </div>
    )
}

export default Footer;