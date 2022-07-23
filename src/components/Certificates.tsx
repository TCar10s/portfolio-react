import React from 'react'

const Certificates = ({ certificates }: { certificates: any[] }) => {
  return (
    <>
      <section className="card">
        <h1 className="text-2xl text-gray-2">Certificates</h1>

        <ul className="grid md:grid gap-x-5 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <li className="flex mt-12" key={index}>
              <a href={certificate.link} target="_blank">
                <img
                  loading="lazy"
                  src={certificate.image}
                  className="rounded-lg h-14 w-h-14"
                  alt="certificate"
                />
              </a>
              <div className="w-9/12 ml-8 md:w-4/5">
                <p className="text-sm text-gray-2">{certificate.expedition}</p>
                <h2 className="font-semibold leading-10 text-gray-1">
                  {certificate.name}
                </h2>

                <p className="mt-5">
                  <span className="font-medium text-gray-3">
                    {certificate.description}{' '}
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

export default Certificates
