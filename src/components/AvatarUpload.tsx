import styled from 'styled-components'
import Dropzone from 'react-dropzone';
import UploadMessage from './UploadMessage';

const AvatarUpload = () => {
    const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
        if (!isDragActive) {
            return <UploadMessage type="default" />
        }
        if (isDragReject) {
            return <UploadMessage type="error" />
        }
    }

    return (
        <Dropzone accept="image/*" onDropAccepted={() => { }}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) =>
                <DropzoneContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropzoneContainer>}
        </Dropzone>
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
