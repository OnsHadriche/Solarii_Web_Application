import React from 'react'
import { Box } from '@mui/material'
import CompanyInformationCard from '../../Cards/CompanyInformationCard'
import { EntrepriseDescription } from '../../Cards/EntrepriseDescription'

function EntrepriseDetails() {
  return (
    <Box >
        <CompanyInformationCard displayButton={false}/>
        <EntrepriseDescription/>
    </Box>
  )
}

export default EntrepriseDetails