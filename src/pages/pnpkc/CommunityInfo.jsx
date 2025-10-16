import React from "react";
import { Box, Typography, useMediaQuery  } from "@mui/material";
import clock from "../../assets/Icons/clock.svg";
import people from "../../assets/Icons/people.svg";
import heart from "../../assets/Icons/heart.svg";
import smile from "../../assets/Icons/smile.svg";

const communityInfo = [
  {
    icon: smile,
    title: "A VJ Parivar with 95000+ Happy Families",
  },
  {
    icon: clock,
    title: "On-Time Possession. Every time.",
  },
  {
    icon: people,
    title: "In-House team of 800+ Engineering Experts",
  },
  {
    icon: heart,
    title: "15000+ Homes Delivered across 90 Societies",
  },
];

const HappyCommunities = () => {



  return (
    <Box sx={{ width: "100%", textAlign: "center", padding: "12px", mt:{xs:2,md:1} }}>
      {/* Title and Subtitle */}
      <Typography
        sx={{
          color: "#4D5866",
          fontSize: { xs: 28, md: 35 },
          fontFamily: "Astoria Classic Sans",
          wordWrap: "break-word",
          fontWeight: "600",
        }}
      >
        Building Happy Communities Since 1981
      </Typography>

      <Typography
        sx={{
          color: "#DA8F08",
          fontSize: { xs: 18, md: 24 },
          fontFamily: "Montserrat",
          fontWeight: "600",
          wordWrap: "break-word",
          mt: 1,
        }}
      >
        45+ years of creating spaces built on trust, transparency, and
        People-First
      </Typography>

      <Typography
        sx={{
          color: "black",
          fontSize: 15,
          fontFamily: "Montserrat",
          fontWeight: "550",
          wordWrap: "break-word",
          mt: 1,
        }}
      >
        Vilas Javdekar Developers has been shaping Pune’s skyline and
        communities for over four decades.
      </Typography>

      {/* Cards Container */}
      <Box sx={{width:{md:'70%'},margin:{md:'auto'}}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 2fr)" },
          gap: { xs: 2, md: 0 },
          justifyItems: "center",
          mt: { xs: 4, md: 6 },
        }}
      >
        {communityInfo.map((item, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "#fff",
              color: "#000",
              borderRadius: 7,
              p: {xs:3.6},
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxSizing: "border-box",
              boxShadow: {
                xs: "2px 4px 4px 1px rgba(0, 0, 0, 0.25)",
                sm: "4px 4px 4px #CEB780",
              },
              width: {xs:"100",md:"80%"},
            }}
          >
        
            <Box
              sx={{
                backgroundColor: "#A26800",
                borderRadius: "50%",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <img
  src={item.icon}
  alt={item.title}
  style={{
    width:
      item.icon === smile
        ? "40px"
        : item.icon === heart
        ? "35px"
        : "50px",
    height:
      item.icon === smile
        ? "40px"
        : item.icon === heart
        ? "35px"
        : "50px",
  }}
/>

            </Box>

            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "SF Pro",
                fontSize: { xs: 14, md: 16 },
                color: "#1B152B",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>

      
    </Box>
  );
};

export default HappyCommunities;
