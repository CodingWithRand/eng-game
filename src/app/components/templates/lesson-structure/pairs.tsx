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
      return prevPair.map((ans, ai) => {
        if(ai === 0){
          if(ans === ""){
            click(prevState => {
              return [ prevState[0].map((b, bi) => {
                if(bi === ci) return true
                else return false
              }), prevState[1] ]
            })
            return aSide[ci]
          }
          else return ""
        }
        else return ans
      })
    })
  }
  
function bSideBTNFunc(ci: number){
    pair(prevPair => {
      return prevPair.map((ans, ai) => {
        if(ai === 1){
          if(ans === ""){
            click(prevState => {
              return [ prevState[0], prevState[1].map((b, bi) => {
                if(bi === ci) return true
                else return false
              }) ]
            })
            return bSide[ci]
          }
          else return ""
        }
        else return ans
      })
    })
  }
  
  aSide.forEach((t, i) => {
    <button key={i} className="matching-choice">
      {t}
    </button>
  })
}