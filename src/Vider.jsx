import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import statsImg from "./assets/statsImg.png";
import StarIcon from '@mui/icons-material/Star';
function Vider() {
    return (
        <div style={{ width: "100%" }}>

            <Grid container>
                <Grid items xs={6} sm={12} md={6}>
                    <img src={statsImg} alt="img" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                </Grid>
                <Grid items xs={6} sm={12} md={6} sx={{ backgroundColor: "#182F53", height: "300px" }}>
                    <Box sx={{ margin: "20px" }}>
                        <StarIcon sx={{ height: "40px", width: "40px", color: "white" }} />
                        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>Vider for CA firms</Typography>
                        <Typography variant="paragraph" sx={{ color: "#FFFFFF91", marginTop: "10px", marginBottom: "20px" }}>
                            Vider is a technology-driven smart discovery and aggregator platform, offering services that cover the
                            current needs of individuals,
                            startups and established businesses in India.</Typography>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default Vider
