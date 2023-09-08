import { useState } from 'react'

export default function Question1(){
  const [ name, setName ] = useState('')
  function retrieveInput(e: ChangeEvent<HTMLInputElement>) {setName(e.target.value)}
  
  return(
    <>
      <input onChange={retrieveInput} placeholder="Enter your name here" className="form-input"></input>
    </>
  )
}