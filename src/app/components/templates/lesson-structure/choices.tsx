import { useState, useEffect } from "react"
import { useStage, useLevel } from "@/components/client-caches"
import Image from "next/image"
import '@/css/lesson-structure/choices.css'
import { generateStateArray } from "@/components/utils"

export function ChoiceTable({ c, mode, a, xpg }: { c: string[], mode: string, a: string[], xpg: number }) {
  const [checked, setCheck] = useState<boolean[] | any[]>(generateStateArray("boolean", undefined, c))
  const [isSelected, appear] = useState<JSX.Element[] | any[]>(generateStateArray("boolean", undefined, c))
  const [ {}, {}, {}, { stageFooter, setFooterStyle }, { setCSA } ] = useStage()
  const [ activateState, deactivate ] = useState(false)
  const [{ generateLevelXP }] = useLevel()
  let totalChoices: JSX.Element[] = []

  setCSA(a)

  if(stageFooter !== "notf-correct" && stageFooter !== "notf-wrong") setFooterStyle('')

  useEffect(() => {
    checked.forEach((b, i) => {
      if (b) appear((prevSelecting) => {
        return prevSelecting.map((se, index) => {
          if (index !== i) return se
          return <Image key={i} src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked' />
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
        if(c[i] === a[a.findIndex((ans) => ans === c[i])]){ setFooterStyle("notf-correct"); generateLevelXP(prevXP => prevXP + (xpg/2)) }
        else setFooterStyle("notf-wrong");
      }
    })
    else if(mode === "check-box"){
      let chosenAns: string[] = []
      checked.forEach((b, i) => { if(b){ console.log(b); chosenAns.push(a[a.findIndex((ans) => ans === c[i])]) }})
      if(chosenAns.length === a.length){
        if(JSON.stringify(a) === JSON.stringify(chosenAns)){ deactivate(true); setFooterStyle("notf-correct"); generateLevelXP(prevXP => prevXP + (xpg/2)) }
        else{ deactivate(true); setFooterStyle("notf-wrong"); }
      }
    }
  }, [checked, mode, c, a, setFooterStyle])

  function radio_check_box(currentIndex: number) {
    setCheck(prevCheck => {
      return prevCheck.map((b, i) => {
        if (i === currentIndex){
          if (!b){ 
            deactivate(true);
            return true
          } else {
            deactivate(true);
            return false
          } 
        } else { return b }
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
    totalChoices.push(
      <div key={index} className="a-choice">
        <button className="check-box" onClick={() => { btnFuncHolder(index) }} disabled={activateState}>{isSelected[index]}</button>
        <label className="choice-name">{choice}</label>
      </div>
    )
  })
  
  return (<div className="choice-list-nester"><div className="choice-list">{totalChoices}</div></div>)
}

export default function Choices({ question, choices, answers, mode, xpGain }: { question: string, choices: string[], answers: string[], mode: string, xpGain: number }) {
  return (
    <>
      <div className="q">{question}</div>
      <ChoiceTable c={choices} mode={mode} a={answers} xpg={xpGain} />
    </>
  )
}