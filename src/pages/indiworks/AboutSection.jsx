import React from 'react';
import { Box, Typography } from '@mui/material';
import FeatureCards from './FeatureCards';

const AboutSection = () => {
  const highlights = [
    { title: 'Prime Location', desc: 'Located in Pune’s Kharadi Central hub.' },
    { title: 'Smart Investment', desc: 'Premium offices with assured returns.' },
    { title: 'Global Standard', desc: 'Built for professionals and NRI investors.' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 3, sm: 5, md: 8 },
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#fff',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Montserrat',
          color: '#002D62',
          fontWeight: 700,
          fontSize: { xs: 30, sm: 42, md: 50 },
          lineHeight: 1.2,
        }}
      >
        About{' '}
        <Box
          component="span"
          sx={{
            color: '#F15A29',
            fontFamily: 'Montserrat',
          }}
        >
          IndiWorks
        </Box>
      </Typography>

      {/* Subheading */}
      <Typography
        variant="subtitle1"
        sx={{
          mt: { xs: 2, md: 2 },
          color: {xs:'black',md:'#F1BB50'},
          mx: 'auto',
          fontSize: { xs: 18, sm: 26, md: 30 },
          fontFamily: 'Montserrat',
          fontWeight: 600,
        }}
      >
        Premium Boutique Offices. Designed for Growth.
      </Typography>

      {/* Description */}
      <Box
        sx={{
          width: { xs: '100%', sm: '90%', md: '100%' },
          mt: { xs: 3, md: 3 },
          textAlign: 'center',
          px: { xs: 0, md: 4 },
          mb: { xs: 0, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: { xs: 15, sm: 18, md: 20 },
            color: '#1B152B',
          }}
        >
         workspaces - premium, intelligently designed offices that combine accessibility, aesthetics, and performance.
        </Typography>
      </Box>

      {/* Feature Cards */}
      <FeatureCards />

      {/* Download Brochure Button */}
      <Box
        sx={{
          width: { xs: '70%', sm: '75%', md: 260 },
          height: 'auto',
          px: { xs: 2, sm: 6, md: 4 },
          py: { xs: 2, sm: 4, md: 2 },
          background: 'linear-gradient(130deg, #B83D7B 0%, #E06E67 100%)',
          borderRadius: '8px',
          outline: '2px solid #FFEC1A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.25)',
          },
          mx: 'auto',
          mt: { xs: 2, sm: 6, md: 6 },
        }}
        onClick={() => console.log('Download Brochure clicked')}
      >
        <Typography
          sx={{
            color: '#fff',
            fontSize: { xs: 14, sm: 20, md: 16 },
            fontFamily: 'Montserrat',
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          Download Brochure
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
