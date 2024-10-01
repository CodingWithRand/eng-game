'use client';
import { useState, createContext, useContext, useEffect } from "react";
import { MemberData, question, UserStats, LessonComponent, selectLesson } from '@/server/cookies'

type user = {
    membership: string | null, 
    loggedIn: boolean | null,
    name: string | null,
    lessons: string[] | null
}

type progressedLevel = {
    [stage: string]: number
}

type stageXp = {
    [stage: string]: number
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
    {
        SelectLesson: string,
        setSelectLesson: React.Dispatch<React.SetStateAction<string>>
    },
    {
        stageXp: stageXp,
        setStageXp: React.Dispatch<React.SetStateAction<stageXp>>
    },
    {
        progressedLevel: progressedLevel,
        setProgressedLevel: React.Dispatch<React.SetStateAction<progressedLevel>>
    }
]

type ls = [
    {
        levelXp: number,
        generateLevelXP: React.Dispatch<React.SetStateAction<number>>
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
    stageFooter: string
    setFooterStyle: React.Dispatch<React.SetStateAction<string>>
  },
  {
    currentStageAns: string[]
    setCSA: React.Dispatch<React.SetStateAction<string[]>>
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
    const [ SelectLesson, setSelectLesson ] = useState<string>(selectLesson.get("selectLesson") || "");
    const [ stageXp, setStageXp ] = useState<stageXp>(UserStats.get("stageXp") || {});
    const [ progressedLevel, setProgressedLevel ] = useState<progressedLevel>(UserStats.get("progressedLevel") || {});

    useEffect(() => {
        if(MemberData.get("user") === undefined) MemberData.set("user", initialUserData)
        else MemberData.set("user", userState)
        if(question.get("question") === undefined) question.set("question", 0);
        else question.set("question", q)
        if(selectLesson.get("selectLesson") === undefined) selectLesson.set("selectLesson", "");
        else selectLesson.set("selectLesson", SelectLesson)
        if(UserStats.get("stageXp") === undefined) UserStats.set("stageXp", {}, { path: '/' })
        else UserStats.set("stageXp", stageXp, { path: '/' })
        if(UserStats.get("progressedLevel") === undefined) UserStats.set("progressedLevel", {}, { path: '/' })
        else UserStats.set("progressedLevel", progressedLevel, { path: '/' })
        
        if(MemberData.get('user')?.membership === 'guest'){
            MemberData.set("user", userState, { path: '/', maxAge: 60 * 60 * 24})
            question.set("question", q, { maxAge: 60 * 60 * 24})
            selectLesson.set("selectLesson", SelectLesson, { path: '/', maxAge: 60 * 60 * 24})
            UserStats.set("stageXp", stageXp, { path: '/', maxAge: 60 * 60 * 24})
            UserStats.set("progressedLevel", progressedLevel, { path: '/', maxAge: 60 * 60 * 24})
        }
    }, [userState, q, SelectLesson, stageXp, progressedLevel])
    

    useEffect(() => {
        if(selectLesson.get("selectLesson") === '' && userState.lessons?.some((elem: string) => elem !== '')) setSelectLesson(userState.lessons?.find((elem: string) => elem !== '') || '')
        // Let the user study their first lesson on the list
    }, [userState])

    return (
        <RegistryState.Provider value={[
            { userState, setUserState },
            { q, setQ },
            { SelectLesson, setSelectLesson },
            { stageXp, setStageXp },
            { progressedLevel, setProgressedLevel }
        ]}>
            {children}
        </RegistryState.Provider>
    )
}

export const Level = ({ children }: { children: React.ReactNode }) => {
  const [ levelXp, generateLevelXP ] = useState<number>(UserStats.get("levelXp") || 0)
  const [ level, levelup ] = useState<number>(UserStats.get("level") || 1)
  
  useEffect(() => {
    if(UserStats.get("levelXp") === undefined) LessonComponent.set("levelXp", 0)
    else UserStats.set("levelXp", levelXp)
    if(UserStats.get("level") === undefined) LessonComponent.set("level", 1)
    else UserStats.set("level", level)
    
    if(MemberData.get("user")?.membership === 'guest'){
        UserStats.set("level", level, { maxAge: 60 * 60 * 24})
        UserStats.set("levelXp", levelXp, { maxAge: 60 * 60 * 24})
    }
  }, [levelXp, level])

  return (
        <LevelState.Provider value={[
            { levelXp, generateLevelXP },
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
  const [ stageFooter, setFooterStyle ] = useState<string>('')
  const [ currentStageAns, setCSA ] = useState<string[]>([])

  useEffect(() => {
    if(LessonComponent.get("stage") === undefined) LessonComponent.set("stage", 1, { path: '/' })
    else LessonComponent.set("stage", s, { path: '/' })
    if(LessonComponent.get("clp") === undefined) LessonComponent.set("clp", 1)
    else LessonComponent.set("clp", clp)
    if(LessonComponent.get("mp") === undefined) LessonComponent.set("mp", 1)
    else LessonComponent.set("mp", maxPage)
    
    
    if(MemberData.get("user")?.membership === 'guest'){
        LessonComponent.set("stage", s, { maxAge: 60 * 60 * 24, path: '/'})
        LessonComponent.set("clp", clp, { maxAge: 60 * 60 * 24})
        LessonComponent.set("mp", maxPage, { maxAge: 60 * 60 * 24})
    }
  }, [s, clp, maxPage])
  

  return (
        <StageState.Provider value={[
            { s, nextS },
            { clp, nextCLP },
            { maxPage, setMaxPage },
            { stageFooter, setFooterStyle },
            { currentStageAns, setCSA }
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