import React, { useEffect, useState } from 'react'

import { projectsDev } from '../api/data'
import { ProjectProps } from '../utils/interfaces/card.interface'
import FilterProjects from './FIlterProjects'
import Project from './Project'

const Projects = () => {
  const [termFilter, setTermFilter] = useState<string>('All')
  const [projects, setProjects] = useState<ProjectProps[]>(projectsDev)

  useEffect(() => {
    if (termFilter === 'All') return setProjects(projectsDev)
    
    setProjects(
      projectsDev.filter((project) =>
        project.technologies.includes(termFilter),
      ),
    )
  }, [termFilter])

  return (
    <>
      <FilterProjects setTermFilter={setTermFilter} totalProjects={projects.length} />

      <ul className="mt-5 grid-auto-fill">
        {projects.map((project, index) => (
          <li key={index}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projects
