
import { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import StarIcon from "../../assets/Icons/pkpncChoice/star.svg";
import HomeIcon from "../../assets/Icons/pkpncChoice/home.svg";
import EmojiEventsIcon from "../../assets/Icons/pkpncChoice/plant.svg";
import FavoriteIcon from "../../assets/Icons/pkpncChoice/star.svg";
import PeopleIcon from "../../assets/Icons/pkpncChoice/people.svg";
import VerifiedIcon from "../../assets/Icons/pkpncChoice/badge.svg";

const reasons = [
  { icon: StarIcon, title: "50+ Lifestyle Amenities", desc: "Spread over 3 levels, designed for all age groups" },
  { icon: HomeIcon, title: "Spacious Homes", desc: "With a variety of sizes that suit each family" },
  { icon: EmojiEventsIcon,title: "Best-in-class Spaces", desc: "That make homes highly functional" },
  { icon: FavoriteIcon, title: "Homes with High IAQ", desc: "Design that enables ample natural light and ventilation" },
  { icon: PeopleIcon, title: "Kothrud’s Best Community", desc: "Join a community of 250+ like-minded families" },
  { icon: VerifiedIcon, title: "45+ Years VJ Legacy", desc: "Trusted developer with proven track record" },
];

const WhyChoosePratikNagar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef(null);

  // Handle infinite loop scroll
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const container = scrollRef.current;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      const maxScroll = scrollWidth - visibleWidth;

      // If scrolled near the end → reset to start
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollLeft = 1; // jump slightly forward
      }
      // If scrolled too far left → jump to near end
      else if (container.scrollLeft <= 0) {
        container.scrollLeft = maxScroll - 5;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const renderCard = (item, index, isLast) => (
    <Box
      key={`${item.title}-${index}`}
      sx={{
        flex: isMobile ? "0 0 280px" : 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        borderRight: !isMobile && !isLast ? "2px solid rgba(255, 235, 168, 0.8)" : "none",
        // backgroundColor: isMobile ? "#fff" : "transparent",
        borderRadius: isMobile ? "10px" : "0",
        boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        mx: isMobile ? 1 : 0,
        scrollSnapAlign: isMobile ? "center" : "none",
         backgroundColor:  isMobile ? "#F9F8F5" : "white",
      }}
    >
     <Box
  sx={{
    width: 70,
    height: 70,
    borderRadius: "50%",
   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2,
    overflow: "hidden", // important to clip image inside the circle
  }}
>
  <Box
    component="img"
    src={item.icon} // 👈 your image path (e.g. "/images/amenity1.png")
    alt={item.title}
    sx={{
      width: "50%",
      height: "50%",
      objectFit: "cover", // ensures it fills the circle nicely
    }}
  />
</Box>

      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          color: "#1B152B",
          fontSize: { xs: 15, md: 17 },
          mb: 0.5,
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: { xs: 13, md: 14 },
          color: "#555",
          maxWidth: 260,
        }}
      >
        {item.desc}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#FAF8F5",
        py: 6,
        px: { xs: 2, md: 10 },
        textAlign: "center",
        width:'95vw'
      }}
    >
      {/* Section Heading */}
      <Typography
        sx={{
          fontFamily: "'Astoria Classic Sans', serif",
          fontWeight: 600,
          color: "#DA8F08",
          fontSize: { xs: 22, md: 30 },
          mb: 1,
        }}
      >
        Why Choose Pratik Nagar
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontSize: { xs: 13, md: 16 },
          color: "#000",
          mb: 4,
        }}
      >
        Here are Top 6 Reasons why Pratik Nagar is unlike any other redevelopment project
      </Typography>

       {!isMobile ? (
        <>
          {/* Top 3 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              flexWrap: "nowrap",
              outline: "2px solid #FFEBA8",
              borderRadius: "10px",
              p: 2,
              mb: 3,
            }}
          >
            {reasons.slice(0, 3).map((item, index) =>
              renderCard(item, index, index === 2)
            )}
          </Box>

          {/* Bottom 3 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              flexWrap: "nowrap",
              outline: "2px solid #FFEBA8",
              borderRadius: "10px",
              p: 2,
            }}
          >
            {reasons.slice(3, 6).map((item, index) =>
              renderCard(item, index, index === 2)
            )}
          </Box>
        </>
      ) :  (
        // Mobile: infinite horizontal scroll
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            gap: 2,
            pb: 1,
            px: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {[...reasons, ...reasons, ...reasons].map((item, index) =>
            renderCard(item, index, false)
          )}
        </Box>
      )}
    </Box>
  );
};

export default WhyChoosePratikNagar;

























// import React from "react";
// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import HomeIcon from "@mui/icons-material/Home";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PeopleIcon from "@mui/icons-material/People";
// import VerifiedIcon from "@mui/icons-material/Verified";

// const reasons = [
//   {
//     icon: <StarIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "50+ Lifestyle Amenities",
//     desc: "Spread over 3 levels, designed for all age groups",
//   },
//   {
//     icon: <HomeIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "Spacious Homes",
//     desc: "With a variety of sizes that suit each family",
//   },
//   {
//     icon: <EmojiEventsIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "Best-in-class Spaces",
//     desc: "That make homes highly functional",
//   },
//   {
//     icon: <FavoriteIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "Homes with High IAQ",
//     desc: "Design that enables ample natural light and ventilation",
//   },
//   {
//     icon: <PeopleIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "Kothrud’s Best Community",
//     desc: "Join a community of 250+ like-minded families",
//   },
//   {
//     icon: <VerifiedIcon sx={{ color: "#D17700", fontSize: 36 }} />,
//     title: "45+ Years VJ Legacy",
//     desc: "Trusted developer with proven track record",
//   },
// ];

// const WhyChoosePratikNagar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const renderCard = (item, index, isLast) => (
//     <Box
//       key={index}
//       sx={{
//         flex: isMobile ? "0 0 80%" : 1,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         p: 3,
//         borderRight: !isMobile && !isLast ? "2px solid rgba(255, 235, 168, 0.8)" : "none",
//         backgroundColor: isMobile ? "#fff" : "transparent",
//         borderRadius: isMobile ? "10px" : "0",
//         boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
//         mx: isMobile ? 1 : 0,
//       }}
//     >
//       <Box
//         sx={{
//           width: 70,
//           height: 70,
//           borderRadius: "50%",
//           backgroundColor: "rgba(240,197,124,0.2)",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           mb: 2,
//           flexShrink: 0,
//         }}
//       >
//         {item.icon}
//       </Box>

//       <Typography
//         sx={{
//           fontFamily: "Montserrat, sans-serif",
//           fontWeight: 600,
//           color: "#1B152B",
//           fontSize: { xs: 15, md: 17 },
//           mb: 0.5,
//         }}
//       >
//         {item.title}
//       </Typography>

//       <Typography
//         sx={{
//           fontFamily: "Montserrat, sans-serif",
//           fontWeight: 400,
//           fontSize: { xs: 13, md: 14 },
//           color: "#555",
//           maxWidth: 280,
//         }}
//       >
//         {item.desc}
//       </Typography>
//     </Box>
//   );

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#FAF8F5",
//         py: 6,
//         px: { xs: 2, md: 10 },
//         textAlign: "center",
//         width:'95vw'
//       }}
//     >
//       {/* Section Heading */}
//       <Typography
//         sx={{
//           fontFamily: "'Astoria Classic Sans', serif",
//           fontWeight: 600,
//           color: "#DA8F08",
//           fontSize: { xs: 22, md: 30 },
//           mb: 1,
//         }}
//       >
//         Why Choose Pratik Nagar
//       </Typography>

//       {/* Subheading */}
//       <Typography
//         sx={{
//           fontFamily: "Montserrat, sans-serif",
//           fontWeight: 500,
//           fontSize: { xs: 13, md: 16 },
//           color: "#000",
//           mb: 4,
//         }}
//       >
//         Here are Top 6 Reasons why Pratik Nagar is unlike any other redevelopment project
//       </Typography>

//       {/* Layout */}
//       {!isMobile ? (
//         <>
//           {/* Top 3 */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "stretch",
//               gap: 3,
//               flexWrap: "nowrap",
//               outline: "2px solid #FFEBA8",
//               borderRadius: "10px",
//               p: 2,
//               mb: 3,
//             }}
//           >
//             {reasons.slice(0, 3).map((item, index) =>
//               renderCard(item, index, index === 2)
//             )}
//           </Box>

//           {/* Bottom 3 */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "stretch",
//               gap: 3,
//               flexWrap: "nowrap",
//               outline: "2px solid #FFEBA8",
//               borderRadius: "10px",
//               p: 2,
//             }}
//           >
//             {reasons.slice(3, 6).map((item, index) =>
//               renderCard(item, index, index === 2)
//             )}
//           </Box>
//         </>
//       ) : (
//         // 🔹 Mobile View - Horizontal Scroll
//         <Box
//           sx={{
//             display: "flex",
//             overflowX: "auto",
//             scrollSnapType: "x mandatory",
//             scrollbarWidth: "none",
//             "&::-webkit-scrollbar": { display: "none" },
//             px: 1,
//           }}
//         >
//           {reasons.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 scrollSnapAlign: "center",
//                 flex: "0 0 85%",
//               }}
//             >
//               {renderCard(item, index, false)}
//             </Box>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default WhyChoosePratikNagar;
