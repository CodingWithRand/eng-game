'use client';
import { useState, createContext, useContext } from "react";
import { MemberData, question } from '@/server/cookies'

type user = {
    membership: string | null, 
    status: boolean | null,
    name: string | null,
    lessons: string[] | null
}

type cs = [   
    {
        userState: user
        setUserState: React.Dispatch<React.SetStateAction<user>>
    },
    {
        q: number,
        setQ: React.Dispatch<React.SetStateAction<number>>
    },
]

const CachesState = createContext<cs | undefined>(undefined);

export const Caches = ({ children }: { children: React.ReactNode }) => {
    const initialUserData = {
        membership: null, 
        loggedIn: null,
        name: null,
        lessons: null,
    }
    const [ userState, setUserState] = useState<user>(MemberData.get("user") || initialUserData);
    const [ q, setQ ] = useState<number>(question.get("question") || 1);

    if(MemberData.get("user") === undefined) MemberData.set("user", initialUserData, { path: '/' })
    else if(userState.membership === 'guest') MemberData.set("user", userState, { path: '/', expires: new Date(Date.now() + 1800 * 1000) })
    if(question.get("question") === undefined) question.set("question", 1);
    else question.set("question", q)
    
    return (
        <CachesState.Provider value={[
            { userState, setUserState },
            { q, setQ },
        ]}>
            {children}
        </CachesState.Provider>
    )
}

export const useCaches = (): cs => {
    const context = useContext(CachesState);
    if (!context) {
        throw new Error("useCaches must be used within a Caches");
    }
    return context;
}