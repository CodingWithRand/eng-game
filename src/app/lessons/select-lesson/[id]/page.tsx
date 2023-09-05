'use client';

import { useState, useEffect } from 'react';
import Question2 from './question-2';
import FormPage from '@/templates/select-lesson-form';
import { FormsStatesProvider } from './form-state-provider';
import '@/css/select-lesson.css';

const lessonDetails = {
  Premilinary: (
<div>Premilinary</div>
  ),
}

export default function SelectPage() {
  const loggedIn = true;
  const [ lesson, setLesson ] = useState('');
  const [ layoutUtilities, setLayoutUtilities] = useState({
    headerStyle: {
      name: "default-left",
      headerText: ""
    },
    footerStyle: {
      name: "prev-next",
      btnText: ""
    }
  })
  const [ TSXholder, setTSXHolder ] = useState<JSX.Element | null>(null);
  
  useEffect(() => {
    switch(lesson){
      case 'Premilinary':
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            headerText: "You've selected Premilinary"
          }
        }))
        setTSXHolder(lessonDetails.Premilinary);
        break;
    }
  }, [lesson]);

  useEffect(() => {
    // if(!loggedIn){setTSXHolder(<div>You're not logged in</div>); return;};
    if(!TSXholder && loggedIn)
    {
      setLayoutUtilities(prevState => ({
        ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            headerText: "Select the lesson you'd like to take"
          }
      }))
      setTSXHolder(
        <FormsStatesProvider>
          <Question2/>
        </FormsStatesProvider>
      );
    }
  }, [TSXholder])
  
  return (
    <FormPage utilities={layoutUtilities}>
      {TSXholder}
    </FormPage>
  );
};