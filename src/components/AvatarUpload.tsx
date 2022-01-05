import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import UploadMessage from './UploadMessage'
import { useAvatarContext } from '../contexts/AvatarContext'
import UploadResult from './UploadResult'

const AvatarUpload = () => {
  const { handleUpload, fileHasToBeCropped, handleError, hasError } =
    useAvatarContext()

  function showUpload() {
    if (hasError) {
      return <UploadResult type="error" />
    } else if (fileHasToBeCropped) {
      return <UploadResult type="success" />
    } else {
      return (
        <Dropzone
          accept="image/*"
          onDropAccepted={handleUpload}
          onDropRejected={handleError}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropzoneContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              <UploadMessage />
            </DropzoneContainer>
          )}
        </Dropzone>
      )
    }
  }

  return showUpload()
}

const DropzoneContainer = styled.div<{
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
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 44px;
    flex-direction: column;
  }

  ${(props) => props.isDragActive && `border-color: #00b900;`};
  ${(props) => props.isDragReject && `border-color: red;`};
`

export default AvatarUpload
