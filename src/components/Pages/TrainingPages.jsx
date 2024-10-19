import { Box, Pagination, Stack, Typography } from "@mui/material";
import TrainingAnnonceCard from "../Cards/TrainingAnnonceCard";
import { useState } from "react";
import AnnoncementWithPagination from "../Sections/AnnoncementWithPagination";

const TrainingPages = () => {
  const allAvailableTraining = [
    {
      title: "Formation Energie renouvelables",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
        name: "Elite society",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
    {
      title: "Formation energie solaire",
      description:
        "Familirization avec les energies renouvelables et les bases des installations PV",
      startDate: "12-12-2024",
      society: {
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
      society: {
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
      society: {
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
      society: {
        name: "Elite center",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeNwvgzi46y7suduGgb6yfoy5sxfZlb1Zhw&s",
      },
    },
  ];
  
  return (
    <>
      <AnnoncementWithPagination itemsPerPage={3} data={allAvailableTraining}/>
    </>
  );
};

export default TrainingPages;
