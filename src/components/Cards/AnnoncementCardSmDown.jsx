import { Card, Box, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ApartmentIcon from "@mui/icons-material/Apartment";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";
import SeeDetailsButton from "../Common/SeeDetailsButton";
import { Link } from "react-router-dom";

const AnnoncementCardSmDown = ({
  title,
  description,
  SocietyName,
  startDate,
  type
}) => {
  const linkTo = type === "job"? "/emplois" : "/formation"

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        gap: "0px",
        // paddingLeft: "5px",
        height: "216px",
        borderRadius: "30px",
        boxShadow: "0px 4px 4px 0px #00000040",
        width: "390px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "normal",
          justifyContent: "space-between",
          gap: "15px",
          paddingTop: "10px",
          paddingLeft: "20px",
          paddingRight: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component="div"
            sx={{
              fontFamily: "Roboto",
              color: "#486284FF",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "40px",
              letterSpacing: 0,
            }}
          >
            {title}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#486284FF",
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: 0,
            }}
          >
            {startDate}
          </Typography>
        </Box>
        <Typography
          component="div"
          sx={{
            textAlign: "left",
            fontFamily: "Inter, sans-serif",
            color: "#00000091",
            fontSize: "14px",
            lineHeight: 1.4,
            letterSpacing: 0,
            wordWrap: "break-word",
            width: "312px",
            height: "100px",
          }}
        >
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30px",
            paddingBottom: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ApartmentIcon
              sx={{ width: "24px", height: "24px", color: "#486284FF" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#000000FF",
                fontSize: "14px",
                lineHeight: 1.4,
                letterSpacing: 0,
              }}
            >
              {SocietyName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PinDropIcon
              sx={{ width: "24px", height: "24px", color: "#486284FF" }}
            />
            <Typography
              component="span"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#000000FF",
                fontSize: "14px",
                lineHeight: 1.4,
                letterSpacing: 0,
              }}
            >
              {SocietyName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontFamily: "Inter, sans-serif",
          color: "#486284FF",
          fontSize: "14px",
          lineHeight: 1,
          letterSpacing: 0,
          textTransform: "none",
          paddingRight: "15px",
        }}
        component={Link}
        to={`/solari-job${linkTo}/1235898`}
        >
    <SeeDetailsButton />
      </Box>
    </Card>
  );
};

AnnoncementCardSmDown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SocietyName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};
export default AnnoncementCardSmDown;
