import { Box, Typography } from "@mui/material";
import TrainingNotificationSection from "../TrainingNotificationSection";
import EmployeeListContainer from "./EmployeeListContainer";
import EntrepriseJobAnnoncement from "./EntrepriseJobAnnoncement";

const WorkOppBodySection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: 1,
      }}
    >
      <Box sx={{ paddingLeft: "27px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography
          component="div"
          sx={{
            textAlign: "left",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            color: "#000000FF",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: "-0.32px",
          }}
        >
          les Offre d’emploi
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "205px",
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            borderRadius: "40px",
            background: "rgba(0, 102, 255, 0.20)",
          }}
        >
          <Typography
            sx={{
              color: "#1E1E1E",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            créez Offre d’emploi
          </Typography>
        </Box>
      </Box>
        <EntrepriseJobAnnoncement />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <TrainingNotificationSection />
        <EmployeeListContainer title={"Liste des Employés "} />
        <EmployeeListContainer title={"Liste des Sous-traiteurs "} />
      </Box>
    </Box>
  );
};

export default WorkOppBodySection;
