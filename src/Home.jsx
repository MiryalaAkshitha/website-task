import React from 'react';
import homeImg from "./assets/homeImg.png";
import { Grid, container, Container, Box } from "@mui/material";


function Home() {
    return (


        //  <Grid container>
        //                 <Grid items xs={6} sm={12} md={6}>
        //                     <img src={statsImg} alt="img" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
        //                 </Grid>
        //                 <Grid items xs={6} sm={12} md={6} sx={{ backgroundColor: "#182F53", height: "300px" }}>
        //                     <Box sx={{ margin: "20px" }}>
        //                         <StarIcon sx={{ height: "40px", width: "40px", color: "white" }} />
        //                         <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", marginTop: "10px" }}>Vider for CA firms</Typography>
        //                         <Typography variant="paragraph" sx={{ color: "#FFFFFF91", marginTop: "10px", marginBottom: "20px" }}>
        //                             Vider is a technology-driven smart discovery and aggregator platform, offering services that cover the
        //                             current needs of individuals,
        //                             startups and established businesses in India.</Typography>
        //                     </Box>
        //                 </Grid>
        //             </Grid>















        //starting
        <Container>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <ul style={{ lineHeight: "2", display: "flex", flexDirection: "column", justifyContent: "center", height: "600px" }}>
                        <li style={{ fontWeight: "bold", lineHeight: "1.5", fontSize: "30px", listStyleType: "none" }}>Stand out unique in the market <br></br>with Vider Client Application</li>
                        <li>Accessible from any where and any time and get updates on Real-time basis.</li>
                        <li>On-Demand Professional Service with Live Tracking Facility.</li>
                        <li>Improve Customer & Professional Relationship through transparency.</li>
                        <li>Providing Instant Solutions and increases efficiency in the work management.</li>
                        <li>Hassle Free Monetary Transactions.</li>
                        <li>Reduced Friction and Increases Productivity.</li>
                    </ul>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img src={homeImg} alt="image" style={{ objectFit: "cover", width: "70%" }} />
                </Grid>
                {/* </Container> */}
            </Grid >
        </Container>
    )
}

export default Home
