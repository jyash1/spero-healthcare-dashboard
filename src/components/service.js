import React, { useState } from 'react';
import { Box, Typography, Grid, Card, Stack } from '@mui/material';

const serviceDetails = [
    { name: "Physician service (MD)", completed: 1, ongoing: 0, pending: 0 },
    { name: "Healthcare attendants", completed: 10, ongoing: 0, pending: 18 },
    { name: "Respiratory care", completed: 5, ongoing: 0, pending: 0 },
    { name: "Nurse", completed: 4, ongoing: 0, pending: 7 },
    { name: "Physician assistant", completed: 5, ongoing: 0, pending: 0 },
    { name: "Physiotherapy", completed: 16, ongoing: 0, pending: 51 },
    { name: "Laboratory services", completed: 1, ongoing: 0, pending: 0 },
    { name: "Medical transportation", completed: 10, ongoing: 0, pending: 0 },
    { name: "Medical Equipment", completed: 10, ongoing: 0, pending: 0 },
    { name: "X - Ray", completed: 0, ongoing: 50, pending: 0 },
    { name: "Physician service (MBBS)", completed: 10, ongoing: 0, pending: 0 },

];

const ServiceBar = ({ completed, ongoing, pending }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
            sx={{
                width: completed > 0 ? completed * 5 : 0,
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
                width: ongoing > 0 ? ongoing * 5 : 0,
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
                width: pending > 0 ? pending * 5 : 0,
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


const ServiceDetails = () => {
    const [filter, setFilter] = useState(null);

    const filteredServices = serviceDetails.filter(service => {
        if (filter === 'completed') return service.completed > 0;
        if (filter === 'ongoing') return service.ongoing > 0;
        if (filter === 'pending') return service.pending > 0;
        return true;
    });

    return (

        <Box>
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
        </Box>
    );
};

export default ServiceDetails;
