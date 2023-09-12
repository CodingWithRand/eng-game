import Image from 'next/image'

export default function Introduction() {
  return(
  <>
    <div class="greeting-page">
    
    <div class="msg-box">
      <div class="nester">
        <Image src="chat-box.png" alt="outline" layout='fill' objectFit='contain'/>
        <p class="msg">Hello, my name is Andy. Ill be your teacher for this English course</p>
      </div>
    </div>
  					<Image src="andy_greet.png" alt='teacher' width={240} height={160}/>
  </div>
  </>
  )
}