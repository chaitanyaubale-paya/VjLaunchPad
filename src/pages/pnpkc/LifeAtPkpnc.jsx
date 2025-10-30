import { Box, Typography, Grid, useMediaQuery, useTheme, Skeleton } from "@mui/material";
import { useState } from "react";

import SpiritualZone from "../../assets/images/pnpkc/aminities/spiritualZone.jpg";
import KidsPlay from "../../assets/images/pnpkc/aminities/kidsPlay.jpg";
import SwimmingPool from "../../assets/images/pnpkc/aminities/swimmingPool.jpg";
import PetPark from "../../assets/images/pnpkc/aminities/petsPark.jpg";
import Wellness from "../../assets/images/pnpkc/aminities/wellnessZone.jpg";
import Sports from "../../assets/images/pnpkc/aminities/sportsZone.jpg";
import Jogging from "../../assets/images/pnpkc/aminities/joggingPark.jpg";
import ClubPalladio from "../../assets/images/pnpkc/aminities/clubPalladio.jpg";

const amenities = [
  { title: "Swimming Pool", desc: "Finish with a refreshing outdoor shower.", img: SwimmingPool },
  { title: "Nana-Nani Park", desc: "A calm park for seniors with paths and shaded seating.", img: Jogging },
  { title: "Kids' Play Area", desc: "Endless fun in the spacious play area.", img: KidsPlay },
  { title: "Pet Park", desc: "A safe, green play zone for pets with water and seating.", img: PetPark },
  { title: "Spiritual Zone", desc: "A peaceful temple for prayer and togetherness.", img: SpiritualZone },
  { title: "Sports Zone", desc: "A one-stop spot for residents to enjoy various sports.", img: Sports },
  { title: "Wellness Zone", desc: "Stay fit and healthy at our modern Fitness Centre.", img: Wellness },
  { title: "Club Palladio", desc: "Modern, connected spaces for productive work.", img: ClubPalladio },
];

