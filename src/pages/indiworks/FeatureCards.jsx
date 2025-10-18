import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import BuildingIcon from "../../assets/Icons/indiWorks/buildingIcon.svg";
import PeopleIcon from "../../assets/Icons/indiWorks/peopleIcon.svg";
import GrowIcon from "../../assets/Icons/indiWorks/growIcon.svg";

const FeatureCards = () => {

  const isMobile = useMediaQuery("(max-width: 600px)");
  const cards = [
    {
      icon: BuildingIcon,
      title: "Right-Sized Excellence",
      desc: "240–300 sq.ft. offices crafted for investors, professionals, startups and entrepreneurs.",
    },
    {
      icon: PeopleIcon,
      title: "Smart Investment Gateway",
      desc: "Starting at ₹65 L – a strategic entry into Pune’s premium commercial real estate.",
    },
    {
      icon: GrowIcon,
      title: "Thriving Business Community",
      desc: "Home to 600+ businesses creating a vibrant, growth-driven ecosystem.",
    },
  ];

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "100%", md: "80%" },
        height: { xs: "100%", sm: "100%", md: "100%" },
        backgroundColor: "#fff",
        borderRadius: "16px",
        outline: "2px solid #B63B7C",
        outline: isMobile ? "none" : "2px solid #B63B7C",
        outlineOffset: "-1px",
        px: { xs: 2, sm: 4, md: 2 },
        py: { xs: 3, sm: 5, md: 2 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 0 },
        mx: "auto",
        mt: { xs: 0, md: 2 },
      }}
    >
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "100%", sm: '100%', md: "100%" },
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 2,
            border: isMobile && "3px solid #B63B7C",
          }}
        >
          {/* Glowing background element */}
          <Box
            sx={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 155,
              height: 155,
              background:!isMobile &&
                "radial-gradient(ellipse 381.34% 181.09% at 50.11% 50.08%, #FEF4C1 0%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 55.75% 56.95% at 50% 50%, rgba(146,254,157,0.55) 0%, rgba(146,254,157,0) 100%)",
              borderRadius: "50%",
              filter: "blur(28px)",
              zIndex: 0,
            }}
          />

          {/* Icon placeholder */}
          <Box
            component="img"
            src={card.icon}
            alt={card.title}
            sx={{
              width: {xs:35,md:50},
              height: {xs:35,md:50},
              borderRadius: "8px",
              mb: 3,
              zIndex: 1,
              objectFit: "contain",
              mt:{xs:4}
            }}
          />

          {/* Text Content */}
          <Box sx={{ zIndex: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                width: "100%",
                height: "100%",
                fontWeight: 500,
                color: "#1B152B",
                mb: 1,
                lineHeight: 1.4,
                mx: "auto",
                fontSize: { xs: 18, md: 20 },
                mt:{xs:0}
              }}
            >
              {card.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                color: "#3340CA",
                lineHeight: 1.5,
                px: 1,
                fontSize: { xs: 12, md: 14 },
              }}
            >
              {card.desc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FeatureCards;
