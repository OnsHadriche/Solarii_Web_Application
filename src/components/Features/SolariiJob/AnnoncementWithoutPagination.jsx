import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import AnnoncementCardComponent from "./AnnoncementCardComponenet";

const AnnoncementWithoutPagination = ({ itemsPerPage }) => {
    const items = [
        {
          _id: "123456789",
          title: "Formation Energie renouvelables",
          description:
            "Familirization avec les energies renouvelables et les bases des installations PV",
          startDate: "12-12-2024",
          society: {
            name: "Elite society",
          },
        },
        {
          _id: "123456781",
          title: "Formation energie solaire",
          description:
            "Familirization avec les energies renouvelables et les bases des installations PV",
          startDate: "12-12-2024",
          society: {
            name: "Elite center",
          },
        },
        {
          _id: "123456782",
          title: "Formation electrique",
          description:
            "Familirization avec les energies renouvelables et les bases des installations PV",
          startDate: "12-12-2024",
          society: {
            name: "Elite center",
          },
        },
        {
          _id: "123456783",
          title: "Formation couplage",
          description:
            "Familirization avec les energies renouvelables et les bases des installations PV",
          startDate: "12-12-2024",
          society: {
            name: "Elite center",
          },
        },
        {
          _id: "123456784",
          title: "Formation PV",
          description:
            "Familirization avec les energies renouvelables et les bases des installations PV",
          startDate: "12-12-2024",
          society: {
            name: "Elite center",
          },
        },
      ];
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "#F7FAFC",
        //   borderRadius: "30px",
          padding: "20px 110px",
          maxWidth:"900px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "63px",
            padding: "68px 20px 150px",
          maxWidth: "900px",
          }}
        >
          {items.slice(0, visibleCount).map((item, index) => (
            <AnnoncementCardComponent
              key={index}
              image={item.society.image ? item.society.image : null}
              title={item.title}
              description={item.description}
              SocietyName={item.society.name}
              startDate={item.startDate}
              elementId={item._id}
              type = "job"
            />
          ))}
        </Box>
        {visibleCount < items.length && (
          <Button
            onClick={handleSeeMore}
            style={{ marginTop: "10px", cursor: "pointer" }}
          >
            See More
          </Button>
        )}
      </Box>
    </>
  );
};
AnnoncementWithoutPagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};
export default AnnoncementWithoutPagination;
