import { Box } from '@mui/material'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SeeDetailsButton = () => {

  return (
    <Box
    sx={{
      width: "24px",
      height: "24px",
      borderRadius: "8px",
      border: "1px solid #486284FF",
      color: "#486284FF"
    }}
  >
    <KeyboardArrowRightIcon />
  </Box>
  )
}
export default SeeDetailsButton
