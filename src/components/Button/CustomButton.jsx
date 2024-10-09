import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { indigo} from "@mui/material/colors";
import PropTypes from "prop-types";
const ColorButton = styled(Button)(({ theme }) => ({
  padding: "0.5rem",
  marginRight:"2rem",
  marginLeft:"1.5rem",
  width:"8rem",
  color: theme.palette.getContrastText(indigo[500]),
  backgroundColor: indigo[500],
  "&:hover": {
    backgroundColor: indigo[700],
  },
}));

export default function CustomizedButton(props) {
  return <ColorButton variant="contained">{props.title}</ColorButton>;
}
CustomizedButton.propTypes = {
  title: PropTypes.string,
};
