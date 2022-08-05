import React from 'react';
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import { MyOutlinedButton } from './Hero';
import differenceLogo from "./assets/viderDifferenceLogo.png";

function Differentiators() {
    return (
        <Container>
            <h3 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Our Key Diffferences</h3>
            <div>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={12} sm={12} md={6}>

                        <h3>Structured Task Management</h3>
                        <Typography variant="p" style={{ marginBottom: "20px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley</Typography>
                        <div>
                            <MyOutlinedButton sx={{ marginTop: "30px" }}>Learn More</MyOutlinedButton>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={differenceLogo} alt="logo" style={{ height: "700px", width: "700px" }} />
                    </Grid>

                </Grid>
            </div >
        </Container>

    )
}

export default Differentiators