const LifeAtPkpnc = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#272727",
        color: "#fff",
        py: 2,
        px: { xs: 2, md: 0 },
        textAlign: "center",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      {/* Section Heading */}
      <Typography
        sx={{
          fontFamily: "'Astoria Classic Sans', serif",
          fontWeight: 600,
          color: { xs: "white", md: "#F6C244" },
          fontSize: { xs: 28, md: 28 },
          mb: 1,
        }}
      >
        Life at Pratik Nagar
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          fontFamily: "SF Pro",
          fontWeight: 400,
          color: { xs: "#F6C244", md: "white" },
          fontSize: { xs: 20, md: 16 },
          mb: 2,
        }}
      >
        Amenities thoughtfully designed for all generations
      </Typography>

      {/* 🖥️ Desktop Grid */}
      {!isMobile ? (
        <Grid container spacing={2} justifyContent="center">
          {amenities.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ position: "relative", borderRadius: "10px", overflow: "hidden", height: 150 }}>
                {/* Skeleton while image loading */}
                {!loadedImages[index] && (
                  <Skeleton
                    variant="rectangular"
                    width="300px"
                    height="150px"
                    sx={{ borderRadius: "10px" }}
                  />
                )}

                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  onLoad={() => handleImageLoad(index)}
                  sx={{
                    width: "300px",
                    height: "150px",
                    objectFit: "cover",
                    display: loadedImages[index] ? "block" : "none",
                    borderRadius: "10px",
                    transition: "opacity 0.4s ease-in-out",
                  }}
                />

                {/* Gradient overlay */}
                {loadedImages[index] && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2))",
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Text content */}
                {loadedImages[index] && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 40,
                      left: 20,
                      right: 20,
                      zIndex: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Astoria Classic Sans",
                        fontWeight: 600,
                        fontSize: { xs: 15, md: 20 },
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "SF Pro",
                        fontWeight: 400,
                        fontSize: { xs: 13, md: 14 },
                        color: "#eee",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        // 📱 Mobile scroll
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            scrollSnapType: "x mandatory",
            pb: 0,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {Array.from({ length: Math.ceil(amenities.length / 2) }).map((_, groupIndex) => {
            const first = amenities[groupIndex * 2];
            const second = amenities[groupIndex * 2 + 1];
            return (
              <Box
                key={groupIndex}
                sx={{
                  flex: "0 0 80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  scrollSnapAlign: "center",
                }}
              >
                {[first, second].map(
                  (item, idx) =>
                    item && (
                      <Box
                        key={idx}
                        sx={{
                          position: "relative",
                          borderRadius: "10px",
                          overflow: "hidden",
                          height: 200,
                        }}
                      >
                        {/* Skeleton while image loads */}
                        {!loadedImages[item.title] && (
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height="100%"
                            sx={{ borderRadius: "10px" }}
                          />
                        )}

                        {/* Hidden image to detect load */}
                        <Box
                          component="img"
                          src={item.img}
                          alt={item.title}
                          onLoad={() =>
                            setLoadedImages((prev) => ({
                              ...prev,
                              [item.title]: true,
                            }))
                          }
                          sx={{ display: "none" }}
                        />

                        {/* Actual background when loaded */}
                        {loadedImages[item.title] && (
                          <>
                            <Box
                              sx={{
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%",
                                height: "100%",
                                borderRadius: "10px",
                                "&::after": {
                                  content: '""',
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  background:
                                    "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2))",
                                },
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 20,
                                right: 20,
                                zIndex: 2,
                                textAlign: "left",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "Astoria Classic Sans",
                                  fontWeight: 600,
                                  fontSize: 20,
                                  color: "#fff",
                                  textAlign: "center",
                                  mb: 1,
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "SF Pro",
                                  fontWeight: 400,
                                  fontSize: 14,
                                  color: "#eee",
                                  textAlign: "center",
                                  mb: 5,
                                }}
                              >
                                {item.desc}
                              </Typography>
                            </Box>
                          </>
                        )}
                      </Box>
                    )
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Footer line */}
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          color: "#F6C244",
          fontSize: { xs: 15, md: 15 },
          mt: 2,
        }}
      >
        💛 And many more spaces that bring people together
      </Typography>
    </Box>
  );
};

export default LifeAtPkpnc;































// import { Box, Typography, Grid, useMediaQuery, useTheme, Skeleton } from "@mui/material";
// import SpiritualZone from '../../assets/images/pnpkc/aminities/spiritualZone.jpg'
// import KidsPlay from '../../assets/images/pnpkc/aminities/kidsPlay.jpg'
// import SwimmingPool from '../../assets/images/pnpkc/aminities/swimmingPool.jpg'
// import PetPark from '../../assets/images/pnpkc/aminities/petsPark.jpg'
// import Wellness from '../../assets/images/pnpkc/aminities/wellnessZone.jpg'
// import Sports from '../../assets/images/pnpkc/aminities/sportsZone.jpg'
// import  Jogging from '../../assets/images/pnpkc/aminities/joggingPark.jpg'
// import ClubPalladio from '../../assets/images/pnpkc/aminities/clubPalladio.jpg';
// import { useState,useEffect } from "react";
// const amenities = [
//   {
//     title: "Swimming Pool",
//     desc: "Finish with a refreshing outdoor shower.",
//     img: SwimmingPool,
//   },
//   {
//     title: "Nana-Nani Park",
//     desc: "A calm park for seniors with paths and shaded seating.",
//     img: Jogging,
//   },
//   {
//     title: "Kids' Play Area",
//     desc: "Endless fun in the spacious play area.",
//     img: KidsPlay,
//   },
//   {
//     title: "Pet Park",
//     desc: "A safe, green play zone for pets with water and seating.",
//     img: PetPark,
//   },
//   {
//     title: "Spiritual Zone",
//     desc: "A peaceful temple for prayer and togetherness.",
//     img: SpiritualZone,
//   },
//   {
//     title: "Sports Zone",
//     desc: "A one-stop spot for residents to enjoy various sports.",
//     img: Sports,
//   },
//   {
//     title: "Wellness Zone",
//     desc: "Stay fit and healthy at our modern Fitness Centre.",
//     img: Wellness,
//   },
//   {
//     title: "Club Palladio",
//     desc: "Modern, connected spaces for productive work.",
//     img: ClubPalladio,
//   },
// ];

// const LifeAtPkpnc = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // 2 seconds skeleton duration
//     return () => clearTimeout(timer);
//   })


//   return (
//     <Box
//       sx={{
//         backgroundColor: isMobile ? "#272727":"#272727",
//         color: "#fff",
//         py: 2,
//         px: { xs: 2, md: 0 },
//         textAlign: "center",
//         borderRadius: "10px",
//         width:{xs:"100%",md:'100%'}
//       }}
//     >
//       {/* Section Heading */}
//       <Typography
//         sx={{
//           fontFamily: "'Astoria Classic Sans', serif",
//           fontWeight: 600,
//           color: {xs:"white",md:"#F6C244",},
//            fontSize: { xs: 28, md: 28 },
//           mb: 1,
//         }}
//       >
//         Life at Pratik Nagar
//       </Typography>

//       {/* Subheading */}
//       <Typography
//         sx={{
//           fontFamily: "SF Pro",
//           fontWeight: 400,
//           // color: "#ddd",
//           color: {xs:"#F6C244",md:"white",},
//           fontSize: { xs: 20, md: 16 },
//           mb: 2,
//         }}
//       >
//         Amenities thoughtfully designed for all generations
//       </Typography>

//       {/* Grid for desktop / Scroll for mobile */}
//      {!isMobile ? (
//   <Grid container spacing={2} justifyContent="center">
//     {amenities.map((item, index) => (
//       <Grid item xs={12} sm={6} md={3} key={index}>
//         <Box
//           sx={{
//             position: "relative",
//             borderRadius: "10px",
//             overflow: "hidden",
//             height: 150,
         
//           }}
//         >
//           {/* Image itself */}
//           {/* <Box
//             component="img"
//             src={item.img}
//             alt={item.title}
//             sx={{
//               width: "300px",
//               height: "150px",
//               objectFit: "cover",
//               display: "block",
//             }}
//           /> */}
//            {isLoading ? (
//           <Skeleton
//             variant="rectangular"
//             width="300px"
//             height="150px"
//           />
//         ) : (
//           <Box
//             component="img"
//             src={item.img}
//             alt={item.title}
//             sx={{
//               width: "300px",
//               height: "150px",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//         )}

//           {/* Gradient overlay */}
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               background:
//                 "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2))",
//               zIndex: 1,

//             }}
//           />

//           {/* Text content */}
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: 40,
//               left: 20,
//               right: 20,
//               zIndex: 2,
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontFamily: "Astoria Classic Sans",
//                 fontWeight: 600,
//                 fontSize: { xs: 15, md: 20 },
//                 color: "#fff",
//               }}
//             >
//               {item.title}
//             </Typography>
//             <Typography
//               sx={{
//                 fontFamily: "SF pro",
//                 fontWeight: 400,
//                 fontSize: { xs: 13, md: 14 },
//                 color: "#eee",
//               }}
//             >
//               {item.desc}
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     ))}
//   </Grid>
// ) : (
  
