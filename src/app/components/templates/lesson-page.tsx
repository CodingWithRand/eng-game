'use client'
import { useStage, Stage } from '@/components/client-caches'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LessonBody({ children }: any) {
  const [{ s }, { clp, nextCLP }, { maxPage }] = useStage()
  const router = useRouter()

  useEffect(() => {
    router.push(`/lessons/preliminary/${s}/${clp}`)
  }, [clp])

  function nextBtn() {
    console.log(maxPage, clp)
    if (clp <= maxPage){ nextCLP(prevPage => prevPage + 1); }
    else return
  }
  function prevBtn() {
    if (clp > 1) nextCLP(prevPage => prevPage - 1)
    else router.push('/lessons')
  }
  return (
    <main className='pre-lesson-body'>
      {children}
      <div className='prev-next'>
        <button onClick={prevBtn} >
          <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
        </button>
        <button onClick={nextBtn}>
          <Image src="/imgs/icons/next.png" width={50} height={50} alt="Next Page" />
        </button>
      </div>
    </main>
  )
}