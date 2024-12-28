import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
