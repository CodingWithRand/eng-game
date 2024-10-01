import { ChangeEvent, useState, useEffect } from 'react'
import { useRegistry } from '@/components/client-caches'
// import { ref, set, onValue } from "firebase/database";
// import db from "@/firebase";

export default function Question1(){
  const [ { userState, setUserState } ] = useRegistry()
  const [ name, setName ] = useState('')
  const [ warning, setWarning ] = useState({
    className: '',
    warningText: ''
  })

  useEffect(() => {
    if(userState.name === null) return;
    setName(userState.name)
  }, [])

  useEffect(() => {
    const EnglishFormat = /^[\w\s]+[^\s\W\_]$/g
    // const rootDB = ref(db)
    // let usedUsername: string[] = []
    // onValue(rootDB, (snapshot) => {
    //   if(snapshot.val() === null) return
      
    //   usedUsername = Object.keys(snapshot.val())
    // })
    if(name.length > 2 && EnglishFormat.test(name)/* && (usedUsername.every(registeredName => registeredName !== name) || usedUsername.length === 0)*/){
      setUserState((prevUserState) => ({
        ...prevUserState,
        name: name
      }))
      setWarning((prevState) => ({...prevState, className: '', warningText: ''}))
    }else{
      setUserState((prevUserState) => ({
        ...prevUserState,
        name: ''
      }))
      setWarning(prevState => ({...prevState, className: 'warning', warningText: (() => {
        if(name.length < 3) return 'ชื่อสั้นเกินไป (ขั้นต่ำ: 3 อักขระ)';
        // else if(usedUsername.some(registeredName => registeredName === name)) return 'ชื่อนี้ได้ถูกใช้ไปแล้ว'
        else if(!EnglishFormat.test(name)) return 'ชื่อไม่ถูกต้องตามรูปแบบ (ไม่มีตัวอักษรพิเศษ, ยกเว้น \'_\', เป็นภาษาอังกฤษ และไม่ขึ้นต้นหรือลงท้ายด้วยตัวอักษรพิเศษทั้งหมด)'
        else return 'ชื่อผิดพลาด'
      })()}))
    }
  }, [name])

  function retrieveInput(e: ChangeEvent<HTMLInputElement>){ setName(e.target.value); };

  return(
    <div className='name-form'>
      <input onChange={retrieveInput} placeholder="Enter your name here" className={`form-input ${warning.className}`} value={name}></input>
      <div className='warning-message'>{warning.warningText}</div>
    </div>
  )
}