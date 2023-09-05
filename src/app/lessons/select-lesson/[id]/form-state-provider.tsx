'use client';
import { useState, createContext, useContext } from "react";

type fs = {
    fillState: boolean,
    setFillState: React.Dispatch<React.SetStateAction<boolean>>
}

const FormsStates = createContext<fs | undefined>(undefined);

export const FormsStatesProvider = ({ children }: { children: React.ReactNode }) => {
    const [fillState, setFillState] = useState<boolean>(false);
    return (
        <FormsStates.Provider value={{ fillState, setFillState }}>
            {children}
        </FormsStates.Provider>
    )
}

export const useFormState = (): fs => {
    const context = useContext(FormsStates);
    if (!context) {
        throw new Error("useFormState must be used within a FormsStateProvider");
    }
    return context;
}