'use client';

// import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Image } from 'next/image';
import '@/css/select-lesson.css';

const lessonDetails = {
  Premilary: (
<></>
  ),
}

export default function SelectPage() {
  const [ lesson, setLesson ] = useState('');
  const [ pageUtilities, setPageUtilities] = useState({
    headerText: '',
    submitBtnText: '',
    footerStyle: {}
  })
  let TSXholder: JSX.Element;
  // const router = useRouter();
  
  function Checked() {
    if(lesson !== ''){
      return <Image src='/imgs/icons/check-icon-2.webp' width='50' height='50'/>
    }else{
      return null;
    };
  };
  
  function Question2() {
    return(
      <div className='lessons-list'>
        <div className='lesson-choice'>
          <button className='check-box'>
            <Checked />
          </button>
          <label className='lesson-name'>
            Premilary
          </label>
        </div>
      </div>
    );
  };
  
  useEffect(() => {
    switch(lesson){
      case 'Premilary':
        TSXholder = lessonDetails.Premilary;
      default:
        TSXholder = <div>Lesson not found</div>
    }
  }, [lesson]);
  
  
  return (
    <main>
      <div className='form-container'>
        <div className='head-text'>
         Select the lesson you'd like to learn
        </div>
      </div>
      <TSXholder />
      <div className='submit'>
        <button className='continue-btn'>Continue</button>
      </div>
    </main>
  );
};
