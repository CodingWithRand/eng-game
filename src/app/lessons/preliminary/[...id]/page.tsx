'use client';
import LessonBody from '@/components/templates/lesson-page';
import { useState, useEffect } from 'react';
import { useStage, Stage } from '@/components/client-caches'

function Render({ id }: { id: string[] }){
  const lessonStructure = [
    <>erwe</>,
    <></>
  ]
  const [ {}, { clp } ] = useStage()
  const [ content, setContent ] = useState<JSX.Element>(<></>)

  useEffect(() => {
    lessonStructure.forEach((page, index) => {
      if(Number(id[1]) === index + 1) setContent(page) 
    })
  }, [clp])

  return(
    <main>
        {content}
    </main>
  )
}

export default function Premilinary({ params: { id } }: { params: { id: string[] } })
{
  
  return(
    <Stage>
      <LessonBody>
      {/*<NavigationBar />*/}
        <Render id={id}/>
      </LessonBody>
    </Stage>
  )
}