import { Box } from "@mui/material";
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
