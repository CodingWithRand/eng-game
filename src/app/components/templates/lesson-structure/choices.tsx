export function ChoiceTable({ c }: { c: string[]}){
  const [ checked, setCheck ] = useState<boolean[]>((() => {
    let tempBools: boolean[] = []
    for(let i = 0; i<c.length; i++) tempBools.push(<></>)
    return tempBools
  })())
  const [ isSelected, appear ] = useState<JSX.Element[]>((() => {
    let tempElem: JSX.Element[] = []
    for(let i = 0; i<c.length; i++) tempElem.push(<></>)
    return tempElem
  })())
  let totalChoices: JSX.Element[] = []
  
  useEffect(() => {
    checked.forEach((b) => {
      if(b) appear(prevSelecting => {
        prevSelecting.map((se) => {
          if(se === <></>) return <Image src={'/imgs/icons/check-icon.png'} width='50' height='50' alt='checked'/>
        })
      })
    })
  }, [checked])
  
  function radio_check_box(){
    setCheck(prevCheck => {
      
    });
  }
  
  c.forEach(choice => totalChoices.push(<li>
    <button className="check-box">{checked}</button>
    <label className="c">{choice}</label>
  </li>))
  return(<ul>{totalChoices}</ul>)
}

export function OneChoice({ question,  choices }: { question: string, choicesNum: number, choices: string[] }){
  return(
    <>
      <div className="q">{question}</div>
      <ChoiceTable c={choices} />
    </>
  )
}