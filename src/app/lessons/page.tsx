'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCaches, Caches } from '@/components/client-caches';

function Render() {
  let page: JSX.Element = <></>;
  const [ { userState, setUserState }, { q } ] = useCaches()
  const router = useRouter()
  useEffect(() => {
    if(userState === undefined || q === undefined){
      page = <div>Loading...</div>
    }
    if(userState.lessons === null) {
      setUserState((prevUserState) => ({
        ...prevUserState,
        lessons: []
      }))
      router.push('/lessons/select-lesson')
    }
  }, [])
  
  return( <>{page}</> );
}

export default function LessonMain() {
  return(
    <Caches>
      <Render />
    </Caches>
  )
}
