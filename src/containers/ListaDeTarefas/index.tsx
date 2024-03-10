import React from 'react'
import { Tarefa } from '../../components/Tarefa'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListadeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  return (
    <S.Main>
      <p>2 tarefas marcadas como: categoria e termo</p>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <Tarefa
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
