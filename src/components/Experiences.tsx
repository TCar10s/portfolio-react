import React from 'react'

import { Experience } from '../utils/interfaces/card.interface'

const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <>
      <section className="card ">
        <h1 className="text-2xl text-gray-2">Experiences</h1>

        <ul className="md:flex md:gap-10">
          {experiences.map((experience, index) => (
            <li className="flex mt-8" key={index}>
              <img
                loading="lazy"
                src={experience.logo}
                className="rounded-lg h-14 w-h-14"
                alt=""
              />
              <div className="w-9/12 ml-8 md:w-4/5">
                <h1 className="mb-1 text-xl font-semibold dark:text-white">
                  {experience.company}
                </h1>
                <p className="text-sm text-gray-2">{experience.time}</p>
                <h2 className="font-semibold leading-10 text-gray-1">
                  {experience.position}
                </h2>

                <p className="mt-3">
                  <span className="font-medium text-gray-3">
                    {experience.description}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Experiences
