import styled from 'styled-components'
import Dropzone from 'react-dropzone';
import UploadMessage from './UploadMessage';
import { useAvatarContext } from '../contexts/AvatarContext';
import UploadResult from './UploadResult';

const AvatarUpload = () => {
    const { handleUpload, cropFile, handleError, hasError } = useAvatarContext()

    function showUpload() {
        if (hasError) {
            return <UploadResult type="error" />
        }
        else if (cropFile) {
            return <UploadResult type="success" />
        } else {
            return <Dropzone accept="image/*" onDropAccepted={handleUpload} onDropRejected={handleError}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
                    <DropzoneContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                        <input {...getInputProps()} />
                        <UploadMessage />
                    </DropzoneContainer>}
            </Dropzone>
        }
    }

    return showUpload()
}

const DropzoneContainer = styled.div<{ isDragActive: boolean, isDragReject: boolean }>`
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
  transition: all 0.2s ease;
  cursor: pointer;

  ${(props) => (props.isDragActive && `border-color: #00b900;`)};
  ${(props) => (props.isDragReject && `border-color: red;`)};
`;

export default AvatarUpload
