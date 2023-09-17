import { useState } from 'react'

export default function Pairs({ aSide, bSide, correctPair }: { aSide: string[], bSide: string[], correctPair: string[][] }){
  const [ currentPair, pair ] = useState<[string, string]>(["", ""])
  const [ haveClicked, click ] = useState([(() => {
    let tempBool: boolean[] = []
    for(let i = 0; i<aSide.length; i++) tempBool.push(false)
    return tempBool
  })(), (() => {
    let tempBool: boolean[] = []
    for(let i = 0; i<bSide.length; i++) tempBool.push(false)
    return tempBool
  })()])
  const [ completed, complete ] = useState((() => {
    let tempBool: boolean[] = []
    for(let i = 0; i<correctPair.length; i++) tempBool.push(false)
    return tempBool
  })())
  
  let aSideBTN: JSX.Element[] = []
  let bSideBTN: JSX.Element[] = []
  
  function aSideBTNFunc(ci: number){
    pair(prevPair => {
      const [a, b] = prevPair
      if(a === ""){
        click(prevState => {
          return [ prevState[0].map((b, bi) => {
            if(bi === ci) return true
            else return false
          }), prevState[1] ]
        })
        return [aSide[ci], b]
      } else {
        return prevPair
    }})
  }
  
function bSideBTNFunc(ci: number){
    pair(prevPair => {
      const [a, b] = prevPair
      if(b === ""){
        click(prevState => {
          return [ prevState[0], prevState[1].map((b, bi) => {
            if(bi === ci) return true
            else return false
          }) ]
        })
        return [a, bSide[ci]]
      }else {
        return prevPair
    }})
  }
  
  aSide.forEach((t, i) => {
    <button key={i} className="matching-choice">
      {t}
    </button>
  })
}