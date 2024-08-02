import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type cartType = {
  itens: Produto[]
  favoritos: number[]
}

const initialState: cartType = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      if (state.itens.find((item) => item.id === action.payload.id)) {
        state.itens = state.itens.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itens = [...state.itens, action.payload]
      }
    },
    favoritar: (state, action: PayloadAction<number>) => {
      if (state.favoritos.includes(action.payload))
        state.favoritos = state.favoritos.filter((id) => id !== action.payload)
      else state.favoritos = [...state.favoritos, action.payload]
    }
  }
})

export const { adicionarCarrinho, favoritar } = cartSlice.actions
export default cartSlice.reducer
