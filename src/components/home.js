import React, { useState } from 'react';
import { Grid, Card, Typography, Box, Tabs, Tab, Select, MenuItem } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import MainHeader from './main-header';
import ServiceDetails from './service';

const HomePage = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const tabStyles = (index) => ({
        backgroundColor: tabIndex === index ? "#6AA5EB" : "#fff",
        color: tabIndex === index ? "#fff !important" : "#000",
        borderRadius: tabIndex === index ? 2 : 2
    });


    const serviceData = [
        { name: 'Completed Services', value: 16 },
        { name: 'Ongoing', value: 0 },
        { name: 'Pending', value: 84 },
    ];

    const professionalAvailability = [
        { name: 'ASSIGN', value: 58 },
        { name: 'UN ASSIGN', value: 227 },
    ];

    const paymentData = [
        { name: 'Payment', payment: 2500 },
    ];

    return (
        <Box sx={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
            <MainHeader />
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, background: "#6AA5EB", borderRadius: 2, p: 1 }}>
                    <Box>
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            indicatorColor="none"
                            sx={{ backgroundColor: '#fff', borderRadius: 2, p: 1 }}
                        >
                            <Tab label="Today" sx={tabStyles(0)} />
                            <Tab label="This Month" sx={tabStyles(1)} />
                            <Tab label="Last Month" sx={tabStyles(2)} />
                        </Tabs>
                    </Box>
                    <Box sx={{ position: 'relative', margin: "auto", }}>
                        <Select variant="outlined" defaultValue="" displayEmpty sx={{ backgroundColor: '#fff', borderRadius: 1, paddingX: 12 }}>
                            <MenuItem value="">Select Hospital</MenuItem>
                        </Select>
                    </Box>
                </Box>

                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={7} sx={{ display: 'flex', border: "1px solid grey", alignItems: 'center', p: 2, gap: 2, borderRadius: 5 }}>
                        {['Total Enquiry', 'Converted', 'In follow up', 'Cancelled', 'Pending'].map((label, index) => (
                            <Grid item xs={12} md={1.8} key={index} sx={{ margin: "auto", }}>
                                <Card sx={{ p: 2, textAlign: 'center', color: 'white', borderRadius: 4, backgroundColor: ['#6a0dad', '#ff6347', '#87cefa', '#ffdd57', '#4caf50'][index] }}>
                                    <Typography variant="body1">{label}</Typography>
                                    <Typography variant="h4">{[6, 2, 0, 0, 4][index]}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Card sx={{ p: 2, alignItems: 'center', gap: 2, borderRadius: 5, background: '#6AA5EB', color: "#FFF" }}>
                            <Typography variant="h6">PAYMENT COLLECTED</Typography>
                            <Typography variant="h5" sx={{ textAlign: 'center', mt: 1 }}>2500</Typography>
                            <ResponsiveContainer width="100%" height={50}>
                                <BarChart data={paymentData}>
                                    <Bar dataKey="payment" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                        <ServiceDetails />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ p: 2, backgroundColor: '#ff6347', color: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', borderRadius: 2 }}>
                            <Typography variant="h6">Service Till Date :</Typography>
                            <Typography variant="h6">259198</Typography>
                        </Card>
                        <Box sx={{ mt: 2 }}>
                            <Card sx={{ p: 2 }}>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>TOTAL SERVICES</Typography>
                                <ResponsiveContainer width="100%" height={260}>
                                    <PieChart>
                                        <Pie data={serviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                            <Cell fill="#1976d2" />
                                            <Cell fill="#ffdd57" />
                                            <Cell fill="#ff5252" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>Total Services: 100</Typography>
                            </Card>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ display: 'flex' }}>
                                {['In process', 'Pending'].map((label, index) => (
                                    <Box key={index} sx={{ width: "100%" }}>
                                        <Card sx={{ p: 2, textAlign: 'center', backgroundColor: [index], color: ['#8bc34a', '#4caf50'] }}>
                                            <Typography variant="h6" sx={{ color: '#000' }}>{[0, 97140][index]}</Typography>
                                            <Typography variant="h6">{label}</Typography>
                                        </Card>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <Card sx={{ p: 2 }}>
                                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                                        PROFESSIONALS AVAILABILITY
                                    </Typography>
                                    <ResponsiveContainer width="100%" height={260}>
                                        <PieChart>
                                            <Pie
                                                data={professionalAvailability}
                                                dataKey="value"
                                                nameKey="name"
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                labelLine={false}
                                            >
                                                <Cell fill="#6495ED" />
                                                <Cell fill="#FF7F7F" />
                                            </Pie>
                                            <Legend
                                                layout="horizontal"
                                                verticalAlign="bottom"
                                                align="center"
                                                iconType="circle"
                                                formatter={(value, entry) => (
                                                    <span style={{ color: entry.color, fontSize: 14 }}>
                                                        {value === "ASSIGN" ? "ASSIGN 58" : "UN ASSIGN 227"}
                                                    </span>
                                                )}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomePage;
