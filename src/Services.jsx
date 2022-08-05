import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MyOutlinedButton } from './Hero';
import { Card, Button, Grid } from "@mui/material";
import cardImg1 from "./assets/cardImg1.png";
import cardImg2 from "./assets/cardImg2.png";
import cardImg3 from "./assets/cardImg3.png";
import cardImg4 from "./assets/cardImg4.jpg";
import { Container } from "@mui/material";
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function MediaCards({ image }) {
    return (
        <Card sx={{ height: "450px", width: "300px" }}>
            <CardMedia
                component="img"
                height="140"
                // image={image}
                image={cardImg1}
                alt="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Partnership Firm Registration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Partnership firm registration in India is provided as per the Partnership Act, 1932.
                    Partnership firms are registered with the registrar of firms of your respective state.
                </Typography>
            </CardContent>

        </Card>
    );
}


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container>

                <Box sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "60px" }}>We Provide a wide Range of Services</h2>
                    <p style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "40px" }}>A platform that provides a wide range of services to clients by connecting
                        them to a network of professionals building trust and transparency. .</p>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Business Setup" {...a11yProps(0)} />
                            <Tab label="Tax & Compliance" {...a11yProps(1)} />
                            <Tab label="Trademark & IP" {...a11yProps(2)} />
                            <Tab label="Property Services" {...a11yProps(3)} />

                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <MediaCards />
                            <MediaCards image={cardImg2} />
                            <MediaCards />
                            <MediaCards />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div style={{ display: "flex", gap: "20px" }}>

                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div style={{ display: "flex", gap: "20px" }}>

                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div style={{ display: "flex", gap: "20px" }}>

                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                            <MediaCards />
                        </div>
                    </TabPanel>
                    <MyOutlinedButton>click here</MyOutlinedButton>
                </Box>
            </Container>
        </>
    );
}

