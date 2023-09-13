import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Introduction() {
  let cmsg: string = "";
  const [ dmsg, nextDMSG ] = useState(0)
  useEffect(() => {
    switch(dmsg){
      case 0:
        cmsg = 'Hello, my name is Andy. I&apos;ll be your teacher for this English course'
      case 1:
        cmsg = 'Now, please let me know more about you by filling the form in the next page'
    }
  },[dmsg])
  return(
  <>
    <div className="greeting-page">
    
    <div className="msg-box">
      <div className="nester">
        <Image src="/imgs/icons/conversation.png" alt="outline" layout='fill' objectFit='contain'/>
        <div className="msg">
          <p>{cmsg}</p>
          <button onClick={() => nextDMSG(1)}>» Next »</button>
        </div>
      </div>
    </div>
  	<Image src="/imgs/andy/andy-greet.png" alt='teacher' width={240} height={160} className="teacher"/>
  </div>
  </>
  )
}