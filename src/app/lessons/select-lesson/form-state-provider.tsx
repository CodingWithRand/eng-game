'use client';
import { useState, createContext, useContext } from "react";
import { MemberData } from '@/server/cookies'

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
let selectedLesson: string | undefined;

export const FormsStatesProvider = ({ children }: { children: React.ReactNode }) => {
    const [ fillState, setFillState ] = useState<boolean[]>([]);
    
    selectedLesson = (() => {
        const stateIndex = fillState.findIndex((element: boolean) => element === true)
        const lessonIndex = MemberData.lessons.get("lessons").findIndex((element: string) => element !== '')
        if(stateIndex && lessonIndex) return lesson[lessonIndex];
    })()

    return (
        <FormsStates.Provider value={[ { fillState, setFillState } ]}>
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