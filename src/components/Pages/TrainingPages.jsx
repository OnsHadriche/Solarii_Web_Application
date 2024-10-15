import { Box, Pagination, Stack, Typography } from "@mui/material";
import TrainingAnnonceCard from "../Cards/TrainingAnnonceCard";
import { useState } from "react";

const TrainingPages = () => {
  const allAvailableTraining = [
    {
      title: "Formation Energie renouvelables",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      center: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      title: "Formation energie solaire",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      center: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      title: "Formation electrique",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      center: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      title: "Formation couplage",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      center: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      title: "Formation PV",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      center: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allAvailableTraining.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allAvailableTraining.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  return (
    <>
    <Typography
          component="div"
          sx={{
            textAlign: "left",
            fontFamily: "Plus Jakarta Sans",
            color: "#486284FF",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: -2,
          }}
        >
            {allAvailableTraining.length} Formations trouvées
        </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {currentData.map((item, index) => (
          <TrainingAnnonceCard key={index} trainingInfo={item} />
        ))}
      </Box>
    </Box>
    </>
  );
};

export default TrainingPages;
