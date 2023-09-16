'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistry, Registry, Level, Stage } from '@/components/client-caches';
import { CheckSession } from '@/components/useEffect-utils';
import Lobby from './lobby';
import '@/css/lobby.css'

function Render() {
  const [ holderPage, setHolderPage ] = useState<JSX.Element>(<></>)
  const [ { userState, setUserState }, { q, setQ } ] = useRegistry()
  const router = useRouter()

  if(q === undefined) setQ(0);

  useEffect(() => {
    if(userState.lessons === null || userState.lessons.length === 0 || userState.lessons?.every((elem) => elem === '')) {
      setUserState((prevUserState) => ({
        ...prevUserState,
        lessons: []
      }))
      router.push('/lessons/select-lesson')
    }
    if(userState.lessons?.some(elem => elem !== '') && userState.name !== ''){
      setHolderPage(
      <>
        <Lobby/>
      </>
      )
    }
  }, [])

  

  return( 
  <>
    <CheckSession />
    {holderPage}
  </>);
}

export default function LessonMain() {
  return(
    <Registry>
      <Level>
        <Stage>
          <Render />
        </Stage>
      </Level>
    </Registry>
  )
}
