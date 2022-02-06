import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { Slide } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { fetchError } from '../../../redux/actions';
import PageLoader from '../PageComponents/PageLoader';

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

// eslint-disable-next-line react/prop-types
export const NotificationLoader = ({ loading, error, message }) => {
  return (
    <React.Fragment>
      {loading && <PageLoader />}
      {
        <Snackbar
          open={Boolean(error)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={SlideTransition}>
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={Boolean(message)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={SlideTransition}>
          <Alert variant="filled" severity="success">
            {message}
          </Alert>
        </Snackbar>
      }
    </React.Fragment>
  );
};

const ContentLoader = () => {
  const { error, loading, message } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        dispatch(fetchError(''));
      }, 3000);
    }
  }, [dispatch, error, message]);

  return (
    <React.Fragment>
      {loading && <PageLoader />}
      {
        <Snackbar
          open={Boolean(error)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={SlideTransition}>
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        </Snackbar>
      }
      {
        <Snackbar
          open={Boolean(message)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={SlideTransition}>
          <Alert variant="filled" severity="success">
            {message}
          </Alert>
        </Snackbar>
      }
    </React.Fragment>
  );
};

export default ContentLoader;
