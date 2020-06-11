/* eslint-disable react/prop-types */
import React from 'react';
import { MenuItem, Menu } from '@openemp-mf/styleguide';

export default function ProfileMenu({ anchorEl, menuId, isMenuOpen, handleMenuClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}
