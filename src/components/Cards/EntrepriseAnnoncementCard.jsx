import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Divider from '@mui/material/Divider';

const EntrepriseAnnoncementCard = ({
  entrepriseName,
  nbAnnoncement,
  entrepriseImage,
}) => {
  return (
    <Card sx={{ width: '358px', height: '205px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="159px"
          image={entrepriseImage}
          alt={entrepriseName}
        />
        <Divider/>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: 'center',
          }}
        >
          <Typography
            component="div"
            sx={{
              textAlign: "left",
              fontFamily: "Lato",
              color: "#0000006B",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "30px",
              letterSpacing: 0,
            }}
          >
            {entrepriseName}
          </Typography>
          <Typography component="div" sx={{
              textAlign: "center",
              fontFamily: "Lato",
              color: "#1CA91CFF",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "30px",
              letterSpacing: 0,
            }}>
            {nbAnnoncement} annonce(s)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EntrepriseAnnoncementCard;
