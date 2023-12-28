import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex   m-5'>
      <div className='container mt-5 px-5 mx-auto my-8'>
        <h1 className='text-center'>Oops!</h1>
        <div className='text-center'>
          <h2 className='mb-8 fw-bold  '>
            <span >Error</span> {status || 404}
          </h2>
          <p className=' fw-semibold  mb-5'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-5 py-3 fw-semibold rounded '
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ErrorPage
