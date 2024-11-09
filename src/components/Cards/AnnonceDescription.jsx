import { Box, Typography } from "@mui/material";
import React from "react";
import LineSeparator from "../Common/LineSeparator";

const AnnonceDescription = () => {
  return (
    <>
      <Box elevation={3} className={"box-container"} sx={{ padding: 2 }}>
        <Typography
          sx={{
            fontFamily: "Roboto",
            color: "#3E4FA8",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "40px",
            letterSpacing: 0,
          }}
        >
          Description de l'annonce
        </Typography>
        <LineSeparator width={"100%"} />

        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Forvis Mazars est un groupe international et intégré spécialisé...
          {/* Add detailed job description */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          porro laborum sint doloremque magni id. Similique, magni! Voluptates
          hic quisquam, nesciunt impedit voluptatum pariatur, nulla non placeat
          modi illo a? Maiores a deserunt voluptate error quod id aut,
          repudiandae, incidunt voluptatum dolorum tempore. Porro, molestiae
          quos voluptate fugit repellendus nesciunt adipisci! Animi vero sunt,
          voluptatibus laudantium suscipit repudiandae quis a. Odit quas dolorem
          qui placeat cupiditate, voluptatum tempora in velit est fugit
          molestiae voluptatem doloribus! Dicta temporibus, voluptas harum
          corrupti eveniet doloribus fugiat delectus libero! Recusandae nesciunt
          tenetur reprehenderit sapiente? Voluptatem ullam, nemo repellat a
          nesciunt facilis. Quae, harum eos. Reiciendis laudantium dolore at?
          Beatae nesciunt fuga veniam aut ratione dolor expedita, fugit
          veritatis praesentium, placeat atque ipsam voluptas quod?
        </Typography>
        <LineSeparator width={"100%"} />
      </Box>
    </>
  );
};

export default AnnonceDescription;
