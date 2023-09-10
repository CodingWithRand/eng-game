'use client';

import { Caches, useCaches } from '@/components/client-caches';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question2 from './question-2';
import Question1 from './question-1';
import LessonsInfo from './info';
import FormPage from '@/templates/select-lesson-form';
import { MemberData } from '@/components/server/cookies';

import '@/css/select-lesson.css';

function Render() {
  const [{ userState }, { q }] = useCaches();
  const router = useRouter()
  const [layoutUtilities, setLayoutUtilities] = useState({
    headerStyle: {
      name: "default",
      headerText: ""
    },
    footerStyle: {
      name: "prev-next",
      btnText: ""
    }
  })
  const [TSXholder, setTSXHolder] = useState<JSX.Element | null>(null);
  
  useEffect(() => {
    function checkPeriodically() {
      if(MemberData.get('user') === undefined){
        alert("Your session has expired")
        router.push('/')
      }
      const timeoutId = setTimeout(checkPeriodically, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    checkPeriodically();
  }, []);

  useEffect(() => {
    if (!userState.loggedIn || userState.loggedIn === null) return;
    
    switch (q) {
      case 1:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "center",
            headerText: "Enter your name in English"
          }
        }));
        if (TSXholder !== <Question1 />) setTSXHolder(<Question1 />);
        break;
      case 2:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "center",
            headerText: "Select the lesson you'd like to take"
          }
        }))
        if (TSXholder !== <Question2 />) setTSXHolder(<Question2 />);
        break;
      case 3:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "default",
            headerText: `You've selected ${
              (() => {
                const SelectedLesson: string[] = [];
                userState.lessons.forEach((lesson) => {
                  if(lesson !== '') SelectedLesson.push(lesson)
                })
                return SelectedLesson
              })().join()
            }`
          },
          footerStyle: {
            ...prevState.footerStyle,
            name: "one-btn",
            btnText: "Let's go!"
          }
        }))
        if (TSXholder !== <LessonsInfo />) setTSXHolder(<LessonsInfo />);
        break;
      default:
        break;
    }
  }, [q])

  return (
    <FormPage utilities={layoutUtilities}>
      {TSXholder}
    </FormPage>
  );
}

export default function SelectPage() {
  return (
    <Caches>
      <Render />
    </Caches>
  );
};