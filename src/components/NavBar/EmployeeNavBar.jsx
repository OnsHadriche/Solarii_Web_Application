import { AppBar, Divider, Box } from "@mui/material";

import PropTypes from "prop-types";
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
import { Avatar, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";

import user from "../../assets/images/avatar.jpg";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import useMenuToggle from "../../hooks/useMenuToggel";
import Logo from "../Logo";
const drawerWidth = 240;
const navItems = ["Accueil", "Solarii Job", "Produits", "Formation", "Contact"];
const settings = [
  {
    componentIcon: PersonIcon,
    name: "Profile",
  },
  {
    componentIcon: SchoolIcon,
    name: "Mes formations ",
  }
];
const EmployeeNavBar = (props) => {
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
    <Box sx={{ flexGrow: 1 }} color="primary">
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo />

            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "#264888", fontWeight: "bold" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
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
  );
};
EmployeeNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default EmployeeNavBar;
