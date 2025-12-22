import React from 'react'
import Hero from './Hero'
import WorkExperience from './WorkExperience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Hero />
            <WorkExperience />
            <Projects />
            <Skills />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default Home