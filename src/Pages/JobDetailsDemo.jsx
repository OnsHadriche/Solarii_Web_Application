import React from 'react';
import { Box, Paper, Typography, Button, Grid2 } from '@mui/material';
import LineSeparator from '../components/Common/LineSeparator';

function JobDetailPage() {
  return (
    <Box sx={{display: "grid", gap:"10px",padding: "10px", backgroundColor:"#FFFFFF"}}>
      <Box sx={{maxWidth:"252px",gridColumn:"1 / span 1",gridRow:"1 / span 5", backgroundColor:"#2196F3", display:"flex", flexDirection:"column", alignItems:"flex-start",  justifyContent:"space-around"}}>
          <Typography variant="h6" gutterBottom>
            Détail de l'annonce
          </Typography>
          <LineSeparator/>
          <Typography variant="body1"><strong>Poste:</strong></Typography>
          <Typography>Chef d'équipe</Typography>
          <LineSeparator/>

          <Typography variant="body1"><strong>Type de travail:</strong></Typography>
          <Typography>Chef d'équipe</Typography>
          <LineSeparator/>

          <Typography variant="body1"><strong>Expérience:</strong></Typography>
          <Typography>Chef d'équipe</Typography>
          <LineSeparator/>

          <Typography variant="body1"><strong>Éducation:</strong></Typography>
          <Typography> Master en génie électrique</Typography>
          <LineSeparator/>

          <Typography variant="body1"><strong>Rémunération proposée:</strong></Typography>
          <Typography> 50,000 TND/an</Typography>
          <LineSeparator/>

          <Typography variant="body1"><strong>Disponibilité:</strong></Typography>
          <Typography> Immédiate</Typography>
          <LineSeparator/>
          <Typography variant="body1"><strong>Langues:</strong></Typography>
          <Typography>  Français, Anglais</Typography>

      </Box>
      <Box sx={{gridColumn:"2 / span 5", gridRow:"1 / span 5", display:"flex", flexDirection:"column"}}>
           <Box sx={{backgroundColor:"#607050"}}>Item1</Box>
           <Box sx={{backgroundColor:"#505050"}}>Item2</Box>
      </Box>
      
    </Box>
  );
}

export default JobDetailPage;
