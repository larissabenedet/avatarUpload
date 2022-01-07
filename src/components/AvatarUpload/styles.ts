import styled from 'styled-components'

export const DropzoneContainer = styled.div<{
  isDragActive: boolean
  isDragReject: boolean
}>`
  background: #f2f5f8;
  border: 2px dashed #c7cdd3;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px;
  box-sizing: border-box;
  transition: all 0.2s ease;
  max-height: 177px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 44px;
    flex-direction: column;
    max-height: none;
  }

  ${(props) => props.isDragActive && `border-color: #00b900;`};
  ${(props) => props.isDragReject && `border-color: red;`};
`
// upload message

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  & svg {
    display: flex;
    align-items: center;
  }
`
export const Title = styled.h1`
  font-size: 0.875rem;
  line-height: 1.563rem;
  font-weight: 500;
  margin-left: 12px;
  color: var(--gray06);
`
export const ImageWrapper = styled.div`
  max-width: 114px;
  margin-right: 32px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`