import styled from 'styled-components'

export const Image = styled.img<{ hasError?: boolean }>`
  max-width: 100%;
  border-radius: 57px;
  box-sizing: border-box;

  ${(props) => props.hasError && `padding: 32px; background: #c3cbd5;`}
`
