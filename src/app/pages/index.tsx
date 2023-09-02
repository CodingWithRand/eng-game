'use client';

import NavigationBar from '../components/navbar';
import Coroussel from '../components/coroussel';
import { useRouter } from 'next/navigation';

export default function InitialPage() {
  const router = useRouter();

  return (
    <>
      <NavigationBar />
      <header style={{ overflowX: 'hidden' }}>
        <Coroussel />
      </header>
      <main>
        <section className='get-start'>
          <button onClick={() => router.push('./Lessons/main')}>Get started now for FREE!</button>
        </section>
        {/* 
        Image thanks to - Flaticon.com
        <a href="https://www.flaticon.com/free-icons/menu-bar" title="menu-bar icons">Menu-bar icons created by BomSymbols - Flaticon</a> 
        <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by gravisio - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by Roundicons - Flaticon</a>
        */}
      </main>
    </>
  );
};
