import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from 'axios';

import { GET_PRODUCT_DETAIL } from '../../@behtarino/constants/ActionTypes';

export const getProductDetail = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://fakestoreapi.com/products/1')
        .then(data => {
            if(data.status === 200) {
                dispatch(fetchSuccess());
                dispatch({ type: GET_PRODUCT_DETAIL, payload: data.data});
            } else {
                dispatch(fetchError('Somthing went wrong!'));
            }
        })
        .catch( error => {
            dispatch(fetchError('Server Error!'))
        })
    }
}