import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Estudar js',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'descricao'
    ),
    new Tarefa(
      3,
      'Estudar angular',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'descricao'
    ),
    new Tarefa(
      1,
      'Estudar java',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'descricao'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
