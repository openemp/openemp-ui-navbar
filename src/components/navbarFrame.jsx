import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, CssBaseline, Toolbar } from '@openemp/styleguide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export default function NavbarFrame(props) {
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

NavbarFrame.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
