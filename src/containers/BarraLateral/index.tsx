import React from 'react'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="search" placeholder="Procurar" />
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

export default BarraLateral
