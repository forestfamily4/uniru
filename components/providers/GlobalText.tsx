import React, { FC, createContext, useContext, useState } from "react";

type GlobalText = [
    string,
    (text: string) => void
]

const GlobalTextContext = createContext<GlobalText | undefined>(undefined);

export const useGlobalText = (): GlobalText => {
    const state = useContext(GlobalTextContext);
    if (!state) {
        throw new Error("useGlobalText must be used within a GlobalTextProvider");
    }
    return state;
};

type Props = {
    children?: React.ReactNode;
};

export const GlobalTextProvider: FC<Props> = ({ children }) => {
    const [text, setText] = useState("");

    const value: GlobalText = [
        text,
        setText,
    ];

    return (
        <GlobalTextContext.Provider value={value}>
            {children}
        </GlobalTextContext.Provider>
    );
};