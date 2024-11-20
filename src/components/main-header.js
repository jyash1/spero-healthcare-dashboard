// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MainHeader = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1abc9c' }}>
      <Toolbar sx={{ display: { md: 'flex' }, flexDirection: { md: "row", xs: "column" }, justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Spero Home Healthcare Services
          </Typography>
        </Box>
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
