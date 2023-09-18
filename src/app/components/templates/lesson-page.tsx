'use client'
import { useStage } from '@/components/client-caches'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generateArrsRandint } from '@/components/utils';

export default function LessonBody({ children }: any) {
  const [{ s }, { clp, nextCLP }, { maxPage }, { stageFooter }] = useStage()
  const router = useRouter()
  const [currentFooter, setCF] = useState<JSX.Element>(<></>)

  useEffect(() => {
    router.push(`/lessons/preliminary/${s}/${clp}`)
  }, [clp])

  function nextBtn() {
    if (clp <= maxPage) { nextCLP(prevPage => prevPage + 1); }
    else return
  }
  function prevBtn() {
    if (clp > 1) nextCLP(prevPage => prevPage - 1)
    else router.push('/lessons')
  }

  useEffect(() => {
    if (stageFooter === "prev-next") {
      setCF(<div className='prev-next'>
        <button onClick={prevBtn} >
          <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
        </button>
        <button onClick={nextBtn} >
          <Image src="/imgs/icons/next.png" width={50} height={50} alt="Next Page" />
        </button>
      </div>)
    } else if (stageFooter === "notf-correct") {
      const congratsText = ["คุณทำได้แล้ว!", "ง่ายใช่ไหมละ", "คุณมีไฟมากเลย!", "เยี่ยมมาก!", "ทำได้ดี!"]
      const userResponseText = ["ขอบคุณครับ / ค่ะ", "...", ":)"]
      setCF(<div className='notf-correct'>
        <div className="chatbox">
          <Image src={`/imgs/andy/andy-cheer-${Math.floor(Math.random() * 2) + 1}.png`} width={100} height={100} alt="andy-cheer"/>
          <div className='lesson-msg-box'>
            <label className="andy-resp correct">{congratsText[generateArrsRandint(congratsText)]}</label>
            <button className="user-resp correct" onClick={nextBtn}>{userResponseText[generateArrsRandint(userResponseText)]}</button>
          </div>
        </div>
      </div>)
    } else if (stageFooter === "notf-wrong") {
      const congratsText = ["โอ้แย่จัง", "โทษทีนะ แต่คำตอบนั้นผิด", "แหมะ ตั้งใจหน่อยสิ"]
      const userResponseText = ["OK", "...", ":("]
      setCF(<div className='notf-wrong'> 
        <div className="chatbox">
          <Image src="" width={100} height={100} alt="andy-sad" />
          <div className='lesson-msg-box'>
            <label className="andy-resp wrong">{congratsText[generateArrsRandint(congratsText)]}</label>
            <button className="user-resp wrong" onClick={nextBtn}>{userResponseText[generateArrsRandint(userResponseText)]}</button>
          </div>
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