import styled from 'styled-components'
import { useAvatarContext } from '../contexts/AvatarContext'
import IconAttention from '../assets/attention.svg'
import { ReactComponent as IconClose } from '../assets/close.svg'
import { Slider } from '@mui/material'
import Cropper from 'react-easy-crop'

type Props = {
    type: 'success' | 'error'
}

const UploadResult = ({ type }: Props) => {
    const { uploadedFile, handleClose, zoom, handleZoomChange, crop, handleCropChange, handleCropComplete,
    onAvatarSave } = useAvatarContext()

    return (
        <Wrapper>
            <CloseButton onClick={handleClose} />
            {type === 'success' ? (
                <>
                    <Cropper
                        cropShape="round"
                        image={uploadedFile.preview}
                        zoom={zoom}
                        crop={crop}
                        onZoomChange={handleZoomChange}
                        onCropChange={handleCropChange}
                        onCropComplete={handleCropComplete}
                        cropSize={{ width: 114, height: 114 }}
                        aspect={1} />
                    <ImageWrapper>
                    </ImageWrapper>
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
                    <ImageWrapper><Image src={IconAttention} hasError /></ImageWrapper>
                    <div>
                        <ErrorMessage>Sorry, the upload failed.</ErrorMessage>
                        <TryMessage onClick={handleClose}>Try again</TryMessage>
                    </div>
                </>)}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    background: #F2F5F8;
    border-radius: 8px;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    transition: all 0.2s ease;
`;
const CloseButton = styled(IconClose)`
    position: absolute;
    right: 30px;
    top: 35px;
    cursor: pointer;
`;
const ImageWrapper = styled.div`
    max-width: 114px;
    margin-right: 32px;
`;
const Image = styled.img<{ hasError?: boolean }>`
    max-width: 100%;
    border-radius: 57px;
    background: #C3CBD5;
    box-sizing: border-box;

    ${props => props.hasError && `padding: 32px`}
`;
const CropWrapper = styled.div`
    width: 276px;
    display: flex;
    flex-direction: column;
`;
const ButtonBox = styled.div`
    display: flex;
    justify-content: right;
`;
const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark);
    border-radius: 16px;
    color: #FFF;
    border: none;
    font-size: 0.875rem;
    line-height: 1.563rem;
    cursor: pointer;
    padding: 3px 40px;
    box-sizing: border-box;
    margin-top: 30px;
`;
const ErrorMessage = styled.p`
    font-size: 1rem;
    line-height: 1.813rem;
    font-weight: normal;
    color: var(--red);
    letter-spacing: -0.02em;
`;
const TryMessage = styled.p`
    display: inline-block;
    font-size: 1rem;
    line-height: 1.813rem;
    font-weight: 500;
    color: var(--dark);
    text-decoration: underline;
    letter-spacing: -0.02em;
    cursor: pointer;
`;

export default UploadResult
