import React from "react";
import AboutArea from "./AboutArea";
import ButtonGroup from "./ButtonGroup";

function Bio() {
    return (
        <div className="bio-content">
            <div className="description">
                <h1>Abraham Ogbumah</h1>
                <p>Frontend Developer</p>
                <small>No personal website yet</small>
            </div>
            <ButtonGroup />
            <AboutArea
                header="About"
                description="I am a frontend developer with a particular interest in bringing simplicity to life and automating daily tasks. I try to keep up with best practices, and am always looking for new things to learn."
            />

            <AboutArea
                header="Interests"
                description="Food expert. Reader.Bacon buff. Entrepreneur. Travel geek (Currently broke to travel). I just love helping people. Coffee fanatic"
            />
        </div>
    )
}

export default Bio;