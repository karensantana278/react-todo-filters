import React from 'react'
import { Tarefa } from '../../components/Tarefa'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <S.Main>
      <p>2 tarefas marcadas como: categoria e {termo}</p>
      <ul>
        {filtraTarefas().map((tarefa, index) => (
          <li key={index}>
            <Tarefa
              id={tarefa.id}
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              descricao={tarefa.descricao}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  )
}

export default ListadeTarefas
