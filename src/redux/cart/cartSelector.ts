import { Produto } from '../../App'
import { RootReducer } from '../store'

export const produtoCarrinho = (root: RootReducer) => root.cart.itens.length

export const produtoValorTotal = (root: RootReducer) =>
  root.cart.itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const favoritosQuantidade = (root: RootReducer) =>
  root.cart.favoritos.length

export const eFavorito = (favorito: number[], id: number) =>
  favorito.some((pid) => pid === id)

export const estaNoCarrinho = (produtos: Produto[], id: number) =>
  produtos.some((p) => p.id === id)
