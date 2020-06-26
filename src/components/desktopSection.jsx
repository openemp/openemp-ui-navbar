/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, IconButton, Badge, Icon, useTheme } from '@openemp-mf/styleguide';

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
  const theme = useTheme();

  return (
    <div className={classes.sectionDesktop}>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge color="secondary">
          <Icon>mail</Icon>
        </Badge>
      </IconButton>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge color="secondary">
          <Icon>notifications</Icon>
        </Badge>
      </IconButton>
      <IconButton
        edge={theme.direction === 'rtl' ? 'start' : 'end'}
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Icon>account_circle</Icon>
      </IconButton>
    </div>
  );
}
