import { PRODUCT_LIST } from "../constants";

export const actionFetchApi = () => async (dispatch) => {
  let response = await fetch(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  dispatch ({
    type: PRODUCT_LIST,
    payload: response.data.product,
  });
};
