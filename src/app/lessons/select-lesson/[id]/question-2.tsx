'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormState } from "./form-state-provider";

export default function Question2() {
    const { fillState, setFillState } = useFormState();
    const [ checked, setCheckedImg ] = useState<JSX.Element | null>(null);
    useEffect(() => {
        if(fillState){
            setCheckedImg(<Image src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked'/>)
        }else{
            setCheckedImg(<></>);
        }
    }, [fillState])

    function check_box() {
        if(fillState) setFillState(false)
        else setFillState(true)
    }

    return(
      <div className='lessons-list'>
        <div className='lesson-choice'>
          <button className='check-box' onClick={check_box}>
            {checked}
          </button>
          <label className='lesson-name'>
            Premilinary
          </label>
        </div>
      </div>
    );
  };