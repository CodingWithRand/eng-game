'use client';

import { Caches, useCaches } from '../../components/client-caches';
import { useState, useEffect } from 'react';
import Question2 from './question-2';
import Question1 from './question-1'
import FormPage from '@/templates/select-lesson-form';
import '@/css/select-lesson.css';


import '@/css/select-lesson.css';

function Render() {
  const [{ userState }, { q }] = useCaches();

  const [layoutUtilities, setLayoutUtilities] = useState({
    headerStyle: {
      name: "default-left",
      headerText: ""
    },
    footerStyle: {
      name: "prev-next",
      btnText: ""
    }
  })
  const [TSXholder, setTSXHolder] = useState<JSX.Element | null>(null);
  //   const [ reloadState, reload ] = useState(false)

  //   useEffect(() => {
  //     if(differer.get("differ") || differer.get("differ") === undefined){
  //       reload(!differer.get("differ"))
  //       differer.set("differ", reloadState)
  //       window.location.reload()
  //     }
  //   }, [reloadState])

  useEffect(() => {
    if (!userState.loggedIn) return;
    
    switch (q) {
      case 1:
        setLayoutUtilities(prevState => ({
          ...prevState,
          headerStyle: {
            ...prevState.headerStyle,
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
            headerText: `You selected ${userState.lessons.join(', ')}`
          }
        }))
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