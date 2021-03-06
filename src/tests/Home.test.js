import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import UploadResult from '../components/UploadResult'
import {
  createDtWithFiles,
  fireDragEnter,
  flushPromises,
  createFile,
  fireDrop,
} from '../utils/dropzoneTests'
import { AvatarContext, AvatarContextProvider } from '../contexts/AvatarContext'
import { Slider } from '@mui/material'
import Dropzone from 'react-dropzone'

describe('Upload (Dropzone)', () => {
  const dropzoneComponent = (
    <AvatarContextProvider>
      <AvatarContext.Consumer>
        {(value) => (
          <Dropzone
            accept="image/*"
            onDropAccepted={value.handleUpload}
            onDropRejected={value.handleError}
          >
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <div
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
                data-testid="ImageUpload-dropzone"
              >
                <input {...getInputProps()} />
                {
                  <>
                    <span>Active: {isDragActive.toString()}</span>
                    <span>Reject: {isDragReject.toString()}</span>
                    <span>
                      HasToBeCropped: {value.fileHasToBeCropped.toString()}
                    </span>
                    <span>hasError: {value.hasError.toString()}</span>
                  </>
                }
              </div>
            )}
          </Dropzone>
        )}
      </AvatarContext.Consumer>
    </AvatarContextProvider>
  )

  const files = [
    [createFile('photo.png', 'photo', 'image/*')],
    [createFile('video.mp4', 'video', 'video/*')],
    [createFile('app.zip', 'zip', 'application/zip')],
  ]

  it('Allows dragging a image', async () => {
    const { getByTestId, getByText, rerender } = render(dropzoneComponent)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(files[0])
    fireDragEnter(uploader, data)
    await flushPromises(rerender, dropzoneComponent)

    expect(getByText('Active: true'))
  })
  it('Denies dragging a video', async () => {
    const { getByTestId, getByText, rerender } = render(dropzoneComponent)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(files[1])
    fireDragEnter(uploader, data)
    await flushPromises(rerender, dropzoneComponent)

    expect(getByText('Reject: true'))
  })
  it('Allows dropping a image', async () => {
    const { getByTestId, getByText, rerender } = render(dropzoneComponent)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(files[0])
    fireDrop(uploader, data)
    window.URL.createObjectURL = jest.fn() // for handleUpload function
    await flushPromises(rerender, dropzoneComponent)

    expect(window.URL.createObjectURL).toHaveBeenCalled()
    expect(getByText('HasToBeCropped: true'))
    expect(getByText('hasError: false'))
  })
  it('Denies dropping a zip', async () => {
    const { getByTestId, getByText, rerender } = render(dropzoneComponent)
    const uploader = getByTestId('ImageUpload-dropzone')
    const data = createDtWithFiles(files[2])
    fireDrop(uploader, data)
    window.URL.createObjectURL = jest.fn() // for handleUpload function
    await flushPromises(rerender, dropzoneComponent)

    expect(window.URL.createObjectURL).not.toHaveBeenCalled()
    expect(getByText('HasToBeCropped: false'))
    expect(getByText('hasError: true'))
  })
})

describe('Close button', () => {
  it('Verify if button exists', () => {
    const { getByTestId } = render(<UploadResult />)
    const button = getByTestId('closeButton')
    expect(button).toBeInTheDocument()
  })
  it('Verify if close function works correctly', () => {
    const { getByTestId, getByText } = render(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              <span>HasError: {value.hasError.toString()}</span>
              <span>hasToBeCropped: {value.fileHasToBeCropped.toString()}</span>
              <button data-testid="bt-close" onClick={value.handleClose}>
                Close
              </button>
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>,
    )

    const button = getByTestId('bt-close')
    fireEvent.click(button)
    expect(getByText('HasError: false'))
    expect(getByText('hasToBeCropped: false'))
  })
})

describe('Zoom', () => {
  it('Verify if zoom function works correctly', () => {
    const { getByTestId, getByText } = render(
      <AvatarContextProvider>
        <AvatarContext.Consumer>
          {(value) => (
            <>
              <span>Zoom: {value.zoom.toString()}</span>
              <Slider
                size="small"
                aria-label="Zoom"
                value={value.zoom}
                min={1}
                max={20}
                step={0.1}
                onChange={(e, zoomValue) => value.handleZoomChange(zoomValue)}
                data-testid="slider"
              />
            </>
          )}
        </AvatarContext.Consumer>
      </AvatarContextProvider>,
    )

    const slider = getByTestId('slider').querySelector('input')
    fireEvent.change(slider, { target: { value: 20 } })
    expect(getByText('Zoom: 20'))
  })
})
