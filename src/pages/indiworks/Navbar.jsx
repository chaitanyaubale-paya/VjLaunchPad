import { Box, Button ,Modal} from "@mui/material";
import  vjlogo from '../../assets/images/indiWorks/vjLogo.png'
import { useState } from "react";
import VirtualTourFormSimple from "./VirtualTourForm";
const Navbar = () => {
    const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 70, md: 90 },
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 3, md: 8 }, // padding left-right
        boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Left: Logo */}
      <Box
        component="img"
        src={vjlogo}
        alt="IndiWorks Logo"
        sx={{
          width: { xs: 120, md: 180 },
          height: "auto",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />

      {/* Right: Enquire Now Button */}
      <Button
        sx={{
          px: { xs: 3, md: 4 },
          py: { xs: 1.2, md: 1.5 },
          backgroundColor: "#15133D",
          color: "white",
          borderRadius: "40px",
          outline: "1px solid #BEBEBE",
          outlineOffset: "-1px",
          fontFamily: "Montserrat",
          fontSize: { xs: 12, md: 14 },
          fontWeight: 400,
          lineHeight: "14.4px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1E1A5A",
          },
        }}
                   onClick={handleOpen}
      >
        Enquire Now
      </Button>
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
      width: "100%",
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

export default Navbar;

