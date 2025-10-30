import { Box, Typography, TextField, Button, Skeleton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FooterBg from "../assets/images/pnpkc/footerDesktop.png";

// const RightSideForm  = ({ sx = {} }) =>{
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         background: "white",
//         width: { xs: "100%", md: "30%" },
//         padding:{xs:3,md:3},
//         ...sx,
//         borderRadius: 2,
//       }}
//     >
//       {/* Full Name */}
//       <Box>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
//           <PersonIcon sx={{ color: "#A26800", fontSize: 25, mr: 2  }} />
//           <Typography
//             sx={{
//               fontSize: { xs: 17, md: 17 },
//               fontWeight: 600,
//               color: "#1B152B",
//               fontFamily: "SF Pro",
//             }}
//           >
//             Full Name *
//           </Typography>
//         </Box>
//         <TextField
//           placeholder="Enter your name"
//           variant="outlined"
//           fullWidth
//           size="small"
//           sx={{ fontFamily: "SF Pro", background: "#F9F8F5" }}
//         />
//       </Box>

//       {/* Email */}
//       <Box>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
//           <EmailIcon sx={{ color: "#A26800", fontSize: 25, mr: 2  }} />
//           <Typography
//             sx={{
//               fontFamily: "SF Pro",
//               fontWeight: 600,
//               color: "#1B152B",
//               fontSize: { xs: 17, md: 17 },
//             }}
//           >
//             Email Address *
//           </Typography>
//         </Box>
//         <TextField
//           placeholder="your.email@example.com"
//           variant="outlined"
//           fullWidth
//           size="small"
//           sx={{ fontFamily: "SF Pro", background: "#F9F8F5" }}
//         />
//       </Box>

//       {/* Phone Number */}
//       <Box>
//         <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
//           <PhoneIcon sx={{ color: "#A26800", fontSize: 25, mr: 2 }} />
//           <Typography
//             sx={{
//               fontFamily: "SF Pro",
//               fontSize: { xs: 17, md: 17 },
//               fontWeight: 600,
//               color: "#1B152B",
//             }}
//           >
//             Phone Number *
//           </Typography>
//         </Box>
//         <TextField
//           placeholder="+91  Enter your phone number"
//           variant="outlined"
//           fullWidth
//           size="small"
//           sx={{ fontFamily: "SF Pro", fontSize: 10, background: "#F9F8F5" }}
//         />
//       </Box>

//       {/* Button */}
//       <Button
//         variant="contained"
//         fullWidth
//         sx={{
//           mt: 1,
//           bgcolor: "#A26800",
//           textTransform: "none",
//           borderRadius: 1,
//           fontWeight: 600,
//           "&:hover": { bgcolor: "#864F00" },
//         }}
//       >
//         Request a call
//       </Button>

//       <Typography
//         sx={{
//           mt: 1,
//           fontSize: 15,
//           fontWeight: 600,
//           color: "#5E5E5E",
//           textAlign: "center",
//           fontFamily: "SF Pro",
//         }}
//       >
//         Your privacy is important to us. We will never share your information
//         with third parties.
//       </Typography>
//     </Box>
//   );
// };

const RightSideForm = ({ sx = {}, closeModal }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [shouldSubmit, setShouldSubmit] = useState(false); // trigger flag for useEffect
  const buid = "123"; // can be dynamic if needed

  // ✅ Handles input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validation before triggering useEffect
  const handleSubmit = (e) => {
    e.preventDefault();

    const { full_name, email, phone_number, message } = formData;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^(?:\+91|0)?(\d{10})$/;
    const match = phone_number.match(phoneRegex);

    if (!full_name || !email || !phone_number || !message)
      return toast.error("All fields are required");
    if (!full_name.trim()) return toast.error("Full name is required");
    if (!email.trim()) return toast.error("Email is required");
    if (!emailRegex.test(email)) return toast.error("Invalid email format");
    if (!phone_number.trim()) return toast.error("Phone number is required");
    if (!match) return toast.error("Invalid phone number format");
    if (!message.trim()) return toast.error("Message is required");
    if (!match) {
      return toast.error("Invalid phone number format");
    } else {
      const cleanPhoneNumber = match[1]; // Extracting the last 10 digits
      console.log("Valid Phone Number: ", cleanPhoneNumber);
    }

    // ✅ trigger useEffect for submission
    setShouldSubmit(true);
  };

  // ✅ useEffect to handle API POST when shouldSubmit changes
  useEffect(() => {
    if (!shouldSubmit) return;

    const submitForm = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:5000/api/form", {
          ...formData,
          buid,
        });

        const result = response.data;

        // Show toast before closing modal
        if (result.success === true) {
          toast.success("Form submitted successfully!");
          setFormData({
            full_name: "",
            email: "",
            phone_number: "",
            message: "",
          });

          // Close the modal only after the toast has been shown
          if (closeModal) {
            closeModal();
          }
        } else {
          toast.error(result.message || "Submission failed. Try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error(
          error.response?.data?.message ||
            "Server error. Please try again later."
        );
      } finally {
        setLoading(false);
        setShouldSubmit(false); // reset trigger
      }
    };

    submitForm();
  }, [shouldSubmit, closeModal]); // runs only when user triggers submission
  // runs only when user triggers submission

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: "white",
        width: { xs: "100%", md: "30%" },
        padding: { xs: 3, md: 3 },
        borderRadius: 2,
        ...sx,
      }}
    >
      {/* Full Name */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <PersonIcon sx={{ color: "#A26800", fontSize: 25, mr: 1 }} />
          <Typography
            sx={{
              fontSize: { xs: 17, md: 15 },
              fontWeight: 500,
              color: "#1B152B",
              fontFamily: "SF Pro",
            }}
          >
            Full Name *
          </Typography>
        </Box>
        <TextField
          name="full_name"
          placeholder="Enter your name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            background: "#F9F8F5",

            "& .MuiInputBase-input::placeholder": {
              fontFamily: "SF Pro", // 👈 change font
              fontSize: "15px",
              fontWeight: 500,
              color: "#8A8A8A",
              opacity: 1, // important for color to apply
            },
          }}
          value={formData.full_name}
          onChange={handleChange}
        />
      </Box>

      {/* Email */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <EmailIcon sx={{ color: "#A26800", fontSize: 25, mr: 1 }} />
          <Typography
            sx={{
              fontFamily: "SF Pro",
              fontWeight: 500,
              color: "#1B152B",
              fontSize: { xs: 17, md: 15 },
            }}
          >
            Email Address *
          </Typography>
        </Box>
        <TextField
          name="email"
          placeholder="your.email@example.com"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ background: "#F9F8F5",
             "& .MuiInputBase-input::placeholder": {
              fontFamily: "SF Pro", // 👈 change font
              fontSize: "15px",
              fontWeight: 500,
              color: "#8A8A8A",
              opacity: 1, // important for color to apply
            },
           }}
          value={formData.email}
          onChange={handleChange}
        />
      </Box>

      {/* Phone Number */}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          <PhoneIcon sx={{ color: "#A26800", fontSize: 25, mr: 1 }} />
          <Typography
            sx={{
              fontFamily: "SF Pro",
              fontSize: { xs: 17, md: 15 },
              fontWeight: 500,
              color: "#1B152B",
            }}
          >
            Phone Number *
          </Typography>
        </Box>
        <TextField
          name="phone_number"
          placeholder="+91 Enter your phone number"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ background: "#F9F8F5",
             "& .MuiInputBase-input::placeholder": {
              fontFamily: "SF Pro", // 👈 change font
              fontSize: "15px",
              fontWeight: 500,
              color: "#8A8A8A",
              opacity: 1, // important for color to apply
            },
           }}
          value={formData.phone_number}
          onChange={handleChange}
        />
      </Box>

      {/* Message */}
      <Box>
        <Typography
          sx={{
            fontFamily: "SF Pro",
            fontSize: { xs: 17, md: 15 },
            fontWeight: 500,
            color: "#1B152B",
            mb: 0.5,
          }}
        >
          Message *
        </Typography>
        <TextField
          name="message"
          placeholder="Type your message..."
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          size="small"
          sx={{ background: "#F9F8F5",
             "& .MuiInputBase-input::placeholder": {
              fontFamily: "SF Pro", // 👈 change font
              fontSize: "15px",
              fontWeight: 500,
              color: "#8A8A8A",
              opacity: 1, // important for color to apply
            },
           }}
          value={formData.message}
          onChange={handleChange}
        />
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 1,
          bgcolor: "#A26800",
          textTransform: "none",
          borderRadius: 1,
          fontWeight: 600,
          "&:hover": { bgcolor: "#864F00" },
          fontFamily:'SF Pro'
        }}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Request a call"}
      </Button>

      <Typography
        sx={{
          mt: 0,
          fontSize: 14,
          fontWeight: 500,
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

// const Form = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         p: { xs: 0, md: 4 },
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         alignItems: "center",
//         justifyContent: "center",
//         gap: { xs: 4, md: 2 },
//         bgcolor: "#F9F8F5",
//         mb: { xs: 2, md: 0 },
//         mt: { xs: 3, md: 0 },
//       }}
//     >
//       {/* LEFT SIDE — Text + Contact */}
//       <Box
//         sx={{
//           textAlign: { xs: "center", md: "center" },
//           width: { xs: "100%", md: "27%" },
//         }}
//       >
//         <Box
//         sx={{
//           display:{xs:"flex",md:"block"},
//           justifyContent:"center",
//           alignItems:"center",
//           gap:1
//         }}
//         >
//         {/* <Typography
//           sx={{
//             fontFamily: "Yeseva One, serif",
//             color: "#000",
//             fontSize: { xs: 21, md: 30 },
//             fontWeight: 500,
//           }}
//         >
//           Be a Part of the{" "}
//         </Typography>

//         <Typography
//           sx={{
//             fontFamily: "Yeseva One, serif",
//             color: "#DA8F08",
//             fontSize: { xs: 21, md: 30 },
//             fontWeight: 500,
//           }}
//         >
//           VJ Parivaar
//         </Typography> */}
//           <Typography
//                     sx={{
//                       fontFamily: "Astoria Classic Sans",
//                       fontSize: { xs: 26, md: 42 },
//                       fontWeight: 600,
//                       lineHeight: 1.3,
//                       color: "black",
//                     }}
//                   >
//                     Be Part of the New <br /> Pratik Nagar Story
//                   </Typography>

//                   <Typography
//                     sx={{
//                       fontFamily: "SF Pro",
//                       fontSize: { xs: 13, md: 18 },
//                       mt: 1,
//                       color: "black",
//                     }}
//                   >
//                     Join the next chapter of a community that continues to inspire generations.
//                   </Typography>

//                   <Typography
//                     sx={{
//                       position: "relative",
//                       top: "10px",
//                       left: "50%",
//                       transform: "translateX(-50%)",
//                       color: "black",
//                       fontSize: 15,
//                       fontFamily: "SF Pro",
//                       fontWeight: 500,
//                       textAlign: "center",
//                       width: "100%",
//                       px: 2,
//                       py: 1,
//                       lineHeight: 1.5,
//                       background: "rgba(200, 188, 188, 0.3)",
//                       backdropFilter: "blur(1px)",
//                       borderRadius: "4px",
//                     }}
//                   >
//                     Limited homes available. Express your interest today.
//                   </Typography>
// </Box>
//         {/* <Typography
//           sx={{
//             mt: 1,
//             fontFamily: "SF Pro",
//             color: "#555",
//             fontSize: { xs: 16, md: 15 },
//             fontWeight: 600,
//             letterSpacing: 0.2,
//             padding:{xs:1,sm:0}
//           }}
//         >
//           Fill in your details to receive floor plans, price details, and
//           exclusive pre-launch updates.
//         </Typography> */}

//         {/* Contact Info — Using Boxes instead of Grid */}
//         <Box
//           sx={{
//             mt: 4,
//             display: "flex",
//             justifyContent: { xs: "center", md: "center" },
//             gap: { xs: 5, md: 10 },
//           }}
//         >
//           {/* Call Box */}
//           {/* <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "50%",
//                 width: {xs:40,md:60},
//                 height: {xs:40,md:60},
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mb: 1,
//               }}
//             >
//               <PhoneOutlinedIcon sx={{ color: "#A26800", fontSize: 20 }} />
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontWeight: 600,
//                   fontSize: {xs:14,sm:15},
//                   color: "black",
//                   textAlign: "left",
//                   fontFamily: "SF Pro",
//                 }}
//               >
//                 Call Us
//               </Typography>

//               <Typography
//                 sx={{  fontSize: {xs:13,sm:15}, color: "black", fontFamily: "SF Pro" }}
//               >
//                 +91 XXX XXX XXXX
//               </Typography>
//             </Box>
//           </Box> */}

//           {/* Email Box */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "50%",
//                 width: {xs:40,md:60},
//                 height: {xs:40,md:60},
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mb: 1,
//               }}
//             >
//               <EmailOutlinedIcon sx={{ color: "#A26800", fontSize: 28 }} />
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontWeight: 600,
//                   fontSize: {xs:14,sm:15},
//                   color: "black",
//                   textAlign: "left",
//                   fontFamily: "SF Pro",
//                 }}
//               >
//                 Email Us
//               </Typography>
//               <Typography
//                 sx={{  fontSize: {xs:15,sm:20}, fontFamily: "SF Pro", color: "black" }}
//               >
//                 info@pnpkc.com
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     <ToastContainer position="bottom-right" autoClose={2500} />
//       {/* RIGHT SIDE — Form */}
//       <RightSideForm />
//     </Box>
//   );
// };

const Form = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        p: { xs: 0, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 2 },
        minHeight: "80vh",
        overflow: "hidden",
        mt: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      {/* 🟡 Background Skeleton */}
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", inset: 0 }}
        />
      )}

      {/* 🟢 Hidden Image Loader */}
      <Box
        component="img"
        src={FooterBg}
        alt="Footer Background"
        onLoad={() => setIsLoaded(true)}
        sx={{ display: "none", borderTopLeftRadius: 20,
        borderTopRightRadius: 20, }}
      />

      {/* 🖼️ Background Image */}
      {isLoaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${FooterBg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            transition: "opacity 0.6s ease-in-out",
           borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
          }}
        />
      )}

      {/* 🖤 Overlay */}
      {isLoaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(30, 29, 29, 0.6)",
          }}
        />
      )}

      {/* ✅ Foreground Content */}
      <Box
        sx={{
          width: "100%",
          zIndex: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 2 },
          p: { xs: 2, md: 4 },
        }}
      >
        {/* LEFT SIDE — Text + Contact */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "center" },
            width: { xs: "100%", md: "50%" },
            color: "white",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Astoria Classic Sans",
                fontSize: { xs: 26, md: 42 },
                fontWeight: 550,
                lineHeight: 1.3,
                mt: { xs: 5, sm: 0 },
              }}
            >
              Be Part of the New <br /> Pratik Nagar Story
            </Typography>

            <Typography
              sx={{
                fontFamily: "SF Pro",
                fontSize: { xs: 13, md: 18 },
                mt: 1,
              }}
            >
              Join the next chapter of a community that continues to inspire
              generations.
            </Typography>

            <Typography
              sx={{
                position: "relative",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 15,
                fontFamily: "SF Pro",
                fontWeight: 500,
                textAlign: "center",
                width: { xs: "100%", md: "70%" },
                px: 2,
                py: 1,
                lineHeight: 1.5,
                background: "rgba(200, 188, 188, 0.3)",
                backdropFilter: "blur(1px)",
                borderRadius: "4px",
              }}
            >
              Limited homes available. Express your interest today.
            </Typography>
          </Box>

          {/* Email Info Box */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: { xs: "center", md: "center" },
              gap: { xs: 5, md: 10 },
            }}
          >
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
                  width: { xs: 40, md: 60 },
                  height: { xs: 40, md: 60 },
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
                    fontSize: { xs: 14, sm: 15 },
                    fontFamily: "SF Pro",
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  Email Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 15, sm: 20 },
                    fontFamily: "SF Pro",
                    color: "white",
                  }}
                >
                  info@pnpkc.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <ToastContainer position="bottom-right" autoClose={2500} />

        {/* RIGHT SIDE — Form */}
        <RightSideForm />
      </Box>
    </Box>
  );
};

export default Form;
export { RightSideForm };
