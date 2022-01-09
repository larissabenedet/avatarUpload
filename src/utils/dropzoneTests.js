import { fireEvent, act, waitFor } from '@testing-library/react'

export function createDtWithFiles(files = []) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        size: file.size,
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  }
}

// Using fireEvent.* doesn't work for our use case,
// we cannot set the event props
export function dispatchEvt(node, type, data) {
  const event = new Event(type, { bubbles: true })
  if (data) {
    Object.assign(event, data)
  }
  fireEvent(node, event)
}

export function fireDragEnter(node, data) {
  dispatchEvt(node, 'dragenter', data)
}

export function fireDrop(node, data) {
  dispatchEvt(node, 'drop', data)
}

export async function flushPromises(rerender, ui) {
  await act(() => waitFor(() => rerender(ui)))
}

export function createFile(name, size, type) {
  const file = new File([], name, { type })
  Object.defineProperty(file, 'size', {
    get() {
      return size
    },
  })
  return file
}