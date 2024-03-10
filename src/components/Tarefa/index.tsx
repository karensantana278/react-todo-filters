import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

export const Tarefa = (props: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (props.descricao.length > 0) {
      setDescricao(props.descricao)
    }
  }, [props.descricao])

  function editarMensagem() {
    setEditando(true)
  }

  function salvarMensagem() {
    dispatch(
      editar({
        id: props.id,
        titulo: props.titulo,
        prioridade: props.prioridade,
        status: props.status,
        descricao: props.descricao
      })
    )
    setEditando(false)
  }

  function cancelarEdicao() {
    setEditando(false)
    setDescricao(props.descricao)
  }

  return (
    <S.Card>
      <S.Titulo>{props.titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={props.prioridade}>
        {props.prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={props.status}>
        {props.status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarMensagem}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={editarMensagem}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(props.id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
