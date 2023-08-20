import React from "react"
import photo from "../../public/assets/Group_77.png"

function About() {
    return ( 
        <section className="hero">
            <img src={photo} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default About