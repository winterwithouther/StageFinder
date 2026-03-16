import React from 'react'
import Home from "./pages/Home.jsx"
import LocationPage from "./pages/LocationPage.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/locations/:location" element={<LocationPage/>}/>
            </Routes>
        </Router>
    )
}

export default App