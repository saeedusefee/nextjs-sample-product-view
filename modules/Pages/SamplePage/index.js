import React from 'react';
import GridContainer from '../../../@behtarino/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import ProductView from './ProductView';

const SamplePage = () => {
  
  return (
    <GridContainer>
      <Grid item xs={12}>
        <ProductView/>
      </Grid>
    </GridContainer>
  );
};

export default SamplePage;
