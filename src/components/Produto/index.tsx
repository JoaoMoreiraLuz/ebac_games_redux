import * as S from './styles'

import { Produto as ProdutoType } from '../../App'
import { adicionarCarrinho, favoritar } from '../../redux/cart/slice'
import { eFavorito, estaNoCarrinho } from '../../redux/cart/cartSelector'
import { RootReducer } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const adicionar = () => dispatch(adicionarCarrinho(produto))
  const favoritarItem = () => dispatch(favoritar(produto.id))
  const favorito = useSelector((root: RootReducer) =>
    eFavorito(root.cart.favoritos, produto.id)
  )
  const carrinho = useSelector((root: RootReducer) =>
    estaNoCarrinho(root.cart.itens, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritarItem} type="button">
        {favorito ? '- Remover dos favoritos' : '+ adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionar} type="button">
        {carrinho ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
