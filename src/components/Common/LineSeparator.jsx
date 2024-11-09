import { Box } from '@mui/material'
import React from 'react'

const LineSeparator = ({width}) => {
  return (
    <Box
    sx={{ width: {width}, height: "1px", background: "#D8D8D8" }}
  ></Box>
  )
}

export default LineSeparator
