'use client';
import { useState, createContext, useContext } from "react";

type fs = [   
    {
        fillState: boolean[],
        setFillState: React.Dispatch<React.SetStateAction<boolean[]>>  
    },
    {
        lesson: string[],
        setLesson: React.Dispatch<React.SetStateAction<string[]>>
    }
]

const FormsStates = createContext<fs | undefined>(undefined);
let selectedLesson: string;

export const FormsStatesProvider = ({ children }: { children: React.ReactNode }) => {
    const [ fillState, setFillState ] = useState<boolean[]>([]);
    const [ lesson, setLesson ] = useState<string[]>([]);
    
    selectedLesson = (() => {
        const stateIndex = fillState.findIndex((element) => element === true)
        const lessonIndex = lesson.findIndex((element) => element !== '')
        if(stateIndex && lessonIndex) return lesson[lessonIndex];
    })()

    return (
        <FormsStates.Provider value={[ { fillState, setFillState }, { lesson, setLesson } ]}>
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

export { selectedLesson };