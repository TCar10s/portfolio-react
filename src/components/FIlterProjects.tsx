import React from 'react'
import { IFilterProject } from '../utils/interfaces/card.interface'

const FilterProjects: React.FC<IFilterProject> = ({ setTermFilter, totalProjects }) => {
  const buttons: string[] = [
    'Angular',
    'Responsive',
    'DevChallenge',
    'Games',
    'All',
  ]

  return (
    <section className="card">
      <h1 className="mb-5 text-2xl text-gray-1">Projects ({totalProjects})</h1>
      <ul className="flex flex-wrap gap-3">
        {buttons.map((textButton, index) => (
          <li key={index}>
            <button
              className="btn-filter"
              onClick={() => setTermFilter(textButton)}
            >
              {textButton}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FilterProjects
