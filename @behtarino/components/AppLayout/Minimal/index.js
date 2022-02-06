import React from 'react';

import { Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ContentLoader from '../../ContentLoader';

const useStyles = makeStyles((theme) => ({
  minimalLayout: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
}));

const Minimal = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Box className={className}>
      {children}
      <ContentLoader />
    </Box>
  );
};

export default Minimal;
