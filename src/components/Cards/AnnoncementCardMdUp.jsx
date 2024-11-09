import {
    Card,
    CardActionArea,
    Box,
    Typography,
  } from "@mui/material";
  import PinDropIcon from "@mui/icons-material/PinDrop";
  import ApartmentIcon from "@mui/icons-material/Apartment";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  import PropTypes from "prop-types";
import SeeDetailsButton from "../Common/SeeDetailsButton";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";

const AnnoncementCardMdUp = ({
    image,
    title,
    description,
    SocietyName,
    startDate,
    elementId
  }) => {
  return (
    <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-around",
            gap: "0px",
            paddingLeft: "5px",
            height: "216px",
            borderRadius: "30px",
            boxShadow: "0px 4px 4px 0px #00000040",
            maxWidth: { md: "700px", lg: "1100px" },
          }}
        >
          {image && <CardActionArea
            sx={{
              borderRadius: "78px",
              flexShrink: 0,
              width: "188px",
              height: "175px",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              // backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              lightgray: "50%",
              paddingBottom: "34px",
              display: { md: "none", lg: "block" },
              paddingTop: "7px",
            }}
            
          ></CardActionArea>}
          
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "normal",
              justifyContent: "space-between",
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingRight: "56px",
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
                  color: "#3E4FA8",
                  fontSize: "20px",
                  fontWeight: 700,
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
                  color: "#486284",
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
                color: "rgba(0, 0, 0, 0.57)",
                fontSize: "16px",
                lineHeight: 1,
                letterSpacing: 0,
                wordWrap: "break-word",
                width: "450px",
                height: "47px",
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
              borderLeft: "1px solid #2147b280",
              fontFamily: "Inter, sans-serif",
              color: "#3E4FA8",
              fontSize: "14px",
              lineHeight: 1,
              letterSpacing: 0,
              textTransform: "none",
              width: "100px",
            }}
            component={Link}
            to={elementId}
          >
            <Typography>Voir plus</Typography>
            <SeeDetailsButton />
          </Box>
        </Card>
  )
}

AnnoncementCardMdUp.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    SocietyName: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    elementId: PropTypes.string.isRequired,
  };
export default AnnoncementCardMdUp
