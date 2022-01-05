import { useAvatarContext } from '../../contexts/AvatarContext'
import IconAttention from '../../assets/attention.svg'
import { Slider } from '@mui/material'
import Cropper from 'react-easy-crop'
import RoundedImage from '../RoundedImage'
import {
  Wrapper,
  CloseButton,
  ImageWrapper,
  CropWrapper,
  ButtonBox,
  SaveButton,
  ErrorMessage,
  TryMessage,
} from './styles'

type Props = {
  type: 'crop' | 'error'
}

const UploadResult = ({ type }: Props) => {
  const {
    uploadedFile,
    handleClose,
    zoom,
    handleZoomChange,
    crop,
    handleCropChange,
    handleCropComplete,
    onAvatarSave,
  } = useAvatarContext()

  return (
    <Wrapper>
      <CloseButton onClick={handleClose}/>
      {type === 'crop' ? (
        <>
          <Cropper
            cropShape="round"
            image={uploadedFile}
            data-testid="image"
            zoom={zoom}
            crop={crop}
            onZoomChange={handleZoomChange}
            onCropChange={handleCropChange}
            onCropComplete={handleCropComplete}
            cropSize={{ width: 114, height: 114 }}
            aspect={1}
          />
          <ImageWrapper />
          <CropWrapper>
            <p>Crop</p>
            <Slider
              size="small"
              aria-label="Zoom"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(e, zoomValue) => handleZoomChange(zoomValue)}
            />
            <ButtonBox>
              <SaveButton onClick={onAvatarSave}>Save</SaveButton>
            </ButtonBox>
          </CropWrapper>
        </>
      ) : (
        <>
          <ImageWrapper>
            <RoundedImage src={IconAttention} hasError />
          </ImageWrapper>
          <div>
            <ErrorMessage>Sorry, the upload failed.</ErrorMessage>
            <TryMessage onClick={handleClose}>Try again</TryMessage>
          </div>
        </>
      )}
    </Wrapper>
  )
}

export default UploadResult
