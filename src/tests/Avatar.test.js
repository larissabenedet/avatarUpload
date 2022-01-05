import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AvatarUpload from '../components/AvatarUpload'
import {
  createDtWithFiles,
  fireDragEnter,
  flushPromises,
  createFile,
} from '../utils/dropzoneTests'

describe('Upload Component (Dropzone)', () => {
  it('Allows a image upload in PNG', async () => {
    const file = [createFile('photo.png', 'photo', 'image/png')]
    const { getByTestId, rerender } = render(<AvatarUpload />)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(file)
    fireDragEnter(uploader, data)
    await flushPromises(rerender, <AvatarUpload />)

    expect(uploader).toHaveClass('dragAccepted')
  })

  it('Denies a video upload in .mp4', async () => {
    const file = [createFile('video.mp4', 'video', 'video/mp4')]
    const { getByTestId, rerender } = render(<AvatarUpload />)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(file)
    fireDragEnter(uploader, data)
    await flushPromises(rerender, <AvatarUpload />)

    expect(uploader).toHaveClass('dragRejected')
  })
})
