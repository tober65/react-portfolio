import React from "react";
import photo from "../assets/images/linkedin_photo.jpg"
import resume from "../assets/resume.pdf"

const Infopage = () => {
return <div className="container">
        <h1>About Me</h1>
        <img className="float-left" alt="Timothy Ober" src={photo} />
        <p>I am a software engineer with 8 years of experience. I have spent the past 6 years semi-retired, so am taking
            a software bootcamp to dust off old skills and hopefully learn some new ones.</p>
        <p><a href={resume}>Resume</a></p>
      </div>
}

export default Infopage;