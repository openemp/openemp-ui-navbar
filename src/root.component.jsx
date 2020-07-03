import React, { Suspense } from 'react';

import Navbar from 'components/navbar';

// eslint-disable-next-line no-unused-vars
import i18n from 'assets/i18n';

const Root = ({ StylesProvider, jss }) => {
  return (
    <Suspense fallback={null}>
      <StylesProvider jss={jss}>
        <Navbar />
      </StylesProvider>
    </Suspense>
  );
};

export default Root;
