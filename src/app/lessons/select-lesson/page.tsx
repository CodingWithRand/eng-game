'use client';

import { useState, useEffect } from 'react';
import Image  from 'next/image';
import '@/css/select-lesson.css';

const lessonDetails = {
  Premilinary: (
<div>Premilinary</div>
  ),
}

export default function SelectPage() {
  const loggedIn = true;
  const [ lesson, setLesson ] = useState('');
  const [ pageUtilities, setPageUtilities] = useState({
    headerText: "",
    submitBtnText: "",
    footerStyle: {display: 'none'},
    headTextStyle: {justifyContent: 'center'},
  })
  const [ TSXholder, setTSXHolder ] = useState<JSX.Element | null>(null);
  
  function Checked() {
    if(lesson !== ''){
      return <Image src='/imgs/icons/check-icon-2.webp' width='50' height='50' alt='checked'/>
    }else{
      return <></>;
    };
  };
  
  function Question2() {
    return(
      <div className='lessons-list'>
        <div className='lesson-choice'>
          <button className='check-box' onClick={() => setLesson('Premilinary')}>
            <Checked />
          </button>
          <label className='lesson-name'>
            Premilinary
          </label>
        </div>
      </div>
    );
  };

  function FormPage({ children }: any) {
    return(
      <main>
        <div className='form-container'>
          <div className='head-text' style={pageUtilities.headTextStyle}>
            {pageUtilities.headerText}
          </div>
          {children}
          <div className='submit' style={pageUtilities.footerStyle}>
            <button className='continue-btn'>{pageUtilities.submitBtnText}</button>
          </div>
        </div>
      </main>
    );
  };
  
  useEffect(() => {
    switch(lesson){
      case 'Premilinary':
        setPageUtilities({
          headerText: "You selected Premilinary...",
          submitBtnText: "Let's start!",
          headTextStyle: {justifyContent: 'normal'},
          footerStyle: {display: 'flex'}
        })
        setTSXHolder(lessonDetails.Premilinary);
        break;
    }
  }, [lesson]);

  useEffect(() => {
    // if(!loggedIn){setTSXHolder(<div>You're not logged in</div>); return;};
    if(!TSXholder && loggedIn)
    {
      setPageUtilities({
        headerText: "Select the lesson you'd like to learn",
        submitBtnText: "Continue",
        headTextStyle: {justifyContent: 'center'},
        footerStyle: {display: 'flex'}
      })
      setTSXHolder(<Question2 />);
    }
  }, [TSXholder])
  
  return (
    <FormPage>
      {TSXholder}
    </FormPage>
  );
};