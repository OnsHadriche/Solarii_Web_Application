import { Box, Card, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/Star 1.png"; // Update the path as needed
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const JobSolariHeader = () => {
  return (
    <Card
    
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "space-evenly",
        padding: "55px 146px 37px 102px",
        margin: "26px 10px",
        borderRadius: 3,
        backgroundColor: "#A6C8FF",
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        height: "236px",
        width: "100%", 
        backgroundImage: `url(${backgroundImage}), url(${backgroundImage}), url(${backgroundImage})`,
        backgroundPosition: "20% 20%, 50% 40%, 80% 60%", 
        backgroundSize: "80px 80px, 80px 80px, 80px 80px",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        // maxWidth: '100vw'
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ zIndex: 2, maxWidth: "70%" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.48px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Ne laissez pas vos projets ralentir. Solarii Job est là pour vous
          aider à avancer, sans interruption !
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 1,
            fontWeight: "bold",
            textAlign: "left",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.48px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          🚀 Créez une mission maintenant et optimisez vos résultats
        </Typography>
        <Button
          variant="contained"
          sx={{
            display:"flex",
            flexDirection: "row",
            justifyContent:"space-between",
            backgroundColor: "black",
            borderRadius: 20,
            zIndex: 2,
            textTransform: "none",
            padding: "4px 12px",
            // marginLeft: 2,
            height:"36px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <Typography sx={{ color: "white",
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.48px",
              fontFamily: "Inter, sans-serif",}}>Créer mission</Typography>
          <PlayCircleOutlineIcon
            sx={{
              width:"20px",
              height: "20px"
            }}
          />
        </Button>
      </Box>
      {/* Button */}
    </Card>
  );
};

export default JobSolariHeader;
