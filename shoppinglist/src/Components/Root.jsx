import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./Pages/Nav";
import Home from "./Pages/Home";
import List from "./Pages/List";
import Recipes from "./Pages/Recipes";
import Login from "./Pages/Login";
// import NoMatch from "./Pages/NoMatch";

export default function Root() {
    return (
        <Router>
            <div className="container">
                <NavigationBar/>
                <div className='content'>
                    <Routes>
                        <Route  path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route  path="/login" element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route  path="/recipes" element={<Recipes />} />
                    </Routes>
                    <Routes>
                        <Route  path="/list" element={<List />} />
                    </Routes>
                    {/*<Routes>*/}
                    {/*    <Route path="*" element={<NoMatch />} />*/}
                    {/*</Routes>*/}
                </div>
            </div>
        </Router>
    )
}