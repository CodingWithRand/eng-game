'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { qPage } from "@/server/cookies"
import { useFormState } from "@/lessons/select-lesson/form-state-provider"

export default function FormPage({ children, utilities }: any) {
    const [ { fillState }, { lesson } ] = useFormState();
    // const currentPage = new Caches("page")
    const [ availability, setAvailability ] = useState(
    {
      cssStyle: {
        opacity: 0.5
      },
      disable: true
    })
    let footerEl: JSX.Element = <></>;
    let headerEl: JSX.Element = <></>;
    
    function prevBtn(){
      qPage.set('page', (() => {
        if(qPage.get('page') > 2){
            return qPage.get('page') - 1
        }
      }
      )())
    }
    
    function nextBtn(){
      if(fillState.some(() => {return true;})){
        qPage.set('page', (qPage.get('page')) + 1)
      };
    };
    
    useEffect(() => {
      if(fillState.some(() => {return true;})) setAvailability(prevState => ({
          ...prevState,
          cssStyle: {
            ...prevState.cssStyle,
            opacity: 1
          },
          disable: false
      }))
    })
    
    if (utilities.footerStyle.name === 'one-btn') {
        footerEl =
            <div className='submit'>
                <button className='continue-btn'>{utilities.footerStyle.btnText}</button>
            </div>
    } else if (utilities.footerStyle.name === 'prev-next') {
        footerEl =
            <div className='prev-next'>
                <button onClick={prevBtn} >
                    <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
                </button>
                <button onClick={nextBtn} disabled={availability.disable} style={availability.cssStyle}>
                    <Image src="/imgs/icons/next.png" width={50} height={50} alt="Next Page" />
                </button>
            </div>
    }

    if (utilities.headerStyle.name === 'default-left') {
        headerEl =
            <div className='head-text'>
                {utilities.headerStyle.headerText}
            </div>

    }

    return (
        <main>
            {headerEl}
            <div className='form-container'>
                {children}
            </div>
            {footerEl}
        </main>
    );
};
