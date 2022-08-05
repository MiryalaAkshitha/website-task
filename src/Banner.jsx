import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerImg from "./assets/hands.png";

export const Banner = () => {
    return (
        <div id="benefits">
            <Container>
                <Grid container>
                    <Grid
                        item
                        sm={12}
                        md={7}
                        sx={{
                            textAlign: "center",
                            padding: "8px 16px",
                            backgroundColor: "#182F53",
                            height: "100%",
                            py: 7,
                        }}
                    >
                        <Typography variant="h4" gutterBottom style={{ color: "white" }}>
                            Assurance, Accurate & Affordable
                        </Typography>
                        <Typography gutterBottom variant="body2" style={{ color: "white" }}>
                            Our dream is to standardize the working style of professionals in
                            a automated manner to match it with the applicable laws in the
                            country. Thus, Vider was formed which integrates all the
                            professional services under one roof and enables real time
                            processing. We bring together the best and the brightest in
                            professional services.
                        </Typography>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item sm={4} xs={12}>
                                <Typography
                                    sx={{ color: "orange", fontWeight: "bold" }}
                                    variant="h4"
                                >
                                    5X
                                </Typography>
                                <Typography variant="caption" color="#FFFFFF">
                                    Increase in managing tasks and overall efficiency by using our
                                    feature - INFO-PRO
                                </Typography>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography
                                    sx={{ fontWeight: "bold", color: "#46D2E4" }}
                                    variant="h4"
                                >
                                    3X
                                </Typography>
                                <Typography variant="caption" color="#FFFFFF">
                                    Increase in Productivity and Faster Turnaround time for
                                    completion of a Task through our features - Reminders & E-Sign
                                </Typography>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography
                                    sx={{ color: "#46E483", fontWeight: "bold" }}
                                    variant="h4"
                                >
                                    10X
                                </Typography>
                                <Typography variant="caption" color="#FFFFFF">
                                    By Partnering with Microsoft as CSPP, Our cloud storage
                                    solution will increase efficiency and our product PRISM
                                    increases the scope of Professionals & Hence Increases
                                    revenue.{" "}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={5} xs={12}>
                        <Box
                            sx={{
                                height: "100%",
                                background: `url(${bannerImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                "@media (max-width: 768px)": {
                                    height: "300px",
                                },
                            }}
                        ></Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};


export default Banner;
