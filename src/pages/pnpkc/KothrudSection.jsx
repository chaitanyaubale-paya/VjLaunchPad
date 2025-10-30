import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TrainIcon from "@mui/icons-material/Train";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BhartiVidyapeeth from "../../assets/Icons/bhartiVidyapeeth.svg";
import ClubSolaris from "../../assets/Icons/clubSolaris.svg";
import IdealColony from "../../assets/Icons/idealColony.svg";
import MIT from "../../assets/Icons/mit.svg";
import Vanaz from "../../assets/Icons/vanazMetroStation.svg";
import { href } from "react-router-dom";

const places = [
  { icon: Vanaz, title: "Paud Fata Metro Station", distance: "1 km" },
  { icon: Vanaz, title: "Vanaz Metro Station", distance: "1 km" },
  { icon: MIT, title: "MIT College", distance: "3 km" },
  { icon: BhartiVidyapeeth, title: "Bharati Vidyapeeth", distance: "2.5 km" },
  { icon: ClubSolaris, title: "Club Solaris", distance: "1.5 km" },
  { icon: IdealColony, title: "Ideal Colony", distance: "0.5 km" },
];

const KothrudSection = () => {
  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        bgcolor: "#444C5C",
        color: "#fff",
        borderRadius: 2,
        py: { xs: 3, md: 6 },
        px: { xs: 0, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: 28, md: 28 },
          fontFamily: "Astoria Classic Sans",
        }}
      >
        At the heart of Kothrud
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          color: "#FFA400",
          fontSize: { xs: 15, md: 16 },
          fontWeight: 500,
          mb: { xs: 3, md: 5 },
          fontFamily: "SF Pro",
        }}
      >
        Strategically located on Paud Road with excellent connectivity through
        Metro
      </Typography>

      {/* Places Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: { md: "wrap" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 2 },
          mb: { xs: 3, md: 4 },
          width: "90%",
          mx: "auto",
        }}
      >
        {places.map((place, index) => (
          <Box
            key={index}
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "10px",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              width: { xs: "100%", md: "30%" },
              maxWidth: 320,
              minWidth: { md: 250 },
              textAlign: "left",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(240, 197, 124, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={place.icon}
                alt={place.title}
                style={{
                  width:
                    place.title === "Club Solaris" ||
                    place.title === "Ideal Colony"
                      ? 22
                      : 30,
                  height:
                    place.title === "Club Solaris" ||
                    place.title === "Ideal Colony"
                      ? 22
                      : 30,
                  objectFit: "contain",
                   background: "none",
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 17, md: 18 },
                  color: "#1B152B",
                  fontFamily:"SF Pro"
                }}
              >
                {place.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 13 },
                  color: "#555",
                  mt: 0.2,
                  fontFamily:"SF Pro"
                }}
              >
                {place.distance}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Button */}
    <a
  href="https://www.google.com/maps/place/Pratik+Nagar,+Mohanwadi,+Yerawada,+Pune,+Maharashtra+411006/@18.5668697,73.8805658,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c0d73736d7af:0x1eb100f07a6b924a!8m2!3d18.5657821!4d73.8832011!16s%2Fg%2F1ptwx_brn?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <Button
    variant="contained"
    sx={{
      bgcolor: "#D4A04A",
      color: "#fff",
      fontWeight: 500,
      px: 3,
      py: 1,
      borderRadius: "2px",
      textTransform: "none",
      "&:hover": { bgcolor: "#B38C48" },
      fontFamily: "SF Pro",
    }}
  >
    View on Google Maps
  </Button>
</a>
    </Box>
  );
};

export default KothrudSection;
