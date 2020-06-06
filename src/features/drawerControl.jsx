import React from 'react';
import { IconButton, Icon } from '@openemp-mf/styleguide';

export default function DrawerControl() {
  const handleDrawerOpen = () => {
    window.emitter.emit('toggleDrawer');
  };

  return (
    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
      <Icon>menu</Icon>
    </IconButton>
  );
}
