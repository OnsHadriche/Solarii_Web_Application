import React from "react";
import JobSolariHeader from "../components/Cards/JobSolariHeader";
import SubNavBar from "../components/Common/SubNavBar";
import WorkOppBodySection from "../components/Features/SolariiJob/WorkOppBodySection";
import { Box, Typography } from "@mui/material";

const SolariiJobPage = () => {
  const tabs = [
    { label: "Entreprise", content: <Typography>Offre d'emploi</Typography> },
    {
      label: "Offre d'emploi",
      content: <WorkOppBodySection />,
    },
    {
      label: "Formation",
      content: <Typography>Formation</Typography>,
    },
    {
      label: "Sous-traitance",
      content: <Typography>Sous-traitance</Typography>,
    }
  ];
  return (
    <Box sx={{ boxSizing: "border-box" }}>
      <JobSolariHeader />
      <SubNavBar tabs={tabs} />
    </Box>
  );
};

export default SolariiJobPage;
