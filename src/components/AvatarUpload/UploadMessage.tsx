import { ReactComponent as IconMedia } from '../../assets/media.svg'
import { ImageWrapper, TextContainer, TitleWrapper, Title } from './styles'
import { useAvatarContext } from '../../contexts/AvatarContext'
import RoundedImage from '../RoundedImage'

const UploadMessage = () => {
  const { croppedFile } = useAvatarContext()
  return (
    <>
      {croppedFile && (
        <ImageWrapper>
          <RoundedImage src={croppedFile} />
        </ImageWrapper>
      )}
      <TextContainer>
        <TitleWrapper>
          <IconMedia />
          <Title>Organization Logo</Title>
        </TitleWrapper>
        <p>Drop the image here or click to browse.</p>
      </TextContainer>
    </>
  )
}

export default UploadMessage
