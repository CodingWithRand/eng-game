'use client';

import Coroussel from '@/components/coroussel';
import { Registry, useRegistry } from '@/components/client-caches';
import Link from 'next/link'
import '@/css/index.css';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('@/components/navbar'), { ssr: false })

function Render() {
  const [{ userState, setUserState } ] = useRegistry();

  function start() {
    if(userState.membership === null || userState.membership === 'guest') setUserState((prevUserState) => ({
      ...prevUserState,
      membership: 'guest',
      loggedIn: true,
    }))
  }
  
  return (
    <>
      <Nav />
      <header style={{ overflowX: 'hidden' }}>
        <Coroussel />
      </header>
      <main>
        <section className='get-start'>
          <Link href='/lessons'>
            <button onClick={start}>Get started now for FREE!</button>
          </Link>
        </section>
        {/* 
        Image thanks to - Flaticon.com
        <a href="https://www.flaticon.com/free-icons/menu-bar" title="menu-bar icons">Menu-bar icons created by BomSymbols - Flaticon</a> 
        <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by gravisio - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/tick" title="tick icons">Tick icons created by Octopocto - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Handicon - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/left-arrow" title="left arrow icons">Left arrow icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/chat" title="chat icons">Chat icons created by srip - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Revicon - Flaticon</a>
        */}
      </main>
    </>
  );
}

export default function InitialPage() {
  return(
    <Registry>
      <Render />
    </Registry>
  )
};
