import { DropzoneContainer } from './styles'
import Dropzone from 'react-dropzone'
import UploadMessage from './UploadMessage'
import { useAvatarContext } from '../../contexts/AvatarContext'
import UploadResult from '../UploadResult'

const AvatarUpload = () => {
  const { handleUpload, fileHasToBeCropped, handleError, hasError } =
    useAvatarContext()

  function showUpload() {
    if (hasError) {
      return <UploadResult type="error" />
    } else if (fileHasToBeCropped) {
      return <UploadResult type="crop" />
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
              data-testid="ImageUpload-dropzone"
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

export default AvatarUpload
