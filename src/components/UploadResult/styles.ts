import styled from 'styled-components'
import { ReactComponent as IconClose } from '../../assets/close.svg'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f2f5f8;
  border-radius: 8px;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const CloseButton = styled(IconClose)`
  position: absolute;
  right: 30px;
  top: 35px;
  cursor: pointer;
`
export const ImageWrapper = styled.div`
  max-width: 114px;
  margin-right: 32px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`
export const CropWrapper = styled.div`
  width: 276px;
  display: flex;
  flex-direction: column;
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`
export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark);
  border-radius: 16px;
  color: #fff;
  border: none;
  font-size: 0.875rem;
  line-height: 1.563rem;
  cursor: pointer;
  padding: 3px 40px;
  box-sizing: border-box;
  margin-top: 30px;
`
export const ErrorMessage = styled.p`
  font-size: 1rem;
  line-height: 1.813rem;
  font-weight: normal;
  color: var(--red);
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`
export const TryMessage = styled.p`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.813rem;
  font-weight: 500;
  color: var(--dark);
  text-decoration: underline;
  letter-spacing: -0.02em;
  cursor: pointer;
`
