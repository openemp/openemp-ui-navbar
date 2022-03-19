import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Typography } from '@openemp/styleguide';
import { NavbarFrame, Search, DesktopSection, MobileSection } from 'components';
import { DrawerControl } from 'features';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem('lang'));
    if (lang) i18n.changeLanguage(lang.name);
  }, []);

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
