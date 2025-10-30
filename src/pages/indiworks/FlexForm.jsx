import { Box, Typography } from "@mui/material";
import VirtualTourFormSimple from "./VirtualTourForm";
const FlexForm = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0D0D18",
          color: "#fff",
          p: {xs:1,md:1},
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          flexDirection: { xs: "column", md: "row" },
          mt:{xs:-1,md:0}
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",

          }}
        >
          <Box sx={{ width: "100%", textAlign: {xs:"center",md:"center"} }}>

            <Typography
              component="span"
              sx={{
                color: "white",
                fontSize: {xs:"30px",md:"48px"},
                fontFamily: "Montserrat",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Pune’s First{" "}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", textAlign: {xs:"center",md:"center"} }}>
            <Typography
              component="span"
              sx={{
                color: "#EA5F7A",
               fontSize: {xs:"30px",md:"48px"},
                fontFamily: "Montserrat",
                fontWeight: 700,
                textDecoration: "underline",
                 textAlign: {xs:"center",md:"center"}
              }}
            >
              Boutique{" "}
            </Typography>

            <Typography
              component="span"
              sx={{
                color: "#EA5F7A",
                fontSize: {xs:"30px",md:"48px"},
                fontFamily: "Montserrat",
                fontWeight: 700,
                textDecoration: "underline",
                display: "inline-block",
              }}
            >
              Offices
              <br />
            </Typography>
          </Box>
         <Box sx={{ width: "100%", textAlign: {xs:"center",md:"center"} }}>

            <Typography
              component="span"
              sx={{
                color: "white",
                fontSize: {xs:"30px",md:"48px"},
                fontFamily: "Montserrat",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              in Kharadi Central.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { xs:"100%",md: "100%" }, height: "100%",padding:2 }}>
          <VirtualTourFormSimple />
        </Box>
      </Box>
    </>
  );
};

export default FlexForm;




