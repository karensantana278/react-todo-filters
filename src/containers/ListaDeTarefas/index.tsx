import React from 'react'
import { Tarefa } from '../../components/Tarefa'

import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar Java',
    descricao: 'ver a aula da udemy',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Fazer projetos',
    descricao: 'ver youtube',
    prioridade: 'importante',
    status: 'pendente'
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
