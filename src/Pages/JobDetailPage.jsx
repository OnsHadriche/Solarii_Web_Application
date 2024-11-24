import React, { useState } from "react";
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
import JobApply from "../components/Features/SolariiJob/JobApply";
import CompanyInformationCard from "../components/Cards/CompanyInformationCard";
import AnnonceDescription from "../components/Cards/AnnonceDescription";
import SideBarJob from "../components/Features/SolariiJob/SideBarJob";

function JobDetailPage() {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <SideBarJob isSmallScreen = {isSmallScreen}/>
      {/* Main Content Area */}
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Company Info */}
        <CompanyInformationCard displayButton={true} infoType={"entreprise"}/>
        {/* Job Description */}
        <AnnonceDescription />
        {/* Apply Button */}
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOpen}
          >
            Postuler
          </Button>
          <JobApply
            open={open}
            onClose={handleClose}
            company="Green Power Energie"
            position="Chef chantier"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default JobDetailPage;
