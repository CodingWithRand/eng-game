'use client';

import Coroussel from '@/components/coroussel';
import { Registry, useRegistry } from '@/components/client-caches';
import Link from 'next/link'
import '@/css/index.css';
import dynamic from 'next/dynamic';
import { MemberData, selectLesson, UserStats } from "@/server/cookies"

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
        <Coroussel 
          totalPages={3}
          corousselElements={[
            <div key={1} className="slide-block">
              <h1 className="title">ภาพรวมของตัวแอป</h1>
              <h2 className="subtitle"><i>เรามาดูกันเถอะว่าตัวแอปนี้มีอะไรบ้าง</i></h2>
            </div>
          ]}
          corousselWrappersStyle={[{
            
          }]}
        />
      </header>
      <main>
        <section className='p-4 flex justify-center'>
          {(() => { 
            if (MemberData.get("user").loggedIn !== null && MemberData.get("user").loggedIn === true && MemberData.get("user").lessons?.some((elem: string) => elem !== ''))
            return (
              <div className='border-solid border-gray-300 border-4 rounded-md p-4'>
                <div>{`บทเรียนที่เลือก: ${MemberData.get("user").lessons.join(",")}`}</div>
                <div>{`กำลังเรียนในบทเรียน: ${selectLesson.get("selectLesson")}`}</div>
                <div>{`XP ที่ได้รับ`}</div>
                {(() => {
                  let lessonXp = []
                  for(const lesson in UserStats.get("stageXp")){
                    lessonXp.push(<div key={lesson}>{`• ${lesson}: ${UserStats.get("stageXp")[lesson]}`}</div>)
                  }
                  return lessonXp
                })()}
                <div>รวมทั้งสิ้น: {(() => {
                  let totalXp = 0
                  for(const lesson in UserStats.get("stageXp")){
                    totalXp += UserStats.get("stageXp")[lesson]
                  }
                  return totalXp
                })()}</div>
                <div>{`ชื่อผู้ใช้: ${MemberData.get("user").name}`}</div>
              </div>
            )
          })()}
        </section>
        <section className='get-start'>
          <Link href='/lessons'>
            <button onClick={start}>เริ่มเรียนได้ฟรีตอนนี้</button>
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
