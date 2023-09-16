import { useState, useEffect } from "react"
import { useStage } from "@/components/client-caches"
import Image from "next/image"
import '@/css/lesson-structure/choices.css'

export function ChoiceTable({ c, mode, a }: { c: string[], mode: string, a: string[] }) {
  const [checked, setCheck] = useState<boolean[]>((() => {
    let tempBools: boolean[] = []
    for (let i = 0; i < c.length; i++) tempBools.push(false)
    return tempBools
  })())
  const [isSelected, appear] = useState<JSX.Element[]>((() => {
    let tempElem: JSX.Element[] = []
    for (let i = 0; i < c.length; i++) tempElem.push(<></>)
    return tempElem
  })())
  const [ {}, {}, {}, { stageFooter, setFooterStyle } ] = useStage()
  let totalChoices: JSX.Element[] = []

  if(stageFooter !== "notf-correct") setFooterStyle('')

  useEffect(() => {
    checked.forEach((b, i) => {
      if (b) appear((prevSelecting) => {
        return prevSelecting.map((se, index) => {
          if (index !== i) return se
          return <Image src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked' />
        }
        )
      })
      else appear((prevSelecting) => {
        return prevSelecting.map((se, index) => {
          if (index !== i) return se
          return <></>
        }
        )
      })
    })
  }, [checked])

  useEffect(() => {
    if(mode === "radio") checked.forEach((b, i) => {
      if(b){
        if(c[i] === a[i]) setFooterStyle("notf-correct")
      }
    })
  }, [checked])

  function radio_check_box(currentIndex: number) {
    setCheck(prevCheck => {
      return prevCheck.map((b, i) => {
        if (i === currentIndex){
          if (!b) return true
          else return false
        } else {
          if (!b) return b
          else return false
        }
      })
    });
  }
  
  function check_box(currentIndex: number) {
    setCheck((prevCheck) => {
      return prevCheck.map((b, i) => {
        if (i !== currentIndex) return b
        if (!b) return true
        else return false
      })
    });
  }

  let btnFuncHolder: (i: number) => void;
  
    if(mode === "radio"){
      btnFuncHolder = (i: number) => { radio_check_box(i) }
    } else if(mode === "check-box") {
      btnFuncHolder = (i: number) => { check_box(i) }
    } else {
      btnFuncHolder = (i: number) => {
        console.log("retrieve", i)
      }
    }

  c.forEach((choice, index) => {
    totalChoices.push(<div key={index} className="a-choice">
      <button className="check-box" onClick={() => { btnFuncHolder(index) }}>{isSelected[index]}</button>
      <label className="choice-name">{choice}</label>
    </div>)
  })
  
  return (<div className="choice-list">{totalChoices}</div>)
}

export default function Choices({ question, choices, answers, mode }: { question: string, choices: string[], answers: string[], mode: string }) {
  return (
    <>
      <div className="q">{question}</div>
      <ChoiceTable c={choices} mode={mode} a={answers} />
    </>
  )
}