import React from 'react'
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import WebsiteCards from './WebsiteCards.jsx';
import Products from "./Products";
import Plugs from "./Plugs.jsx";
import Benefits from "./Benefits";
import Differentiators from './Differentiators.jsx';
import Vider from "./Vider";
import BasicTabs from './Services.jsx';
import Home from "./Home";
import Banner from "./Banner";
import Footer from "./Footer.jsx";
import Footer1 from "./Footer1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTask from './App.js';
function Website() {
    return (
        <>
            <>
                <Navbar />
                <Hero />
                <WebsiteCards />
                <Products />
                <Plugs />
                <Benefits />
                <Differentiators />
                {/* <Vider /> */}
                {/* <BasicTabs /> */}
                <Home />
                <Banner />
                <Footer1 />

            </ >
        </>

    )
}

export default Website
