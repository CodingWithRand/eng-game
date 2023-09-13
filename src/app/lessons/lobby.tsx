import { useStage, useRegistry } from '@/components/client-caches'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Lobby() {
  const totalLesson = 1;
  const [ { s, nextS } ] = useStage()
  const [ { userState } ] = useRegistry()
  const [ availableZones, addAvailableZone ] = useState<JSX.Element[]>((() => {
    let tempZone: JSX.Element[] = [];
    for(let i = 0; i<totalLesson; i++) tempZone.push(<></>)
    return tempZone;
  })())
  const router = useRouter()
  
  
  function enter(LessonComponent: number, les: string){
    nextS(LessonComponent)
    router.push(`/lessons/${les}/${s}`)
  }
  
  function PremilinaryStages(){
    return(
      <div>
        <button onClick={() => enter(1, "preliminary")}  className="a-stage"></button>
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

  console.log(availableZones)
  
  return(<>{availableZones}</>)
}