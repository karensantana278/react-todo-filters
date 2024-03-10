import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        1,
        'Estudar js',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'descricao'
      ),
      new Tarefa(
        2,
        'Estudar angular',
        enums.Prioridade.IMPORTANTE,
        enums.Status.CONCLUIDA,
        'descricao'
      ),
      new Tarefa(
        3,
        'Estudar java',
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE,
        'descricao'
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
