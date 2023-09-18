'use client';
import LessonBody from '@/components/templates/lesson-page';
import { useState, useEffect } from 'react';
import { useStage, Stage, Level } from '@/components/client-caches'
import lessonStructure from './lesson-structure';
import '@/css/lesson-structure/preliminary/index.css'
import { CheckSession, generateArrsRandint } from '@/components/utils';
import { LessonComponent } from '@/server/cookies'

function Render({ id }: { id: string[] }) {
  const [{ }, { clp }, { maxPage, setMaxPage }, { stageFooter, setFooterStyle }] = useStage()
  const [content, setContent] = useState<JSX.Element>(<></>)
  const [header, setHeaderTXT] = useState<string>('')

  useEffect(() => {
    if (document !== undefined) {
      const bodyElem = document?.querySelector("body");
      const htmlElem = document?.querySelector("html");
      const className = "pre-lesson";

      if (!bodyElem?.classList.contains(className) || !htmlElem?.classList.contains(className)) {
        bodyElem?.classList.add(className);
        htmlElem?.classList.add(className);
      }
    }
  }, [])

  useEffect(() => {
    if (LessonComponent.get("clp") === undefined || LessonComponent.get('mp') === 1) window?.location.reload()
  }, [])

  useEffect(() => {
    if (stageFooter !== 'notf-correct' && stageFooter !== 'notf-wrong') setFooterStyle("prev-next")

    switch (Number(id[0])) {
      case 1:
        setMaxPage(5)
        if (clp > 0 && clp <= 1) setHeaderTXT('ความหมายของ Prefix')
        else if (clp > 1 && clp <= 2) setHeaderTXT('ความหมายของ Suffix')
        else if (clp > 2 && clp <= 4) setHeaderTXT('ถึงเวลาทบทวน!')
        lessonStructure.Introduction.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 2:
        setMaxPage(4)
        if (clp > 0 && clp <= 2) setHeaderTXT('แนะนำให้รู้จักกับ Suffix มากยิ่งขึ้น')
        else if (clp > 2 && clp <= 3) setHeaderTXT('ทบทวนสักหน่อย')
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

    const congratsText = ["ขอแสดงความยินดีด้วย!", "คุณทำมันสำเร็จแล้ว!", "คุณทำมันได้ดีสุดๆไปเลย!", "เยี่ยมมากนักเรียน!", "ช่างเป็นผู้ที่เรียนรู้เร็วจริงๆ!"]
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