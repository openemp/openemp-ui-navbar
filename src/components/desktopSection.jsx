/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, IconButton, Badge, Icon } from '@openemp-mf/styleguide';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function DesktopSection({ menuId, handleProfileMenuOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.sectionDesktop}>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <Icon class="material-icons">mail</Icon>
        </Badge>
      </IconButton>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <Icon class="material-icons">notifications</Icon>
        </Badge>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Icon class="material-icons">account_circle</Icon>
      </IconButton>
    </div>
  );
}
