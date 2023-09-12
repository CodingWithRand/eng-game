import Image from 'next/image'

export default function Introduction() {
  return(
  <>
    <div className="greeting-page">
    
    <div className="msg-box">
      <div className="nester">
        <Image src="/imgs/icons/conversation.png" alt="outline" layout='fill' objectFit='contain'/>
        <div className="msg">
          <p>Hello, my name is Andy. I'll be your teacher for this English course</p>
          <button>» Next »</button>
        </div>
      </div>
    </div>
  	<Image src="/imgs/andy/andy-greet.png" alt='teacher' width={240} height={160} className="teacher"/>
  </div>
  </>
  )
}