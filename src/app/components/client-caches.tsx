'use client';
import { useState, createContext, useContext } from "react";
import { MemberData, question, UserStats, LessonComponent } from '@/server/cookies'

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
        levelup: React.Dispatch<React.SetStateAction<number>>
    }
]

type ss = [
  {
    s: number,
    nextS: React.Dispatch<React.SetStateAction<number>>
  },
  {
    clp: number,
    nextCLP: React.Dispatch<React.SetStateAction<number>>
  },
  {
    maxPage: number,
    setMaxPage: React.Dispatch<React.SetStateAction<number>>
  },
  {
    choiceAns: string[]
    setChoiceAns: React.Dispatch<React.SetStateAction<string[]>>
  }
]

const RegistryState = createContext<rs | undefined>(undefined);
const LevelState = createContext<ls | undefined>(undefined)
const StageState = createContext<ss | undefined>(undefined)

export const Registry = ({ children }: { children: React.ReactNode }) => {
    const initialUserData = {
        membership: null, 
        loggedIn: null,
        name: null,
        lessons: null,
    }
    const [ userState, setUserState] = useState<user>(MemberData.get("user") || initialUserData);
    const [ q, setQ ] = useState<number>(question.get("question") || 0);

    if(MemberData.get("user") === undefined) MemberData.set("user", initialUserData)
    else MemberData.set("user", userState)
    if(question.get("question") === undefined) question.set("question", 0);
    else question.set("question", q)
    
    if(MemberData.get('user')?.membership === 'guest'){
        MemberData.set("user", userState, { path: '/', maxAge: 60 * 60 * 24})
        question.set("question", q, { maxAge: 60 * 60 * 24})
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

export const Level = ({ children }: { children: React.ReactNode }) => {
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

export const Stage = ({ children }: { children: React.ReactNode }) => {
  const [ s, nextS ] = useState<number>(LessonComponent.get("stage") || 1)
  const [ clp, nextCLP ] = useState<number>(LessonComponent.get("clp") || 1);
  const [ maxPage, setMaxPage] = useState<number>(LessonComponent.get("mp") || 1)
  const [ choiceAns, setChoiceAns ] = useState<string[]>([])

  if(LessonComponent.get("stage") === undefined) LessonComponent.set("stage", 1)
  else LessonComponent.set("stage", s)
  if(LessonComponent.get("clp") === undefined) LessonComponent.set("clp", 1)
  else LessonComponent.set("clp", clp)
  if(LessonComponent.get("mp") === undefined) LessonComponent.set("mp", 1)
  else LessonComponent.set("mp", maxPage)


  if(MemberData.get("user")?.membership === 'guest'){
    LessonComponent.set("stage", s, { maxAge: 60 * 60 * 24})
    LessonComponent.set("clp", clp, { maxAge: 60 * 60 * 24})
  }

  return (
        <StageState.Provider value={[
            { s, nextS },
            { clp, nextCLP },
            { maxPage, setMaxPage },
            { choiceAns, setChoiceAns }
        ]}>
            {children}
        </StageState.Provider>
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
        throw new Error("useLevel must be used within a Level");
    }
    return context;
}

export const useStage = (): ss => {
    const context = useContext(StageState)
    if (!context) {
        throw new Error("useStage must be used within a Stage");
    }
    return context;
}