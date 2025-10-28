import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const RightSideForm  = ({ sx = {} }) =>{
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: "white",
        width: { xs: "100%", md: "30%" },
        padding:{xs:3,md:3},
        ...sx,
        borderRadius: 2,
      }}
    >
      {/* Full Name */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <PersonIcon sx={{ color: "#A26800", fontSize: 25, mr: 2  }} />
          <Typography
            sx={{
              fontSize: { xs: 17, md: 17 },
              fontWeight: 600,
              color: "#1B152B",
              fontFamily: "SF Pro",
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
          sx={{ fontFamily: "SF Pro", background: "#F9F8F5" }}
        />
      </Box>

      {/* Email */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <EmailIcon sx={{ color: "#A26800", fontSize: 25, mr: 2  }} />
          <Typography
            sx={{
              fontFamily: "SF Pro",
              fontWeight: 600,
              color: "#1B152B",
              fontSize: { xs: 17, md: 17 },
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
          sx={{ fontFamily: "SF Pro", background: "#F9F8F5" }}
        />
      </Box>

      {/* Phone Number */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <PhoneIcon sx={{ color: "#A26800", fontSize: 25, mr: 2 }} />
          <Typography
            sx={{
              fontFamily: "SF Pro",
              fontSize: { xs: 17, md: 17 },
              fontWeight: 600,
              color: "#1B152B",
            }}
          >
            Phone Number *
          </Typography>
        </Box>
        <TextField
          placeholder="+91  Enter your phone number"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ fontFamily: "SF Pro", fontSize: 10, background: "#F9F8F5" }}
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
          fontSize: 15,
          fontWeight: 600,
          color: "#5E5E5E",
          textAlign: "center",
          fontFamily: "SF Pro",
        }}
      >
        Your privacy is important to us. We will never share your information
        with third parties.
      </Typography>
    </Box>
  );
};





const Form = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 0, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 2 },
        bgcolor: "#F9F8F5",
        mb: { xs: 2, md: 0 },
        mt: { xs: 3, md: 0 },
      }}
    >
      {/* LEFT SIDE — Text + Contact */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "center" },
          width: { xs: "100%", md: "27%" },
        }}
      >
        <Box
        sx={{
          display:{xs:"flex",md:"block"},
          justifyContent:"center",
          alignItems:"center",
          gap:1
        }}
        >
        <Typography
          sx={{
            fontFamily: "Yeseva One, serif",
            color: "#000",
            fontSize: { xs: 21, md: 30 },
            fontWeight: 500,
          }}
        >
          Be a Part of the{" "}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Yeseva One, serif",
            color: "#DA8F08",
            fontSize: { xs: 21, md: 30 },
            fontWeight: 500,
          }}
        >
          VJ Parivaar
        </Typography>
</Box>
        <Typography
          sx={{
            mt: 1,
            fontFamily: "SF Pro",
            color: "#555",
            fontSize: { xs: 16, md: 15 },
            fontWeight: 600,
            letterSpacing: 0.2,
            padding:{xs:1,sm:0}
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
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* Call Box */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: {xs:40,md:60},
                height: {xs:40,md:60},
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <PhoneOutlinedIcon sx={{ color: "#A26800", fontSize: 20 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {xs:14,sm:15},
                  color: "black",
                  textAlign: "left",
                  fontFamily: "SF Pro",
                }}
              >
                Call Us
              </Typography>

              <Typography
                sx={{  fontSize: {xs:13,sm:15}, color: "black", fontFamily: "SF Pro" }}
              >
                +91 XXX XXX XXXX
              </Typography>
            </Box>
          </Box> */}

          {/* Email Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: {xs:40,md:60},
                height: {xs:40,md:60},
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <EmailOutlinedIcon sx={{ color: "#A26800", fontSize: 28 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {xs:14,sm:15},
                  color: "black",
                  textAlign: "left",
                  fontFamily: "SF Pro",
                }}
              >
                Email Us
              </Typography>
              <Typography
                sx={{  fontSize: {xs:15,sm:20}, fontFamily: "SF Pro", color: "black" }}
              >
                info@pnpkc.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE — Form */}
      <RightSideForm />
    </Box>
  );
};

export default Form;
export { RightSideForm };
