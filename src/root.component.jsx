import React from 'react';
import { Redirect } from '@reach/router';
import ParcelComponent from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

import Navbar from 'components/navbar';

// eslint-disable-next-line no-undef
const remoteImport = async (url) => System.import(url);

const isAuthenticate = true;

const Root = () => {
  return isAuthenticate ? (
    <>
      <Navbar />
      <ParcelComponent config={remoteImport('@openemp-mf/drawer')} mountParcel={mountRootParcel} />
    </>
  ) : (
    <>
      <Redirect to="/login" noThrow />
    </>
  );
};

export default Root;
