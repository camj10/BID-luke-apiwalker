import React from 'react'
import { Outlet } from 'react-router-dom'
import Busqueda from '../pages/Busqueda'
import '../styleVisual.css'
const Layout = () => {
    return (
        <>
            <Busqueda/>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Layout