import React from 'react'
import { Tarefa } from '../../components/Tarefa'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <S.Main>
      <p>2 tarefas marcadas como: categoria e {termo}</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
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
