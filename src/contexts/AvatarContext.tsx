import React, { ReactNode, useContext, useState } from "react";
import getCroppedImg from '../utils/cropImage'
interface ContextValue {
    uploadedFile: any
    fileHasToBeCropped: boolean
    hasError: boolean
    handleUpload: (file: Array<File>) => void
    handleError: () => void
    handleClose: () => void
    zoom: number
    crop: { x: number, y: number }
    handleZoomChange: (zoom?: any) => void
    handleCropChange: () => void
    handleCropComplete: (croppedAreaPercentage?: any, croppedAreaPixels?: any) => void
    onAvatarSave: () => void
}
interface Props {
    children: ReactNode;
}

export const AvatarContext = React.createContext<ContextValue | undefined>(
    {} as ContextValue
);

export const AvatarContextProvider = ({ children }: Props) => {
    const [uploadedFile, setUploadedFile] = useState<any>({})
    const [fileHasToBeCropped, setFileHasToBeCropped] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [zoom, setZoom] = useState(1)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedArea, setCroppedArea] = useState(null)

    function handleUpload(file: Array<File>) {
        setUploadedFile({ preview: window.URL.createObjectURL(file[0]) })
        setFileHasToBeCropped(true)
    }

    function handleError() {
        setHasError(true)
    }

    function handleClose() {
        setHasError(false)
        setFileHasToBeCropped(false)
    }

    function handleZoomChange(zoomValue?: any) {
        setZoom(zoom)
    }

    function handleCropChange(cropValue?: any) {
        setCrop(crop)
    }

    function handleCropComplete(croppedAreaPercentage?: any, croppedAreaPixels?: any) {
        setCroppedArea(croppedAreaPixels)
    }

    async function onAvatarSave() {
        if (croppedArea) {
            const croppedAvatarUrl = await getCroppedImg(uploadedFile.preview, croppedArea)
            setUploadedFile(Object.assign(uploadedFile, { croppedImage: croppedAvatarUrl }))
            handleClose()
            setZoom(1)
            setCrop({ x: 0, y: 0 })
        }
    }

    const value = {
        uploadedFile, handleUpload, fileHasToBeCropped, handleError, hasError, handleClose, zoom, handleZoomChange,
        crop, handleCropChange, handleCropComplete, onAvatarSave
    };

    return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>;
};

export function useAvatarContext() {
    const context = useContext(AvatarContext);

    if (typeof context === "undefined") {
        throw new Error("useAvatarContext must be used within an AvatarContext");
    }

    return context;
}