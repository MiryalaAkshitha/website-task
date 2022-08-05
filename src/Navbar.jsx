import React from 'react';
import logo from "./assets/viderlogo.png";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
    const [show, setShow] = useState(false)
    const clickHandler = () => {
        setShow(!show)
    }
    const SideBar = () => {
        return (
            <>
                <div sx={{ transition: "0.5s" }}>
                    <CancelIcon sx={{ color: "black", position: "fixed", cursor: "pointer", right: "150px", top: "20px", zIndex: "3" }} onClick={clickHandler} />
                    <ul className="sidebar-ul" style={{
                        display: "flex", flexDirection: "column", position: "absolute", top: "0px", zIndex: "2",
                        backgroundColor: "#D3D3D3", marginTop: "15px", color: "white", listStyleType: "none", height: "100vh", right: "0px", gap: "20px", justifyContent: "space-between", padding: "15px", alignItems: "center",
                    }}>
                        < img src={logo} alt="logo" />
                        <a href="https://vider.in/services/"><li>Services</li></a>
                        <a href="https://vider.in/about-vider/"><li>Aboutvider</li></a>
                        <a href="https://vider.in/comparisons/"><li>Comparisons</li></a>
                        <a href="https://vider.in/vider-features/"><li>Features</li></a>
                        <a href="https://vider.in/#"><li>Blog</li></a>
                        <a href="https://vider.in/vider-calendar/"><li>ViderCalender</li></a>
                        <a href="https://vider.in/archives/"><li>Archives</li></a>
                    </ul>
                </div>
            </>
        )
    }
    return (
        <Container>
            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", marginBottom: "10px" }}> */}
            <Grid container spacing={2} style={{
                display: "flex",
                gap: "40px",
                // alignItems: "center",
                // justifyContent: "center",
                margin: "20px"
            }}>
                <Grid item xs={4}>
                    < img src={logo} alt="logo" />
                </Grid>
                {/* <div> */}
                <Grid item xs={6}>
                    <ul className="ul">

                        <a href="https://vider.in/services/"><li>Services</li></a>
                        <a href="https://vider.in/about-vider/"><li>Aboutvider</li></a>
                        <a href="https://vider.in/comparisons/"><li>Comparisons</li></a>
                        <a href="https://vider.in/vider-features/"><li>Features</li></a>
                        <a href="https://vider.in/#"><li>Blog</li></a>
                        <a href="https://vider.in/vider-calendar/"><li>ViderCalender</li></a>
                        <a href="https://vider.in/archives/"><li>Archives</li></a>


                    </ul >
                    <Grid item xs={8}>
                        <div className="menuIcon" style={{ position: "fixed", right: "20px", cursor: "pointer" }}><MenuIcon onClick={clickHandler} /></div>

                    </Grid>
                </Grid>
                {show && <SideBar />}
                {/* </div> */}
                {/* </div> */}
            </Grid>

        </Container >
    )
}

export default Navbar
