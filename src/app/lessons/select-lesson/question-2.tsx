'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRegistry } from "../../components/client-caches";
import { generateStateArray } from "@/components/utils";


function LessonsList ({ available_lesson, upcoming_lesson }: { available_lesson: string[], upcoming_lesson: string[]}) {
  const totalLesson = available_lesson.concat(upcoming_lesson);
  const [ { userState, setUserState } ] = useRegistry();
  const [ checked, check ] = useState<boolean[] | any[]>(generateStateArray("boolean", undefined, available_lesson));
  const [ checkImgs, appear ] = useState<JSX.Element[] | any[]>(generateStateArray("JSX.Element", undefined, upcoming_lesson));
  let lessonsListEl: JSX.Element[] = [];

  useEffect(() => {
    if(userState.lessons?.length === 0) setUserState((prevUserState) => ({ 
      ...prevUserState,
      lessons: Array(available_lesson.length).fill('')
    }))
    check((prevState) => {
      return prevState.map((_, index) => {
        let matchedPatternIndex: number[] = [] 
        if(userState.lessons === null) return false
        for (let i = 0; i < userState.lessons.length; i++) {
          if (userState.lessons[i] !== '') {
            matchedPatternIndex.push(i);
          }
        }
        if(matchedPatternIndex.includes(index)) return true;
        else return false;
      })
    })
  }, [])

  useEffect(() => {
    checked.forEach((state: boolean, index) => {
      if(state){
        appear((visiblility) => {
          return visiblility.map((elem, i) => {
          if(i === index) return <Image key={i} src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked'/>
          else return elem
        })})
      }
      else{
        appear((visiblility) => {
          return visiblility.map((elem, i) => {
          if(i === index) return <></>
          else return elem
        })})
      }
    })
  }, [checked])

  function overwrite(i: number, ci: number, newContent: { passCase: any | any[], failCase: any | any[] }){
    if(i === ci) return newContent.passCase;
    else return newContent.failCase;
  }

  function radio_check_box(currentIndex: number, lessons_name: string[]) {
    if(userState.lessons === null) return
    if(userState.lessons[currentIndex] === ''){
      const selectingLesson = userState.lessons.map((state: string, index: number) => overwrite(index, currentIndex, { passCase: lessons_name[currentIndex], failCase: state }))
      setUserState((prevUserState) => ({
        ...prevUserState,
        lessons: selectingLesson
      }))
      check((prevState) => {
        return prevState.map((state, index) => {
          if(index === currentIndex) return true
          else return state
        })
      })
    }else{
      const selectingLesson = userState.lessons.map((state: string, index: number) => overwrite(index, currentIndex, { passCase: '', failCase: state }))
      setUserState((prevUserState) => ({
        ...prevUserState,
        lessons: selectingLesson
      }))
      check((prevState) => {
        return prevState.map((state, index) => {
          if(index === currentIndex) return false
          else return state
        })
      })
    }
  }

  for(let i = 0; i<totalLesson.length; i++){
    if(!upcoming_lesson.some(elem => elem === totalLesson[i]))
      lessonsListEl.push(
        <div key={i} className='a-choice'>
          <button className='check-box' onClick={() => radio_check_box(i, totalLesson)}>
          {checkImgs[i]}
          </button>
          <label className='choice-name'>
            {totalLesson[i]}
          </label>
        </div>  
      )
    else{
      lessonsListEl.push(
        <div key={i} className='a-choice' style={{opacity: 0.5}}>
          <button className='check-box' onClick={() => radio_check_box(i, totalLesson)} disabled={true}>
          {checkImgs[i]}
          </button>
          <label className='choice-name'>
            {totalLesson[i]}
          </label>
        </div>  
      )
    }
    // Note: User can select more than a lesson to take. The lesson name will add to the lessons array of the user cookie.
  }
  return lessonsListEl;
}

export default function Question2() 
{
    const available_lesson = ["Preliminary"]
    const upcoming_lesson = ["Vocabularies", "Grammar"]

    return(
      <div className='choice-list'>
        <LessonsList available_lesson={available_lesson} upcoming_lesson={upcoming_lesson}/>
      </div>
     );
};
 