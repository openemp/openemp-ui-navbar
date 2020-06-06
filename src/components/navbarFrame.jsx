import React from 'react';
import { makeStyles, AppBar, CssBaseline, Toolbar } from '@openemp-mf/styleguide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export default function Navbar(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </>
  );
}
