import React from "react";
import JobSolariHeader from "../components/Cards/JobSolariHeader";

import { Box } from "@mui/material";
import SubNavBarWithNavigation from "../components/Common/SubNavBarWithNavigation";
import { Outlet } from "react-router-dom";

const SolariiJobPage = () => {
  const tabs = [
    { label: "entreprise", link:  "entreprise"},
    {
      label: "offre d'emploi",
      link: "emplois",
    },
    {
      label: "formation",
      link: "formation",
    },
    {
      label: "sous-traitance",
      link: "sous-traitance",
    }
  ];
  return (
    <Box sx={{ boxSizing: "border-box" }}>
      <JobSolariHeader />
      <SubNavBarWithNavigation originalPath= {"solari-job"} navlinks={tabs} />
      <Outlet/>
    </Box>
  );
};

export default SolariiJobPage;
