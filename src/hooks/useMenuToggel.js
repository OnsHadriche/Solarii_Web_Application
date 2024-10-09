// hooks/useMenuToggle.js
import { useState } from 'react';

const useMenuToggle = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return {
    mobileOpen,
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleDrawerToggle,
  };
};

export default useMenuToggle;
