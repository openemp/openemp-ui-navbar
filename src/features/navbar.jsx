import React from 'react';
import { createNanoEvents } from 'nanoevents';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Icon, CssBaseline } from '@openemp-mf/styleguide';
import { Search, DesktopSection, MobileSection } from 'components';

// Global object to emit UI events between microfrontends
window.emitter = createNanoEvents();

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    window.emitter.emit('toggleDrawer');
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" noWrap>
            OpenEMP
          </Typography>
          <div className={classes.grow} />
          <Search />
          <DesktopSection />
          <MobileSection />
        </Toolbar>
      </AppBar>
    </>
  );
}
