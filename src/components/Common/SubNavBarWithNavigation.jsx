import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SubNavBarWithNavigation = ({ originalPath, navlinks }) => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const {id} = useParams()
  useEffect(() => {
    const pathElement = location.pathname.split("/")
    const originalPathIndex = pathElement.findIndex(item => item === originalPath)
    console.log(pathElement);
    const index = originalPathIndex !== -1 && originalPathIndex < pathElement.length - 1?  navlinks.findIndex((tab) => tab.link === pathElement[originalPathIndex + 1]): -1;
    setValue(index !== -1 ? index : 0);
    
  }, [location, navlinks]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {navlinks.map((tab, index) => (
          <Tab value={index} key={index} component={Link}  to={`${tab.link}`} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default SubNavBarWithNavigation;
