import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import vjLogo from "../../assets/images/vjLogo.png";
import ReraLogo from "../../assets/images/indiWorks/ReraLogo.png";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        px: { xs: 4, md: 8 },
        py: { xs: 6, md: 4 },
        bgcolor: "#fff",
        gap: { xs: 5, md: 0 },
      }}
    >
      {/* LEFT SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "50%" },
          gap: 2,
        }}
      >
        {/* 1️⃣ VJ Logo */}
        <Box
          component="img"
          src={vjLogo}
          alt="VJ Logo"
          sx={{
            width: { xs: "80%", sm: "100%", md: "30%" },
            height: { xs: "80%",sm: "100%", md: "30%" },
          }}
        />

        {/* 2️⃣ Developer’s Legacy */}
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: 20, md: 20 },
            fontWeight: 700,
            color: "#000",
            textTransform: "uppercase",
            mt: { xs: 2, md: 0 },
          }}
        >
          Developer’s Legacy
        </Typography>

        {/* 3️⃣ 45-year Statement */}
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: 16, sm: 18, md: 15 },
            color: "#000",
            fontWeight: 500,
            maxWidth: { xs: "90%", md: "250px" },
          }}
        >
          A 45-year track record of world-class delivery on time, every time
        </Typography>
      </Box>

      {/* RIGHT SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 3, md: 3 },
          width: { xs: "100%", md: "50%" },
        }}
      >
        {/* 4️⃣ Landmark Tagline */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: 18, sm: 20, md: 20 },
              color: "#000",
              fontWeight: 700,
            }}
          >
            A Landmark Boutique Commercial
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: 18, sm: 20, md: 20 },
              color: "#000",
              fontWeight: 700,
            }}
          >
            Tower in Kharadi Central
          </Typography>
        </Box>

        {/* 5️⃣ Visit Us Section */}
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: 18, md: 18 },
            color: "#F4A74B",
            fontWeight: 700,
          }}
        >
          Visit Us On:{" "}
          <Box
            component="span"
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "Montserrat",
              fontSize: { xs: 18, md: 19 },
            }}
          >
            www.javdekars.com
          </Box>
        </Typography>

        {/* 6️⃣ RERA Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              p: 0.5,
              border: "2px solid black",
              borderRadius: "4px",
            }}
          >
            <Box
              component="img"
              src={ReraLogo}
              alt="MahaRERA Registration"
              sx={{
                width: { xs: 220, sm: 250, md: 300 },
                height: { xs: 55, sm: 65, md: 75 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
