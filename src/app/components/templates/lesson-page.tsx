'use client'
import { useStage, Stage } from '@/components/client-caches'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LessonBody({ children }: any) {
  const [{ s }, { clp, nextCLP }, { maxPage }, { stageFooter }] = useStage()
  const router = useRouter()
  const generateArrsRandint = (arr: any[]) => Math.floor(Math.random() * arr.length)
  const [ currentFooter, setCF ] = useState<JSX.Element>(<></>)

  useEffect(() => {
    router.push(`/lessons/preliminary/${s}/${clp}`)
  }, [clp])

  function nextBtn() {
    if (clp <= maxPage){ nextCLP(prevPage => prevPage + 1); }
    else return
  }
  function prevBtn() {
    if (clp > 1) nextCLP(prevPage => prevPage - 1)
    else router.push('/lessons')
  }
  
  useEffect(() => {
    if(stageFooter === "prev-next"){
      setCF(<div className='prev-next'>
        <button onClick={prevBtn} >
          <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
        </button>
        <button onClick={nextBtn} >
          <Image src="/imgs/icons/next.png" width={50} height={50} alt="Next Page" />
        </button>
      </div>)
    } else if(stageFooter === "notf-correct") {
      
      const congratsText = ["You made it!", "Easy, does it?", "You\'re on fire!"]
      const userResponseText = ["Thank you", "...", ":)"]
      setCF(<div className='notf-correct'>
        <Image src="" width={50} height={50} alt="andy-cheer" />
        <div className="chatbox">
        <label className="andy-resp correct">{congratsText[generateArrsRandint(congratsText)]}</label>
        <button className="user-resp correct">{userResponseText[generateArrsRandint(userResponseText)]}</button>
        </div>
      </div>)
    } else if(stageFooter === "notf-wrong") {
const congratsText = ["Try Again", "Sorry, but that\'s wrong", "Meh, come one"]
      const userResponseText = ["Let me try again", "OK", "...", ":("]
      setCF(<div className='notf-wrong'>
        <Image src="" width={50} height={50} alt="andy-cheer" />
        <div className="chatbox">
        <label className="andy-resp wrong">{congratsText[generateArrsRandint(congratsText)]}</label>
        <button className="user-resp wrong">{userResponseText[generateArrsRandint(userResponseText)]}</button>
        </div>
      </div>)
    } else {
      setCF(<></>)
    }
  }, [stageFooter])
  
  return (
    <main className='pre-lesson-body'>
      {children}
      {currentFooter}
    </main>
  )
}