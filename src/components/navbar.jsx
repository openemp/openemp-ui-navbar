import React from 'react';
import { createNanoEvents } from 'nanoevents';
import { makeStyles, Typography } from '@openemp-mf/styleguide';
import { NavbarFrame, Search, DesktopSection, MobileSection } from 'components';
import { DrawerControl } from 'features';

// Global object to emit UI events between microfrontends
window.emitter = createNanoEvents();

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <NavbarFrame>
      <DrawerControl />
      <Typography variant="h6" noWrap>
        OpenEMP
      </Typography>
      <div className={classes.grow} />
      <Search />
      <DesktopSection />
      <MobileSection />
    </NavbarFrame>
  );
}
