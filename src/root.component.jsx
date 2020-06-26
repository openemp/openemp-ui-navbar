import React from 'react';
import ParcelComponent from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';
import { createJss, rtl, jssPreset, StylesProvider, useTheme } from '@openemp-mf/styleguide';

import Navbar from 'components/navbar';
import { withAuth } from '@openemp-mf/login';

// eslint-disable-next-line no-undef
const remoteImport = async (url) => System.import(url);

const jss = createJss({ plugins: [...jssPreset().plugins, rtl()] });

const Root = () => {
  const theme = useTheme();
  // theme.direction = 'rtl';

  console.log('-----', theme);
  return (
    <StylesProvider jss={jss}>
      <Navbar />
      <ParcelComponent config={remoteImport('@openemp-mf/drawer')} mountParcel={mountRootParcel} />
    </StylesProvider>
  );
};

export default withAuth(Root);
