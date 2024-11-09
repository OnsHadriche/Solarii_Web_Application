import NotificationsIcon from "@mui/icons-material/Notifications";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Box, Card, Typography } from "@mui/material";
import SeeDetailsButton from "../Common/SeeDetailsButton";
import { Link } from "react-router-dom";
const SmallTrainingNotificationCard = ({ SocietyName, startDate, title }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "240px",
        height: "64px",
        padding: "12px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        flexShrink: "0",
        borderRadius: "12px",
        background: "#FFF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* <Box
        sx={{ flexGrow: 1, borderRadius: "50%", backgroundColor: "#3E4FA8", width:"40px", height:"40px", display: "flex", alignItems:"center", justifyContent:"center", fontSize: '20px'}}
      >
        <NotificationsNoneRoundedIcon sx={{color: "#fff"}}/>
        
      </Box> */}
      <CircleNotificationsIcon sx={{width:"50px", height:"50px", color: "#3E4FA8FF" }}/>

      <Box
        sx={{
          flexGrow: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "normal",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 2,
            paddingTop:"5px"
          }}
        >
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.36)",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {SocietyName}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.36)",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {startDate}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 3,
            paddingTop: "14px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          component={Link}
          to={"aaaaaaaa"}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <SeeDetailsButton />
        </Box>
      </Box>
    </Card>
  );
};

export default SmallTrainingNotificationCard;
