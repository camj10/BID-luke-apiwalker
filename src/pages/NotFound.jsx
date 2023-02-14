import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error= useRouteError();
    return (
    <div className='container text-center'>
        <h1 className='mt-5'>Página no encontrada</h1>
        <p>{error.statusText || error.message}</p>
        <Link to="/">Ir al inicio</Link>
    </div>
    )
}

export default NotFound