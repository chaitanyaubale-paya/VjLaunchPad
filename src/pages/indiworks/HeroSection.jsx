import React from "react";
import { Box, Button, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IndiWorksMainBanner from '../../assets/images/indiWorks/indiWorksMainBanner.png';
import VjLogo from '../../assets/images/vjLogoWhite.png'
const HeroSection = () => {
  return (
    <Box
      // sx={{
      //   position: "relative",
      //   backgroundImage: `url(${IndiWorksMainBanner})`, // ✅ Update this path
      //   backgroundSize: "cover",
      //   backgroundPosition: "100% 90%",
      //   height: { xs: "90vh", md: "130vh" },
      //   color: "#fff",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   py: 0,
        
      // }}
    >
    
      {/* --- Top Row: Logo + Enquire Button --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={VjLogo} // ✅ replace with VJ logo path
          alt="VJ Logo"
          style={{ width: { xs: "150px", md: "300px" }, height: "150px" }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F15A29",
            borderRadius: "30px",
            px: 3,
            py: 1,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#d94c20" },
          }}
        >
          Enquire Now
        </Button>
      </Box>

      {/* --- Center Buttons --- */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#002D62",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "30px",
          }}
        >
          Book Virtual Tour
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "30px",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
        >
          Download Brochure
        </Button>
      </Stack>

      {/* --- Bottom Floating Icons --- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<PhoneIcon />}
          sx={{
            backgroundColor: "#002D62",
            borderRadius: "50%",
            minWidth: 56,
            width: 56,
            height: 56,
            "&:hover": { backgroundColor: "#001C40" },
          }}
        />
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#25D366",
            borderRadius: "50%",
            minWidth: 56,
            width: 56,
            height: 56,
            "&:hover": { backgroundColor: "#1EBE5A" },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
