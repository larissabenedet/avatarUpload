import React, { ReactNode, useContext, useState } from "react";
interface ContextValue {
    uploadedFile: any
    cropFile: boolean
    handleUpload: (file: any) => void
}

interface Props {
    children: ReactNode;
}

export const AvatarContext = React.createContext<ContextValue | undefined>(
    {} as ContextValue
);

export const AvatarContextProvider = ({ children }: Props) => {
    const [uploadedFile, setUploadedFile] = useState('')
    const [cropFile, setCropFile] = useState(false)

    function handleUpload(file: any) {
        setUploadedFile(file)
        setCropFile(true)
    }

    const value = { uploadedFile, handleUpload, cropFile };

    return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>;
};

export function useAvatarContext() {
    const context = useContext(AvatarContext);

    if (typeof context === "undefined") {
        throw new Error("useAvatarContext must be used within an AvatarContext");
    }

    return context;
}