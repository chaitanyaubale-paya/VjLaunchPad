import {useState} from "react";
import { Box, Typography, Button,useMediaQuery,Modal } from "@mui/material";
import KothrudSection from "./KothrudSection";
import HappyCommunities from "./CommunityInfo";
import DisclaimerComponent from "./Disclaimer";
import  Form, {RightSideForm}  from '../CustomerForm';
import KothrudBanner from "../../assets/images/pnpkc/KothrudMainBanner.png";
import KothrudMobileBanner from "../../assets/images/pnpkc/KothrudMobileBanner.png";
import AaplaKothrudFlex from "../../assets/images/pnpkc/AaplaKothrudFlex.jpg";
import { useTheme } from "@mui/material/styles";
import WhyChoosePratikNagar from "./ChoosePkpnc";
import LifeAtPkpnc from "./LifeAtPkpnc";
import Logo from '../../assets/images/vjLogo.png'
import FooterSection from "./Footer";


const PnPkc = () => {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#F9F8F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        boxSizing: "border-box",
        
      }}
    >
     <Box sx={{ position: "relative", width: "100%", mb: isMobile ? 2 : 0 }}>
      {/* 🔹 Banner Image */}
      {/* <Box
        component="img"
        src={KothrudBanner}
        alt="Top Banner"
        sx={{
          width: "100%",
          height: isMobile ? "45vh" : "95vh",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      /> */}

      <Box
  sx={{
    position: "relative", // parent container for positioning
    width: "100%",
    height: isMobile ? "45vh" : "110vh",
    borderRadius: "8px",
    overflow: "hidden", // ensures logo doesn't spill outside
  }}
>
  {/* Main Banner Image */}
  {isMobile ? (  <Box
    component="img"
    src={KothrudBanner}
    alt="Top Banner"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />):(
     <Box
    component="img"
    src={KothrudBanner}
    alt="Top Banner"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px",
    }}
  />
  )}



  {/* Small Logo Image */}
  {isMobile ? (
    <Box
    component="img"
    src={Logo}
    alt="Logo"
    sx={{
      position: "absolute",
      top: { xs: -13, md: -20 },   // adjust position
      left: { xs: 0, md: 40 },
      width: { xs: 80, md: 200 }, // adjust size for mobile/desktop
      height: "auto",
    }}
  />
  ) : ( <Box
    component="img"
    src={Logo}
    alt="Logo"
    sx={{
      position: "absolute",
      top: { xs: 10, md: -20 },   // adjust position
      left: { xs: 10, md: 40 },
      width: { xs: 60, md: 200 }, // adjust size for mobile/desktop
      height: "auto",
    }}
  />)}
 
