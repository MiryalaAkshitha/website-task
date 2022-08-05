import React from 'react';
import { Grid, Container } from "@mui/material";
import imageOne from "./assets/viderplug.png";
import imageTwo from "./assets/plug2.png";
import imageThree from "./assets/plug3.png";
import imageFour from "./assets/plug4.jpg";
import imageFive from "./assets/plug5.png";
import imageSix from "./assets/plug6.png";
import imageSeven from "./assets/plug7.png";

function Plugs() {
    const imgArr = [
        imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageSix,
        imageSeven, imageSeven
    ]
    return (
        <Container>
            <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "60px", marginTop: "100px" }}>Smart Plugs</h2>
            <div style={{ display: "flex", gap: "100px" }} >
                <Grid container spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {imgArr.map((image) =>
                        <Grid item xs={12} md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img src={image} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                        </Grid>
                    )}


                    {/*                     
                    <Grid item xs={3}>
                        <img src={imageTwo} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>
                        <img src={imageThree} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>
                        <img src={imageFour} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>
                        <img src={imageFive} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>
                        <img src={imageSix} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>< img src={imageSeven} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <Grid item xs={3}>< img src={imageSeven} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                    </Grid>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={3}>< img src={imageSeven} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                        </Grid>
                        <Grid item xs={3}>< img src={imageSeven} alt="img" style={{ maxHeight: "150px", maxWidth: "150px" }} />
                        </Grid>
                    </div> */}
                </Grid>
            </div>

        </Container>
    )
}

export default Plugs
