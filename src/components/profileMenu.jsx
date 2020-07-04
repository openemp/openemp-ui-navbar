/* eslint-disable react/prop-types */
import React from 'react';
import { MenuItem, Typography, Menu } from '@openemp-mf/styleguide';

export default function ProfileMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: -5,
        horizontal: 'center',
      }}
      open={open}
      onClose={onClose}
      getContentAnchorEl={null}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        {/* <ListItemIcon>
          <Icon>star</Icon>
        </ListItemIcon> */}
        <Typography variant="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );
}
