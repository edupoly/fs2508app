import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todolistReducer from '../features/todolist/todolistSlice'
import productReducer from '../features/products/productSlice'
import { productApi } from '../services/product.service';
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    counterR:counterReducer,
    todolistR:todolistReducer,
    productR:productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})
setupListeners(store.dispatch)