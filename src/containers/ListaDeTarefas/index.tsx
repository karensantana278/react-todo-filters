import React from 'react'
import { Tarefa } from '../../components/Tarefa'

import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar Java',
    descricao: 'ver a aula da udemy',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Fazer projetos',
    descricao: 'ver youtube',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListadeTarefas = () => (
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

export default ListadeTarefas
