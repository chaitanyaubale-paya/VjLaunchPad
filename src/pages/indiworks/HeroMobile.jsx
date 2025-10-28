// src/components/Hero/HeroMobile.jsx
import {useState} from "react";
import { Box, Button, Typography, Stack,Modal } from "@mui/material";
import IndiWorksMainBanner from "../../assets/images/indiWorks/indiWorksMainBanner.png";

const HeroMobile = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#0D0D18",
        overflow: "hidden",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        pb: 0,
      }}
    >
      {/* Background */}
      <Box
        component="img"
        src={IndiWorksMainBanner}
        alt="IndiWorks Hero Banner"
        sx={{
          width: "100vw",
          height: { xs: 600, md: 600 },
          objectFit: "cover",
          opacity: 0.8,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />

      {/* Text */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "18%" },
          width: "100%",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 18, sm: 26, md: 28 },
            fontFamily: "Montserrat",
            fontWeight: 600,
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
            lineHeight: 1.4,
          }}
        >
          India’s Most Exceptional Office <br /> Spaces for{" "}
          <Box
            component="span"
            sx={{
              color: "#FFEC1A",
              fontWeight: 600,
              fontFamily: "Montserrat",
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
            }}
          >
            NRI Investors
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 12, md: 18 },
            fontFamily: "Montserrat",
            fontWeight: 600,
            mt: 1,
          }}
        >
          The Future of Growth Awaits
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 12, sm: 15, md: 16 },
            fontFamily: "Montserrat",
            fontWeight: 500,
            mt: 1.5,
            lineHeight: 1.6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Premium boutique offices in Kharadi Central, Pune. Invest in India's
          fastest-growing commercial hub. Designed for NRI investors seeking
          premium returns.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          <Button
            sx={{
              px: { xs: 1, md: 4 },
              py: { xs: 1, md: 1.8 },
              backgroundColor: "#1F1F1F",
              color: "#fff",
              borderRadius: "4px",
              fontFamily: "Montserrat",
              fontSize: { xs: 10, md: 14 },
              fontWeight: 600,
              "&:hover": { backgroundColor: "#292929" },
            }}
          >
            Book Virtual Tour
          </Button>
          <Button
            sx={{
              px: { xs: 1.5, md: 4 },
              py: { xs: 1.5, md: 1.8 },
              background:
                "linear-gradient(132deg, #BC4279 0%, #DE6B67 100%)",
              color: "#FEFEFF",
              borderRadius: "4px",
              fontFamily: "Montserrat",
              fontSize: { xs: 10, md: 14 },
              fontWeight: 600,
              lineHeight: "13px",
              "&:hover": { opacity: 0.9 },
            }}
          >
            Download Brochure
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          background:
            "linear-gradient(90deg, #4F6193 0%, #2E3C63 100%)",
          py: { xs: 1.5, md: 2 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 13, sm: 14 },
            fontFamily: "Montserrat",
            fontWeight: 600,
          }}
        >
          Offices starting from{" "}
          <Box component="span" sx={{ color: "#FFEC1A", fontWeight: 600 }}>
            65 lacs*{" "}
          </Box>
          onwards
        </Typography>
      </Box>
       
    </Box>
  );
};

export default HeroMobile;
