import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  textarea {
    resize: none;
    height: 183px;
    margin: 16px 0px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input,
  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline-block;
  text-transform: capitalize;
`
