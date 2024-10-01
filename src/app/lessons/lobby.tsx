import { useStage, useRegistry, useLevel } from '@/components/client-caches'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import { ref, set, get } from "firebase/database";
// import db from "@/firebase";
import Image from 'next/image';
import Link from 'next/link';

function PremilinaryStages(){
  const [ {}, {}, {}, {}, { progressedLevel } ] = useRegistry();
  const [ { s, nextS }, { clp, nextCLP } ] = useStage()
  const router = useRouter()
  let renderStage: JSX.Element[] = []
  function enter(LessonComponent: number, les: string){
    nextS(LessonComponent)
    nextCLP(1)
    router.push(`/lessons/${les.toLowerCase()}/${LessonComponent}/${clp}`)
  }

  for(let i = 0; i<14; i++) renderStage.push(
    <div className={`stage ${(() => {
      switch(i%4){
        case 0: return 's-left'
        case 1: return 's-center'
        case 2: return 's-right'
        case 3: return 's-center'
      }
    })()}`}>
      <button onClick={() => enter(i+1, "Preliminary")} className="a-stage" style={
      progressedLevel.Preliminary < i + 1 ? { pointerEvents: 'none', filter: 'grayscale(1)'} : {}
    } disabled={progressedLevel.Preliminary < i + 1 ? true : false}>
        <div className='btn-img-nester'>
          <Image width={50} height={50} src="/imgs/icons/white-star.png" alt="star" />
        </div>
      </button>
    </div>
  )

  return(
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
  )
}

export default function Lobby() {
  const totalStages = {
    Preliminary: 14,
  }
  const [ { s } ] = useStage();
  const [ { userState }, {}, { SelectLesson, setSelectLesson }, {}, { progressedLevel } ] = useRegistry()
  const [ { generateLevelXP } ] = useLevel()
  const [ currentLesson, setCurrentLesson ] = useState<JSX.Element>()
  // const userStage = ref(db, `${userState.name}/stage`)

  generateLevelXP(0)

  useEffect(() => {
    if(document !== undefined){
      const element = document?.querySelector("body");
      const className = "lobby";

      if (!element?.classList.contains(className)) {
          element?.classList.add(className);
      }
    }
  }, [])
  
  // useEffect(() => {
  //   if(userState.name === null || userState.name === "") return
  //   const saveStage = async () => set(userStage, s)
  //   saveStage()
  // }, [userState, s])
 
  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons.every(elem => elem === '')) return
    switch(SelectLesson){
      case 'Preliminary':
        setCurrentLesson(<PremilinaryStages/>)
        break;
    }
  }, [SelectLesson])
  
  return(
    <main className='lobby-body'>
      <div className='zone'>
        <div className='zone-nav bg-blue-500'>
          <button className='zone-name' onClick={() => (document.getElementById('lesson-selection-modal') as HTMLDialogElement)?.showModal()}>{SelectLesson}</button>
          <div className='stage-comp'>
            <div className='total-stage'>{`ด่านทั้งหมด: ${totalStages[SelectLesson as keyof typeof totalStages]}`}</div>
            <div className='completed-stage'>{`ด่านสำเร็จแล้ว: ${(() => {
              if(progressedLevel[SelectLesson as keyof typeof totalStages] > totalStages[SelectLesson as keyof typeof totalStages]) return totalStages[SelectLesson as keyof typeof totalStages]
              else return progressedLevel[SelectLesson as keyof typeof totalStages] - 1
            })()}/${totalStages[SelectLesson as keyof typeof totalStages]}`}</div>
            <Link href='/'>กลับสู่หน้าหลัก</Link>
          </div>
        </div>
        {currentLesson}
      </div>
      <dialog id='lesson-selection-modal'>
        <div className='w-[80vw] nmob:w-[70vw] sm:w-[50vw] h-[50vh] overflow-auto p-4'>
          <h1>เลือกบทเรียนที่คุณต้องการเรียน</h1>
          <div className='choice-list'>
            {(() => userState.lessons?.map((lesson, i) => {
              if(lesson !== ''){
                return (
                  <button key={i} className='a-choice' onClick={() => {
                    setSelectLesson(lesson);
                    (document.getElementById('lesson-selection-modal') as HTMLDialogElement)?.close();
                  }}>
                    {lesson}
                  </button>
                )  
              }
            }))()}
          </div>
          <h1>สนใจบทเรียนเพิ่มเติม? ตอนนี้เรายังเพียงมีบทเรียนเดียว เมื่อมีบทเรียนเพิ่มเติมในอนาคต เราจะให้คุณเลือกเพิ่มบทเรียนได้ผ่านทางกล่อง dialog นี้</h1>
        </div>
      </dialog>
    </main>
  )
}