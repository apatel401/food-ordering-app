import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorHandling() {
    const {status, statusText} = useRouteError();

  return (
    <div>
        <h1> {status} : {statusText} (Handling error using component)</h1>
        <h2>Sorry, could not find a page you were looking for.</h2>
    </div>
  )
}

export default ErrorHandling