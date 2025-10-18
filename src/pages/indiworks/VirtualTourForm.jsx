import { Box, Typography, InputBase, Button } from "@mui/material";

export default function VirtualTourFormSimple() {
  return (
    <Box
      sx={{
        width: {xs:"100%",md:"80%"},
        bgcolor: "#2D324B",
        borderRadius: "12px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1,
        margin:'auto'
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#FEFEFF",
          fontSize: "15px",
          fontFamily: "Montserrat",
          fontWeight: 600,
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        Book Your Virtual Tour Now
      </Typography>

      {/* Full Name Label */}
      <Box sx={{ display: "flex", alignItems: "center",width:'100%' }}>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 600,
            lineHeight: "22px",
          }}
        >
          Full Name <span style={{color:'red'}}>*</span>
        </Typography>
        </Box>
       
      </Box>

      {/* Full Name Input */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          outline: "2px solid #EA5F7A",
          px: 1,
          py: 0.5,
          display: "flex",
          alignItems: "center",
          mb:1
        }}
      >
        <InputBase
          placeholder="Full Name"
          sx={{
            color: "#A1A1A1",
             fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 400,
            lineHeight: "10px",
             
          }}
        />
      </Box>

      {/* Email Label */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" , width:'100%'}}>
         <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>
        <Typography
          sx={{
            color: "#FFFFFF",
             fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 600,
            lineHeight: "22px",
            textAlign:'left',
          }}
        >
          Email ID <span style={{color:'red'}}>*</span>
        </Typography>
        </Box>
      
      </Box>

      {/* Email Input */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          outline: "2px solid #EA5F7A",
            px: 1,
          py: 0.5,
          display: "flex",
          alignItems: "center",
          mb:1
        }}
      >
        <InputBase
          placeholder="Email Id"
          sx={{
            flex: 1,
            color: "#A1A1A1",
             fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        />
      </Box>

      {/* Phone Label */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" , width:'100%'}}>
         <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',width:'100%'}}>
        <Typography
          sx={{
            color: "#FFFFFF",
             fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 600,
            lineHeight: "22px",
          }}
        >
          Phone No <span style={{color:'red'}}>*</span>
        </Typography>
      </Box>
      </Box>

      {/* Phone Input */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          outline: "2px solid #EA5F7A",
           px: 1,
          py: 0.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputBase
          placeholder="Phone No."
          sx={{
            flex: 1,
            color: "#A1A1A1",
             fontSize: { xs: "12px", md: "14px" },
            fontFamily: "SF Pro",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        />
      </Box>

      {/* Button */}
      <Button
        sx={{
          mt: 3,
          px:{xs:1.5,md:2}, 
          py: {xs:1.5,md:1.5},
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "SF Pro",
          background: "linear-gradient(90deg, #D94A9A 0%, #F8966C 100%)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(90deg, #C73F88 0%, #E8835B 100%)",
          },
          width: {xs:"70%",md:'auto'},
           fontSize: { xs: "14px", md: "14px" },
        }}
      >
        Book Virtual Tour
      </Button>
    </Box>
  );
}
