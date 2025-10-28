import { Box, Typography, Button,Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FooterBg from "../../assets/images/pnpkc/footerDesktop.jpg"; 
import { useState } from "react";
import { RightSideForm } from "../CustomerForm";
const FooterSection = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "70vh" },
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(124, 119, 119, 0.45)", // translucent dark overlay
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "700px",
          px: 2,
          top:50,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Astoria Classic Sans",
            fontSize: { xs: 26, md: 42 },
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          Be Part of the New <br /> Pratik Nagar Story
        </Typography>

        <Typography
          sx={{
            fontFamily: "SF Pro",
            fontSize: { xs: 13, md: 18 },
            mt: 1,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Join the next chapter of a community that continues to inspire
          generations.
          
        </Typography>
          <Typography
  sx={{
    position: "relative",
    top: "10px", // just above buttons
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: 15,
    fontFamily: 'SF Pro',
    fontWeight: 500,
    textAlign: "center",
    width: "100%",
    px: 2,
    py: 1,
    lineHeight: 1.5,
    wordWrap: "break-word",
    background: "rgba(200, 188, 188, 0.3)", // translucent dark background
    backdropFilter: "blur(1px)", // slight blur behind text
    borderRadius: "4px",
  }}
>
 Limited homes available. Express your interest today.
</Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#361617",
            color: "#FFFFFF",
            fontFamily: "SF Pro",
            fontWeight: 500,
            fontSize: 15,
            borderRadius: "8px",
            textTransform: "none",
            px: 4,
            py: 1.2,
            "&:hover": { backgroundColor: "#2A1011" },
          }}
          onClick={handleOpen}
        >
          Enquire Now
        </Button>
        
      </Box>
 <Modal
  open={open}
  onClose={handleClose}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 1,
    bgcolor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
  }}
>
  <Box
    className="custom-modal"
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 0,
      width: "100%",
      bgcolor: "transparent",
    }}
  >
    {/* The white form box */}
    <Box
      sx={{
        position: "relative",
        background: "white",
        borderRadius: 2,
        width: { xs: "100%", md: "30%" },
        p: 4,
      }}
    >
      {/* Close (X) Button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "#1B152B",
          "&:hover": { bgcolor: "#E0E0E0" },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Your existing form content */}
      <RightSideForm sx={{ width: "100%" }} />
    </Box>
  </Box>
</Modal>
    </Box>
  );
};

export default FooterSection;
