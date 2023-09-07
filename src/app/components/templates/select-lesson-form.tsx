'use client';
import { useState } from "react";
import Image from "next/image";
import { useFormState } from "@/lessons/select-lesson/form-state-provider"
import Cookies from 'universal-cookie'

export default function FormPage({ children, utilities }: any) {
    const cookies = new Cookies();
    const [ { fillState }, { lesson } ] = useFormState();
    const currentPage = new Caches("page")
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
      cookies.set('page', (() => {
        if(Number(cookies.get('page') > 2)){
          return (Number(currentPage.get('page')) - 1).toString()
        }
      }
      )())
    }
    
    function nextBtn(){
      if(fillState.some(() => {return true;})){
        cookies.set('page', (Number(currentPage.get()) + 1).toString())
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
