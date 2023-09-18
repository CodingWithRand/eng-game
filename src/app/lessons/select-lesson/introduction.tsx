import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRegistry } from '@/components/client-caches'

export default function Introduction() {
  const [ msg, setMsg ] = useState('')
  const [ dmsg, nextDMSG ] = useState(0)
  const [ {}, { q, setQ } ] = useRegistry()
  useEffect(() => {
    switch(dmsg){
      case 0:
        setMsg("สวัสดี ฉันชื่อแอนดี้ ฉันจะเป็นครูสอนอังกฤษในคอร์สนี้เอง");
        break;
      case 1:
        setMsg('เอาล่ะ เดี๋ยวฉันจะพาคุณไปกรอกแบบฟอร์ม เพื่อที่จะได้ทำความรู้จักกับคุณมากยิ่งขึ้น');
        break;
    }
  },[dmsg])

  function callMsg(){
    if(dmsg <= 1) nextDMSG(prevMsg => prevMsg + 1)
    else setQ(1) ;
  }

  return(
  <>
    <div className="greeting-page">
    
      <div className="msg-box">
        <div className="nester">
          <Image src="/imgs/icons/conversation.png" alt="outline" layout='fill' objectFit='contain'/>
          <div className="msg">
            <p>{msg}</p>
            <button onClick={callMsg}>» Next »</button>
          </div>
        </div>
      </div>
  	  <Image src="/imgs/andy/andy-greet.png" alt='teacher' width={240} height={160} className="teacher absolute bottom-0" />
    </div>
  </>
  )
}