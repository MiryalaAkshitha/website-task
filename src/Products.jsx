import React from 'react';
import { Card, Grid, Typography, Container } from '@mui/material';
import { MyTextCards } from './WebsiteCards';


const Products = () => {
    const productsArr = [{
        id: 1,
        title: "ATOM By Vider",
        desc: " Intelligently designed and customizable practice management solution which provides the best user experience with dedicated features, integrations & trackers."
    },
    {
        id: 2,
        title: "PRISM by Vider",
        desc: "A Platform that provides a wide range of services to clients by connecting them to a network of professionals building trust and transparency"
    },
    {
        id: 3,
        title: "PRISM by Vider",
        desc: "A Platform that provides a wide range of services to clients by connecting them to a network of professionals building trust and transparency"
    },
    {
        id: 4,
        title: "SPECTRUM by Vider",
        desc: "An integrative & interactive knowledge management system that provides a collection of various laws & judgements from the most credible sources, creating an intelligent medium for learning & research."
    },

    ]
    return (
        // <Container>
        //     <Grid container spacing={2} rowSpacing={6} columnSpacing={3}>
        //         {productsArr.map((product) =>
        //             <Grid item xs={6}>

        //                 <MyTextCards style={{ height: "200px", width: "100%" }}>
        //                 </MyTextCards>


        //             </Grid>
        //         )}

        //     </Grid>

        // </Container >



        <>
            <Container >

                <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "60px", marginTop: "100px" }}>OUR PRODUCTS</h2>

                <Grid container spacing={2} columnSpacing={3} rowSpacing={6} sx={{ marginTop: "30px" }}>
                    {productsArr.map((product) =>
                        <Grid item xs={12} sm={6} md={6} >
                            <MyTextCards style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                                <Typography variant='h6' style={{ color: "#182F53", fontWeight: "bold", paddingTop: "10px", paddingBottom: "10px" }}>{product.title}</Typography>
                                <Typography paragraph>{product.desc}</Typography>
                            </MyTextCards>

                        </Grid>
                    )}
                    {/* <Grid item xs={12} sm={6} md={6}>
                    <MyTextCards>
                        <Typography variant="h6" style={{ color: "#182F53", paddingTop: "20px", fontWeight: "bold" }}>Our Mission</Typography>
                        <Typography paragraph sx={{ paddingTop: "10px" }}>Our Mission is to make Vider a one-stop solution for any Professional Need.</Typography>
                    </MyTextCards>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <MyTextCards>
                        <Typography variant="h6" style={{ color: "#182F53", paddingTop: "20px", fontWeight: "bold" }}>Our Mission</Typography>
                        <Typography paragraph sx={{ paddingTop: "10px" }}>Our Mission is to make Vider a one-stop solution for any Professional Need.</Typography>
                    </MyTextCards>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <MyTextCards>
                        <Typography variant="h6" style={{ color: "#182F53", paddingTop: "20px", fontWeight: "bold" }}>Our Mission</Typography>
                        <Typography paragraph sx={{ paddingTop: "10px" }}>Our Mission is to make Vider a one-stop solution for any Professional Need.</Typography>
                    </MyTextCards>
                </Grid> */}

                </Grid>
            </Container>
        </>
    )
}
export default Products
