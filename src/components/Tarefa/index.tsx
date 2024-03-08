import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
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
      <S.Tag>{props.prioridade}</S.Tag>
      <S.Tag>{props.status}</S.Tag>
      <S.Descricao value={props.descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao onClick={salvarMensagem}>Salvar</S.Botao>
            <S.Botao onClick={() => setEditando(false)}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={editarMensagem}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
