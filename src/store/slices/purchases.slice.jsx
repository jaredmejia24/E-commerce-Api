import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../Components/utilis/getConfig';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action)=>{
            return action.payload;
        }
    }
})

export const getPurchasesThunk = (token) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://e-commerce-api-htys.onrender.com/api/v1/users/orders", getConfig(token))
        .then((res) => dispatch(setPurchases(res.data.data.orders)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
