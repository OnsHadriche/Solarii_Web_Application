import React from 'react'
import { Box, Typography } from '@mui/material'
import EntrepriseDetails from '../components/Features/SolariiJob/EntrepriseDetails'
import AnnoncementWithoutPagination from '../components/Features/SolariiJob/AnnoncementWithoutPagination'

function EntrepriseLisJobs() {
  return (
    <Box sx={{padding:"50px", display:"flex", flexDirection:"column",  alignItems:"center", justifyContent:"center"}}>
        <EntrepriseDetails/>
        <AnnoncementWithoutPagination itemsPerPage={3}/>
    </Box>
  )
}

export default EntrepriseLisJobs