import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SmallTrainingNotificationCard from "../Cards/SmallTrainingNotificationCard";

const TrainingNotificationSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "normal",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <Typography
          sx={{
            color: "#202020",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textTransform: "capitalize",
          }}
        >
          Formation
        </Typography>
        <SmallTrainingNotificationCard
          SocietyName={"Centre camp"}
          startDate={"24-12-2024"}
          title={"Formation BT"}
        />
        <SmallTrainingNotificationCard
          SocietyName={"Centre camp"}
          startDate={"24-12-2024"}
          title={"Formation BT"}
        />
        <SmallTrainingNotificationCard
          SocietyName={"Centre camp"}
          startDate={"24-12-2024"}
          title={"Formation BT"}
        />
        <Button
          sx={{
            borderRadius: "40px",
            background: "rgba(0, 102, 255, 0.20)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            display: "flex",
            width: "149px",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            textTransform: "none",
          }}
        >
          <Typography
            sx={{
              color: "#1E1E1E",
              textAlign: "right",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Voir plus
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default TrainingNotificationSection;
