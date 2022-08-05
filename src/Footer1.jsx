import { Typography, Box, Grid, Container, Stack } from "@mui/material";
import React from "react";
import FooterCard from "./FooterCard";
import footerLogo from "./assets/footerlogo.png";
// import Address from "./Address";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";


function FolderList() {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                backgroundColor: "transparent",
                color: "#FFFFFF",
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EmailIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Support@vider.in" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CallIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="90000000009 91119222339" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PersonPinCircleIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="LeeWay WorkSpace Kondapur" />
            </ListItem>
        </List>
    );
}


const Footer = () => {
    return (
        <div
            id="footer"
            style={{
                marginTop: 20,
                paddingTop: 35,
                paddingBottom: 35,
                width: "100%",
                backgroundColor: "#000000",
                overflowX: "hidden",
            }}
        >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={footerLogo}
                            width="150px"
                            height="50px"
                            alt="viderFooter"
                            Style={{ marginLeft: 50 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body" textAlign="center" color="#FFFFFF">
                            Sign up for our newsletter for updates on Due dates and other
                            details
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ flexGrow: 1, marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <FooterCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterCard />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FooterCard />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    // spacing={1}
                    mt="30px"
                >
                    <Grid item xs={12} md={6}>
                        <FolderList />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FooterCard />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h6" color="#FFFFFF" gutterBottom>
                                Follow Us On Social Media
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={4}
                                style={{ marginTop: "10px", color: "#FFFFFF" }}
                            >
                                <FacebookIcon />
                                <WhatsAppIcon />
                                <InstagramIcon />
                                <TwitterIcon />
                            </Stack>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Footer;