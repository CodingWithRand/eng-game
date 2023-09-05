'use client';

import { useState, useEffect } from 'react';
import Question2 from './question-2';
import FormPage from '@/templates/select-lesson-form';
import { FormsStatesProvider, selectedLesson } from './form-state-provider';
import '@/css/select-lesson.css';
import { useSearchParams } from 'next/navigation';


export default function SelectPage() {
  const query = useSearchParams();
  const currentQuestion = Number(query.get('form-question'))
  const loggedIn = true;
  
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
    // if(!loggedIn){setTSXHolder(<div>You're not logged in</div>); return;};
    if(TSXholder) return;
    if(!loggedIn) return;

    switch(currentQuestion)
    {
      case 2:
        setLayoutUtilities(prevState => ({
        ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
            headerText: "Select the lesson you'd like to take"
          }
        }))
        setTSXHolder(<Question2/>);
        break;
      case 3:
        setLayoutUtilities(prevState => ({
          ...prevState,
            headerStyle: {
              ...prevState.headerStyle,
              headerText: `You selected ${selectedLesson}`
            }
          }))
        break;
    }
  }, [TSXholder])
  
  return (
    <FormsStatesProvider>
      <FormPage utilities={layoutUtilities}>
        {TSXholder}
      </FormPage>
    </FormsStatesProvider>
  );
};