</Box>

      {/* 🖥️ Desktop Overlay Content */}
      {!isMobile && (
        <>
          {/* Text Above Buttons */}
          <Box
          sx={{width: '100%', height: '100%', background: '#E6E6E6'}}
          >
          <Typography
  sx={{
    position: "absolute",
    bottom: "140px", // just above buttons
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: 25,
    fontFamily: 'Astoria Classic Sans',
    fontWeight: 500,
    textAlign: "center",
    width: "70%",
    px: 2,
    py: 1,
    lineHeight: 1.5,
    wordWrap: "break-word",
    background: "rgba(200, 188, 188, 0.3)", // translucent dark background
    backdropFilter: "blur(1px)", // slight blur behind text
    borderRadius: "4px",
  }}
>
  A heartfelt redevelopment that preserves the spirit of community <br />
  while embracing the future
</Typography>
</Box>
          {/* Buttons Over Banner */}
          <Box
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              sx={{
                background: "#4D5866",
                color: "#FEFEFF",
                fontFamily: "SF Pro",
                fontWeight: 500,
                fontSize: 15,
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
                py: 1.2,
                "&:hover": { background: "#3E4753" },
                width:'250px',
              }}
            >
              Sample Residence Film
            </Button>

            <Button
              sx={{
                background: "#361617",
                color: "#FFFFFF",
                fontFamily: "SF Pro",
                fontWeight: 500,
                fontSize: 15,
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
                py: 2,
                "&:hover": { background: "#2A1011" },
                      width:'250px',
                      
            
              }}
             onClick={handleOpen}
            >
              Enquire Now
            </Button>
          </Box>
        </>
      )}

      {/* 📱 Mobile Buttons (below image) */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1.5,
            mt: 2,
            width: "100%",
          }}
        >
          <Button
            fullWidth
            sx={{
              background: "#4D5866",
              color: "#FEFEFF",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: 12,
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { background: "#3E4753" },
              height:{xs:'50px',md:'50px'}          
            }}
          >
            Sample Residence Film
          </Button>
          <Button
            fullWidth
            sx={{
              background: "#361617",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: 12,
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { background: "#2A1011" },
            }}
            onClick={handleOpen}
          >
            Enquire Now
          </Button>
        </Box>
      )}
    </Box>

      {/* 🔹 3-Box Section */}

      {!isMobile ? (
 <Box
        sx={{
          width: "100%",
          borderRadius: "13px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          gap: 1.5,

        }}
      >
        {[
          {
            top: "3 & 4 BHK",
            bottom: "Premium Homes",
          },
          {
            top: "₹1.7 Cr*",
            bottom: "Starting Price",
          },
          {
            top: "52 +",
            bottom: "Life Time Aminities",
          },
        ].map((item, index, array) => (
          <Box
            key={index}
            sx={{
              borderRadius: {xs:"6px",sm:0},
              height: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
               borderRight: index !== array.length - 1 ? "1.5px solid #000000" : "none",
            }}
          >
            <Typography
              sx={{
                color: "#DA8F08",
                fontSize: {xs:16,sm:25},
                fontFamily: "Astoria Classic Sans",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {item.top}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: {xs:10,md:18},
                fontFamily: "SF Pro",
                fontWeight: 700,
                textAlign: "center",
                mt: 0.5,
              }}
            >
              {item.bottom}
            </Typography>
          </Box>
        ))}
      </Box>
      ):(

         <Box
        sx={{
          width: "100%",
          background: "rgba(54, 22, 23, 0.09)",
          borderRadius: "13px",
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          gap: 1.5,
        }}
      >
        {[
          {
            top: "3 & 4 BHK",
            bottom: "Premium Homes",
          },
          {
            top: "₹1.7 Cr*",
            bottom: "Starting Price",
          },
          {
            top: "52 +",
            bottom: "Life Time Aminities",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              background: "#fff",
              borderRadius: "6px",
              height: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Typography
              sx={{
                color: "#DA8F08",
                fontSize: {xs:16,sm:25},
                fontFamily: "Astoria Classic Sans",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {item.top}
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: {xs:12,md:18},
                fontFamily: "SF Pro",
                fontWeight: 700,
                textAlign: "center",
                mt: 0.5,
              }}
            >
              {item.bottom}
            </Typography>
          </Box>
        ))}
      </Box>
      )}
     

      {/* 🔹 Title and Subtitle */}
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        width:{xs:"100%",md:"100%"},
        padding:{xs:2,md:0}
      }}
    >
      {/* LEFT CONTENT */}
       <Box
      sx={{
        display: isMobile ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: isMobile ? 0 : 2,
        mt: 2,
        padding:0,
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ flex: 1, textAlign: isMobile ? "center" : "left",width:"100%"}}>
        <Typography
          sx={{
            fontFamily: "Astoria Classic Sans",
            fontWeight: 600,
            fontSize: isMobile ? 16 : 35,
          }}
        >
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Box sx={{ color: "#D17700",textAlign: "center" , fontFamily:"Astoria Classic Sans", fontSize:{xs:25,md:35}}}>
            आपलं कोथरूड,
          </Box>
          <Box  sx={{ color: "#000000" , fontFamily:"Astoria Classic Sans",fontSize:{xs:25,md:35}}}>
            आपलं प्रतिक नगर
          </Box>
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Astoria Classic Sans",
            fontSize: isMobile ? 17 : 23,
            mt: 1,
            color: "#000000",
            fontWeight: 550,
            textAlign:"center",
            margin:"0 auto",
            maxWidth:{xs:"100%",md:"90%"},
            letterSpacing:0.2

          }}
        >
          Kothrud’s most loved Community meets Pune’s most loved Developer!
        </Typography>

        {/* 🔹 Feature Boxes */}
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin:"0 auto",
            flexWrap: "wrap",
            justifyContent: isMobile ? "space-between" : "center",
            gap: 1.5,
            mt: 2,
            maxWidth: isMobile ? "100%" : 500,
          }}
        >
          {[
            "45 Years Legacy",
            "Team of 1200 professionals",
            "Possession Guarantee",
            "Promising Track Record",
          ].map((text, index) => (
            <Box
              key={index}
              sx={{
                // flexBasis: "48%",
                flexBasis: { xs: "47%", md: "48%" },
                border: "2px solid #B89864",
                borderRadius: "6px",
                p: {xs:2,md:2},
                fontSize: isMobile ? 12 : 15,
                fontFamily: "Astoria Classic Sans",
                fontWeight: 600,
                color: "#000000",
                textAlign: "center",
                
              }}
            >
              {text}
            </Box>
          ))}
        </Box> */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr" },
    gap: 1.5,
    mt: 2,
    maxWidth: { xs: "100%", md: 600 }, // ✅ increased width for both mobile & desktop
    mx: "auto",
  }}
>
  {[
    "45 Years Legacy",
    "Team of 1200 professionals",
    "Possession Guarantee",
    "Promising Track Record",
  ].map((text, index) => (
    <Box
      key={index}
      sx={{
        border: "2px solid #B89864",
        borderRadius: "6px",
        fontSize: { xs: 13, md: 15 },
        fontFamily: "Astoria Classic Sans",
        fontWeight: 500,
        color: "#000000",
        textAlign: "center",
        whiteSpace: "nowrap",
        width: {xs:"180px",sm:'auto'},
        padding: {xs:2,md:2}
      }}
    >
      {text}
    </Box>
  ))}
</Box>




      </Box>

      {/* RIGHT IMAGE — rendered only for desktop */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: {xs:0,md:0},
            
          }}
        >
          <Box
            component="img"
            src={AaplaKothrudFlex}
            alt="Aapla Kothrud Banner"
            sx={{
              width: "100%",
              maxWidth: 800,
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Box>
      )}
    </Box>
    </Box>
       <WhyChoosePratikNagar/>
      {/* 🔹 Imported Components */}
      <LifeAtPkpnc/>
      <KothrudSection />
      <HappyCommunities />
      <Form/>
       {!isMobile && <FooterSection/> }
      <DisclaimerComponent />
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
    <RightSideForm />
  </Box>
</Modal>

    </Box>
  );
};

export default PnPkc;
