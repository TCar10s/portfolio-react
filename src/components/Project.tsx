import React from 'react'

import { ProjectProps } from '../utils/interfaces/card.interface'

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <figure className="card">
      <img
        loading="lazy"
        src={project.image}
        alt="Person"
        className="rounded-xl"
      />

      <figcaption>
        <div className="mt-4">
          <div>
            <h1 className="text-sm font-medium text-gray-2">
              {project.technologies}
            </h1>
            <p className="mt-4 text-2xl font-medium text-gray-1 bg-g">
              {project.name}
            </p>
          </div>
        </div>

        <blockquote className="mt-3 font-medium text-gray-3">
          {project.description}
        </blockquote>

        <div className="mt-8 mb-3">
          <a
            className="btn btn-primary"
            href={project.demo}
            target="_blank"
            translate="no"
          >
            Demo
          </a>
          {project.showCode && (
            <a
              className="ml-3 btn btn-secondary"
              href={project.code}
              target="_blank"
            >
              Code
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  )
}

export default Project
