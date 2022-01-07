import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AvatarUpload from '../components/AvatarUpload'
import {
  createDtWithFiles,
  fireDragEnter,
  flushPromises,
  createFile,
} from '../utils/dropzoneTests'
import UploadResult from '../components/UploadResult'

describe('Upload Component (Dropzone)', () => {
  it('Verify if component exists', () => {
    const { getByTestId } = render(<AvatarUpload />)
    const uploader = getByTestId('ImageUpload-dropzone')
    expect(uploader).toBeInTheDocument()
  })
  it('Allows dragging a image', async () => {
    const file = [createFile('photo.png', 'photo', 'image/*')]
    const { getByTestId, rerender } = render(<AvatarUpload />)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(file)
    fireDragEnter(uploader, data)
    await flushPromises(rerender, <AvatarUpload />)

    expect(uploader).toHaveClass('dragAccepted')
  })

  it('Denies dragging a video', async () => {
    const file = [createFile('video.mp4', 'video', 'video/*')]
    const { getByTestId, rerender } = render(<AvatarUpload />)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(file)
    fireDragEnter(uploader, data)
    await flushPromises(rerender, <AvatarUpload />)

    expect(uploader).toHaveClass('dragRejected')
  })
})

describe('Close button', () => {
  it('Verify if button exists', () => {
    const { getByTestId } = render(<UploadResult />)
    const button = getByTestId('closeButton')
    expect(button).toBeInTheDocument()
  })
})
