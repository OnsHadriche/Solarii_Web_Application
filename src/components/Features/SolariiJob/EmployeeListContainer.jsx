import { Box, Card, Typography } from "@mui/material";
import React from "react";
import SmallCardEmplyeeCard from "../../Cards/SmallCardEmplyeeCard";
import LineSeparator from "../../Common/LineSeparator";

const EmployeeListContainer = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "13px",
      }}
    >
      <Typography
        sx={{
          color: "#202020",
          fontFamily: 'Roboto, sans-serif',
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        {title}
      </Typography>
      <Card
        sx={{
          borderRadius: "20px",
          background: "#FFFEF7",
          boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "252px",
          height: "303px",
          flexShrink: 0,
          padding: 0,
        }}
      >
        <SmallCardEmplyeeCard />
        <LineSeparator width={"252px"} />
        <SmallCardEmplyeeCard />
        <LineSeparator width={"252px"}/>
        <SmallCardEmplyeeCard />
        <LineSeparator width={"252px"}/>
        <SmallCardEmplyeeCard />
        <LineSeparator width={"252px"}/>
        <SmallCardEmplyeeCard />
        <LineSeparator width={"252px"}/>
        <Box
          sx={{
            display: "flex",
            width: "200px",
            padding: "8px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            borderRadius: "40px",
            background: "rgba(0, 102, 255, 0.20)",
            margin: "15px 13px 6px",
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
        </Box>
      </Card>
    </Box>
  );
};

export default EmployeeListContainer;
