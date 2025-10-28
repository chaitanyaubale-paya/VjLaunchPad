import React from "react";
import { Box, Typography } from "@mui/material";
import cartIcon from "../../assets/Icons/indiWorks/whyChooseIndiWorks/cartIcon.svg";
import cursorIcon from "../../assets/Icons/indiWorks/whyChooseIndiWorks/cursorIcon.svg";
import growthIcon from "../../assets/Icons/indiWorks/whyChooseIndiWorks/growthIcon.svg";
import locationIcon from "../../assets/Icons/indiWorks/whyChooseIndiWorks/locationIcon.svg";
import modulusIcon from "../../assets/Icons/indiWorks/whyChooseIndiWorks/modulusIcon.svg";

const WhyNRIsChooseIndiWorks = () => {
  const features = [
    {
      icon: locationIcon,
      title: "Prime Location",
      desc: "Central Kharadi Advantage: Premium connectivity, with metro access, proximity to airport and global corporates.",
      highlight: true,
    },
    {
      icon: growthIcon,
      title: "Smart Entry, Premium Market",
      desc: "Boutique offices from ₹65L give investors access to Central Kharadi’s booming business district.",
    },
    {
      icon: modulusIcon,
      title: "High Rental Demand",
      desc: "Driven by professionals, SMEs, and consultants ensuring 3–4% yields and low vacancy.",
    },
    {
      icon: cursorIcon,
      title: "High Liquidity",
      desc: "Boutique offices are easier to lease, manage, and resell compared to large commercial floors.",
    },
    {
      icon: cartIcon,
      title: "Ease of Buying",
      desc: "1. NRI friendly payment options\n2. 100% Remote Buying\n3. Online Documentation\n4. Tax Benefits\n5. 0% interest",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0D0D18",
        color: "#fff",
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 8 },
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 700,
          textAlign: "center",
          fontSize: { xs: 30, sm: 30, md: 50 },
          mb: { xs: 3, md: 2 },
          lineHeight: 1.2,
        }}
      >
        Why NRIs choose{" "}
        <Box component="span" sx={{ color: "#E43E78" }}>
          IndiWorks?
        </Box>
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#CFCFCF",
          fontFamily: "Montserrat",
          fontWeight: 400,
          maxWidth: { xs: "100%", md: 700 },
          mx: "auto",
          mb: { xs: 3, md: 8 },
          fontSize: { xs: 15, sm: 22, md: 20 },
          lineHeight: 1.6,
        }}
      >
        A strategic investment opportunity that combines affordability, location,
        and long-term value in Pune’s most dynamic business district.
      </Typography>

      {/* Feature Boxes */}
      <Box
        sx={{
          width: "100%",
          overflowX: { xs: "auto", md: "visible" },
          scrollSnapType: { xs: "x mandatory", md: "none" },
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#555",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": { backgroundColor: "#222" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "stretch",
            gap: { xs: 1, md: 3 },
            flexWrap: { xs: "nowrap", md: "wrap" },
            px: { xs: 0, md: 0 },
          }}
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor:  "#11203D",
                border:  "2px solid #FFEC1A",
                borderRadius: "12px",
                p: { xs: 2, sm: 5, md: 3 },
                height: { xs: "auto", md: 400 },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 2,
                width: { xs: "79%", sm: "100%", md: "18%" }, // one card per screen on mobile
                mx: { xs: 1, md: 0 },
                outline: "1px #ABABAB solid",
                scrollSnapAlign: { xs: "center", md: "none" },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "8px",
                  background: "linear-gradient(180deg, #EA5F7A 0%, #F48470 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: { xs: 36, sm: 40, md: 30 },
                    height: { xs: 36, sm: 40, md: 25 },
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* TITLE */}
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: { xs: 22, sm: 24, md: 22 },
                  color: "#F1BB50",
                  textAlign: "left",
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  whiteSpace: "pre-line",
                  color: "#CFCFCF",
                  fontFamily: "Montserrat",
                  lineHeight: 1.6,
                  fontSize: { xs: 14, sm: 18, md: 16 },
                  textAlign: "left",
                  mt: 1,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Stats Row */}
      <Box
        sx={{
          width: {xs:"100%",md:"95%"},
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          mt: { xs: 0, md: 10 },
          textAlign: "center",
          mx: "auto",
        }}
      >
        {/* Price Range */}
     <Box
  sx={{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "flex-start", sm: "space-between" },
    alignItems: "center",
    gap: { xs: 3, sm: 6 },
    mt: { xs: 6, md: 2 },
    textAlign: "center",
    px: { xs: 2, md: 6 },

    // 🟡 Scroll enabled only on mobile
    overflowX: { xs: "auto", md: "visible" },
    flexWrap: { xs: "nowrap", md: "wrap" },
    scrollSnapType: { xs: "x mandatory", md: "none" },
    scrollBehavior: "smooth",
    pb: { xs: 2, md: 0 }, // spacing bottom for touch area

    // 🟡 Hide scrollbar
    "&::-webkit-scrollbar": { display: "none" },
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",

    // 🟡 Cards snap and scroll nicely
    "& > *": {
      flexShrink: 0,
      scrollSnapAlign: { xs: "start", md: "none" },
    },
  }}
>
  {/* ✅ PRICE RANGE */}
  <Box
    sx={{
      minWidth: { xs: "40vw", sm: "auto" }, // 👈 peek effect (75vw)
      textAlign: "center",
      mr: { xs: 2, md: 0 }, // space between cards
    }}
  >
    <Typography
      sx={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: { xs: 28, sm: 32, md: 40 },
        color: "#FFEC1A",
      }}
    >
      ₹65 - 75L*
    </Typography>
    <Typography
      sx={{
        color: "#CFCFCF",
        fontWeight: 500,
        fontSize: { xs: 18, md: 18 },
        mt: 0.5,
        fontFamily: "Montserrat",
      }}
    >
      Price Range
    </Typography>
  </Box>

  {/* ✅ BOUTIQUE OFFICES */}
  <Box
    sx={{
      minWidth: { xs: "75vw", sm: "auto" },
      textAlign: "center",
      mr: { xs: 2, md: 0 },
    }}
  >
    <Typography
      sx={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: { xs: 28, sm: 32, md: 40 },
        color: "#FFEC1A",
      }}
    >
      240–300 sq.ft
    </Typography>
    <Typography
      sx={{
        color: "#CFCFCF",
        fontWeight: 500,
        fontSize: { xs: 18, md: 18 },
        mt: 0.5,
        fontFamily: "Montserrat",
      }}
    >
      Boutique Offices
    </Typography>
  </Box>

  {/* ✅ POSSESSION */}
  <Box
    sx={{
      minWidth: { xs: "75vw", sm: "auto" },
      textAlign: "center",
    }}
  >
    <Typography
      sx={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: { xs: 28, sm: 32, md: 40 },
        color: "#FFEC1A",
      }}
    >
      2026
    </Typography>
    <Typography
      sx={{
        color: "#CFCFCF",
        fontWeight: 500,
        fontSize: { xs: 18, md: 18 },
        mt: 0.5,
        fontFamily: "Montserrat",
      }}
    >
      Possession
    </Typography>
  </Box>
</Box>

      </Box>
    </Box>
  );
};

export default WhyNRIsChooseIndiWorks;
