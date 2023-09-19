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
        lessonStructure.IntroductionToSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 3:
        setMaxPage(16)
        if (clp > 0 && clp <= 15) setHeaderTXT('Noun -> Noun Suffix')
        lessonStructure.NounNounSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 4:
        setMaxPage(10)
        if (clp > 0 && clp <= 9) setHeaderTXT('Noun -> Noun Suffix (Exercise)')
        lessonStructure.NNSExercise.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break;
      case 5:
        setMaxPage(11)
        if (clp > 0 && clp <= 10) setHeaderTXT('Verb -> Noun Suffix')
        lessonStructure.VerbNounSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 6:
        setMaxPage(8)
        if (clp > 0 && clp <= 7) setHeaderTXT('Verb -> Noun Suffix (Exercise)')
        lessonStructure.VNSExercise.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 7:
        setMaxPage(4)
        if (clp > 0 && clp <= 3) setHeaderTXT('Adjective -> Noun Suffix')
        lessonStructure.AdjectiveNounSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 8:
        setMaxPage(12)
        if (clp === 1) setHeaderTXT('ขอเช็คความพร้อมหน่อย ตื่นยัง')
        else if (clp > 0 && clp <= 11) setHeaderTXT('Noun -> Adjective Suffix')
        lessonStructure.NounAdjectiveSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 9:
        setMaxPage(11)
        if (clp > 0 && clp <= 10) setHeaderTXT('Noun -> Adjective Suffix (Exercise)')
        lessonStructure.NASExercise.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 10:
        setMaxPage(8)
        if (clp > 0 && clp <= 8) setHeaderTXT('Verb -> Adjective Suffix')
        lessonStructure.VerbAdjectiveSuffix.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
        break
      case 11:
        setMaxPage(6)
        if (clp > 0 && clp <= 5) setHeaderTXT('Verb -> Adjective Suffix (Exercise)')
        lessonStructure.VASExercise.forEach((page, index) => {
          if (Number(id[1]) === index + 1) setContent(page)
        })
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