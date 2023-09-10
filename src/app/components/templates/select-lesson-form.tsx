'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCaches } from "@/components/client-caches"
import { useRouter } from "next/navigation";

let footerEl: JSX.Element = <></>;
let headerEl: JSX.Element = <></>;

export default function FormPage({ children, utilities }: any) {
    const [ { userState }, { q, setQ } ] = useCaches();
    const [ availability, setAvailability ] = useState(
    {
      cssStyle: {
        opacity: 0.5
      },
      disable: true
    });
    const router = useRouter()

    let detector: boolean;

    useEffect(() => {
      detector = (() => {
        if(userState.name === null || userState.lessons === null) return false
        switch(q){
          case 1:
            return userState.name !== '' && userState.name !== null
          case 2: 
            return userState.lessons.some((elem) => elem !== "")
          default:
            return false
        }
      })()

      if(detector) setAvailability(prevState => ({
          ...prevState,
          cssStyle: {
            ...prevState.cssStyle,
            opacity: 1
          },
          disable: false
      }))
      else setAvailability(prevState => ({
        ...prevState,
        cssStyle: {
          ...prevState.cssStyle,
          opacity: 0.5
        },
        disable: true
    }))
    }, [q, userState])

    function prevBtn(){ 
      setQ((() => { 
        if(q > 1) return q - 1 
        else{
          router.push('/')
          return q
        }
      } 
    )()); }
    
    function nextBtn(){ setQ(prevQ => prevQ+1); };

    function submit(){
      if(q < 3) setQ(prevQ => prevQ+1);
      else if(q === 3) setQ(4)
    }
    
    if (utilities.footerStyle.name === 'one-btn') {
        footerEl =
            <div className='submit'>
                <button className='continue-btn' onClick={submit}>{utilities.footerStyle.btnText}</button>
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

    if (utilities.headerStyle.name === 'default') {
        headerEl =
            <div className='default-head-text'>
                {utilities.headerStyle.headerText}
            </div>

    } else if (utilities.headerStyle.name === 'center') {
      headerEl =
          <div className='center-head-text'>
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
