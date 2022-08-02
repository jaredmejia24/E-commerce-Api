import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../Components/utilis/getConfig";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const getCartThunk = (token) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
      getConfig(token)
    )
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addCartThunk = (token, product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
      product,
      getConfig(token)
    )
    .then((res) => dispatch(getCartThunk(token)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const updateCartThunk = (token, product) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .patch(
      "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
      product,
      getConfig(token)
    )
    .then((res) => dispatch(getCartThunk(token)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;