import React from 'react'

import { Sidebar } from '../../utils/interfaces/card.interface'

const Sidebar = ({skills, hobbies}: Sidebar) => {
  return (
    <>
      <section className="mb-5 card">
        <h1 className="text-lg font-bold text-gray-2">SKILLS</h1>

        <div className="mt-3">
          <ul className="flex flex-col mt-4">
            {skills.map((skill, index) => (
              <li className='flex mt-4' key={index}>
                <p className="inline w-3/4 md:w-1/2 text-gray-3">
                  {skill.name}
                </p>
                <div className="flex flex-col w-full ml-4">
                  <div className="w-full h-3.5 bg-gray-300 dark:bg-body-dark rounded-md">
                    <div 
                        className="flex items-center justify-center w-full h-full rounded-md bg-primary"
                        style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h1 className="text-2xl font-medium text-gray-2">Hobbies</h1>

        <div className="md:flex-column md:gap-10">
            <ul className="mt-5 md:w-full">
               {hobbies.map((hobbie, index) => (
                <li key={index}>
                    <img
                        loading="lazy"
                        src={hobbie.image}
                        alt="hobbie"
                        className="rounded-2xl bg-cover md:object-cover md:max-h-[176px] md:w-full"
                    />
                    <h2 className="mt-4 font-semibold text-gray-1">{ hobbie.name }</h2>
                    <p className="mt-2 mb-5 text-gray-3">{ hobbie.description }</p>
                </li>
               ))}
            </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar
