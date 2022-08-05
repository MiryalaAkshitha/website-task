import React from 'react';
import FooterLogo from "./assets/footerlogo.png";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Box } from "@mui/material";


// function Footer() {
//     return (
//         <Grid container justifyContainer="center" alignItems="center" >

//             <Grid item sm={12} md={3}> </Grid>
//         </Grid>
//     )
// }


function Footer() {
    return (
        <Grid container justifyContent="center" >

            <div style={{ width: "100%", backgroundColor: "black", color: "white", }}>
                <Box style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                    <img src={FooterLogo} alt="logo" />
                    <p>Sign up for our newsletter for updates on Due dates and other details</p>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={2} style={{ display: "flex", flexDirection: "column", marginTop: "25px" }}>

                        <div><EmailIcon /> support@vider.in</div>
                        <div><PhoneIcon />91 9171 121 121, +91 81211 81212</div>
                        <div><LocationOnIcon />Flat No -101 Kacham Diamond Residency , Praga Tools Colony, Suchitra , Hyderabad - 500014</div>

                    </Grid>
                    <Grid item xs={2}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <h3>Direct Taxation</h3>
                            <ul style={{ listStyleType: "none" }}>
                                <li>Department of Revenue</li>
                                <li>CBDT</li>
                                <li>E-Filing</li>
                                <li>Traces</li>
                                <li>Reporting Portal</li>
                                <li>ITAT</li>
                                <li>Tax Information Network</li>



                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                            <h3>InDirect Taxation</h3>
                            <ul style={{ listStyleType: "none" }}>
                                <li>Department of Revenue</li>
                                <li>CBDT</li>
                                <li>E-Filing</li>
                                <li>Traces</li>
                                <li>Reporting Portal</li>
                                <li>ITAT</li>
                                <li>Tax Information Network</li>



                            </ul>
                        </div>

                    </Grid>
                    <Grid item xs={2}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                            <h3>Indian Compliance </h3>
                            <ul style={{ listStyleType: "none" }}>
                                <li>Department of Revenue</li>
                                <li>CBDT</li>
                                <li>E-Filing</li>
                                <li>Traces</li>
                                <li>Reporting Portal</li>
                                <li>ITAT</li>
                                <li>Tax Information Network</li>



                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                            <h3>Corporate Laws</h3>
                            <ul style={{ listStyleType: "none" }}>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>About</li>
                                <li>Partner with us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </Grid>
                    <div style={{ display: "flex", gap: "50px", justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Grid item xs={2}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                                <h3>Quick Links</h3>
                                <ul style={{ listStyleType: "none" }}>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>About</li>
                                    <li>Partner with us</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                                <h3>Follow us on Socials</h3>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <FacebookIcon />
                                    <InstagramIcon />
                                    <TwitterIcon />
                                    <LinkedInIcon />
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>




            </div>

        </Grid>

    )
}

export default Footer
