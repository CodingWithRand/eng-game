import { useStage, useRegistry, useLevel } from '@/components/client-caches'
import { generateStateArray } from '@/components/utils';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ref, set, onValue } from "firebase/database";
import db from "@/firebase";
import Image from 'next/image';

export default function Lobby() {
  const totalLesson = 1;
  const totalStage = {
    Preliminary: 7
  };
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
    for(let i = 0; i<totalStage.Preliminary; i++) renderStage.push(
      <div className={`stage ${(() => {
        switch(i%4){
          case 0: return 's-left'
          case 1: return 's-center'
          case 2: return 's-right'
          case 3: return 's-center'
        }
      })()}`}>
        <button onClick={() => enter(i+1, "Preliminary")} className="a-stage" style={
        s < i + 1 ? { pointerEvents: 'none', filter: 'grayscale(1)'} : {}
      } disabled={s < i + 1 ? true : false}>
          <div className='btn-img-nester'>
            <Image width={50} height={50} src="/imgs/icons/white-star.png" alt="star" />
          </div>
        </button>
      </div>
    )

    return(
      <main className='lobby-body'>
        <div className='zone'>
          <div className='zone-nav bg-blue-500'>
            <div className='zone-name'>Preliminary</div>
            <div className='stage-comp'>
              <div className='total-stage'>{`ด่านทั้งหมด: ${totalStage.Preliminary}`}</div>
              <div className='completed-stage'>{`ด่านสำเร็จแล้ว: ${(() => {
                if(s > totalStage.Preliminary) return totalStage.Preliminary
                else return s
              })()}/${totalStage.Preliminary}`}</div>
            </div>
          </div>
          <div className='zone-container'>
            <div className='env-1'>
              <div className='img-nester basis-1/2'>
                <Image src="/imgs/andy/andy-idle-1.png" width={200} height={200} alt="andy-run?" />
              </div>
              <div className='empty-env basis-1/2'></div>
            </div>
            <div className='stage-container'>
              {renderStage}
            </div>
            <div className='env-2'>
              <div className='empty-env basis-1/2'></div>
              <div className='img-nester basis-1/2'>
                <Image src="/imgs/andy/andy-idle-2.png" width={200} height={200} alt="lofi-andy" />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  useEffect(() => {
    if(document !== undefined){
      const element = document?.querySelector("body");
      const className = "lobby";

      if (!element?.classList.contains(className)) {
          element?.classList.add(className);
      }
    }
  }, [])
  
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
            if(!prevZones.some(zone => zone === <PremilinaryStages/>)) return prevZones.map((zone) => {
              if(prevZones.some(zone => zone === <PremilinaryStages/>)) return zone
              if(zone !== <PremilinaryStages/>) return <PremilinaryStages />
            }) 
            else return prevZones
          })
          break;
      }
    })
  }, [])
  
  return(<>{availableZones}</>)
}