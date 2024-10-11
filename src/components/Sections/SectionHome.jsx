import {
  Typography,
  Button,
  Box,
  Grid2,
  ImageList,
  ImageListItem,
} from "@mui/material";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },

  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
];
const SectionHome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#6D6F9B", // Set the background color

        minHeight: "80vh",
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* Left Side Text */}
        <Grid2 item size={{ sx: 12, md: 7 }}>
          <Box
            container
            sx={{
              padding: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" component="h1" color="white" gutterBottom>
              Énergisez votre projet avec Solarii : la clé pour réussir dans le
              monde du photovoltaïque!
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "flex", alignSelf: "center", color: "#f8faff" }}
              size="large"
            >
              <p style={{ color: "black" }}>Commencer maintenant</p>
            </Button>
          </Box>
        </Grid2>
        <Grid2 item size={{ sx: 12, md: 5 }}>
          <Box sx={{ overflow: "hidden" }}>
            <ImageList variant="masonry" cols={2} gap={10} sx={{ px: 4 }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SectionHome;
