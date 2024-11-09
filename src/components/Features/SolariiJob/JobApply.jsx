import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

function JobApply({ open, onClose, company, position }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0].name);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Postuler à {position} chez {company}
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          overflow: "hidden", 
          height: "100%",
        }}
      >
        <TextField
          label="Nom et prénom"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
            marginTop: 2,
            width: "97%",
          }}
        >
          <Button
            variant="contained"
            component="label"
            sx={{ marginRight: 2, backgroundColor: "#486284" }}
          >
            Choisir un fichier
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Typography variant="body2">
            {selectedFile || "Aucun fichier choisi"}
          </Typography>
        </Box>

        <TextField
          label="Lettre de Motivation"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          placeholder="exemple Madame, Monsieur, ..."
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2, backgroundColor: "#486284" }}
          onClick={onClose}
        >
          Soumettre
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default JobApply;
