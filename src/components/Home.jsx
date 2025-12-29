import React from 'react'
import Hero from './Hero'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Achievements from './Achievements'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Hero />
            <WorkExperience />
            <Education />
            <Projects />
            <Skills />
            <Achievements />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Home