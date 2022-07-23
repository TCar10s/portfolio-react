import React from 'react'

import { Developer } from '../../utils/interfaces/card.interface'

import './PersonalDetails.css'

const PersonalDetails = (props: { developer: Developer }) => {
  const { developer } = props
  console.log(developer)

  return (
    <>
      <figure className="card">
        <div className="md:flex md:max-w-none md:h-80">
          <img src={developer.image} alt="Person" className="rounded-2xl" />

          <figcaption className="details__figcaption">
            <div className="">
              <div className="details__title">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-2">
                    {developer.name}
                  </h1>
                  <p className="font-medium text-gray-3">{developer.role}</p>
                </div>

                <div className="mt-4 font-medium text-gray-2 md:mt-0">
                  <p className="flex items-center gap-3">
                    <span className="material-icons" translate="no">
                      mail
                    </span>
                    {developer.email}
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="material-icons" translate="no">
                      phone
                    </span>
                    {developer.phone}
                  </p>
                </div>
              </div>

              <blockquote className="font-medium mt-7 text-gray-3">
                {developer.description}
              </blockquote>
            </div>

            <div className="flex items-end justify-end">
              <div className="flex mt-4 space-x-6 xl:justify-center xl:mt-0">
                <a
                  href="https://www.linkedin.com/in/carlos-lobos/"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  title="LinkedIn"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 50 50"
                    width="20px"
                    height="20px"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/TCar10s"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  title="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default PersonalDetails
