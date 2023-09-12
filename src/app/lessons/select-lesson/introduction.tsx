import Image from 'next/image'

export default function Introduction() {
  return(
  <>
    <div className="greeting-page">
    
    <div className="msg-box">
      <div className="nester">
        <Image src="chat-box.png" alt="outline" layout='fill' objectFit='contain' className='absolute'/>
        <p className="msg">Hello, my name is Andy. Ill be your teacher for this English course</p>
      </div>
    </div>
  					<Image src="andy_greet.png" alt='teacher' width={240} height={160} className="absolute"/>
  </div>
  </>
  )
}