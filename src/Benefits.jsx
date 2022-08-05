import React from 'react';
import { Grid, Container, Card } from "@mui/material";
import { Typography } from '@mui/material';
import logo1 from "./assets/benefits1.png";
import logo2 from "./assets/benefits2.png";
import logo3 from "./assets/benefits3.png";
import logo4 from "./assets/benefits4.png";
import logo5 from "./assets/benefits5.png";
import logo6 from "./assets/benefits6.png";
import logo7 from "./assets/benefits7.png";
import logo8 from "./assets/benefits8.png";
import logo9 from "./assets/benefits9.png";
import logo10 from "./assets/benefits10.jpeg";

function Benefits({ logo }) {
    const benefitsArr = [{
        id: 1,
        benefitsImg: { logo1 },
        benefitsTitle: "Info-Pro",
        benefitsDesc: "Info-Pro Form request information directly from the client so tasks can be completed before due dates."

    }, {
        id: 2,
        benefitsImg: { logo2 },
        benefitsTitle: "Milestones",
        benefitsDesc: "Real-time status check of task on Dashboard, Task Started/ Task Pending – awaiting for Client Data/ Task Pending"
    },
    {
        id: 3,
        benefitsImg: { logo3 },
        benefitsTitle: "Service Outsourcing",
        benefitsDesc: "outsourcing services to Vider Team.",

    }, {
        id: 4,
        benefitsImg: { logo4 },
        benefitsTitle: "Smart Plugs (API's)",
        benefitsDesc: "access to official govt. websites to provide better service to professionals by gathering client information"
    },

    {
        id: 5,
        benefitsImg: { logo5 },
        benefitsTitle: "Status Tracker (overall tasks wise)",
        benefitsDesc: "Data from a particular task/service is collected for all clients and to track and manage their tasks efficiently & effectively."
    },
    {
        id: 6,
        benefitsImg: { logo6 },
        benefitsTitle: "Atom X",
        benefitsDesc: "streamlining the above will result in saving fines payable to the concerned departments, as well as gain goodwill and reputation"
    },
    {
        id: 7,
        benefitsImg: { logo7 },
        benefitsTitle: "Audit Automation",
        benefitsDesc: "Auditors can use the auditing tool to perform their audits with ease and efficiency, consuming less time than expected."
    },
    {
        id: 8,
        benefitsImg: { logo8 },
        benefitsTitle: "Due-date Calendar",
        benefitsDesc: "Users can view due dates of all tasks, statutory deadlines and receive notifications as the due date approaches."
    },
    {
        id: 9,
        benefitsImg: { logo9 },
        benefitsTitle: "Lead Management",
        benefitsDesc: "Remote access allows professionals to grow their businesses and benefit their clients."
    },
    {
        id: 10,
        benefitsImg: { logo10 },
        benefitsTitle: "Discussion Forum & Updates",
        benefitsDesc: "User-friendly platform helps with all latest government laws at one place and interact with clients."
    },





    ]
    return (
        <Container>
            <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", marginBottom: "60px" }}>Benefits of using Vider Platform</h2>

            <Grid container spacing={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                {benefitsArr.map((benefit) =>
                    <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img src={logo1} alt="logo" style={{ height: "100px", width: "100px" }} />
                        <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
                            {benefit.benefitsTitle}
                        </Typography>
                        <Typography variant="p" sx={{ color: "#1212129c" }}>
                            {benefit.benefitsDesc}
                        </Typography>
                    </Grid>

                )}
            </Grid>
        </Container>
        //  )}







        // <Container>
        //     <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", marginBottom: "60px" }}>Benefits of using Vider Platform</h2>
        //     <Grid container spacing={6}>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo2} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Milestones
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Real-time status check of task on Dashboard, Task Started/ Task Pending – awaiting for Client Data/ Task Pending
        //             </Typography>


        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo2} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Milestones
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Real-time status check of task on Dashboard, Task Started/ Task Pending – awaiting for Client Data/ Task Pending
        //             </Typography>


        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo3} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Service Outsourcing
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 outsourcing services to Vider Team.
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo4} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Smart Plugs (API's)
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 access to official govt. websites to provide better service to professionals by gathering client information
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo5} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Status Tracker (overall tasks wise)
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Data from a particular task/service is
        //                 collected for all clients and to track and manage their tasks efficiently & effectively.
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo6} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Atom X
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 streamlining the above will result in saving fines payable to
        //                 the concerned departments, as well as gain goodwill and reputation
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo7} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Audit Automation
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Auditors can use the auditing tool to perform their
        //                 audits with ease and efficiency, consuming less time than expected.
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo8} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Due-date Calendar
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Users can view due dates of all tasks, statutory
        //                 deadlines and receive notifications as the due date approaches.
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        //             <img src={logo9} alt="logo" style={{ height: "100px", width: "100px" }} />
        //             <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                 Lead Management
        //             </Typography>
        //             <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                 Remote access allows professionals to grow their businesses and benefit their clients.
        //             </Typography>
        //         </Grid>
        //         <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

        //             <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        //                 <img src={logo10} alt="logo" style={{ height: "100px", width: "100px" }} />
        //                 <Typography variant="h6" sx={{ color: "#121212", marginBottom: '5px' }}>
        //                     Discussion Forum & Updates
        //                 </Typography>
        //                 <Typography variant="p" sx={{ color: "#1212129c" }}>
        //                     User-friendly platform helps with all latest government laws
        //                     at one place and interact with clients.
        //                 </Typography>
        //             </Grid>
        //         </div>

        //     </Grid>
        // </Container>
    )
}

export default Benefits
