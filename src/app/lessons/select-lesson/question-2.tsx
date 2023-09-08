'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormState } from "./form-state-provider";
import { MemberData } from '@/server/cookies'


export default function Question2() 
{
    const [ { fillState, setFillState } ] = useFormState();
    const [ checked, setCheckedImg ] = useState<JSX.Element[]>([]);
    const lessons_number: number = 2;
    let tfs: boolean[] = [];
    let tlsn: string[] = [];
    let checked_Images: JSX.Element[] = [];
    let lessonsListEl: JSX.Element[] = [];

    useEffect(() => {
      fillState.forEach((b) => {
        if(b){
            checked_Images.push(<Image src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked'/>)
        }else{
            checked_Images.push(<></>);
        }
      })
      setCheckedImg(checked_Images)
    }, [fillState])

    useEffect(() => {
      for(let i = 0; i<lessons_number; i++){
        tfs.push(false);
        checked_Images.push(<></>);
        tlsn.push('');
      }
      setFillState(tfs);
      setCheckedImg(checked_Images);
      MemberData.lessons.set("lesson", tlsn)
    }, [])

    function overwrite(i: number, ci: number, newContent: { passCase: any | any[], failCase: any | any[] }){
      if(i === ci) return newContent.passCase;
      else return newContent.failCase;
    }

    function radio_check_box(currentIndex: number, lessons_name: string[]) {
      if(!fillState[currentIndex]){
        setFillState(fillState.map((state: boolean, index: number) => overwrite(index, currentIndex, { passCase: true, failCase: false })));
        MemberData.lessons.set('lessons', MemberData.lessons.get("lessons").map((state: string, index: number) => overwrite(index, currentIndex, { passCase: lessons_name[currentIndex], failCase: state })));
      }else{
        setFillState(fillState.map((state: boolean, index: number) => overwrite(index, currentIndex, { passCase: false, failCase: state })));
        MemberData.lessons.set('lessons', MemberData.lessons.get("lessons").map((state: string, index: number) => overwrite(index, currentIndex, { passCase: '', failCase: state })));
      }
    }
    
    function LessonsList(props: { name: string[] }) {
      for(let i = 0; i<lessons_number; i++){
        lessonsListEl.push(
          <div className='lesson-choice'>
            <button className='check-box' onClick={() => radio_check_box(i, props.name)}>
            {checked[i]}
            </button>
            <label className='lesson-name'>
              {props.name[i]}
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
 