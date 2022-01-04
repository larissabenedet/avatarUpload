import React, { ReactNode, useContext } from "react";
interface ContextValue {
}

interface Props {
    children: ReactNode;
}

export const AvatarContext = React.createContext<ContextValue | undefined>(
    {} as ContextValue
);

export const AvatarContextProvider = ({ children }: Props) => {

    const value = {};

    return <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>;
};

export function useAvatarContext() {
    const context = useContext(AvatarContext);

    if (typeof context === "undefined") {
        throw new Error("useAvatarContext must be used within an AvatarContext");
    }

    return context;
}