//         <Box
//   sx={{
//     display: "flex",
//     overflowX: "auto",
//     gap: 2,
//     scrollSnapType: "x mandatory",
//     pb: 0,
//     "&::-webkit-scrollbar": { display: "none" },
//   }}
// >
//   {Array.from({ length: Math.ceil(amenities.length / 2) }).map((_, index) => {
//     const first = amenities[index * 2];
//     const second = amenities[index * 2 + 1];
//     return (
//       <Box
//         key={index}
//         sx={{
//           flex: "0 0 80%", // width of each scroll "page"
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           scrollSnapAlign: "center",
//         }}
//       >
//         {/* {[first, second].map(
//           (item, idx) =>
//             item && (
//               <Box
//                 key={idx}
//                 sx={{
//                   position: "relative",
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   height: 200,
//                   backgroundImage: `url(${item.img})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2))",
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 20,
//                     right: 20,
//                     zIndex: 2,
//                     textAlign: "left",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontFamily: "Astoria Classic Sans",
//                       fontWeight: 600,
//                       fontSize: 20,
//                       color: "#fff",
//                       textAlign: "center",
//                       mb:1
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontFamily: "SF Pro",
//                       fontWeight: 400,
//                       fontSize: 14,
//                       color: "#eee",
//                       textAlign: "center",
//                        mb:5
//                     }}
//                   >
//                     {item.desc}
//                   </Typography>
//                 </Box>
//               </Box>
//             )
//         )} */}
//         {[first, second].map(
//   (item, idx) =>
//     item && (
//       <Box
//         key={idx}
//         sx={{
//           position: "relative",
//           borderRadius: "10px",
//           overflow: "hidden",
//           height: 200,
//         }}
//       >
//         {/* ✅ Skeleton while loading */}
//         {isLoading ? (
//           <Skeleton
//             variant="rectangular"
//             width="100%"
//             height="100%"
//             sx={{ borderRadius: "10px" }}
//           />
//         ) : (
//           <>
//             <Box
//               sx={{
//                 backgroundImage: `url(${item.img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 width: "100%",
//                 height: "100%",
//                 borderRadius: "10px",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background:
//                     "linear-gradient(to top, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2))",
//                 },
//               }}
//             />

//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 20,
//                 right: 20,
//                 zIndex: 2,
//                 textAlign: "left",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "Astoria Classic Sans",
//                   fontWeight: 600,
//                   fontSize: 20,
//                   color: "#fff",
//                   textAlign: "center",
//                   mb: 1,
//                 }}
//               >
//                 {item.title}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontFamily: "SF Pro",
//                   fontWeight: 400,
//                   fontSize: 14,
//                   color: "#eee",
//                   textAlign: "center",
//                   mb: 5,
//                 }}
//               >
//                 {item.desc}
//               </Typography>
//             </Box>
//           </>
//         )}
//       </Box>
//     )
// )}

//       </Box>
//     );
//   })}
// </Box>


//       )}

//       {/* Footer line */}
//       <Typography
//         sx={{
//           fontFamily: "Montserrat, sans-serif",
//           fontWeight: 400,
//           color: "#F6C244",
//           fontSize: { xs: 15, md: 15 },
//           mt: 2,
//         }}
//       >
//         💛 And many more spaces that bring people together
//       </Typography>
//     </Box>
//   );
// };

// export default LifeAtPkpnc;
