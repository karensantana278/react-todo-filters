import styled, { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { Botao } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-family: arial, sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Main = styled.main`
  padding: 0px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Resultado = styled.p`
  margin: 40px 0px;
  display: block;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #666;
  width: 100%;
  height: 32px;
  padding: 8px;
  color: #666;
  font-weight: bold;
  outline: none;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${colors.verde};
`

export default EstiloGlobal
