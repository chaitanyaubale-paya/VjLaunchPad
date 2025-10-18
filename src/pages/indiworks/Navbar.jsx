import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 8 } }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#002D62' }}>
          VJ Yash One
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#002D62',
            borderRadius: '20px',
            textTransform: 'none',
            px: 3,
            fontWeight: 600,
          }}
        >
          Enquire Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
