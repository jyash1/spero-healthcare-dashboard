import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, Stack } from '@mui/material';
import axios from 'axios';

const ServiceBar = ({ completed, ongoing, pending }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
            sx={{
                width: completed > 0 ? completed * 10 : 0,
                height: 20,
                backgroundColor: 'purple',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            }}
        >
            {completed > 0 && <Typography variant="body2">{completed}</Typography>}
        </Box>
        <Box
            sx={{
                width: ongoing > 0 ? ongoing * 10 : 0,
                height: 20,
                backgroundColor: 'lightblue',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
            }}
        >
            {ongoing > 0 && <Typography variant="body2">{ongoing}</Typography>}
        </Box>
        <Box
            sx={{
                width: pending > 0 ? pending * 10 : 0,
                height: 20,
                backgroundColor: 'salmon',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
            }}
        >
            {pending > 0 && <Typography variant="body2">{pending}</Typography>}
        </Box>
    </Box>
);

const ServiceDetails = ({tabIndex}) => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await axios.get('http://122.176.232.35:8008/web/Details_of_ServicesOngoingPendingCompleted/');
                const formattedData = response.data.map(item => {
                    let completed, ongoing, pending;

                    if (tabIndex === 0) { 
                        completed = item.data.total_completed_today;
                        ongoing = item.data.total_ongoing_today;
                        pending = item.data.total_pending_today;
                    } else if (tabIndex === 1) { 
                        completed = item.data.total_completed_this_month;
                        ongoing = item.data.total_ongoing_this_month;
                        pending = item.data.total_pending_this_month;
                    } else if (tabIndex === 2) { 
                        completed = item.data.total_completed_last_month;
                        ongoing = item.data.total_ongoing_last_month;
                        pending = item.data.total_pending_last_month;
                    }

                    return {
                        name: item.srv_name,
                        completed,
                        ongoing,
                        pending,
                    };
                });
                setServiceDetails(formattedData);
            } catch (error) {
                console.error('Error fetching service data:', error);
            }
        };

        fetchServiceData();
    }, [tabIndex]); 


    const filteredServices = serviceDetails.filter(service => {
        if (filter === 'completed') return service.completed > 0;
        if (filter === 'ongoing') return service.ongoing > 0;
        if (filter === 'pending') return service.pending > 0;
        return true;
    });

    return (
        <Card sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 600, mb: 2 }}>
                SERVICE DETAILS
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <Box display="flex" alignItems="center" onClick={() => setFilter('completed')} sx={{ cursor: 'pointer' }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: 'purple', mr: 1 }} />
                    <Typography variant="body2">Completed Services</Typography>
                </Box>
                <Box display="flex" alignItems="center" onClick={() => setFilter('ongoing')} sx={{ cursor: 'pointer' }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: 'lightblue', mr: 1 }} />
                    <Typography variant="body2">Ongoing</Typography>
                </Box>
                <Box display="flex" alignItems="center" onClick={() => setFilter('pending')} sx={{ cursor: 'pointer' }}>
                    <Box sx={{ width: 10, height: 10, backgroundColor: 'salmon', mr: 1 }} />
                    <Typography variant="body2">Pending</Typography>
                </Box>
            </Stack>

            <Grid container spacing={1}>
                {filteredServices.map((service, index) => (
                    <Grid item xs={12} key={index} sx={{ display: 'flex', gap: 4 }}>
                        <Typography variant="body2" sx={{ mb: 0.5 }}>
                            {service.name}
                        </Typography>
                        <ServiceBar
                            completed={service.completed}
                            ongoing={service.ongoing}
                            pending={service.pending}
                        />
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default ServiceDetails;
