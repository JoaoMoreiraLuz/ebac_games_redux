import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'

import {
  favoritosQuantidade,
  produtoCarrinho,
  produtoValorTotal
} from '../../redux/cart/cartSelector'
import { paraReal } from '../Produto'

const Header = () => {
  const valorTotal = useSelector(produtoValorTotal)
  const quantidadeProdutos = useSelector(produtoCarrinho)
  const favoritosTotal = useSelector(favoritosQuantidade)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritosTotal} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidadeProdutos} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
