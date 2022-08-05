import React from 'react'
import { Card, Grid } from '@mui/material';
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export const MyTextCards = styled(Card)({
    elevation: "3",
    height: "150px",
    width: "100%",
    paddingLeft: "30px",
    // display: "flex"
    // boxShadow: "0px 0px 12px 12px white",
})
function WebsiteCards() {
    return (
        <Container >
            <Grid container spacing={2} columnSpacing={3} sx={{ marginTop: "30px" }}>
                <Grid item xs={12} sm={6} md={6}>
                    <MyTextCards style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                        <Typography variant="h6" style={{ color: "#182F53", paddingTop: "20px", fontWeight: "bold" }}>Our Vision</Typography>
                        <Typography paragraph sx={{ paddingTop: "10px" }}>Our Vision is to make every User Experience Smarter, Faster & Better</Typography>
                    </MyTextCards>

                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <MyTextCards style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                        <Typography variant="h6" style={{ color: "#182F53", paddingTop: "20px", fontWeight: "bold" }}>Our Mission</Typography>
                        <Typography paragraph sx={{ paddingTop: "10px" }}>Our Mission is to make Vider a one-stop solution for any Professional Need.</Typography>
                    </MyTextCards>
                </Grid>

            </Grid>
        </Container>
        // </Grid >
        // <div style={{ marginTop: "50px" }}>
        //     <Grid container spacing={2}>
        //         <Grid item xs={6}>
        //             <MyTextCards>
        //                 {/* <Card elevation={3} sx={{ height: "150px", width: "600px", paddingLeft: "30px" }}> */}
        //                 <Typography variant="h6" style={{ color: "#182F53", paddingTop: "10px", fontWeight: "bold" }}>Our Vision</Typography>
        //                 <Typography paragraph sx={{ paddingTop: "10px" }}>Our Vision is to make every User Experience Smarter, Faster & Better</Typography>
        //             </MyTextCards>
        //             {/* </Card> */}
        //         </Grid>

        //         <Grid item xs={6}>
        //             <MyTextCards>
        //                 <Typography variant='h6' style={{ color: "#182F53", paddingTop: "10px", fontWeight: "bold" }}>Our Mission</Typography>
        //                 <Typography paragraph style={{ paddingTop: "10px" }}>Our Mission is to make Vider a one-stop solution for any Professional Need</Typography>
        //             </MyTextCards>
        //         </Grid>
        //     </Grid>

        // </div >
    )
}

export default WebsiteCards
