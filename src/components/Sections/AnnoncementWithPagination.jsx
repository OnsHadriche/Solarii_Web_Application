import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import AnnoncementCardComponent from "./AnnoncementCardComponenet";

const AnnoncementWithPagination = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <Typography
        component="div"
        sx={{
          textAlign: "left",
          fontFamily: "Plus Jakarta Sans",
          color: "#486284FF",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: 1.5,
          letterSpacing: "-0.32px",
        }}
      >
        les Offre d’emploi
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor:"#F7FAFC",
          borderRadius:"30px",
         padding:"68px 46px 150px   "
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
            gap: "63px",
          }}
        >
          {currentData.map((item, index) => (
            <AnnoncementCardComponent
              key={index}
              image={item.society.image}
              title={item.title}
              description={item.description}
              SocietyName={item.society.name}
              startDate={item.startDate}
            />
          ))}
        </Box>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </Box>
    </>
  );
};
AnnoncementWithPagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      society: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }),
    })
  ),
};
export default AnnoncementWithPagination;
