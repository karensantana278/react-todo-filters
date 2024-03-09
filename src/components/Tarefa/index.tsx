import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

export const Tarefa = (props: Props) => {
  const [estaEditando, setEditando] = useState(false)

  function editarMensagem() {
    setEditando(true)
  }

  function salvarMensagem() {
    setEditando(false)
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
      <S.Descricao value={props.descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarMensagem}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={editarMensagem}>Editar</S.Botao>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
