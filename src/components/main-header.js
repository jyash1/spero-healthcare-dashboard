// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Select, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MainHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1abc9c' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Spero Home Healthcare Services
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Welcome, Management Dashboard</Typography>
          <IconButton>
            <AccountCircleIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
