import React from 'react'
import { Button, Grid } from '@mui/material';
import Container from "@mui/material/Container";
import { Stack, Typography } from '@mui/material';
import { styled } from "@mui/system";
import viderHero from "./assets/viderHero.png";

export const MyOutlinedButton = styled(Button)({
    color: "#E44652",
    border: "1px solid #E44652",
    borderRadius: "0.2rem",
});

function Hero() {
    return (
        <Container>
            <Grid container style={{ marginTop: "200px" }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#182F53" }}>Smarter,Faster & Better Profesional Services Launching soon.</Typography>
                    <Typography paragraph style={{ marginBottom: "70px" }}>VIDER is a technology-driven smart discovery and aggregator platform,
                        that offers services addressing the growing needs of Professionals &
                        Clients in enhancing businesses in India.</Typography>
                    <Stack direction="row" spacing="15px">
                        <Button variant="contained" fullWidth
                            style={{ backgroundColor: "#E44652", color: "white" }}>Get Started</Button>
                        <MyOutlinedButton fullWidth >Contact us</MyOutlinedButton>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={viderHero} alt="hero" width="100%" />

                </Grid>
            </Grid>
        </Container>
        // <div style={{ display: "flex", marginTop: "70px" }}>
        //     <div >
        //         <div style={{ marginTop: "20px" }}>
        //             <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "50px", color: "#182F53" }}>Smarter,Faster & Better Profesional Services Lauching soon.</Typography>
        //             <Typography paragraph style={{ marginTop: "40px", marginBottom: "20px" }}>VIDER is a technology-driven smart discovery and aggregator platform,
        //                 that offers services addressing the growing needs of Professionals &
        //                 Clients in enhancing businesses in India.</Typography>
        //         </div>
        //         <Stack direction="row" spacing="15px">
        //             <Button variant="contained"
        //                 style={{ backgroundColor: "#E44652", color: "white", width: "50%" }}>Get Started</Button>
        //             {/* <Button variant="outlined" style={{ color: "#E44652", border: "1px solid #E44652" }}>Outlined</Button> */}
        //             <MyOutlinedButton sx={{ width: "50%" }}>Contact us</MyOutlinedButton>
        //         </Stack>
        //     </div>
        // </div>
    )
}

export default Hero
