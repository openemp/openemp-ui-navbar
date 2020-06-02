/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles, IconButton, Icon } from '@openemp-mf/styleguide';

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MobileSection({ mobileMenuId, handleMobileMenuOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <Icon class="material-icons">more</Icon>
      </IconButton>
    </div>
  );
}
