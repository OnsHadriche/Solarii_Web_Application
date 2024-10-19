import {
  Button,
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PropTypes from "prop-types";
const TrainingAnnonceCard = ({
  image,
  title,
  description,
  SocietyName,
  startDate,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "stretch",
        justifyContent: "center",
        gap: "0px",
        paddingLeft: "32px",
        paddingRight: "17px",
        paddingTop: "26px",
        paddingBottom: "28px",
        maxWidth:{sm: "500px", md:"700px"}
      }}
    >
      <CardActionArea
        sx={{ borderRadius: "70px", width: "146px", maxHeight: "153px" }}
      >
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          image={image}
          // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s"
          alt="Elite center"
        />
      </CardActionArea>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="div"
          sx={{
            textAlign: "left",
            fontFamily: "Roboto",
            color: "#486284FF",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "40px",
            letterSpacing: 0,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="div"
          sx={{
            textAlign: "left",
            fontFamily: "Inter",
            color: "#00000091",
            fontSize: "16px",
            lineHeight: 1,
            letterSpacing: 0,
            maxWidth: "618px",
            wordWrap: "break-word",
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <PinDropIcon
            sx={{ width: "24px", height: "24px", color: "#486284FF" }}
          />
          <Typography
            component="span"
            sx={{
              fontFamily: "Inter",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", md: "column" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "Inter",
              color: "#486284FF",
              fontSize: "12px",
              lineHeight: 1,
              letterSpacing: 0,
              textAlign: "left",
            }}
          >
            {startDate}
          </Typography>
          <CalendarMonthIcon
            sx={{ width: "24px", height: "24px", color: "#486284FF" }}
          />
        </Box>
        <Button
          sx={{
            width: "88px",
            height: "40px",
            fontFamily: "Inter",
            color: "#486284FF",
            fontSize: "14px",
            lineHeight: 1,
            letterSpacing: 0,
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#F5F5F5FF",
            textTransform: "none",
          }}
        >
          Voir plus
        </Button>
      </Box>
    </Card>
  );
};
TrainingAnnonceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  SocietyName: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
};
export default TrainingAnnonceCard;
