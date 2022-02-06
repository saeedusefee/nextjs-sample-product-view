import { GET_PRODUCT_DETAIL } from "../../@behtarino/constants/ActionTypes";

const INIT_STATE = {
    productDetail: null,
};

export default function ShopApp(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_PRODUCT_DETAIL: {
            return { ...state, productDetail: action.payload };
        }
        default:
            return state;
    }
};