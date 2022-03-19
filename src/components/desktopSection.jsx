/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, IconButton, Badge, Icon } from '@openemp/styleguide';
import ProfileMenu from './profileMenu';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function DesktopSection() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        // edge={theme.direction === 'rtl' ? 'end' : 'start'}
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Icon>account_circle</Icon>
      </IconButton>
      <ProfileMenu open={isMenuOpen} anchorEl={anchorEl} onClose={handleMenuClose} />
    </div>
  );
}
