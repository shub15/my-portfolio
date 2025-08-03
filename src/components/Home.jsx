import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            {/* <Projects /> */}
            <Contact />
        </div>
    )
}

export default Home