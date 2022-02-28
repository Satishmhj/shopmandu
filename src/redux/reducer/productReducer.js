import { PRODUCT_LIST } from "../constants";

const initialState = {
  products: [],
};

// export const fetchProduct = () => async (dispatch) => {
// dispatch({
//   //   type: PRODUCT_LIST_FETCHING,
//   // });
//   let response = await commonApi();

//   if (response?.data?.data?.product) {
//     dispatch({
//       type: {},
//       payload: response.data.data.product,
//     });
//   }
// };
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
