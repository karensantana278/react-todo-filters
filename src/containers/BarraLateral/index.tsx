import React from 'react'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="search"
          placeholder="Procurar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={3} legenda={'pendentes'} />
          <FiltroCard contador={4} legenda={'concluídas'} />
          <FiltroCard contador={2} legenda={'urgentes'} />
          <FiltroCard contador={2} legenda={'importantes'} />
          <FiltroCard contador={3} legenda={'normal'} />
          <FiltroCard contador={7} legenda={'todas'} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
