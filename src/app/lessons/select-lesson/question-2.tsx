'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRegistry } from "../../components/client-caches";
import { generateStateArray } from "@/components/utils";


export default function Question2() 
{
    const available_lesson = ["Preliminary", "Vocabularies"]
    const [ { userState, setUserState } ] = useRegistry();
    const [ checked, check ] = useState<boolean[] | any[]>(generateStateArray("boolean", undefined, available_lesson));
    const [ checkImgs, appear ] = useState<JSX.Element[] | any[]>(generateStateArray("JSX.Element", undefined, available_lesson));
    const [ btnState, setBtnState ] = useState<{ opacity: number, deactivate: boolean }>({opacity: 1, deactivate: false})
    let lessonsListEl: JSX.Element[] = [];

    useEffect(() => {
      if(userState.lessons?.length === 0) setUserState((prevUserState) => ({ 
        ...prevUserState,
        lessons: ['', '']
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
  
    useEffect(() => {
      if(userState.lessons === null) return
      if(userState.lessons.some(elem => elem !== '')){
        setBtnState({opacity: 0.5, deactivate: true})
      }else{
        setBtnState({opacity: 1, deactivate: false})
      }
    }, [userState.lessons])

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
    
    function LessonsList ({ name }: { name: string[]}) {
      for(let i = 0; i<available_lesson.length; i++){
        if(userState.lessons !== null && userState.lessons.some(elem => elem !== '') && i === userState.lessons.findIndex(elem => elem !== ''))
          lessonsListEl.push(
            <div key={i} className='a-choice'>
              <button className='check-box' onClick={() => radio_check_box(i, name)}>
              {checkImgs[i]}
              </button>
              <label className='choice-name'>
                {name[i]}
              </label>
            </div>  
          )
        else{
          lessonsListEl.push(
            <div key={i} className='a-choice' style={{opacity: btnState.opacity}}>
              <button className='check-box' onClick={() => radio_check_box(i, name)} disabled={btnState.deactivate}>
              {checkImgs[i]}
              </button>
              <label className='choice-name'>
                {name[i]}
              </label>
            </div>  
          )
        }
      }
      return lessonsListEl;
    }

    return(
      <div className='choice-list'>
        <LessonsList name={available_lesson} />
      </div>
     );
};
 