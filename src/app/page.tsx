'use client';

import NavigationBar from '@/components/navbar';
import Coroussel from '@/components/coroussel';
import Cookies from 'universal-cookie';
import Link from 'next/link'
import '@/css/index.css';

export default function InitialPage() {
  const cookies = new Cookies();
  function start() {
    cookies.set("page", "1");
  }
  
  return (
    <>
      <NavigationBar />
      <header style={{ overflowX: 'hidden' }}>
        <Coroussel />
      </header>
      <main>
        <section className='get-start'>
          <Link href='lessons/select-lesson'>
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
        */}
      </main>
    </>
  );
};
