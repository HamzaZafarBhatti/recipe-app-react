import Home from "./Home";
import React from 'react'
import Cuisine from './Cuisine'
import { Route, Routes, useLocation } from "react-router-dom";
import Search from "../components/Search";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes Location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cuisine/:type" element={<Cuisine />}></Route>
                <Route path="/searched/:search" element={<Search />}></Route>
                <Route path="/recipe/:name" element={<Recipe />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Pages