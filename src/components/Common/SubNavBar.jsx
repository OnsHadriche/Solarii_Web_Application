import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function SubNavBar({ tabs }) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%", display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent: "center"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor ="#E6E6EA"
        
       sx={{display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
       }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <TabPanel 
        key={index} value={value} index={index} 
        >
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
}
