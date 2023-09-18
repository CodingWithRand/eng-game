'use client';
import LessonBody from '@/components/templates/lesson-page';
import { useState, useEffect } from 'react';
import { useStage, Stage, Level, useLevel } from '@/components/client-caches'
import lessonStructure from './lesson-structure';
import '@/css/lesson-structure/preliminary/index.css'
import { CheckSession, generateArrsRandint } from '@/components/utils';
import { LessonComponent } from '@/server/cookies'
import { ref, set, onValue } from "firebase/database";
import { MemberData } from '@/server/cookies'
import db from "@/firebase";

function Render({ id }: { id: string[] }) {
  const [{ }, { clp }, { maxPage, setMaxPage }, { stageFooter, setFooterStyle }] = useStage()
  const [content, setContent] = useState<JSX.Element>(<></>)
  const [header, setHeaderTXT] = useState<string>('')
  const [{xp}] = useLevel()

  useEffect(() => {
    if (document !== undefined) {
      const element = document?.querySelector("body");
      const className = "pre-lesson";

      if (!element?.classList.contains(className)) {
        element?.classList.add(className);
      }
    }
  }, [])
  
  useEffect(() => {
    if (MemberData.get('user').name === null || MemberData.get('user').name === "") return
    const userXP = ref(db, `${MemberData.get('user').name}/xp`)
    (async () => await set(userXP, xp))()
    
  }, [xp])

  useEffect(() => {
    if (LessonComponent.get("clp") === undefined || LessonComponent.get('mp') === 1) window?.location.reload()
  }, [])

  useEffect(() => {
    if (stageFooter !== 'notf-correct' && stageFooter !== 'notf-wrong') setFooterStyle("prev-next")

    switch (Number(id[0])) {
      case 1:
        setMaxPage(5)
        if (clp > 0 && clp <= 1) setHeaderTXT('What is the Prefix?')
        else if (clp > 1 && clp <= 2) setHeaderTXT('What is the Suffix?')
        else if (clp > 2 && clp <= 4) setHeaderTXT('Review')
        lessonStructure.Introduction.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 2:
        setMaxPage(3)
        if (clp > 0 && clp <= 3) setHeaderTXT('Introduction')
        lessonStructure.NounSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 3:
        setMaxPage(3)
        if (clp > 0 && clp <= 3) setHeaderTXT('Introduction')
        lessonStructure.VerbSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
    }

    const congratsText = ["Congratulations!", "You did it!", "Way to go!", "Great job folk!", "What a dashy learner!"]
    if(clp === maxPage) setHeaderTXT(congratsText[generateArrsRandint(congratsText)])

  }, [clp, id])

  return (
    <div className='content'>
      <div className='topic-header'>{header}</div>
      {content}
    </div>
  )
}

export default function Premilinary({ params: { id } }: { params: { id: string[] } }) {
  return (
    <Level>
      <Stage>
        <LessonBody>
          <CheckSession />
          <Render id={id} />
        </LessonBody>
      </Stage>
    </Level>
  )
}