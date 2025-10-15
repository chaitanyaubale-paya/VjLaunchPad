import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const Form = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 2 },
        bgcolor: "#F9F8F5",
      }}
    >
      {/* LEFT SIDE — Text + Contact */}
      <Box sx={{ textAlign: { xs: "center", md: "center" }, width:{xs:'100%',md:'30%'}}}>
        <Typography
          sx={{
            fontFamily: "Yeseva One, serif",
            color: "#000",
            fontSize: { xs: 22, md: 30 },
            fontWeight: 600,
          }}
        >
          Be a Part of the{" "}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Yeseva One, serif",
            color: "#DA8F08",
            fontSize: { xs: 22, md: 30 },
            fontWeight: 600,
          }}
        >
          VJ Parivaar
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontFamily: "Montserrat",
            color: "#555",
            fontSize: { xs: 13, md: 15 },
          }}
        >
          Fill in your details to receive floor plans, price details, and
          exclusive pre-launch updates.
        </Typography>

        {/* Contact Info — Using Boxes instead of Grid */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: { xs: "center", md: "center" },
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {/* Call Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF7E8",
                borderRadius: "50%",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <PhoneIcon sx={{ color: "#A26800", fontSize: 28 }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 14, color :"black" }}>
              Call Us
            </Typography>
            <Typography sx={{fontSize: 13, color :"black" }}>
              +91 XXX XXX XXXX
            </Typography>
          </Box>

          {/* Email Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFF7E8",
                borderRadius: "50%",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <EmailIcon sx={{ color: "#A26800", fontSize: 28 }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: 14 , color :"black"}}>
              Email Us
            </Typography>
            <Typography sx={{ color: "#777", fontSize: 13 }}>
              info@pnpkc.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE — Form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "white",
          width:{xs:'100%',md:'30%'},
          padding:5,
          backgroundColor:"white"
        }}
      >
        {/* Full Name */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <PersonIcon sx={{ color: "#A26800", fontSize: 18, mr: 0.5 }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 13,
                fontWeight: 600,
                color: "#1B152B",
              }}
            >
              Full Name *
            </Typography>
          </Box>
          <TextField
            placeholder="Enter your name"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>

        {/* Email */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <EmailIcon sx={{ color: "#A26800", fontSize: 18, mr: 0.5 }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 13,
                fontWeight: 600,
                color: "#1B152B",
              }}
            >
              Email Address *
            </Typography>
          </Box>
          <TextField
            placeholder="your.email@example.com"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>

        {/* Phone Number */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
            <PhoneIcon sx={{ color: "#A26800", fontSize: 18, mr: 0.5 }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: 13,
                fontWeight: 600,
                color: "#1B152B",
              }}
            >
              Phone Number *
            </Typography>
          </Box>
          <TextField
            placeholder="+91 Enter your phone number"
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 1,
            bgcolor: "#A26800",
            textTransform: "none",
            borderRadius: 1,
            fontWeight: 600,
            "&:hover": { bgcolor: "#864F00" },
          }}
        >
          Request a call
        </Button>

        <Typography
          sx={{
            mt: 1,
            fontSize: 12,
            color: "#777",
            textAlign: "center",
            fontFamily: "Montserrat",
          }}
        >
          Your privacy is important to us. We will never share your information
          with third parties.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
