import styled from 'styled-components'
import Dropzone from 'react-dropzone';
import UploadMessage from './UploadMessage';
import { useAvatarContext } from '../contexts/AvatarContext';
import AvatarCrop from './AvatarCrop';

const AvatarUpload = () => {
    const { handleUpload, cropFile } = useAvatarContext()

    const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
        if (!isDragActive) {
            return <UploadMessage type="default" />
        }
        if (isDragReject) {
            return <UploadMessage type="error" />
        }
    }

    return (!cropFile ?
        <Dropzone accept="image/*" onDropAccepted={handleUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
                <DropzoneContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropzoneContainer>}
        </Dropzone> : <AvatarCrop />
    )
}

const DropzoneContainer = styled.div.attrs({
    className: "dropzone"
}) <{ isDragActive: boolean, isDragReject: boolean }>`
  background: #F2F5F8;
  border: 2px dashed #C7CDD3;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px;
  box-sizing: border-box;
  transition: height 0.2s ease;
  cursor: pointer;

  ${(props) => (props.isDragActive && `border: none;`)};
  ${(props) => (props.isDragReject && `border: none;`)};
`;

export default AvatarUpload
