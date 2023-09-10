import { ChangeEvent, useState, useEffect } from 'react'
import { useCaches } from '@/components/client-caches'

export default function Question1(){
  const [ { userState, setUserState } ] = useCaches()
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
    const EnglishFormat = /^[A-Za-z0-9\s]+$/g
    if(name.length > 2 && EnglishFormat.test(name)){
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
        if(name.length < 3) return 'Name to short (Minimum: 3 characters)';
        else if(!EnglishFormat.test(name)) return 'Name doesn\'t satisfy the expected format (No special character, except \'_\', is English and not start with \'_\')'
        return 'Invalid name'
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