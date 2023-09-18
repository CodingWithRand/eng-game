'use client';

import { Registry, useRegistry } from '@/components/client-caches';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question2 from './question-2';
import Question1 from './question-1';
import LessonsInfo from './info';
import Introduction from './introduction'
import Term from './term';
import FormPage from '@/templates/select-lesson-form';
import { MemberData, question } from '@/server/cookies';

import '@/css/select-lesson.css';
import { CheckSession } from '@/components/utils';

function Render() {
  const [{ userState }, { q }] = useRegistry();
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
    if(document !== undefined){
      const element = document?.querySelector("body");
      const className = "form";

      if (!element?.classList.contains(className)) {
          element?.classList.add(className);
      }
    }
  }, [])

  useEffect(() => {
    if(question.get('question') === undefined) window.location.reload()
  })
  
  if(userState.lessons?.some(elem => elem !== '') && userState.name !== '' && q === 5) router.push('/lessons')

  useEffect(() => {
    if (!userState.loggedIn || userState.loggedIn === null) return;
    switch (q) {
      case 0:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "",
            headerText: ""
          },
          footerStyle: {
            ...prevState.footerStyle,
            name: "",
          }
        }));
        if (TSXholder !== <Introduction />) setTSXHolder(<Introduction />);
        break;
      case 1:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "center",
            headerText: "ข้อกำหนดในการใช้งาน"
          },
          footerStyle: {
            ...prevState.footerStyle,
            name: "one-btn",
            btnText: "ฉันยอมรับ"
          }
        }));
        if (TSXholder !== <Term />) setTSXHolder(<Term />);
        break;
      case 2:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "center",
            headerText: "ใส่ชื่อของคุณเป็นภาษาอังกฤษ"
          },
          footerStyle: {
            ...prevState.footerStyle,
            name: "prev-next"
          }
        }));
        if (TSXholder !== <Question1 />) setTSXHolder(<Question1 />);
        break;
      case 3:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "center",
            headerText: "เลือกหัวข้อที่ต้องการจะเรียน"
          }
        }))
        if (TSXholder !== <Question2 />) setTSXHolder(<Question2 />);
        break;
      case 4:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            name: "default",
            headerText: `คุณเลือก ${
              (() => {
                const SelectedLesson: string[] = [];
                if(userState.lessons === null) return []
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
            btnText: "ไปลุยกันเลย!"
          }
        }))
        if (TSXholder !== <LessonsInfo />) setTSXHolder(<LessonsInfo />);
        break;
      case 4:
        router.push('/lessons')
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
    <Registry>
      <CheckSession/>
      <Render />
    </Registry>
  );
};