import { useStage, useRegistry } from '@/components/client-caches'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


export default function Lobby() {
  const [ { s, nextS } ] = useStage()
  const [ { userState } ] = useRegistry()
  const router = useRouter()
  let availableStages: JSX.Element[];
  
  function enter(stage: number, les: string){
    nextS(stage)
    router.push(`/lessons/${les}`)
  }
  
  function PremilinaryStages(){
    return(
      <div>
      <button onClick={() => enter(1, "premilinary")}  className="a-stage"></button>
      </div>
    )
  }
 
  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons.every(elem => elem === '')) return
    userState.lessons.forEach((lesson) => {
      switch(lesson){
        case 'Premilinary':
          availableStages.push(<PremilinaryStages />)
      }
    })
  }, [])
  
  return(<>{availableStages}</>)
}