import React from 'react';
import { create } from 'jss';
import { jssPreset, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppLayout from '../AppLayout';
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins] });

const AppWrapper = ({ children }) => {

  return (
    <StylesProvider jss={jss}>
      <CssBaseline />
      <AppLayout>{children}</AppLayout>
    </StylesProvider>
  );
};

export default AppWrapper;
