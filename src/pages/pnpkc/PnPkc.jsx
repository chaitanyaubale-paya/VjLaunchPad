import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Modal,
  IconButton,
} from "@mui/material";
import KothrudSection from "./KothrudSection";
import HappyCommunities from "./CommunityInfo";
import DisclaimerComponent from "./Disclaimer";
import Form, { RightSideForm } from "../CustomerForm";
import KothrudBanner from "../../assets/images/pnpkc/pmDesktopBannerUpdated.png";
import KothrudMobileBanner from "../../assets/images/pnpkc/pnMainBannerUpdated.png";
import AaplaKothrudFlex from "../../assets/images/pnpkc/AaplaKothrudFlex.jpg";
import { useTheme } from "@mui/material/styles";
import WhyChoosePratikNagar from "./ChoosePkpnc";
import LifeAtPkpnc from "./LifeAtPkpnc";
import Logo from "../../assets/images/vjLogo.png";
import FooterSection from "./Footer";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        px: { xs: 1.5, md: 2 }, // ✅ horizontal padding (left + right)
        py: 0,
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
            height: isMobile ? "64vh" : "110vh",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              left: 30,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              zIndex: 100,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#15133D",
                color: "#fff",
                width: 52,
                height: 52,
                "&:hover": { backgroundColor: "#0E0B2E" },
              }}
              onClick={() => (window.location.href = "tel:+919876543210")}
            >
              <PhoneIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              right: 40,
              zIndex: 100,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#25D366",
                color: "#fff",
                width: 52,
                height: 52,
                "&:hover": { backgroundColor: "#1EBE5A" },
              }}
              onClick={() =>
                window.open("https://wa.me/919876543210", "_blank")
              }
            >
              <WhatsAppIcon />
            </IconButton>
          </Box>
          {/* Main Banner Image */}
          {isMobile ? (
            <Box
              component="img"
              src={KothrudMobileBanner}
              alt="Top Banner"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />
          ) : (
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
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              position: "absolute",
              top: isMobile ? 10 : 20,
              left: isMobile ? 10 : 40,
              width: { xs: 80, md: 200 },
              height: "auto",
            }}
          />

          {/* 🟠 Overlay Buttons */}
          <Box
            sx={{
              position: "absolute",
              bottom: isMobile ? 20 : 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "row",
              gap: isMobile ? 1 : 2,
              width: isMobile ? "95%" : "auto",
            }}
          >
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Button
                  fullWidth
                  onClick={handleOpen}
                  sx={{
                    background: "#4D5866",
                    color: "#FEFEFF",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: 11,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { background: "#3E4753" },
                    height: { xs: "40px", md: "50px" },
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
                    fontSize: 11,
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
        </Box>

        {/* 🖥️ Desktop Overlay Content */}
        {!isMobile && (
          <>
            {/* Text Above Buttons */}
            <Box sx={{ width: "100%", height: "100%", background: "#E6E6E6" }}>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "140px", // just above buttons
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontSize: 25,
                  fontFamily: "Astoria Classic Sans",
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
                A heartfelt redevelopment that preserves the spirit of community{" "}
                <br />
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
                onClick={handleOpen}
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
                  width: "250px",
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
                  width: "250px",
                }}
                onClick={handleOpen}
              >
                Enquire Now
              </Button>
            </Box>
          </>
        )}

        {/* 📱 Mobile Buttons (below image) */}
        {/* {isMobile && (
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
      )} */}
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
                borderRadius: { xs: "6px", sm: 0 },
                height: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
                borderRight:
                  index !== array.length - 1 ? "1.5px solid #000000" : "none",
              }}
            >
              <Typography
                sx={{
                  color: "#DA8F08",
                  fontSize: { xs: 16, sm: 25 },
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
                  fontSize: { xs: 10, md: 18 },
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
      ) : (
        <Box
          sx={{
            width: "100%",
            background: "rgba(54, 22, 23, 0.09)",
            borderRadius: "13px",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {[
            {
              top: "3 & 4 BHK",
              bottom: "Premium\nHomes",
            },
            {
              top: "₹1.7 Cr*",
              bottom: "Starting\nPrice",
            },
            {
              top: "52 +",
              bottom: "Life Time\nAminities",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                borderRadius: "6px",
                height: 130,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#DA8F08",
                  fontSize: { xs: 16, sm: 25 },
                  fontFamily: "Astoria Classic Sans",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {item.top}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: { xs: 12, md: 18 },
                  fontFamily: "SF Pro",
                  fontWeight: 600,
                  textAlign: "center",
                  mt: 0.5,
                  whiteSpace: "pre-line",
                  letterSpacing: 1,
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
          width: { xs: "100%", md: "100%" },
          padding: { xs: 2, md: 0 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            display: isMobile ? "block" : "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: isMobile ? 0 : 0,
            mt: 2,
            padding: 0,
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Astoria Classic Sans",
                fontWeight: 600,
                fontSize: isMobile ? 16 : 35,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    color: "#D17700",
                    textAlign: "center",
                    fontFamily: "Astoria Classic Sans",
                    fontSize: { xs: 20, md: 40 },
                  }}
                >
                  आपलं कोथरूड,
                </Box>
                <Box
                  sx={{
                    color: "#000000",
                    fontFamily: "Astoria Classic Sans",
                    fontSize: { xs: 20, md: 40 },
                  }}
                >
                  आपलं प्रतिक नगर
                </Box>
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Astoria Classic Sans",
                fontSize: isMobile ? 18 : 23,
                color: "#000000",
                fontWeight: 550,
                textAlign: "center",
                margin: "0 auto",
                maxWidth: { xs: "100%", md: "90%" },
                letterSpacing: 0.3,
                marginTop: 2,
              }}
            >
              Kothrud’s most loved Community meets Pune’s most loved Developer!
            </Typography>

            {/* 🔹 Feature Boxes */}

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr" },
                gap: 1,
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
                    fontSize: { xs: 10, md: 20 },
                    fontFamily: "Astoria Classic Sans",
                    fontWeight: 500,
                    color: "#000000",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    width: { xs: "auto", sm: "auto" },
                    padding: { xs: 1, md: 2 },
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
                padding: { xs: 0, md: 0 },
              }}
            >
              <Box
                component="img"
                src={AaplaKothrudFlex}
                alt="Aapla Kothrud Banner"
                sx={{
                  width: "100%",
                  height: 450,
                  maxWidth: 800,
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
      <WhyChoosePratikNagar />
      {/* 🔹 Imported Components */}
      <LifeAtPkpnc />
      <KothrudSection />
      <HappyCommunities />
      <Form />
      {!isMobile && <FooterSection />}
      <DisclaimerComponent />
      {isMobile && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            margin: "auto",
            mt: 1,
            mb: 1,
          }}
        >
          <Box
            sx={{
              width: 108,
              height: 8,
              backgroundColor: "var(--Schemes-On-Surface, #171D1B)",
              borderRadius: 12,
              margin: "auto",
            }}
          />
        </Box>
      )}
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
            <RightSideForm sx={{ width: "100%", p: { xs: 0, md: 3 } }} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PnPkc;
