import { useStage, useRegistry } from '@/components/client-caches'
import { generateStateArray } from '@/components/utils';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Lobby() {
  const totalLesson = 1;
  const totalStage = 3;
  const [ { s, nextS }, { clp } ] = useStage()
  const [ { userState } ] = useRegistry()
  const [ availableZones, addAvailableZone ] = useState<JSX.Element[] | any[]>(generateStateArray("JSX.Element", totalLesson))
  const router = useRouter()

  
  function enter(LessonComponent: number, les: string){
    nextS(LessonComponent)
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