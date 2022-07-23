import React from 'react'
import Code from '../assets/images/code.webp'

const Blog = () => {
  return (
    <>
      <section className="card">
        <div className="xl:flex xl:justify-between xl:gap-5">
          <div className="xl:w-1/2">
            <p className="text-gray-light-1">Recommended publication</p>

            <div className="flex justify-between gap-10 overflow-hidden lg:flex-none">
              <h1 className="mt-4 text-2xl font-medium text-gray-1 w-44">
                JavaScript var, let and const
              </h1>
            </div>

            <p className="mt-10 text-base font-medium lg:mt-6 text-gray-3">
              What do the key words <code>var</code>, <code>let</code> and
              <code>const</code> do?
              <br />
              <br />
              Both <code>let</code> and <code>var</code> can have their values
              changed after declaration and can be initialized without a value.
              Variables declared with <code>const</code> cannot change, and a
              value must be assigned when the variable is declared.
            </p>
          </div>

          <img
            loading="lazy"
            src={Code}
            className="rounded-xl mt-5 w-full xl:max-w-[50%]"
            alt="code"
          />
        </div>
        <a
          href="https://dev.to/fig781/javascript-var-let-and-const-2g57"
          target="_blank"
          className="block mt-6 underline text-primary dark:text-primary-dark"
        >
          dev.to
        </a>
      </section>
    </>
  )
}

export default Blog
