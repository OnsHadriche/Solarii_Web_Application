import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export const EntrepriseDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);
  const text =
    "Filiassur, courtier en assurance, conçoit et distribue des produits d’assurance prévoyance apportant des solutions adaptées aux moments clés de la vie. La société compte déjà plus de 300 000 clients. Employant près de 600 salariés, Filiassur est un groupe international implanté dans plusieurs pays  : France, Espagne, Maroc, Tunisie. Filiassur Tunisie, filiale de Filiassur  , situé au 51 rue des entrepreneurs, avec un site principal d’une capacité de plus de 300 postes de travail";
  return (
    <Box className={"box-container-no-shadow"} sx={{ maxWidth: "900px", overflowWrap: "break-word",
      wordWrap:"break-word" }}>
      <Typography>
      {isExpanded ? text : text.slice(0, 150)}
      {text.length > 150 && !isExpanded && '...'}
      </Typography>
      {text.length > 150 && (
        <Button onClick={toggleText} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'blue' }}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </Box>
  );
};
