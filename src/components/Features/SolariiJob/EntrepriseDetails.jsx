import React from 'react'
import { Box } from '@mui/material'
import CompanyInformationCard from '../../Cards/CompanyInformationCard'
import { EntrepriseDescription } from '../../Cards/EntrepriseDescription'

function EntrepriseDetails({infoType}) {
  return (
    <Box >
        <CompanyInformationCard displayButton={false} infoType={infoType}/>
        <EntrepriseDescription/>
    </Box>
  )
}

export default EntrepriseDetails