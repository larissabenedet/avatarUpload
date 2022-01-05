import React, { ReactNode, useContext, useState } from "react";
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
}
interface Props {
    children: ReactNode;
}

export const AvatarContext = React.createContext<ContextValue | undefined>(
    {} as ContextValue
);

export const AvatarContextProvider = ({ children }: Props) => {
    const [uploadedFile, setUploadedFile] = useState<any>('')
    const [fileHasToBeCropped, setFileHasToBeCropped] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [zoom, setZoom] = useState(1)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedArea, setCroppedArea] = useState(null)

    function handleUpload(file: Array<File>) {
        setUploadedFile({ preview: window.URL.createObjectURL(file[0]), croppedImage: null })
        setFileHasToBeCropped(true)
    }

    function handleError() {
        setHasError(true)
    }

    function handleClose() {
        setHasError(false)
        setFileHasToBeCropped(false)
    }

    function handleZoomChange(zoom?: any) {
        setZoom(zoom)
    }

    function handleCropChange(crop?: any) {
        setCrop(crop)
    }

    function handleCropComplete(croppedAreaPercentage?: any, croppedAreaPixels?: any) {
        setCroppedArea(croppedAreaPixels)
    }

    const value = {
        uploadedFile, handleUpload, fileHasToBeCropped, handleError, hasError, handleClose, zoom, handleZoomChange,
        crop, handleCropChange, handleCropComplete
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