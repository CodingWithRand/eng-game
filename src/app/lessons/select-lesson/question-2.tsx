'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCaches } from "../../components/client-caches";


export default function Question2() 
{
    const [ { userState, setUserState } ] = useCaches();
    const lessons_number: number = 2;
    const [ checked, check ] = useState<boolean[]>(
      (() => {
        let tempArray: boolean[] = []
        for(let i = 0; i<lessons_number; i++) tempArray.push(false);
        return tempArray;
      })()
    );
    const [ checkImgs, appear ] = useState<JSX.Element[]>(
      (() => {
        let tempArray: JSX.Element[] = []
        for(let i = 0; i<lessons_number; i++) tempArray.push(<></>)
        return tempArray;
      })()
    );
    let lessonsListEl: JSX.Element[] = [];

    useEffect(() => {
      if(userState.lessons.length === 0 || userState.lessons === null) setUserState((prevUserState) => ({ 
        ...prevUserState,
        lessons: ['', '']
      }))
      check((prevState) => {
        return prevState.map((_, index) => {
          let matchedPatternIndex: number[] = [] 
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
      if(userState.lessons[currentIndex] === ''){
        // setFillState((prevState) => prevState[lessonSelectorIndex].map((state: boolean, index: number) => overwrite(index, currentIndex, { passCase: true, failCase: false })));
        setUserState((prevUserState) => ({
          ...prevUserState,
          lessons: userState.lessons.map((state: string, index: number) => overwrite(index, currentIndex, { passCase: lessons_name[currentIndex], failCase: state }))
        }))
        check((prevState) => {
          return prevState.map((state, index) => {
            if(index === currentIndex) return true
            else return state
          })
        })
      }else{
        // setFillState((prevState) => prevState[lessonSelectorIndex].map((state: boolean, index: number) => overwrite(index, currentIndex, { passCase: false, failCase: state })));
        setUserState((prevUserState) => ({
          ...prevUserState,
          lessons: userState.lessons.map((state: string, index: number) => overwrite(index, currentIndex, { passCase: '', failCase: state }))
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
      for(let i = 0; i<lessons_number; i++){
        lessonsListEl.push(
          <div key={i} className='lesson-choice'>
            <button className='check-box' onClick={() => radio_check_box(i, name)}>
            {checkImgs[i]}
            </button>
            <label className='lesson-name'>
              {name[i]}
            </label>
          </div>  
        )
      }
      return lessonsListEl;
    }

    return(
      <div className='lessons-list'>
        <LessonsList name={["Premilinary", "Vocabularies"]} />
      </div>
     );
};
 