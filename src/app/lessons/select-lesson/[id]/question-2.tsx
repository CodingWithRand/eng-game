'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormState } from "./form-state-provider";


export default function Question2() 
{
    const { fillState, setFillState } = useFormState();
    const [ checked, setCheckedImg ] = useState<JSX.Element[] | null>(null);
    const lessons_number: number = 1;
    let tfs: boolean[] = []
    let checked_Images, lessonsListEl: JSX.Element[] = []
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

    function check_box(currentIndex: number) {
        setFillState(fillState.map((state, index) => {
            if(index === currentIndex) return true;
            else return false;
        }))
    }
    
    function LessonsList(props: { name: string[] }) {
      for(let i = 0; i<lessons_number; i++){
        tfs.push(false);
        lessonsListEl.push(
          <div className='lesson-choice'>
            <button className='check-box' onClick={() => check_box(i)}>
            {checked[i]}
            </button>
            <label className='lesson-name'>
              {props.name[i]}
            </label>
          </div>  
        )
      }
      setFillState(tfs);
      return lessonsListEl;
    }

    return(
      <div className='lessons-list'>
        <LessonsList name={["Premilinary"]} />
      </div>
     );
};
 