import React from 'react';
import { Box, Typography } from '@mui/material';

const DisclaimerComponent = () => {
  return (
    <Box
      sx={{
        width: {xs:'auto',md:'auto'},
        height: '100%',
        background: 'black',
        position: 'relative',
        padding: { xs: 1.5, md:3  }, // padding for mobile and desktop views
      }}
    >
      {/* DISCLAIMER Div */}
      <Typography
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: { xs: 15, sm: 20 }, // responsive font size
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '500',
          wordWrap: 'break-word',
          position: 'absolute',
          top: { xs: '14px', sm: '20px' }, // adjust top position for mobile
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        DISCLAIMER
      </Typography>

      {/* Information Text Div */}
      <Box
        sx={{
          width: 'auto',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          fontSize: { xs: 8, sm: 12, md: 15 }, // responsive font size
          fontFamily: 'Montserrat',
          fontWeight: '500',
          lineHeight: 1.5,
          wordWrap: 'break-word',
          marginTop: { xs: '50px', sm: '40px' }, // responsive margin
          px: { xs: 0, sm: 12 },
        }}
      >
        The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agent namely Sourabh Maruti Murkute. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Maharashtra Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
        <br />
        <br />
        Privacy Policy
        <br />
        <br />
        Terms & Conditions
        <br />
        <br />
        Agent RERA: A52100043330
        <br />
        <br />
        Gujrat Colony, Kothrud, Pune, Maharashtra 411038
        <br />
        Digital Media Planned by Rapid Leads
      </Box>
    </Box>
  )
}

export default DisclaimerComponent;
