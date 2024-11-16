import React from 'react'
import CompanyInformationCard from '../components/Cards/CompanyInformationCard'
import { EntrepriseDescription } from '../components/Cards/EntrepriseDescription'
import { Box } from '@mui/material'

function EntrepriseLisJobs() {
  return (
    <Box sx={{padding:"50px", maxWidth:"900px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <CompanyInformationCard displayButton={false}/>
        <EntrepriseDescription/>
    </Box>
  )
}

export default EntrepriseLisJobs