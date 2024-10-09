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
import {
  Avatar,
  ListItemIcon,
  Menu,
  MenuItem,
  StyledEngineProvider,
  Tooltip,
} from "@mui/material";

import user from "../../assets/images/avatar.jpg";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../Logo";
import useMenuToggle from "../../hooks/useMenuToggel";
const drawerWidth = 240;
const navItems = ["Accueil", "Services", "Solari Job", "Soutaitrant", "Contact"];
const settings = [
  {
    componentIcon: PersonIcon,
    name: "Profile",
  },
  {
    componentIcon: SchoolIcon,
    name: "Dashboard ",
  },
  {
    componentIcon: DonutLargeIcon,
    name: "",
  },
];

function EntrepriseNavBar(props) {
  const { window } = props;
  const {
    mobileOpen,
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleDrawerToggle,
  } = useMenuToggle();

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
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <StyledEngineProvider injectFirst>
          <AppBar component="nav" className="navbar-customer">
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

              <Box sx={{ display: { xs:'none',sm: 'none',md:'block' }}}>
                {navItems.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "#264888", fontWeight: "bold" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "block" } }}>
                <Tooltip title="Open settings">
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0, marginLeft: 2 }}
                    >
                      <Avatar alt="Remy Sharp" src={user} />
                    </IconButton>
                  </Tooltip>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <ListItemIcon>
                        <setting.componentIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{setting.name}</ListItemText>
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>se déconnecter</ListItemText>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </StyledEngineProvider>
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
  );
}

EntrepriseNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default EntrepriseNavBar;
