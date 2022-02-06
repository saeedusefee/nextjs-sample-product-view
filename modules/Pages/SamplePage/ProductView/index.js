import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../../redux/actions';

import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MobileStepper from '@material-ui/core/MobileStepper';
import Rating from '@material-ui/lab/Rating';

import ContentImage from '../../../../@behtarino/components/Common/ContentImage';
import { ShoppingCart, Share } from '@material-ui/icons';

const sizeOptions = [
  {
    value: '40',
    label: '40',
  },
  {
    value: '41',
    label: '41',
  },
  {
    value: '42',
    label: '42',
  },
  {
    value: '43',
    label: '43',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2vw',
    borderRadius: 8,
    boxShadow: '0px 0px 10px 8px rgb(0 0 0 / 10%)',
    padding: '4vw',
    height: '100%',
    backgroundColor: '#fff',
  },
  gridRoot: {
    width: 'fit-content',
    '& hr': {
      margin: theme.spacing(0, 1),
    },
  },
  image: {
    width: '100%',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiMobileStepper-root': {
      justifyContent: 'center',
    },
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25,
    '& .MuiMobileStepper-root': {
      background: 'none',
    },
  },
  navBtn: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0,
    },
    '& .MuiBottomNavigationAction-root.Mui-selected': {
      color: 'inherit',
    },
  },
  featureBox: {
    marginTop: 40,
  },
  contentCard: {
    marginTop: 40,
  },
  cartBtn: {
    color: '#fff',
    backgroundImage: 'linear-gradient(#fb8cb3, #f50057)',
  },
  title: {
    display: 'flex',
  }
}));

const ProductView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { productDetail } = useSelector(({ shopApp }) => shopApp);

  const [value, setValue] = useState('blue');
  const [size, setSize] = useState('40');

  useEffect(() => {
    dispatch(getProductDetail());
  }, [dispatch]);

  const handleChangeSize = event => {
    setSize(event.target.value);
  };

  const handleChangeColor = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={6}>
        <Grid item md={4} xs={12}>
          <Box className={classes.imageContainer}>
            <ContentImage src={productDetail?.image} className={classes.image} />
            <MobileStepper
              variant="dots"
              steps={4}
              position="static"
              activeStep={0}
            />
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Box className={classes.headerCard}>
            <Box component="span" className={classes.title}>
              <Typography variant="h4" gutterBottom>{productDetail?.title}</Typography>
              <Rating value={productDetail?.rating?.rate} precision={0.5} readOnly />
            </Box>
            <Typography variant="subtitle2" gutterBottom>{productDetail?.category}</Typography>
            <Typography variant="h4" gutterBottom>{`${productDetail?.price}$`}</Typography>
          </Box>
          <Box className={classes.contentCard}>
            <Typography variant="h5" gutterBottom>
              DESCRIPTION
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDetail?.description}
            </Typography>
            <Box className={classes.featureBox}>
              <Grid container alignItems="center" className={classes.gridRoot}>
                <Box>
                  <Typography>
                    COLOR
                  </Typography>
                  <BottomNavigation value={value} onChange={handleChangeColor} className={classes.navBtn}>
                    <BottomNavigationAction value="blue" icon={<FiberManualRecord style={{color: '#0a66b7'}} />} />
                    <BottomNavigationAction value="red" icon={<FiberManualRecord style={{color: '#b70a0a'}} />} />
                    <BottomNavigationAction value="green" icon={<FiberManualRecord style={{color: '#15b70a'}} />} />
                    <BottomNavigationAction value="black" icon={<FiberManualRecord style={{color: '#000000'}} />} />
                  </BottomNavigation>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box>
                  <Typography>
                    SIZE
                  </Typography>
                  <TextField
                    select
                    value={size}
                    onChange={handleChangeSize}
                    >
                    {sizeOptions.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box>
                  <Typography>
                    QTY
                  </Typography>
                  <TextField defaultValue={0} type="number"></TextField>
                </Box>
              </Grid>
            </Box>
            <Box className={classes.footerCard}>
              <Button variant="contained" className={classes.cartBtn} size="large" startIcon={<ShoppingCart />}>
                ADD TO CART
              </Button>
              <IconButton aria-label="delete" className={classes.margin}>
                <Share fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductView;
