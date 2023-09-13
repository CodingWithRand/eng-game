'use client';
//import NavigationBar from '@/components/navbar';
import { useState, useEffect } from 'react';
import { useStage, Stage } from '@/components/client-caches'

export default function Premilinary({ params: { id } }: { params: { id: string[] | number[] } })
{
  console.log(id)
  const lessonStructure = [
    <></>,
    <></>
  ]
  const [ {}, { clp } ] = useStage()
  let currentContent: JSX.Element = <></>;
  useEffect(() => {
    lessonStructure.forEach((page, index) => {
      if(id[1] === index) nextCLP(page)
    })
  }, [nextCLP])
  return(
    <Stage>
      {/*<NavigationBar />*/}
      <main>
        {clp}
      </main>
    </Stage>
  )
}