import { useStage, useRegistry, useLevel } from '@/components/client-caches'
import { generateStateArray } from '@/components/utils';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ref, set, onValue } from "firebase/database";
import db from "@/firebase";


export default function Lobby() {
  const totalLesson = 1;
  const totalStage = 3;
  const [ { s, nextS }, { clp, nextCLP } ] = useStage()
  const [ { userState } ] = useRegistry()
  const [ { xp, generateXP } ] = useLevel()
  const [ availableZones, addAvailableZone ] = useState<JSX.Element[] | any[]>(generateStateArray("JSX.Element", totalLesson))
  const router = useRouter()

  generateXP(0)

  function enter(LessonComponent: number, les: string){
    nextS(LessonComponent)
    nextCLP(1)
    router.push(`/lessons/${les.toLowerCase()}/${LessonComponent}/${clp}`)
  }
  
  function PremilinaryStages(){
    let renderStage: JSX.Element[] = []
    for(let i = 0; i<totalStage; i++) renderStage.push(
      <button onClick={() => enter(i+1, "Preliminary")} className="a-stage" style={
        s < i + 1 ? { pointerEvents: 'none', filter: 'grayscale(1)'} : {}
      } disabled={s < i + 1 ? true : false}></button>
    )

    return(
      <div>
        {renderStage}
      </div>
    )
  }
  
  useEffect(() => {
    if(userState.name === null || userState.name === "") return
    const userStage = ref(db, `${userState.name}/stage`)
    const saveStage = async () => set(userStage, s)
    saveStage()
  }, [userState, s])
 
  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons.every(elem => elem === '')) return
    userState.lessons.forEach((lesson) => {
      switch(lesson){
        case 'Preliminary':
          addAvailableZone(prevZones => {
            if(!prevZones.some(zone => zone === <PremilinaryStages/>)) return prevZones.concat(<PremilinaryStages/>) 
            else return prevZones
          })
          break;
      }
    })
  }, [])
  
  return(<>{availableZones}</>)
}