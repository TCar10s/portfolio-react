import React, { useState } from 'react'

import {
  certificatesDev,
  developer,
  experiencesDev,
  hobbiesDev,
  skillsDev,
} from './api/data'
import Blog from './components/Blog'
import Certificates from './components/Certificates'
import Experiences from './components/Experiences'
import PersonalDetails from './components/PersonalDetails/PersonalDetails'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar/Sidebar'
import ToggleTheme from './components/ToggleTheme'
import {
  Developer,
  Experience,
  Hobbie,
  Skill,
} from './utils/interfaces/card.interface'

function Portfolio() {
  const [dev] = useState<Developer>(developer)
  const [skills] = useState<Skill[]>(skillsDev)
  const [hobbies] = useState<Hobbie[]>(hobbiesDev)
  const [experiences] = useState<Experience[]>(experiencesDev)
  const [certificates] = useState<Experience[]>(certificatesDev)

  return (
    <>
      <div className="flex items-center justify-end mb-5">
        <ToggleTheme/>
      </div>

      <div className="grid gap-5 grid-areas-slim sm:grid-areas-medium xl:grid-areas-wide">
        <div className="grid-in-details">
          <PersonalDetails developer={dev} />
        </div>
        <div className="grid-in-sidebar">
          <Sidebar skills={skills} hobbies={hobbies} />
        </div>

        <div className="grid-in-main">
          <Blog />
          <div className="mt-5"></div>
          <Experiences experiences={experiences} />
        </div>

        <div className="grid-in-certificates">
          <Certificates certificates={certificates} />
        </div>

        <div className="grid-in-projects">
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Portfolio
