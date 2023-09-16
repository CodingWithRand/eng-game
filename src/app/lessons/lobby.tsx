import { useStage, useRegistry } from '@/components/client-caches'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Lobby() {
  const totalLesson = 1;
  const [ { nextS }, { clp }, { setMaxPage } ] = useStage()
  const [ { userState } ] = useRegistry()
  const [ availableZones, addAvailableZone ] = useState<JSX.Element[]>((() => {
    let tempZone: JSX.Element[] = [];
    for(let i = 0; i<totalLesson; i++) tempZone.push(<></>)
    return tempZone;
  })())
  const router = useRouter()
  
  
  function enter(LessonComponent: number, les: string, totalPage: number){
    nextS(LessonComponent)
    setMaxPage(totalPage)
    router.push(`/lessons/${les.toLowerCase()}/${LessonComponent}/${clp}`)
  }
  
  function PremilinaryStages(){
    return(
      <div>
        <button onClick={() => enter(1, "Preliminary", 3)} className="a-stage"></button>
      </div>
    )
  }
 
  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons.every(elem => elem === '')) return
    userState.lessons.forEach((lesson) => {
      switch(lesson){
        case 'Premilinary':
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