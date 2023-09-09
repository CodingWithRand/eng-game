import { ChangeEvent } from 'react'
import { useCaches } from '@/components/client-caches'

export default function Question1(){
  const [ { userState, setUserState } ] = useCaches()

  function retrieveInput(e: ChangeEvent<HTMLInputElement>){
    setUserState((prevUserState) => ({
      ...prevUserState,
      name: e.target.value
    }))
  }

  return(
    <>
      <input onChange={retrieveInput} placeholder="Enter your name here" className="form-input" value={userState.name || ''}></input>
    </>
  )
}