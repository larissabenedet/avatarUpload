import React, { ReactNode, useContext, useState } from "react";
interface ContextValue {
    uploadedFile: any
    cropFile: boolean
    hasError: boolean
    handleUpload: (file: Array<File>) => void
    handleError: () => void
    handleClose: () => void
}
interface Props {
    children: ReactNode;
}

export const AvatarContext = React.createContext<ContextValue | undefined>(
    {} as ContextValue
);

export const AvatarContextProvider = ({ children }: Props) => {
    const [uploadedFile, setUploadedFile] = useState({})
    const [cropFile, setCropFile] = useState(false)
    const [hasError, setHasError] = useState(false)

    function handleUpload(file: Array<File>) {
        setUploadedFile({ preview: window.URL.createObjectURL(file[0]), url: null })
        setCropFile(true)
    }

    function handleError() {
        setHasError(true)
    }

    function handleClose() {
        setHasError(false)
        setCropFile(false)
    }

    const value = { uploadedFile, handleUpload, cropFile, handleError, hasError, handleClose };

    return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>;
};

export function useAvatarContext() {
    const context = useContext(AvatarContext);

    if (typeof context === "undefined") {
        throw new Error("useAvatarContext must be used within an AvatarContext");
    }

    return context;
}