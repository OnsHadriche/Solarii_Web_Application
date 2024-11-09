import { Box, Typography } from "@mui/material";
import React from "react";
import LineSeparator from "../../Common/LineSeparator";
import PropTypes from "prop-types";


const SideBarJob = (props) => {
  const jobDetails = [
    { title: "Poste", content: "Chef d'équipe" },
    { title: "Type de travail", content: "Chef d'équipe" },
    { title: "Expérience", content: "Chef d'équipe" },
    { title: "Éducation", content: "Master en génie électrique" },
    { title: "Rémunération proposée", content: "50,000 TND/an" },
    { title: "Disponibilité", content: "Immédiate" },
    { title: "Langues", content: "Français, Anglais" },
  ];
  return (
    <div>
      <Box
        className={"box-container"}
        sx={{
          width: props.isSmallScreen ? "100%" : "220px",
          p: 3,
        }}
      >
        <Typography gutterBottom className="headerText" sx ={{py:2, fontWeight:"bold"}} >
          Détail de l'annonce
        </Typography>
        <LineSeparator width={"100%"} />
        {jobDetails.map((detail, index) => (
          <React.Fragment key={index}>
            <Typography className="sidebar-sub-title" sx ={{fontWeight:"bold"}}>
              {detail.title}:
            </Typography>
            <Typography className="sidebar-content">
              {detail.content}
            </Typography>
            <LineSeparator width={"100%"} />
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
};
SideBarJob.propsTypes = {
  isSmallScreen: PropTypes.object.isRequired,
};
export default SideBarJob;
