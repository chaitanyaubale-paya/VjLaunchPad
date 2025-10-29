import {
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  useMediaQuery,
  Modal
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VjLogo from "../../assets/images/vjLogoWhite.png"; // top-left logo
import DesktopBanner from "../../assets/images/indiWorks/desktopIndiBanner.png"; // hero image (person)
import IndiWorksBrand from '../../assets/images/indiWorks/indiWorksBrand.png'
import { useState } from "react";
import VirtualTourFormSimple from "./VirtualTourForm";

const HeroSection = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "150vh",
        overflow: "hidden",
        backgroundImage: `url(${DesktopBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* -------- TOP NAV -------- */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 3, md: 2 },
          py: 2,
        }}
      >
        {/* Left Logo */}
        <Box
          component="img"
          src={VjLogo}
          alt="VJ Developers"
          sx={{ width: { xs: 130, md: 250 }, height: "auto" }}
        />

        {/* Enquire Now Button */}
        <Button
          sx={{
            backgroundColor: "#15133D",
            color: "#fff",
            borderRadius: "40px",
            px: { xs: 3, md: 4 },
            py: 1,
            fontSize: { xs: 12, md: 14 },
            fontFamily: "Montserrat",
            fontWeight: 400,
            outline: "1px solid #BEBEBE",
            textTransform: "none",
            "&:hover": { backgroundColor: "#1E1A5A" },
          }}
           onClick={handleOpen}
        >
          Enquire Now
        </Button>
      </Box>

      {/* -------- HERO TEXT BLOCK -------- */}
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 6, md: 0 },
          px: 2,
          maxWidth: 850,
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: { xs: 28, md: 42 },
            lineHeight: 1.3,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          India’s Most Exceptional Office <br />
          Spaces for{" "}
          <Box component="span" sx={{ color: "#FFEC1A" }}>
            NRI Investors
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontFamily: "Montserrat",
            fontWeight: 600,
            fontSize: { xs: 16, md: 18 },
            color: "#fff",
          }}
        >
          The Future of Growth Awaits
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            color: "#fff",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Premium boutique offices in Kharadi Central, Pune. Invest in India's
          fastest-growing commercial hub. Designed for NRI investors seeking
          premium returns.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Button
            sx={{
              backgroundColor: "#1F1F1F",
              color: "#fff",
              borderRadius: "6px",
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.4 },
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: { xs: 13, md: 14 },
              textTransform: "none",
              "&:hover": { backgroundColor: "#292929" },
            }}
          >
            Book Virtual Tour
          </Button>

          <Button
            sx={{
              background: "linear-gradient(132deg,#BC4279 0%,#DE6B67 100%)",
              color: "#fff",
              borderRadius: "6px",
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.4 },
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: { xs: 13, md: 14 },
              textTransform: "none",
              "&:hover": { opacity: 0.9 },
            }}
          >
            Download Brochure
          </Button>
        </Stack>
      </Box>

      {/* -------- BOTTOM INFO BOX -------- */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 40, md: 60 },
          right: { xs: 20, md: 80 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          textAlign: "right",
          gap: 1,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg,#4F6193 0%,#2E3C63 100%)",
            borderRadius: "6px",
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1.2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              color: "#fff",
              fontSize: { xs: 13, md: 15 },
            }}
          >
            Offices starting from{" "}
            <Box component="span" sx={{ color: "#FFEC1A" }}>
              65 lacs*
            </Box>{" "}
            onwards
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "6px",
            px: 2,
            py: 0.8,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={IndiWorksBrand}
            alt="VJ IndiWorks"
            sx={{ width: 200, height: "auto", backgroundColor:'none' }}
          />
        
        </Box>
      </Box>

      {/* -------- FLOATING CONTACT ICONS -------- */}
     
       <Modal
  open={open}
  onClose={handleClose}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
    bgcolor: "rgba(0, 0, 0, 0.5)",  
  }}
>
  <Box
  className="custom-modal"
    sx={{
      bgcolor: "none",
      borderRadius: "10px",
      width: "50%",
      overflowY: "none",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      border:"0px"
    }}
  >
    <VirtualTourFormSimple />
  </Box>
</Modal>
    </Box>
  );
};

export default HeroSection;
