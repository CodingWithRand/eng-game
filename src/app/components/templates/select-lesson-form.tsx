'use client';
import { useState } from "react";
import Image from "next/image";
import { useFormState } from "@/lessons/select-lesson/form-state-provider"
import { Caches } from "@/components/api"

export default function FormPage({ children, utilities }: any) {
    const [ { fillState }, { lesson } ] = useFormState();
    const currentPage = new Caches("page")
    let footerEl: JSX.Element = <></>;
    let headerEl: JSX.Element = <></>;
    
    function prevBtn(){
      currentPage.setto((() => {
        if(currentPage.retrieve() > 2){
          return currentPage.retrieve() - 1
        }
      }
      )())
    }
    
    function nextBtn(){
      if(fillState.some(() => {return true;})){
        currentPage.setto(currentPage.retrieve() + 1)
      };
    };
    
    if (utilities.footerStyle.name === 'one-btn') {
        footerEl =
            <div className='submit'>
                <button className='continue-btn'>{utilities.footerStyle.btnText}</button>
            </div>
    } else if (utilities.footerStyle.name === 'prev-next') {
        footerEl =
            <div className="prev-next">
                <button onClick={prevBtn}>
                    <Image src="/imgs/icons/prev.png" width={50} height={50} alt="Previous Page" />
                </button>
                <button onClick={nextBtn}>
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
