import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import LineSeparator from "../components/Common/LineSeparator";
import "../Style/JobDetailPage.css";

function JobDetailPage() {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gap: 2,
        padding: 2,
      }}
    >
      {/* Sidebar */}
      <Box
        className={"box-container"}
        sx={{
          width: isSmallScreen ? "100%" : "220px",
        }}
      >
        <Typography gutterBottom className="headerText">
          Détail de l'annonce
        </Typography>
        <LineSeparator width={"100%"} />
        <Typography className={"sidebar-sub-title"}>Poste:</Typography>
        <Typography className={"sidebar-content"}>Chef d'équipe</Typography>
        <LineSeparator width={"100%"} />

        <Typography className="sidebar-sub-title">Type de travail:</Typography>
        <Typography className={"sidebar-content"}>Chef d'équipe</Typography>
        <LineSeparator width={"100%"} />

        <Typography className="sidebar-sub-title">Expérience:</Typography>
        <Typography className={"sidebar-content"}>Chef d'équipe</Typography>
        <LineSeparator width={"100%"} />

        <Typography className="sidebar-sub-title">Éducation:</Typography>
        <Typography className={"sidebar-content"}>
          {" "}
          Master en génie électrique
        </Typography>
        <LineSeparator width={"100%"} />

        <Typography className="sidebar-sub-title">
          Rémunération proposée:
        </Typography>
        <Typography className={"sidebar-content"}> 50,000 TND/an</Typography>
        <LineSeparator width={"100%"} />

        <Typography className="sidebar-sub-title">Disponibilité:</Typography>
        <Typography className={"sidebar-content"}> Immédiate</Typography>
        <LineSeparator width={"100%"} />
        <Typography className="sidebar-sub-title">Langues:</Typography>
        <Typography className={"sidebar-content"}>
          {" "}
          Français, Anglais
        </Typography>
      </Box>

      {/* Main Content Area */}

      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Company Info */}
        <Box
          className={"box-container"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "145px", height: "145px" }}
                image="data:image/png;base64,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"
                alt="Society logo"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                 <strong>Entreprise:</strong> 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              Green Power Energy
              </Typography>

              <Typography variant="body2" color="textSecondary">
                <strong>Taille:</strong> 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              50 - 100 employees
              </Typography>
              
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                 <strong>Entreprise:</strong> 
              </Typography>
              <Typography variant="body2" color="textSecondary">
              Green Power Energy
              </Typography>

              <Typography variant="body2" color="textSecondary">
                <strong>Addresse:</strong> 
              </Typography>
              <Typography variant="body2" color="textSecondary">
             Sfax - tunis
              </Typography>
              
            </Box>
            {/* <Box>
              
              <Typography variant="body2" color="textSecondary">
                <strong>Size:</strong> 50 - 100 employees
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Industry:</strong> Renewable Energy
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <strong>Certification:</strong> ISO 9001
              </Typography>
            </Box> */}
            
          </Box>
          <Box sx={{width:"100%", height:"30px"}}>
            <LineSeparator width={"100%"}/>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{  }}
              onClick={() => console.log("More info clicked")}
            >
              View More Info
            </Button>
          </Box>
        </Box>

        {/* Job Description */}
        <Box elevation={3} className={"box-container"} sx={{ padding: 2 }}>
          <Typography
            sx={{
              fontFamily: "Roboto",
              color: "#3E4FA8",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: 0,
            }}
          >
            Description de l'annonce
          </Typography>
          <LineSeparator width={"100%"} />

          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Forvis Mazars est un groupe international et intégré spécialisé...
            {/* Add detailed job description */}
          </Typography>
          <LineSeparator width={"100%"} />
        </Box>

        {/* Apply Button */}
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Button variant="contained" color="primary" size="large">
            Postuler
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default JobDetailPage;
