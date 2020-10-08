import React from 'react'
import { Routes, Route, Outlet } from 'react-router'
import Footer from '../footer'
import Menu from '../menu'

const Layout =()=> {
    return (
        <div >
        <Routes>
        <Route path="/*" element={<Menu />}/>
        <Route path="/*" element={<Footer />}/>
        </Routes>
        <div>
            <Outlet/>
            <Footer/>
        </div>
            
        </div>
    )
}

export default Layout
