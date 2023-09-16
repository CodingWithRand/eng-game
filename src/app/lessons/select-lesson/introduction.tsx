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
        setMsg("Hello, my name is Andy. I'll be your teacher for this English course");
        break;
      case 1:
        setMsg('Now, please let me know more about you by filling the form in the next page');
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
  	  <Image src="/imgs/andy/andy-greet.png" alt='teacher' width={240} height={160} className="teacher"/>
    </div>
  </>
  )
}