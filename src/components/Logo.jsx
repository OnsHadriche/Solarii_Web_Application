import { styled } from "@mui/material";
import logo from "../assets/images/logo.png";

const Logo = () => {
  const Logo = styled("img")(() => ({
    width: "18rem",
    minWidth: "4rem",
    height:"7rem"
  
  }));

  return <Logo src={logo} sx={{ display: { xs: "none", sm: "block" } }} />;
};

export default Logo;
