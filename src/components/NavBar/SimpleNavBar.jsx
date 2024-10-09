import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HideOnScroll from "../HideOnScroller";
import "../../styles/Navbars.css";
import Logo from "../Logo";
import useMenuToggle from "../../hooks/useMenuToggel";
import { StyledEngineProvider } from "@mui/material";
import CustomizedButton from "../Button/CustomButton";
const drawerWidth = 240;
const navItems = [
  "Accueil",
  "Services",
  "Produit",
  "Nos Formations",
  "Contact",
  "Princing",
  "Se connecter",
];

function SimpleNavBar(props) {
  const { window } = props;
  const { mobileOpen, handleDrawerToggle } = useMenuToggle();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
          <AppBar component="nav" className="navbar-custom" elevation={0}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Logo sx={{ display: { sm: "none", md: "block" } }} />

              <Box
                sx={{ display: { xs: "none", sm: "none", md: "block" }}}
                className="navbar-custom__links"
              >
                {navItems.map((page) => (
                  <Button
                    key={page}
                    sx={{
                      marginLeft: "1rem",
                      color: "#264888",
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <CustomizedButton title={"S'inscrire"} />
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </StyledEngineProvider>
  );
}

SimpleNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SimpleNavBar;
