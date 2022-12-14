import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import appSlice from './slices/isLoading.slice'
import purchasesSlice from './slices/purchases.slice'
import cartSlice from './slices/cart.slice'

export default configureStore({
    reducer: {
        products: productsSlice,
        app: appSlice,
        purchases: purchasesSlice,
        cart: cartSlice
    }
})
