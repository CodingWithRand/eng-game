'use client';
import { useState, createContext, useContext } from "react";
import { MemberData, question, UserStats } from '@/server/cookies'

type user = {
    membership: string | null, 
    loggedIn: boolean | null,
    name: string | null,
    lessons: string[] | null
}

type rs = [   
    {
        userState: user,
        setUserState: React.Dispatch<React.SetStateAction<user>>
    },
    {
        q: number,
        setQ: React.Dispatch<React.SetStateAction<number>>
    },
]

type ls = [
    {
        xp: number,
        generateXP: React.Dispatch<React.SetStateAction<number>>
    },
    {
        level: number,
        levelup: Rect.Dispatch<React.SetStateAction<number>>
    }
]

const RegistryState = createContext<rs | undefined>(undefined);
const LevelState = createContext<ls | undefined>(undefined)

export const Registry = ({ children }: { children: React.ReactNode }) => {
    const initialUserData = {
        membership: null, 
        loggedIn: null,
        name: null,
        lessons: null,
    }
    const [ userState, setUserState] = useState<user>(MemberData.get("user") || initialUserData);
    const [ q, setQ ] = useState<number>(question.get("question") || 1);

    if(MemberData.get("user") === undefined) MemberData.set("user", initialUserData, { path: '/' })
    else MemberData.set("user", userState, { path: '/' })
    if(question.get("question") === undefined) question.set("question", 1);
    else question.set("question", q)
    
    if(userState.membership === 'guest'){
        const lifetime = 1800;
        MemberData.set("user", userState, { path: '/', maxAge: MemberData.get("user").maxAge })
        question.set("question", q, { maxAge: question.get("question").maxAge})
    }

    return (
        <RegistryState.Provider value={[
            { userState, setUserState },
            { q, setQ },
        ]}>
            {children}
        </RegistryState.Provider>
    )
}

export const Level = ({ children }: { children: React.ReactNode }): ls => {
  const [ xp, generateXP ] = useState<number>(UserStats.get("xp") || 0)
  const [ level, levelup ] = useState<number>(UserStats.get("level") || 1)
  return (
        <LevelState.Provider value={[
            { xp, generateXP },
            { level, levelup },
        ]}>
            {children}
        </LevelState.Provider>
    )
}

export const useRegistry = (): rs => {
    const context = useContext(RegistryState);
    if (!context) {
        throw new Error("useRegistry must be used within a Registry");
    }
    return context;
}

export const useLevel = (): ls => {
    const context = useContext(LevelState)
    if (!context) {
        throw new Error("useLevel must be used within a Registry");
    }
    return context;
}