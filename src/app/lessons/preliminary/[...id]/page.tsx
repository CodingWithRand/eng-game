'use client';
import LessonBody from '@/components/templates/lesson-page';
import { useState, useEffect } from 'react';
import { useStage, Stage } from '@/components/client-caches'
import { Explanations, ExplanationWithExamples } from '@/components/templates/lesson-structure/explanations';
import Choices from '@/components/templates/lesson-structure/choices';
import '@/css/lesson-structure/preliminary/index.css'
import { CheckSession } from '@/components/useEffect-utils';
import { LessonComponent } from '@/server/cookies'

function Render({ id }: { id: string[] }){
  const lessonStructure = [
    <ExplanationWithExamples 
      key="expn-exp1"
      explanations={["Prefix is a group of letters added to the beginning of a word to change its meaning or create a new word."]}
      initExampleWord='For example'
      examples={[
        ["un-", "in", "undo"],
        ["re-", "in", "rewrite"]
      ]}
      note={undefined}
      />,
    <ExplanationWithExamples
      key="expn-exp2"
      explanations={["Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech"]}
      initExampleWord='For instance'
      examples={[
        ["-ing", "in", "running"],
        ["-ed", "in", "jumped"]
      ]}
      note={undefined}
    />,
    <Choices
      key="c-1"
      question='What is the meaning of "Prefix"?'
      choices={["Something", "IDK"]}
      answers={["Something"]}
      mode="radio"
    />
  ]
  const [ {}, { clp }, {}, { stageFooter, setFooterStyle } ] = useStage()
  const [ content, setContent ] = useState<JSX.Element>(<></>)
  const [ header, setHeaderTXT ] = useState<string>('')
  
  useEffect(() => {
    if(document !== undefined){
      const element = document?.querySelector("body");
      const className = "pre-lesson";

      if (!element?.classList.contains(className)) {
        element?.classList.add(className);
      }
  }}, [])
  
  useEffect(() => {
    console.log(LessonComponent.get('mp'))
    if(LessonComponent.get("clp") === undefined && LessonComponent.get('mp') !== 1) window?.location.reload()
  }, [])
  
  useEffect(() => {    
    if(stageFooter !== 'notf-correct' && stageFooter !== 'notf-wrong') setFooterStyle("prev-next")
    
    switch(Number(id[0])){
      case 1: 
if(clp > 0 && clp <= 1) setHeaderTXT('What is the Prefix?')
    else if(clp > 1 && clp <=2) setHeaderTXT('What is the Suffix?')
    else if(clp > 2 && clp <=4) setHeaderTXT('Review')
        lessonStructure.forEach((page, index) => {
      if(Number(id[1]) === index + 1) setContent(page)
    })
        break;
    }
  }, [clp, id])

  return(
    <div className='content'>
        <div className='topic-header'>{header}</div>
        {content}
    </div>
  )
}

export default function Premilinary({ params: { id } }: { params: { id: string[] } })
{
  return(
    <Stage>
      <LessonBody>
        <CheckSession />
        <Render id={id}/>
      </LessonBody>
    </Stage>
  )
}