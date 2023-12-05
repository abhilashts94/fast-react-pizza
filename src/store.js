import { configureStore } from '@reduxjs/toolkit'
import userReducder from './features/user/userSlice'
import cartReducder from './features/cart/cartSlice'

const store = configureStore({
  reducer: {
    user: userReducder,
    cart: cartReducder,
  },
})

export default store
